/**
 * src/data/pricingData.js
 * Pricing tiers and plan benefits
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
    icon: 'eco',
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
    icon: 'spa',
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

export default PRICING_PLANS;
