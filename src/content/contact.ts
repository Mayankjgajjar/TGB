export interface ContactOffice {
  name: string;
  role: string;
  address: string[];
  phone: string;
  email: string;
  coordinates: string;
  hours: string;
}

export const contactContent = {
  header: {
    label: 'OFFICE & FABRICATION SHOP',
    title: 'Connect with our Engineering Team',
    subtitle:
      'We collaborate with architects, builders, and project developers globally. Address your specifications directly to our office in Gujarat.',
  },
  offices: [
    {
      name: 'TGB Enterprise HQ',
      role: 'Engineering, Estimation & Design Office',
      address: ['402, Signature Building', 'S.G. Highway, Thaltej', 'Ahmedabad, Gujarat 380054'],
      phone: '+91 79 4000 5890',
      email: 'eng@tgbenterprise.com',
      coordinates: '23.0489° N, 72.5020° E',
      hours: '09:00 - 18:00 IST / Monday - Saturday',
    },
    {
      name: 'TGB Fabrication Yard',
      role: 'CNC Machining, patination & Structural Welding',
      address: [
        'Plot No. 12/A, GIDC Phase III',
        'Vatva Industrial Estate',
        'Ahmedabad, Gujarat 382445',
      ],
      phone: '+91 79 4000 5895',
      email: 'yard@tgbenterprise.com',
      coordinates: '22.9567° N, 72.6341° E',
      hours: '08:00 - 17:00 IST / Monday - Friday',
    },
  ] as ContactOffice[],
  departments: [
    { name: 'Technical Estimation & Quotes', email: 'estimation@tgbenterprise.com' },
    { name: 'Architectural Partnerships', email: 'studios@tgbenterprise.com' },
    { name: 'Structural Integrity Auditing', email: 'compliance@tgbenterprise.com' },
  ],
};
