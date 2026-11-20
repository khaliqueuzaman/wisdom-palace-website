/* Markets: distances are great-circle figures from Deira (computed); time offsets are public facts.
 * Nothing here claims shipping agreements, partners, timelines or regulation. */
export interface Market { slug: string; name: string; ref: string; km: number; tz: string; buyers: string; angle: string; ask: string[]; }

export const MARKETS: Market[] = [
  { slug: 'europe', name: 'Europe', ref: 'Frankfurt', km: 4833, tz: '2 to 3 hours behind Dubai (CET/CEST)',
    buyers: 'Multi-country distributors, wholesalers and importers',
    angle: 'European buyers usually source for several countries at once. Tell us the destination for each consignment and we confirm coverage and terms country by country.',
    ask: ['Destination country for each shipment', 'Regional specification your market needs', 'Preferred quotation currency', 'Models, storage and quantities per line'] },
  { slug: 'united-kingdom', name: 'United Kingdom', ref: 'London', km: 5471, tz: '3 to 4 hours behind Dubai (GMT/BST)',
    buyers: 'UK importers, independent retailers and repair chains',
    angle: 'UK enquiries often mix current and earlier generations. List each model and storage size as its own line and we quote line by line. Most of the UK morning overlaps our afternoon in Deira.',
    ask: ['Mix of generations and storage sizes', 'Whether UK-specification units are required', 'Quotation currency (GBP or USD)', 'Delivery address type: warehouse, store or forwarder'] },
  { slug: 'saudi-arabia', name: 'Saudi Arabia', ref: 'Riyadh', km: 872, tz: '1 hour behind Dubai (AST)',
    buyers: 'Distributors and retail groups in Riyadh, Jeddah and Dammam',
    angle: 'Riyadh is under 900 km from Deira and one hour behind it, so working hours line up almost entirely. Name the city and delivery point; Jeddah is nearly twice as far as Riyadh.',
    ask: ['City and delivery point', 'Middle East or global specification', 'Quotation currency (SAR or USD)', 'Paperwork your importer of record needs'] },
  { slug: 'qatar', name: 'Qatar', ref: 'Doha', km: 380, tz: '1 hour behind Dubai (AST)',
    buyers: 'Doha importers, mobile distributors and retail chains',
    angle: 'Doha is the closest of our four markets, about 380 km from Deira. If you reorder on a regular cycle, tell us the usual lot size and interval so the quotation covers repeat orders.',
    ask: ['Typical reorder interval and lot size', 'Models and storage sizes per lot', 'Quotation currency (QAR or USD)', 'Delivery point in Doha'] }
];

export interface QA { q: string; a: string; link?: [string, string]; }
export const FAQ: QA[] = [
  { q: 'Which Apple products do you supply?', a: 'iPhone 13 to 17 series, iPhone 18 Pro and Pro Max, iPhone Duo, plus Apple Watch Series 10, 11 and 12, Ultra 2, 3 and 4, and SE 3. Each quotation states exactly which models, storage sizes and colours are in stock.', link: ['/products/apple/', 'Apple range'] },
  { q: 'Which Samsung products are available?', a: 'Galaxy S23 to S26 series, Galaxy S26 FE, Galaxy A57, Galaxy Z Fold4 to Fold8 and Fold8 Ultra, Z Flip5 to Flip8, and Galaxy Watch7, Watch8, Watch9 and Watch Ultra.', link: ['/products/samsung/', 'Samsung range'] },
  { q: 'Which Xiaomi products do you supply?', a: 'Xiaomi 14, 15, 17 and 18 Pro series, including the Ultra and T models, plus Xiaomi Watch S3, S4, S5, Watch 5 and Redmi Watch 4, 5 and 6.', link: ['/products/xiaomi/', 'Xiaomi range'] },
  { q: 'Are the phones new?', a: 'Yes. We supply brand-new units. Each quotation line states the model, storage, colour and regional specification.' },
  { q: 'Do you handle bulk wholesale orders?', a: 'Yes. We sell to trade buyers only: distributors, retailers, resellers, importers and procurement teams.' },
  { q: 'How can I request wholesale pricing?', a: 'Send an enquiry with the models, storage sizes, quantities, regional specification and destination. Prices are quoted per enquiry and are not published on the website.', link: ['/contact/', 'Request a wholesale quote'] },
  { q: 'Which countries do you export to?', a: 'We serve buyers in Europe, the United Kingdom, Saudi Arabia and Qatar. For a specific European country, ask and we confirm coverage before quoting.', link: ['/markets/', 'Markets we serve'] },
  { q: 'Where is your office?', a: 'Office M07, Al Makhtom Building, Naif Road, Naif, Deira, Dubai. Open Monday to Saturday, 10 am to 10 pm Dubai time.', link: ['/contact/', 'Directions'] },
  { q: 'How do I confirm current availability?', a: 'Availability changes daily, so the website shows no stock counts. Send an enquiry or a WhatsApp message and the sales team confirms what is in stock when quoting.' },
  { q: 'Can I contact sales on WhatsApp?', a: 'Yes. Use the WhatsApp button on any page, or message +971 50 424 9602.' },
  { q: 'What warranty applies?', a: 'As per our terms and conditions: the manufacturer’s warranty for the unit’s regional specification, plus dead-on-arrival cover reported within 7 days of delivery.', link: ['/terms-of-business/', 'Terms of business'] }
];

export const REGIONS = ['Middle East (UAE / GCC)', 'Europe (EU)', 'United Kingdom', 'Global / International', 'United States', 'Hong Kong / China', 'India', 'Japan', 'No preference'];

export const COUNTRIES: Record<string, string[]> = {
  Europe: ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland'],
  'United Kingdom': ['United Kingdom'],
  Gulf: ['Saudi Arabia', 'Qatar', 'United Arab Emirates']
};
