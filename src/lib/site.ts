export const SITE = {
  company: 'Wisdom Palace',
  founded: '2015',
  email: 'hello@wisdompalace.ae',
  whatsapp: '+971 50 424 9602',
  whatsappDigits: '971504249602',
  addressLines: ['Office M07, Al Makhtom Building', 'Naif Road, Naif, Deira', 'Dubai, United Arab Emirates'],
  address: 'Office M07, Al Makhtom Building, Naif Road, Naif, Deira, Dubai, United Arab Emirates',
  maps: 'https://maps.app.goo.gl/4qamF3NKo68TB9jW9',
  hours: 'Monday to Saturday, 10 am to 10 pm',
  waMessage: 'Hello, I am interested in your wholesale mobile phone catalogue. Please share product availability and wholesale information.'
};

const preview = import.meta.env.PREVIEW === '1' || (typeof process !== 'undefined' && process.env.PREVIEW === '1');

/** Internal link. Production: clean folder URLs. Preview: one .html per page. */
export function href(path: string): string {
  if (!preview) return path;
  const [p, hash] = path.split('#');
  if (p === '/' || p === '') return '/index.html' + (hash ? '#' + hash : '');
  return p.replace(/\/$/, '') + '.html' + (hash ? '#' + hash : '');
}

export const waLink = (text = SITE.waMessage) => `https://wa.me/${SITE.whatsappDigits}?text=${encodeURIComponent(text)}`;
