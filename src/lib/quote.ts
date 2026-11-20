/** Quote list kept in the visitor's browser (localStorage). No prices, nothing sent until the enquiry form is submitted. */
export interface QuoteLine { id: string; slug: string; series: string; model: string; storage: string; colour: string; region: string; qty: number }
const KEY = 'wp-quote';

export function getQuote(): QuoteLine[] {
  try { const v = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(v) ? v : []; } catch { return []; }
}
function save(lines: QuoteLine[]) {
  try { localStorage.setItem(KEY, JSON.stringify(lines)); } catch { /* storage blocked: list lives for this page only */ }
  memory = lines;
  window.dispatchEvent(new CustomEvent('quote:change', { detail: lines }));
}
let memory: QuoteLine[] | null = null;
const read = () => memory ?? (memory = getQuote());

/** Adds a line, or raises the quantity of an identical line. */
export function addLine(l: Omit<QuoteLine, 'id'>) {
  const lines = read();
  const same = lines.find((x) => x.model === l.model && x.storage === l.storage && x.colour === l.colour && x.region === l.region);
  if (same) same.qty = Math.min(999999, same.qty + l.qty);
  else lines.push({ ...l, id: Math.random().toString(36).slice(2, 10) });
  save([...lines]);
}
export function setQty(id: string, qty: number) { save(read().map((x) => (x.id === id ? { ...x, qty: Math.max(1, Math.min(999999, qty || 1)) } : x))); }
export function removeLine(id: string) { save(read().filter((x) => x.id !== id)); }
export function clearQuote() { save([]); }
export const units = (lines: QuoteLine[]) => lines.reduce((n, l) => n + l.qty, 0);
export const lineText = (l: QuoteLine) => [l.model, l.storage, l.colour, l.region].filter(Boolean).join(' · ');
