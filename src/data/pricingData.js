/**
 * src/data/pricingData.js
 * Pricing tiers, guarantee benefits, and pricing FAQs for Geeio
 *
 * Source: export/home.html and export/pricing.html
 */

export const PRICING_BENEFITS = [
  'Start free — No card needed',
  '30-Day money-back guarantee',
];

export const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: {
      monthly: 0,
      yearly: 0,
    },
    period: '/free-forever',
    icon: 'leaf',
    description: 'Perfect for casual plant hobbyists getting started with smart identification.',
    features: [
      'Unlimited plant identification',
      '3 health scans per month',
      'Basic care reminders',
      'Limited AI diagnosis',
      'Email support',
    ],
    ctaText: 'Get Started',
    ctaHref: '#download',
    variant: 'outline',
    isPopular: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: {
      monthly: 20,
      yearly: 16,
    },
    period: '/free-forever',
    icon: 'twin-leaves',
    description: 'Complete peace of mind for serious plant owners with unlimited AI diagnostics.',
    features: [
      'Unlimited health scans',
      'Personalised care plans for plant',
      'Early disease and pest alerts',
      'Priority AI diagnosis',
      'Quick live support',
    ],
    ctaText: 'Get Started',
    ctaHref: '#pricing',
    variant: 'primary',
    isPopular: true,
  },
];

export const PRICING_FAQS = [
  {
    id: 'can-i-use-geeio-for-free',
    question: 'Can I use Geeio for free?',
    answer:
      'Yes! Our Free tier allows unlimited plant identification, basic care reminders, and up to 3 plant health scans every month with zero credit card required.',
  },
  {
    id: 'whats-included-in-premium',
    question: 'What’s included in the premium plan?',
    answer:
      'Premium unlocks unlimited health scans, personalized care schedules for all your plants, early pest and disease alerts, priority AI diagnostics, and fast direct support.',
  },
  {
    id: 'cancel-subscription-anytime',
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time with a single click in your account settings. You will continue to have full access until the end of your billing cycle.',
  },
  {
    id: 'subscription-billed-annually',
    question: 'Is my subscription billed annually?',
    answer:
      'We offer both monthly and annual billing options. Choosing yearly billing gives you all premium features at our lowest monthly equivalent rate ($16/month).',
  },
  {
    id: 'need-internet-connection',
    question: 'Do I need an internet connection?',
    answer:
      'An active internet connection is required for scanning and advanced cloud AI diagnostics. However, your plant collection, watering reminders, and saved care logs are fully accessible offline.',
  },
];

export const PRICING_FAQ_TITLE = 'Simple pricing.\nhonest answers';

export default PRICING_PLANS;
