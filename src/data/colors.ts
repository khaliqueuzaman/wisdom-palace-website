/**
 * Swatch colours for manufacturer colour names. Values are close visual matches for display only,
 * not official colour codes. Unknown names fall back to a keyword match, then a neutral grey.
 */
const HEX: Record<string, string> = {
  // neutrals
  'Black': '#1C1C1E', 'Midnight': '#1F2530', 'Space Black': '#2B2B2D', 'Space Gray': '#5B5D61', 'Graphite': '#3A3B3D',
  'Jet Black': '#111111', 'Jetblack': '#111111', 'Phantom Black': '#1E1E20', 'Onyx Black': '#202022', 'Obsidian Black': '#1B1B1D',
  'Shadow Black': '#202124', 'Titan Black': '#232426', 'Titanium Black': '#2E2E30', 'Titanium Jetblack': '#18191B', 'Crafted Black': '#26262A',
  'Black Titanium': '#2F2F31', 'Blueblack': '#1E2533', 'Midnight Black': '#16171A',
  'White': '#F4F4F2', 'Pearl White': '#F1EFEA', 'Opal White': '#F2F0EC', 'Cloud White': '#F3F3F1', 'Ceramic White': '#F5F4F0',
  'Titanium White': '#E8E6E1', 'White Titanium': '#E6E4DF', 'Titanium Whitesilver': '#DCDDDD', 'Star White': '#EEEDEA', 'Starlight': '#ECE5D8',
  'Silver': '#D9DADB', 'Silver Chrome': '#C9CCCF', 'Liquid Silver': '#C7CACD', 'Silver Shadow': '#B8BBBE', 'Titanium Silver': '#C4C5C6',
  'Silver Gray': '#A8AAAD', 'Steel Gray': '#8A8D91', 'Matte Silver': '#BFC1C3', 'Gray': '#8E9196', 'Titan Gray': '#7D8084', 'Titanium Gray': '#8B8C8E',
  'Marble Grey': '#B9B8B4', 'Rock Grey': '#7E8085', 'Awesome Gray': '#8D9095', 'Slate': '#6C7280', 'Titanium': '#A9A39A', 'Natural': '#BDB5A8',
  'Natural Titanium': '#BAB4A9', 'Desert Titanium': '#C7B29A', 'Beige': '#E3D6C3', 'Cream': '#EFE6D2',
  // blues
  'Blue': '#3D6FB6', 'Deep Blue': '#273B63', 'Navy': '#25304A', 'Awesome Navy': '#2C3550', 'Night Blue': '#26324F', 'Night Sky': '#232A3F',
  'Indigo': '#3E4A8A', 'Sapphire Blue': '#2F5597', 'Sierra Blue': '#A7C1D9', 'Mist Blue': '#B9C9DA', 'Sky Blue': '#BFD7EA', 'Light Blue': '#BCD4EA',
  'Icy Blue': '#CFE1EE', 'Icyblue': '#CFE1EE', 'Ice Blue': '#CDE0EE', 'Awesome Icyblue': '#C9DDEB', 'Titanium Icyblue': '#C3D6E3', 'Glacier': '#C8DCEB',
  'Glacier Blue': '#BFD6E8', 'Titan Blue': '#3D5A80', 'Titanium Blue': '#4C5F7A', 'Blue Titanium': '#45536A', 'Titanium Silverblue': '#AEBCCB',
  'Blue Shadow': '#33435E', 'Cruise Blue': '#4B79B4', 'Ceramic Blue': '#5C7FA8', 'Dragon Crystal Blue': '#3F6AA1', 'Cosmic Blue': '#2D4A86',
  'Ultramarine': '#3550B0', 'Teal': '#3E8E8A', 'Blueberry': '#5B5FA8',
  // greens
  'Green': '#5E8C6A', 'Alpine Green': '#4F6B57', 'Jade Green': '#9FC4B0', 'Titanium Jadegreen': '#8DB3A0', 'Titanium Green': '#71837A',
  'Matcha Green': '#A9C29A', 'Lemon Green': '#D7E39A', 'Lime': '#C9E07A', 'Mint': '#BFE3D3', 'Mint Green': '#BFE2D2', 'Sage': '#A9B8A0',
  'Graygreen': '#8A998D', 'Jungle Green': '#3F5F4B', 'Starlit Green': '#2F4E43', 'Venture Green': '#4E6B55', 'Spruce Green': '#3F5C4E',
  'Green Shadow': '#33493F', 'Pistachio': '#C8DDB0', 'Juniper Green': '#4C6B5C',
  // purples and pinks
  'Purple': '#8E7CB8', 'Deep Purple': '#5A4E6E', 'Lilac': '#C9B7DE', 'Lavender': '#C7BEE3', 'Lavender Purple': '#B9A8DB', 'Awesome Lilac': '#C4B5DF',
  'Violet': '#7E64B4', 'Deep Violet': '#4D3E73', 'Cobalt Violet': '#5C4FA0', 'Titanium Violet': '#6E6385', 'Violet Shadow': '#4A3E66',
  'Pink': '#F2C5CF', 'Soft Pink': '#F3D4D6', 'Snow Mountain Pink': '#F1D5DA', 'Pink Gold': '#E8C6B6', 'Pinkgold': '#E8C6B6',
  'Titanium Pinkgold': '#E2C4B5', 'Rose Gold': '#E4BFAE', 'Peach': '#F2C7AE',
  // warm
  'Red': '#C2263A', 'Coral Red': '#E06A5E', 'Coralred': '#E06A5E', 'Burgundy': '#6E2433', 'Velvet Red': '#8E1F2E',
  'Gold': '#E9D3B0', 'Light Gold': '#EADBBF', 'Radiant Gold': '#E3C68E', 'Mocha Gold': '#B89A78', 'Sunset Gold': '#D9B27C', 'Dark Bronze': '#6E5847',
  'Yellow': '#F4DE7A', 'Amber Yellow': '#F0C35A', 'Titanium Yellow': '#E4CF8A', 'Tangerine': '#F08A4B', 'Cosmic Orange': '#E8742A',
  'Sandstone Orange': '#D98B5F', 'Titanium Orange': '#D9773E', 'Sunset Orange': '#E8743B'
};

const KEYS: [RegExp, string][] = [
  [/black|onyx|obsidian/i, '#1F1F21'], [/white|pearl/i, '#F2F1EE'], [/silver|chrome/i, '#CFD1D3'], [/gr[ae]y|graphite|slate/i, '#7F8287'],
  [/blue|navy|sky/i, '#4A6FA5'], [/green|mint|lime|jade/i, '#7FA88A'], [/purple|violet|lilac|lavender/i, '#9C88C7'],
  [/pink|rose|peach/i, '#EEC4CC'], [/red|burgundy/i, '#B3263A'], [/gold|bronze|yellow|amber/i, '#DCC08E'], [/orange|tangerine/i, '#E37A3C']
];

export function swatch(name: string): string {
  if (HEX[name]) return HEX[name];
  for (const [re, hex] of KEYS) if (re.test(name)) return hex;
  return '#B8BBB8';
}

/** Light swatches get a visible ring so they do not disappear on white cards. */
export function isLight(hex: string): boolean {
  const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 205;
}
