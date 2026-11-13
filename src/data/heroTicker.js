import heroPhoneMockupImg from '../assets/images/6a64f206429bff76b574a103_phone-1-p-800.webp';
import plant1Img from '../assets/images/6a64f2068a837f18d051e77e_plant-1.webp';

/**
 * src/data/heroTicker.js
 * Hero card ticker cards moving behind the center smartphone mockup
 *
 * Source: export/home.html (Hero Card Ticker Behind Center Smartphone)
 */

export const HERO_TICKER_CARDS = [
  {
    id: 'snake-plant',
    type: 'badges',
    title: 'Snake plant',
    description: "Diagnose your plant. The Geeio give your result what's your plant need to serve.",
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW0uBuVAOB5ZvAnCI02FO-ped0TDawHSuecfg3SwmlAFpp6JaNtuCc4ruyjEGibn-N-74mFPGOWYGneszFxJNBAWXPl8FXVxaXmvgboFH4wcw4WGcQp_6XQBzEtRkl1d6fIxV47EHJwG6lJDqkUdzrBC3Vr477fVpj1TpWbQzbrkTh5Ah5HhmVVHM1I7u7zTn77PFbpppaNI1_U4TK2EIdw50EH9YgeI_4HtqpKEKX_eh1piWLEusXM6f5cD_nsvENE0U',
      alt: 'Snake plant',
      fit: 'contain',
    },
    icons: ['water_drop', 'content_cut', 'wb_sunny'],
  },
  {
    id: 'ai-analysis',
    type: 'cta',
    title: 'AI analysis for plant care',
    description: 'Take photos, start diagnose diseases, & get plant care tips.',
    image: {
      src: plant1Img,
      alt: 'AI analysis',
      fit: 'contain',
    },
    cta: {
      label: 'Start now',
      href: '#',
    },
  },
  {
    id: 'check-plant',
    type: 'cta',
    title: 'Check your plant',
    description: 'Take photos, start diagnose diseases, & get plant care tips.',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDthWeKw_G_Ji_08Gmxk46gHQAYrorPiN1unL4Erst1uvCk1uiusa2VumUwnCIiJ794Q6Yi5pgmv20a7mJ0rOQQz7LQJEHmmy13-N6350vW9LkP3tkl7iN-Upj5nbh144nNqcSkAID1yFJ3ClqXRkrj-ikTfcEyDqqgAfIFBPJ4YZbiCqDQrJ_sgI_2AZouwGs6dOd75N8qSXsbyK-dl4kRwH6HJJj8LLN7qvOajTtvPM1sq7ZjjYh06EUb6jVZQqi4Cco',
      alt: 'Check your plant',
      fit: 'contain',
    },
    cta: {
      label: 'Diagnose',
      href: '#',
    },
  },
  {
    id: 'plant-care-reminder',
    type: 'reminders',
    title: 'Plant care reminder',
    description: 'Set your plant care with Geeio',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0XFnISSmtHGXDSe90wbfIyF-e1ZeDUujHLRAZ66iqMHVW-qRNDdfC-PWDHVnwEDaxp7JMeec5U6st2Ow_-KRy6E3H6oukgdX8OwwNzjlkP_FiYug6zqKo3gGdo9m25ByfBvt7XL7zWRPGi4vk2q3ZkOnQ9XBXEFWeYXobAn8OF_SgKG5WXFUmlBMpRUfPlwK3D-IvgvbCXJ5L1dLa44oJrhz2Ou4lkqEDAmSND-tte1o-fY5Zyqrfh114HuPC0FuKZO4',
      alt: 'Plant care reminder',
      fit: 'cover',
      containerClassName: 'rounded-2xl overflow-hidden bg-surface-container',
    },
    reminders: [
      {
        id: 'watering',
        title: 'Watering',
        schedule: 'Next: Feb 25, 2027 07:00 AM',
        icon: 'water_drop',
      },
      {
        id: 'fertilising',
        title: 'Fertilising',
        schedule: 'Next: Feb 29, 2027 05:00 PM',
        icon: 'potted_plant',
      },
    ],
  },
];

/**
 * Center smartphone mockup displayed directly above the ticker track
 */
export const HERO_PHONE_MOCKUP = {
  src: heroPhoneMockupImg,
  alt: 'Geeio App Interface',
};

export default HERO_TICKER_CARDS;
