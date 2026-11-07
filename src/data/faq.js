/**
 * src/data/faq.js
 * Frequently Asked Questions data for Geeio
 *
 * Source: export/home.html and export/features.html
 */

export const FAQ_ITEMS = [
  {
    id: 'identify-plant',
    question: 'How does Geeio identify my plant?',
    answer:
      'Geeio uses state-of-the-art vision models trained on millions of botanical specimens to analyze leaf patterns, venation, color, and structure to identify your plant species with over 98% accuracy in seconds.',
  },
  {
    id: 'detect-diseases',
    question: 'Can Geeio detect plant diseases?',
    answer:
      'Yes. Our diagnostics engine identifies early fungal infections, bacterial leaf spots, nutrient deficiencies, pest damage, and overwatering symptoms, providing step-by-step treatment plans.',
  },
  {
    id: 'suitable-beginners',
    question: 'Is Geeio suitable for beginners?',
    answer:
      'Absolutely. Geeio is designed to take the guesswork out of plant parenthood with simple notifications, personalized watering schedules, and easy-to-follow care cards tailored to your home environment.',
  },
  {
    id: 'accuracy',
    question: 'How accurate is the AI identification?',
    answer:
      'Geeio consistently achieves a 98.4% diagnostic accuracy benchmark verified by botanists across more than 20,000 indoor and outdoor houseplant varieties.',
  },
  {
    id: 'internet-connection',
    question: 'Do I need an internet connection?',
    answer:
      'An active internet connection is required for scanning and advanced disease diagnosis via cloud AI. Your saved plants, reminders, and historical care logs remain fully accessible offline.',
  },
];

export default FAQ_ITEMS;
