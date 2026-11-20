<?php
/**
 * Wholesale enquiry endpoint for Wisdom Palace.
 * Receives JSON from /contact/, validates it, and emails the sales team.
 *
 * Mail goes out through the Hostinger Mail API. Its token and mailbox ID are kept OUTSIDE public_html in
 *   <domain folder>/wp-config/enquiry.php  (returns ['mail_api_token'=>'…','mailbox_id'=>'AC…']).
 * No mailbox password is stored anywhere.
 */
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function out(int $code, array $body): never { http_response_code($code); echo json_encode($body); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(405, ['ok' => false, 'error' => 'method']);
$host = $_SERVER['HTTP_HOST'] ?? '';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== $host) out(403, ['ok' => false, 'error' => 'origin']);

/* Optional overrides live OUTSIDE public_html; no passwords are needed. */
$configPath = getenv('ENQUIRY_CONFIG') ?: dirname(__DIR__, 2) . '/wp-config/enquiry.php';
$cfg = ['to' => 'hello@wisdompalace.ae', 'from' => 'hello@wisdompalace.ae'];
if (is_file($configPath)) $cfg = array_merge($cfg, (array) require $configPath);

/* Simple rate limit: 5 enquiries per IP per hour, stored outside the web root. */
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$rlDir = dirname(__DIR__, 2) . '/wp-config/ratelimit';
@mkdir($rlDir, 0700, true);
$rlFile = $rlDir . '/' . hash('sha256', $ip);
$now = time();
$hits = array_filter(is_file($rlFile) ? (array) json_decode((string) file_get_contents($rlFile), true) : [], fn($t) => $t > $now - 3600);
if (count($hits) >= 5) out(429, ['ok' => false, 'error' => 'rate']);
$hits[] = $now; file_put_contents($rlFile, json_encode(array_values($hits)), LOCK_EX);

$raw = file_get_contents('php://input', false, null, 0, 20000);
$d = json_decode((string) $raw, true);
if (!is_array($d)) out(400, ['ok' => false, 'error' => 'json']);
if (!empty($d['website'])) out(200, ['ok' => true]); // honeypot: pretend success

$clean = fn($v, int $max) => mb_substr(trim(preg_replace('/[\r\n\t]+/', ' ', (string) $v)), 0, $max);
$f = [
  'name' => $clean($d['name'] ?? '', 120), 'company' => $clean($d['company'] ?? '', 160),
  'email' => $clean($d['email'] ?? '', 160), 'phone' => $clean($d['phone'] ?? '', 30),
  'country' => $clean($d['country'] ?? '', 80), 'city' => $clean($d['city'] ?? '', 80), 'region' => $clean($d['region'] ?? '', 80),
  'brand' => $clean($d['brand'] ?? '', 20), 'quantity' => $clean($d['quantity'] ?? '', 12),
  'currency' => $clean($d['currency'] ?? '', 10),
  'models' => array_slice(array_map(fn($m) => $clean($m, 80), (array) ($d['models'] ?? [])), 0, 60),
  'message' => mb_substr(trim((string) ($d['message'] ?? '')), 0, 3000),
];
/* Quote list lines built on product pages: model, storage, colour, regional spec, quantity. */
$lines = [];
foreach (array_slice((array) ($d['lines'] ?? []), 0, 100) as $l) {
  if (!is_array($l)) continue;
  $q = (int) ($l['qty'] ?? 0);
  $m = $clean($l['model'] ?? '', 80);
  if ($m === '' || $q < 1 || $q > 999999) continue;
  $lines[] = ['model' => $m, 'storage' => $clean($l['storage'] ?? '', 30), 'colour' => $clean($l['colour'] ?? '', 40), 'region' => $clean($l['region'] ?? '', 60), 'qty' => $q];
}
$errors = [];
if (mb_strlen($f['name']) < 2) $errors[] = 'name';
if (mb_strlen($f['company']) < 2) $errors[] = 'company';
if (!filter_var($f['email'], FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if (strlen(preg_replace('/\D/', '', $f['phone'])) < 7) $errors[] = 'phone';
if ($f['country'] === '') $errors[] = 'country';
if (mb_strlen($f['city']) < 2) $errors[] = 'city';
if (!$lines) {
  if ($f['region'] === '') $errors[] = 'region';
  if (!preg_match('/^\d{1,7}$/', $f['quantity'])) $errors[] = 'quantity';
  if (!$f['models']) $errors[] = 'models';
}
if (empty($d['consent'])) $errors[] = 'consent';
if ($errors) out(422, ['ok' => false, 'error' => 'invalid', 'fields' => $errors]);

$body = "New wholesale enquiry\n\n"
  . "Name: {$f['name']}\nCompany: {$f['company']}\nEmail: {$f['email']}\nWhatsApp: {$f['phone']}\n"
  . "Delivery: {$f['city']}, {$f['country']}\nCurrency: " . ($f['currency'] ?: 'No preference') . "\n\n"
  . ($lines
      ? "Order lines:\n" . implode("\n", array_map(fn($l, $i) => ($i + 1) . ". {$l['model']} | {$l['storage']} | {$l['colour']} | {$l['region']} | qty {$l['qty']}", $lines, array_keys($lines))) . "\nTotal units: " . array_sum(array_column($lines, 'qty')) . "\n"
      : "Models:\n - " . implode("\n - ", $f['models']) . "\nRegional specification: {$f['region']}\nTotal quantity: {$f['quantity']}\n")
  . "\nNotes:\n{$f['message']}\n";

/* Send through the Hostinger Mail API (DKIM-signed as the mailbox). The API token and mailbox ID
   live only in the config file OUTSIDE public_html. Falls back to the server mail transport. */
$subject = "Wholesale enquiry: {$f['company']} ({$f['country']})";
$replyTo = filter_var($f['email'], FILTER_VALIDATE_EMAIL) ? $f['email'] : $cfg['from'];
$body = "Reply to the buyer at: $replyTo\n\n" . $body;
if (!empty($cfg['mail_api_token']) && !empty($cfg['mailbox_id']) && function_exists('curl_init')) {
  $ch = curl_init('https://api.mail.hostinger.com/api/v1/mailboxes/' . rawurlencode($cfg['mailbox_id']) . '/send');
  curl_setopt_array($ch, [
    CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 20,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $cfg['mail_api_token'], 'Content-Type: application/json', 'Accept: application/json'],
    CURLOPT_POSTFIELDS => json_encode(['to' => [$cfg['to']], 'displayName' => 'Wisdom Palace website', 'subject' => $subject, 'text' => $body]),
  ]);
  curl_exec($ch);
  $code = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
  curl_close($ch);
  out($code >= 200 && $code < 300 ? 200 : 502, ['ok' => $code >= 200 && $code < 300]);
}
$headers = "From: Wisdom Palace website <{$cfg['from']}>\r\nReply-To: <$replyTo>\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit";
$ok = mail($cfg['to'], '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, '-f' . $cfg['from']);
out($ok ? 200 : 502, ['ok' => $ok]);
