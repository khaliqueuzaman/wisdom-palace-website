import IMAGES from './images.json';
/**
 * Product catalogue.
 * Storage and colours are the manufacturer's launch options for each model, collected in
 * November 2026 from Apple, Samsung and Xiaomi pages, GSMArena and Wikipedia. They describe
 * what the manufacturer made, not what is in stock. Stock is confirmed on each quotation.
 * Where a colour list could not be verified, `colors` is left empty and the page shows
 * "Confirm on enquiry" instead of a guess.
 */
export type Brand = 'apple' | 'samsung' | 'xiaomi';
export type Kind = 'phone' | 'watch';

export interface Variant {
  name: string;
  storage?: string[];
  sizes?: string[];
  connectivity?: string[];
  colors: string[];
}

export interface Series {
  slug: string;
  brand: Brand;
  kind: Kind;
  family: string;
  name: string;
  short: string;
  year: number;
  desc: string;
  variants: Variant[];
  images: string[];
  featured?: boolean;
}

export const BRANDS: Record<Brand, { name: string; phones: string; watches: string; blurb: string }> = {
  apple: { name: 'Apple', phones: 'iPhone', watches: 'Apple Watch', blurb: 'iPhone 13 to iPhone 18 Pro and iPhone Duo, and the last three generations of Apple Watch.' },
  samsung: { name: 'Samsung', phones: 'Galaxy phones', watches: 'Galaxy Watch', blurb: 'Galaxy S23 to S26 FE, Galaxy A57, Z Fold8, Z Flip8 and Galaxy Watch.' },
  xiaomi: { name: 'Xiaomi', phones: 'Xiaomi phones', watches: 'Xiaomi watches', blurb: 'Xiaomi 14, 15, 17 and 18 series, Xiaomi Watch and Redmi Watch.' }
};

const GPS = ['GPS', 'GPS + Cellular'];

