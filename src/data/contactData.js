/**
 * src/data/contactData.js
 * Contact page methods, info, and meta details
 */

export const CONTACT_PAGE_DATA = {
  badge: 'Support',
  heading: 'Need help?\nGet human support',
  note: 'We usually respond within 1 business day',
};

export const CONTACT_METHODS = [
  {
    id: 'email',
    label: 'Email: ',
    value: 'support@geeio.app',
    href: 'mailto:support@geeio.app',
    icon: 'email',
  },
  {
    id: 'chat',
    label: 'Live chat: ',
    value: 'Available Monday–Friday, 9:00 AM–6:00 PM (UTC)',
    icon: 'chat',
  },
  {
    id: 'response-time',
    label: 'Response time: ',
    value: 'Most inquiries receive a reply within 24 hours',
    icon: 'clock',
  },
];

export default {
  CONTACT_PAGE_DATA,
  CONTACT_METHODS,
};