const RAW: Series[] = [
  /* ---------------- Apple iPhone ---------------- */
  { slug: 'iphone-13', brand: 'apple', kind: 'phone', family: 'iPhone', name: 'iPhone 13 Series', short: 'iPhone 13', year: 2021,
    desc: 'The 2021 generation with the A15 Bionic chip. A proven model for value-focused channels.',
    images: ['iphone-13', 'iphone-13-pro'],
    variants: [
      { name: 'iPhone 13 mini', storage: ['128GB', '256GB', '512GB'], colors: ['Starlight', 'Midnight', 'Blue', 'Pink', 'Red', 'Green'] },
      { name: 'iPhone 13', storage: ['128GB', '256GB', '512GB'], colors: ['Starlight', 'Midnight', 'Blue', 'Pink', 'Red', 'Green'] },
      { name: 'iPhone 13 Pro', storage: ['128GB', '256GB', '512GB', '1TB'], colors: ['Graphite', 'Gold', 'Silver', 'Sierra Blue', 'Alpine Green'] },
      { name: 'iPhone 13 Pro Max', storage: ['128GB', '256GB', '512GB', '1TB'], colors: ['Graphite', 'Gold', 'Silver', 'Sierra Blue', 'Alpine Green'] }
    ] },
  { slug: 'iphone-14', brand: 'apple', kind: 'phone', family: 'iPhone', name: 'iPhone 14 Series', short: 'iPhone 14', year: 2022,
    desc: 'The 2022 line that introduced the Plus size and, on Pro models, the Dynamic Island.',
    images: ['iphone-14-pro', 'iphone-14'],
    variants: [
      { name: 'iPhone 14', storage: ['128GB', '256GB', '512GB'], colors: ['Midnight', 'Purple', 'Starlight', 'Blue', 'Red', 'Yellow'] },
      { name: 'iPhone 14 Plus', storage: ['128GB', '256GB', '512GB'], colors: ['Midnight', 'Purple', 'Starlight', 'Blue', 'Red', 'Yellow'] },
      { name: 'iPhone 14 Pro', storage: ['128GB', '256GB', '512GB', '1TB'], colors: ['Space Black', 'Silver', 'Gold', 'Deep Purple'] },
      { name: 'iPhone 14 Pro Max', storage: ['128GB', '256GB', '512GB', '1TB'], colors: ['Space Black', 'Silver', 'Gold', 'Deep Purple'] }
    ] },
  { slug: 'iphone-15', brand: 'apple', kind: 'phone', family: 'iPhone', name: 'iPhone 15 Series', short: 'iPhone 15', year: 2023,
    desc: 'USB-C across the range. Pro models move to a titanium frame and the Action button.',
    images: ['iphone-15-pro', 'iphone-15'],
    variants: [
      { name: 'iPhone 15', storage: ['128GB', '256GB', '512GB'], colors: ['Black', 'Blue', 'Green', 'Yellow', 'Pink'] },
      { name: 'iPhone 15 Plus', storage: ['128GB', '256GB', '512GB'], colors: ['Black', 'Blue', 'Green', 'Yellow', 'Pink'] },
      { name: 'iPhone 15 Pro', storage: ['128GB', '256GB', '512GB', '1TB'], colors: ['Black Titanium', 'White Titanium', 'Blue Titanium', 'Natural Titanium'] },
      { name: 'iPhone 15 Pro Max', storage: ['256GB', '512GB', '1TB'], colors: ['Black Titanium', 'White Titanium', 'Blue Titanium', 'Natural Titanium'] }
    ] },
  { slug: 'iphone-16', brand: 'apple', kind: 'phone', family: 'iPhone', name: 'iPhone 16 Series', short: 'iPhone 16', year: 2024,
    desc: 'Camera Control on every model, a vertical camera on the standard pair, and iPhone 16e added in 2025.',
    images: ['iphone-16-pro', 'iphone-16', 'iphone-16e'],
    variants: [
      { name: 'iPhone 16', storage: ['128GB', '256GB', '512GB'], colors: ['Black', 'White', 'Pink', 'Teal', 'Ultramarine'] },
      { name: 'iPhone 16 Plus', storage: ['128GB', '256GB', '512GB'], colors: ['Black', 'White', 'Pink', 'Teal', 'Ultramarine'] },
      { name: 'iPhone 16 Pro', storage: ['128GB', '256GB', '512GB', '1TB'], colors: ['Black Titanium', 'White Titanium', 'Natural Titanium', 'Desert Titanium'] },
      { name: 'iPhone 16 Pro Max', storage: ['256GB', '512GB', '1TB'], colors: ['Black Titanium', 'White Titanium', 'Natural Titanium', 'Desert Titanium'] },
      { name: 'iPhone 16e', storage: ['128GB', '256GB', '512GB'], colors: ['Black', 'White'] }
    ] },
  { slug: 'iphone-17', brand: 'apple', kind: 'phone', family: 'iPhone', name: 'iPhone 17 Series', short: 'iPhone 17', year: 2025,
    desc: 'iPhone Air replaces the Plus. The Pro models move to an aluminium unibody; iPhone 17e followed in 2026.',
    images: ['iphone-17-pro', 'iphone-17', 'iphone-air', 'iphone-17e'], featured: true,
    variants: [
      { name: 'iPhone 17', storage: ['256GB', '512GB'], colors: ['Black', 'White', 'Mist Blue', 'Sage', 'Lavender'] },
      { name: 'iPhone Air', storage: ['256GB', '512GB', '1TB'], colors: ['Space Black', 'Cloud White', 'Light Gold', 'Sky Blue'] },
      { name: 'iPhone 17 Pro', storage: ['256GB', '512GB', '1TB'], colors: ['Silver', 'Cosmic Orange', 'Deep Blue'] },
      { name: 'iPhone 17 Pro Max', storage: ['256GB', '512GB', '1TB', '2TB'], colors: ['Silver', 'Cosmic Orange', 'Deep Blue'] },
      { name: 'iPhone 17e', storage: ['256GB', '512GB'], colors: ['Black', 'White', 'Soft Pink'] }
    ] },

  { slug: 'iphone-18-pro', brand: 'apple', kind: 'phone', family: 'iPhone', name: 'iPhone 18 Pro Series', short: 'iPhone 18 Pro', year: 2026, featured: true,
    desc: 'The September 2026 Pro models with the A20 Pro chip, a variable-aperture main camera and up to 2TB on both sizes.',
    images: ['iphone-18-pro', 'iphone-18-pro-max'],
    variants: [
      { name: 'iPhone 18 Pro', storage: ['256GB', '512GB', '1TB', '2TB'], colors: ['Black', 'Silver', 'Glacier', 'Burgundy'] },
      { name: 'iPhone 18 Pro Max', storage: ['256GB', '512GB', '1TB', '2TB'], colors: ['Black', 'Silver', 'Glacier', 'Burgundy'] }
    ] },
  { slug: 'iphone-duo', brand: 'apple', kind: 'phone', family: 'iPhone', name: 'iPhone Duo', short: 'iPhone Duo', year: 2026, featured: true,
    desc: 'Apple’s first foldable iPhone, with a 7.6-inch inner display and the A20 Pro chip.',
    images: ['iphone-duo'],
    variants: [ { name: 'iPhone Duo', storage: ['256GB', '512GB', '1TB', '2TB'], colors: ['Night Sky', 'Star White'] } ] },

  /* ---------------- Apple Watch ---------------- */
  { slug: 'apple-watch-series-10', brand: 'apple', kind: 'watch', family: 'Apple Watch', name: 'Apple Watch Series 10', short: 'Watch Series 10', year: 2024,
    desc: 'The thinnest Apple Watch at launch, with a larger wide-angle display.',
    images: ['apple-watch-series-10'],
    variants: [
      { name: 'Aluminium case', sizes: ['42mm', '46mm'], connectivity: GPS, colors: ['Jet Black', 'Rose Gold', 'Silver'] },
      { name: 'Titanium case', sizes: ['42mm', '46mm'], connectivity: ['GPS + Cellular'], colors: ['Slate', 'Gold', 'Natural'] }
    ] },
  { slug: 'apple-watch-series-11', brand: 'apple', kind: 'watch', family: 'Apple Watch', name: 'Apple Watch Series 11', short: 'Watch Series 11', year: 2025,
    desc: 'Adds 5G cellular and a tougher cover glass to the Series 10 design.',
    images: ['apple-watch-series-11'],
    variants: [
      { name: 'Aluminium case', sizes: ['42mm', '46mm'], connectivity: GPS, colors: ['Jet Black', 'Space Gray', 'Rose Gold', 'Silver'] },
      { name: 'Titanium case', sizes: ['42mm', '46mm'], connectivity: ['GPS + Cellular'], colors: ['Slate', 'Gold', 'Natural'] }
    ] },
  { slug: 'apple-watch-series-12', brand: 'apple', kind: 'watch', family: 'Apple Watch', name: 'Apple Watch Series 12', short: 'Watch Series 12', year: 2026, featured: true,
    desc: 'The current generation, with a new health sensor and a ceramic case option.',
    images: ['apple-watch-series-12'],
    variants: [
      { name: 'Aluminium case', sizes: ['42mm', '46mm'], connectivity: GPS, colors: ['Dark Bronze', 'Light Gold', 'Black', 'Space Gray'] },
      { name: 'Titanium case', sizes: ['42mm', '46mm'], connectivity: ['GPS + Cellular'], colors: ['Radiant Gold', 'Natural'] },
      { name: 'Ceramic case', sizes: ['43mm', '47mm'], connectivity: ['GPS + Cellular'], colors: ['Pearl White', 'Night Blue'] }
    ] },
  { slug: 'apple-watch-ultra-2', brand: 'apple', kind: 'watch', family: 'Apple Watch', name: 'Apple Watch Ultra 2', short: 'Watch Ultra 2', year: 2023,
    desc: 'The 49mm titanium sports and outdoor watch, offered in black from 2024.',
    images: ['apple-watch-ultra-2'],
    variants: [ { name: 'Titanium case', sizes: ['49mm'], connectivity: ['GPS + Cellular'], colors: ['Natural', 'Black'] } ] },
  { slug: 'apple-watch-ultra-3', brand: 'apple', kind: 'watch', family: 'Apple Watch', name: 'Apple Watch Ultra 3', short: 'Watch Ultra 3', year: 2025,
    desc: 'A larger display, 5G and satellite messaging in the same 49mm case.',
    images: ['apple-watch-ultra-3'],
    variants: [ { name: 'Titanium case', sizes: ['49mm'], connectivity: ['GPS + Cellular'], colors: ['Natural', 'Black'] } ] },
  { slug: 'apple-watch-ultra-4', brand: 'apple', kind: 'watch', family: 'Apple Watch', name: 'Apple Watch Ultra 4', short: 'Watch Ultra 4', year: 2026, featured: true,
    desc: 'The current Ultra, one 49mm titanium size, cellular only.',
    images: ['apple-watch-ultra-4'],
    variants: [ { name: 'Titanium case', sizes: ['49mm'], connectivity: ['GPS + Cellular'], colors: ['Natural', 'Black'] } ] },
  { slug: 'apple-watch-se-3', brand: 'apple', kind: 'watch', family: 'Apple Watch', name: 'Apple Watch SE 3', short: 'Watch SE 3', year: 2025,
    desc: 'The entry Apple Watch, with an always-on display for the first time on SE.',
    images: ['apple-watch-se-3'],
    variants: [ { name: 'Aluminium case', sizes: ['40mm', '44mm'], connectivity: GPS, colors: ['Midnight', 'Starlight'] } ] },

  /* ---------------- Samsung phones ---------------- */
  { slug: 'galaxy-a57', brand: 'samsung', kind: 'phone', family: 'Galaxy A', name: 'Galaxy A57 5G', short: 'Galaxy A57', year: 2026, featured: true,
    desc: 'Samsung’s 2026 upper mid-range model, a volume line for value-focused retail.',
    images: ['galaxy-a57-5g'],
    variants: [ { name: 'Galaxy A57 5G', storage: ['128GB', '256GB', '512GB'], colors: ['Awesome Lilac', 'Awesome Icyblue', 'Awesome Navy', 'Awesome Gray'] } ] },
  { slug: 'galaxy-s23', brand: 'samsung', kind: 'phone', family: 'Galaxy S', name: 'Galaxy S23 Series', short: 'Galaxy S23', year: 2023,
    desc: 'The 2023 flagships on Snapdragon 8 Gen 2 for Galaxy, plus the S23 FE.',
    images: ['galaxy-s23-ultra', 'galaxy-s23'],
    variants: [
      { name: 'Galaxy S23', storage: ['128GB', '256GB', '512GB'], colors: ['Phantom Black', 'Cream', 'Green', 'Lavender', 'Graphite', 'Lime'] },
      { name: 'Galaxy S23+', storage: ['256GB', '512GB'], colors: ['Phantom Black', 'Cream', 'Green', 'Lavender', 'Graphite', 'Lime'] },
      { name: 'Galaxy S23 Ultra', storage: ['256GB', '512GB', '1TB'], colors: ['Phantom Black', 'Cream', 'Green', 'Lavender', 'Graphite', 'Lime', 'Sky Blue', 'Red'] },
      { name: 'Galaxy S23 FE', storage: ['128GB', '256GB', '512GB'], colors: ['Mint', 'Cream', 'Graphite', 'Purple', 'Indigo', 'Tangerine'] }
    ] },
  { slug: 'galaxy-s24', brand: 'samsung', kind: 'phone', family: 'Galaxy S', name: 'Galaxy S24 Series', short: 'Galaxy S24', year: 2024,
    desc: 'The first Galaxy AI phones. The Ultra moves to a titanium frame.',
    images: ['galaxy-s24-ultra', 'galaxy-s24'],
    variants: [
      { name: 'Galaxy S24', storage: ['128GB', '256GB', '512GB'], colors: ['Onyx Black', 'Marble Grey', 'Cobalt Violet', 'Amber Yellow', 'Jade Green', 'Sandstone Orange', 'Sapphire Blue'] },
      { name: 'Galaxy S24+', storage: ['256GB', '512GB'], colors: ['Onyx Black', 'Marble Grey', 'Cobalt Violet', 'Amber Yellow', 'Jade Green', 'Sandstone Orange', 'Sapphire Blue'] },
      { name: 'Galaxy S24 Ultra', storage: ['256GB', '512GB', '1TB'], colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet', 'Titanium Yellow', 'Titanium Blue', 'Titanium Green', 'Titanium Orange'] },
      { name: 'Galaxy S24 FE', storage: ['128GB', '256GB', '512GB'], colors: ['Blue', 'Graphite', 'Gray', 'Mint', 'Yellow'] }
    ] },
  { slug: 'galaxy-s25', brand: 'samsung', kind: 'phone', family: 'Galaxy S', name: 'Galaxy S25 Series', short: 'Galaxy S25', year: 2025, featured: true,
    desc: 'The 2025 flagships, including the slim S25 Edge and the S25 FE.',
    images: ['galaxy-s25-ultra', 'galaxy-s25'],
    variants: [
      { name: 'Galaxy S25', storage: ['128GB', '256GB', '512GB'], colors: ['Icyblue', 'Navy', 'Mint', 'Silver Shadow', 'Blueblack', 'Coralred', 'Pinkgold'] },
      { name: 'Galaxy S25+', storage: ['256GB', '512GB'], colors: ['Icyblue', 'Navy', 'Mint', 'Silver Shadow', 'Blueblack', 'Coralred', 'Pinkgold'] },
      { name: 'Galaxy S25 Ultra', storage: ['256GB', '512GB', '1TB'], colors: ['Titanium Silverblue', 'Titanium Black', 'Titanium Whitesilver', 'Titanium Gray', 'Titanium Jadegreen', 'Titanium Jetblack', 'Titanium Pinkgold'] },
      { name: 'Galaxy S25 Edge', storage: ['256GB', '512GB'], colors: ['Titanium Icyblue', 'Titanium Silver', 'Titanium Jetblack'] },
      { name: 'Galaxy S25 FE', storage: ['128GB', '256GB', '512GB'], colors: ['Icyblue', 'Jetblack', 'Navy', 'White'] }
    ] },
  { slug: 'galaxy-s26', brand: 'samsung', kind: 'phone', family: 'Galaxy S', name: 'Galaxy S26 Series', short: 'Galaxy S26', year: 2026, featured: true,
    desc: 'The current flagships. Storage now starts at 256GB on every model.',
    images: ['galaxy-s26-ultra', 'galaxy-s26'],
    variants: [
      { name: 'Galaxy S26', storage: ['256GB', '512GB'], colors: ['Cobalt Violet', 'Sky Blue', 'Black', 'White', 'Silver Shadow', 'Pink Gold'] },
      { name: 'Galaxy S26+', storage: ['256GB', '512GB'], colors: ['Cobalt Violet', 'Sky Blue', 'Black', 'White', 'Silver Shadow', 'Pink Gold'] },
      { name: 'Galaxy S26 Ultra', storage: ['256GB', '512GB', '1TB'], colors: ['Cobalt Violet', 'Sky Blue', 'Black', 'White', 'Silver Shadow', 'Pink Gold'] }
    ] },
  { slug: 'galaxy-z-fold-4', brand: 'samsung', kind: 'phone', family: 'Galaxy Z Fold', name: 'Galaxy Z Fold4', short: 'Z Fold4', year: 2022,
    desc: 'The 2022 book-style foldable with a 7.6-inch main screen.', images: ['galaxy-z-fold4'],
    variants: [ { name: 'Galaxy Z Fold4', storage: ['256GB', '512GB', '1TB'], colors: ['Graygreen', 'Phantom Black', 'Beige', 'Burgundy'] } ] },
  { slug: 'galaxy-z-fold-5', brand: 'samsung', kind: 'phone', family: 'Galaxy Z Fold', name: 'Galaxy Z Fold5', short: 'Z Fold5', year: 2023,
    desc: 'The first Fold to close flat, using the Flex Hinge.', images: ['galaxy-z-fold5'],
    variants: [ { name: 'Galaxy Z Fold5', storage: ['256GB', '512GB', '1TB'], colors: ['Icy Blue', 'Phantom Black', 'Cream', 'Gray', 'Blue'] } ] },
  { slug: 'galaxy-z-fold-6', brand: 'samsung', kind: 'phone', family: 'Galaxy Z Fold', name: 'Galaxy Z Fold6', short: 'Z Fold6', year: 2024,
    desc: 'Lighter and squarer than the Fold5, with Galaxy AI.', images: ['galaxy-z-fold6'],
    variants: [ { name: 'Galaxy Z Fold6', storage: ['256GB', '512GB', '1TB'], colors: ['Silver Shadow', 'Pink', 'Navy', 'Crafted Black', 'White'] } ] },
  { slug: 'galaxy-z-fold-7', brand: 'samsung', kind: 'phone', family: 'Galaxy Z Fold', name: 'Galaxy Z Fold7', short: 'Z Fold7', year: 2025, featured: true,
    desc: 'Samsung’s thinnest book-style foldable at launch.', images: ['galaxy-z-fold7'],
    variants: [ { name: 'Galaxy Z Fold7', storage: ['256GB', '512GB', '1TB'], colors: ['Blue Shadow', 'Silver Shadow', 'Jetblack', 'Mint'] } ] },
  { slug: 'galaxy-z-flip-5', brand: 'samsung', kind: 'phone', family: 'Galaxy Z Flip', name: 'Galaxy Z Flip5', short: 'Z Flip5', year: 2023,
    desc: 'The Flip that introduced the large Flex Window cover screen.', images: ['galaxy-z-flip5'],
    variants: [ { name: 'Galaxy Z Flip5', storage: ['256GB', '512GB'], colors: ['Mint', 'Graphite', 'Cream', 'Lavender', 'Gray', 'Blue', 'Green', 'Yellow'] } ] },
  { slug: 'galaxy-z-flip-6', brand: 'samsung', kind: 'phone', family: 'Galaxy Z Flip', name: 'Galaxy Z Flip6', short: 'Z Flip6', year: 2024,
    desc: 'The 2024 Flip with a 50MP main camera.', images: ['galaxy-z-flip6'],
    variants: [ { name: 'Galaxy Z Flip6', storage: ['256GB', '512GB'], colors: ['Silver Shadow', 'Yellow', 'Blue', 'Mint', 'Crafted Black', 'White', 'Peach'] } ] },
  { slug: 'galaxy-z-flip-7', brand: 'samsung', kind: 'phone', family: 'Galaxy Z Flip', name: 'Galaxy Z Flip7', short: 'Z Flip7', year: 2025, featured: true,
    desc: 'An edge-to-edge cover screen, launched alongside the Flip7 FE.', images: ['galaxy-z-flip7'],
    variants: [
      { name: 'Galaxy Z Flip7', storage: ['256GB', '512GB'], colors: ['Blue Shadow', 'Jetblack', 'Coral Red', 'Mint'] },
      { name: 'Galaxy Z Flip7 FE', storage: ['128GB', '256GB'], colors: ['Black', 'White'] }
    ] },

  { slug: 'galaxy-s26-fe', brand: 'samsung', kind: 'phone', family: 'Galaxy S', name: 'Galaxy S26 FE', short: 'S26 FE', year: 2026,
    desc: 'The September 2026 Fan Edition with the Exynos 2500 and a 6.7-inch 120Hz display.',
    images: ['galaxy-s26-fe'],
    variants: [ { name: 'Galaxy S26 FE', storage: ['128GB', '256GB', '512GB'], colors: ['Graphite', 'Pistachio', 'Blueberry'] } ] },
  { slug: 'galaxy-z-fold-8', brand: 'samsung', kind: 'phone', family: 'Galaxy Z Fold', name: 'Galaxy Z Fold8 Series', short: 'Z Fold8', year: 2026, featured: true,
    desc: 'The 2026 Fold in two shapes: the new wide Fold8 and the 8-inch Fold8 Ultra with a 200MP camera.',
    images: ['galaxy-z-fold8-ultra', 'galaxy-z-fold8'],
    variants: [
      { name: 'Galaxy Z Fold8', storage: ['256GB', '512GB', '1TB'], colors: ['Lavender', 'Graphite', 'Cream', 'Pistachio'] },
      { name: 'Galaxy Z Fold8 Ultra', storage: ['256GB', '512GB', '1TB'], colors: ['Violet Shadow', 'Graphite', 'Cream', 'Green Shadow'] }
    ] },
  { slug: 'galaxy-z-flip-8', brand: 'samsung', kind: 'phone', family: 'Galaxy Z Flip', name: 'Galaxy Z Flip8', short: 'Z Flip8', year: 2026, featured: true,
    desc: 'The 2026 Flip with a 6.9-inch main screen and a 4.1-inch FlexWindow.',
    images: ['galaxy-z-flip8'],
    variants: [ { name: 'Galaxy Z Flip8', storage: ['256GB', '512GB'], colors: ['Pink', 'Graphite', 'Cream', 'Mint'] } ] },

  /* ---------------- Galaxy Watch ---------------- */
  { slug: 'galaxy-watch7', brand: 'samsung', kind: 'watch', family: 'Galaxy Watch', name: 'Galaxy Watch7', short: 'Galaxy Watch7', year: 2024,
    desc: 'The 2024 Galaxy Watch with a dual-frequency GPS and Galaxy AI health features.', images: ['galaxy-watch7'],
    variants: [
      { name: 'Galaxy Watch7 40mm', sizes: ['40mm'], connectivity: ['Bluetooth', 'LTE'], colors: ['Green', 'Cream'] },
      { name: 'Galaxy Watch7 44mm', sizes: ['44mm'], connectivity: ['Bluetooth', 'LTE'], colors: ['Green', 'Silver'] }
    ] },
  { slug: 'galaxy-watch-ultra', brand: 'samsung', kind: 'watch', family: 'Galaxy Watch', name: 'Galaxy Watch Ultra', short: 'Watch Ultra', year: 2024,
    desc: 'The titanium 47mm Galaxy Watch for outdoor and endurance use, refreshed in 2025 with Titanium Blue.', images: ['galaxy-watch-ultra'],
    variants: [ { name: 'Galaxy Watch Ultra', sizes: ['47mm'], connectivity: ['LTE'], colors: ['Titanium Gray', 'Titanium White', 'Titanium Silver', 'Titanium Blue'] } ] },
  { slug: 'galaxy-watch8', brand: 'samsung', kind: 'watch', family: 'Galaxy Watch', name: 'Galaxy Watch8 and Watch8 Classic', short: 'Galaxy Watch8', year: 2025,
    desc: 'A slimmer cushion design, and the Classic with a rotating bezel.', images: ['galaxy-watch8', 'galaxy-watch8-classic'],
    variants: [
      { name: 'Galaxy Watch8', sizes: ['40mm', '44mm'], connectivity: ['Bluetooth', 'LTE'], colors: ['Graphite', 'Silver'] },
      { name: 'Galaxy Watch8 Classic', sizes: ['46mm'], connectivity: ['Bluetooth', 'LTE'], colors: ['Black', 'White'] }
    ] },
  { slug: 'galaxy-watch9', brand: 'samsung', kind: 'watch', family: 'Galaxy Watch', name: 'Galaxy Watch9 and Watch Ultra2', short: 'Galaxy Watch9', year: 2026, featured: true,
    desc: 'The current Galaxy Watch generation and the second Galaxy Watch Ultra.', images: ['galaxy-watch9', 'galaxy-watch-ultra2'],
    variants: [
      { name: 'Galaxy Watch9 40mm', sizes: ['40mm'], connectivity: ['Bluetooth', 'LTE'], colors: ['Graphite', 'Cream'] },
      { name: 'Galaxy Watch9 44mm', sizes: ['44mm'], connectivity: ['Bluetooth', 'LTE'], colors: ['Graphite', 'Silver'] },
      { name: 'Galaxy Watch Ultra2', sizes: ['47mm'], connectivity: ['LTE'], colors: ['Titanium Silver', 'Titanium Gray'] }
    ] },

  /* ---------------- Xiaomi phones ---------------- */
  { slug: 'xiaomi-18', brand: 'xiaomi', kind: 'phone', family: 'Xiaomi', name: 'Xiaomi 18 Pro Series', short: 'Xiaomi 18 Pro', year: 2026, featured: true,
    desc: 'The newest Xiaomi flagships: dual 200MP Leica cameras, a rear display and up to 8,500mAh in the Pro Max.',
    images: ['xiaomi-18-pro-max', 'xiaomi-18-pro'],
    variants: [
      { name: 'Xiaomi 18 Pro', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'White', 'Cosmic Blue', 'Velvet Red'] },
      { name: 'Xiaomi 18 Pro Max', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'White', 'Cosmic Blue', 'Velvet Red'] }
    ] },
  { slug: 'xiaomi-14', brand: 'xiaomi', kind: 'phone', family: 'Xiaomi', name: 'Xiaomi 14 Series', short: 'Xiaomi 14', year: 2023,
    desc: 'Leica-tuned flagships from late 2023 and 2024, including the 14 Ultra and the 14T pair.',
    images: ['xiaomi-14-ultra', 'xiaomi-14'],
    variants: [
      { name: 'Xiaomi 14', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'White', 'Jade Green', 'Snow Mountain Pink'] },
      { name: 'Xiaomi 14 Pro', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'Silver', 'Titanium', 'Green'] },
      { name: 'Xiaomi 14 Ultra', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'White', 'Dragon Crystal Blue'] },
      { name: 'Xiaomi 14T', storage: ['256GB', '512GB'], colors: ['Titan Gray', 'Titan Blue', 'Titan Black', 'Lemon Green'] },
      { name: 'Xiaomi 14T Pro', storage: ['256GB', '512GB', '1TB'], colors: ['Titan Gray', 'Titan Blue', 'Titan Black'] },
      { name: 'Xiaomi 14 Civi', storage: ['256GB', '512GB'], colors: ['Matcha Green', 'Cruise Blue', 'Shadow Black'] }
    ] },
  { slug: 'xiaomi-15', brand: 'xiaomi', kind: 'phone', family: 'Xiaomi', name: 'Xiaomi 15 Series', short: 'Xiaomi 15', year: 2024,
    desc: 'Snapdragon 8 Elite flagships, the 15 Ultra camera phone and the 15T pair.',
    images: ['xiaomi-15-ultra', 'xiaomi-15', 'xiaomi-15t-pro'],
    variants: [
      { name: 'Xiaomi 15', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'White', 'Liquid Silver', 'Green', 'Lilac'] },
      { name: 'Xiaomi 15 Pro', storage: ['256GB', '512GB', '1TB'], colors: ['Rock Grey', 'Spruce Green', 'White', 'Liquid Silver'] },
      { name: 'Xiaomi 15 Ultra', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'White', 'Silver Chrome'] },
      { name: 'Xiaomi 15T', storage: ['256GB', '512GB'], colors: ['Black', 'Gray', 'Rose Gold'] },
      { name: 'Xiaomi 15T Pro', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'Gray', 'Mocha Gold'] },
      { name: 'Xiaomi 15S Pro', storage: ['512GB', '1TB'], colors: ['Black', 'Blue'] }
    ] },
  { slug: 'xiaomi-17', brand: 'xiaomi', kind: 'phone', family: 'Xiaomi', name: 'Xiaomi 17 Series', short: 'Xiaomi 17', year: 2025, featured: true,
    desc: 'The current flagships: 17 Pro and Pro Max with a rear display, the 17 Ultra, the 17 Max and the 17T pair.',
    images: ['xiaomi-17', 'xiaomi-17-ultra', 'xiaomi-17t', 'xiaomi-17t-pro'],
    variants: [
      { name: 'Xiaomi 17', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'White', 'Venture Green', 'Ice Blue', 'Pink'] },
      { name: 'Xiaomi 17 Pro', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'White', 'Purple', 'Green'] },
      { name: 'Xiaomi 17 Pro Max', storage: ['512GB', '1TB'], colors: ['Black', 'White', 'Purple', 'Green'] },
      { name: 'Xiaomi 17 Ultra', storage: ['512GB', '1TB'], colors: ['Black', 'White', 'Starlit Green'] },
      { name: 'Xiaomi 17 Max', storage: ['256GB', '512GB'], colors: ['Black', 'Blue', 'White'] },
      { name: 'Xiaomi 17T', storage: ['256GB', '512GB'], colors: ['Black', 'Opal White', 'Blue', 'Violet'] },
      { name: 'Xiaomi 17T Pro', storage: ['256GB', '512GB', '1TB'], colors: ['Black', 'Deep Violet', 'Deep Blue'] }
    ] },

  /* ---------------- Xiaomi watches ---------------- */
  { slug: 'xiaomi-watch-s3', brand: 'xiaomi', kind: 'watch', family: 'Xiaomi Watch', name: 'Xiaomi Watch S3', short: 'Watch S3', year: 2023,
    desc: 'Round AMOLED watch with interchangeable bezels.', images: ['xiaomi-watch-s3'],
    variants: [ { name: 'Xiaomi Watch S3', sizes: ['47mm'], connectivity: ['Bluetooth', 'eSIM'], colors: ['Black', 'Silver'] } ] },
  { slug: 'xiaomi-watch-s4', brand: 'xiaomi', kind: 'watch', family: 'Xiaomi Watch', name: 'Xiaomi Watch S4', short: 'Watch S4', year: 2024,
    desc: 'The 2024 Watch S, in a 47mm size and a smaller 41mm version from 2025.', images: ['xiaomi-watch-s4'],
    variants: [
      { name: 'Xiaomi Watch S4', sizes: ['47mm'], connectivity: ['Bluetooth', 'eSIM'], colors: ['Black', 'Silver'] },
      { name: 'Xiaomi Watch S4 41mm', sizes: ['41mm'], connectivity: ['Bluetooth'], colors: ['Black', 'Mint Green', 'White', 'Sunset Gold'] }
    ] },
  { slug: 'xiaomi-watch-s5', brand: 'xiaomi', kind: 'watch', family: 'Xiaomi Watch', name: 'Xiaomi Watch S5', short: 'Watch S5', year: 2026, featured: true,
    desc: 'The current Watch S, slimmer, in 46mm and 41mm sizes.', images: ['xiaomi-watch-s5', 'xiaomi-watch-s5-41'],
    variants: [
      { name: 'Xiaomi Watch S5 46mm', sizes: ['46mm'], connectivity: ['Bluetooth'], colors: ['Black', 'Silver', 'Ceramic Blue', 'Jungle Green'] },
      { name: 'Xiaomi Watch S5 41mm', sizes: ['41mm'], connectivity: ['Bluetooth'], colors: ['Black', 'Light Blue', 'Ceramic White'] }
    ] },
  { slug: 'xiaomi-watch-5', brand: 'xiaomi', kind: 'watch', family: 'Xiaomi Watch', name: 'Xiaomi Watch 5', short: 'Watch 5', year: 2025,
    desc: 'Xiaomi’s Wear OS-based watch with a 1.54-inch display.', images: ['xiaomi-watch-5'],
    variants: [ { name: 'Xiaomi Watch 5', sizes: ['47mm'], connectivity: ['Bluetooth', 'eSIM'], colors: ['Black', 'Juniper Green'] } ] },
  { slug: 'redmi-watch', brand: 'xiaomi', kind: 'watch', family: 'Redmi Watch', name: 'Redmi Watch 4, 5 and 6', short: 'Redmi Watch', year: 2025,
    desc: 'Three generations of Xiaomi’s rectangular volume watch, plus the Watch 6 Active and Lite.', images: ['redmi-watch-6', 'redmi-watch-5'],
    variants: [
      { name: 'Redmi Watch 4', sizes: ['1.97-inch display'], connectivity: ['Bluetooth'], colors: ['Obsidian Black', 'Silver Gray'] },
      { name: 'Redmi Watch 5', sizes: ['2.07-inch display'], connectivity: ['Bluetooth'], colors: ['Obsidian Black', 'Silver Gray', 'Lavender Purple'] },
      { name: 'Redmi Watch 6', sizes: ['2.1-inch display'], connectivity: ['Bluetooth'], colors: ['Obsidian Black', 'Silver Gray', 'Glacier Blue'] },
      { name: 'Redmi Watch 6 Active', sizes: ['1.85-inch display'], connectivity: ['Bluetooth'], colors: ['Midnight Black', 'Matte Silver', 'Sunset Orange'] },
      { name: 'Redmi Watch 6 Lite', sizes: [], connectivity: ['Bluetooth'], colors: ['Black', 'Steel Gray'] }
    ] }
];
// Only keep image keys that exist in public/images/products; series without images show a neutral placeholder.
export const SERIES: Series[] = RAW.map((x) => ({ ...x, images: x.images.filter((k) => k in IMAGES) }));


export const bySlug = (s: string) => SERIES.find((x) => x.slug === s);
export const ofBrand = (b: Brand, k?: Kind) => SERIES.filter((x) => x.brand === b && (!k || x.kind === k));
export const watches = () => SERIES.filter((x) => x.kind === 'watch');
export const url = (s: Series) => `/products/${s.brand}/${s.slug}/`;
export const union = (s: Series, key: 'storage' | 'colors' | 'sizes' | 'connectivity') =>
  [...new Set(s.variants.flatMap((v) => v[key] || []))];
