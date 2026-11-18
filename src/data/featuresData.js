import phoneScannerImg from '../assets/images/6a64f2062b5d37745f8122d5_phone-2.webp';
import phoneHeroImg from '../assets/images/6a64f206429bff76b574a103_phone-1-p-800.webp';
import phone5Img from '../assets/images/6a68d04197b3a915c804b42e_phone-5.webp';
import snakePlantImg from '../assets/images/6a64f2066a966372f1d2d10b_plant-4.webp';
import peaceLilyImg from '../assets/images/6a64f2053c08fde8e74b7975_plant-3.webp';
import plantStatusPreview from '../assets/images/6a64f20687226e2462646e68_img-1.webp';
import growthProgressPreview from '../assets/images/6a64f205e5b1ef263c3a2205_img-2.webp';

// Reviewer avatars
import avatar1 from '../assets/images/6a66ec7d6dd9550f1f8923e4_avatar-1.webp';
import avatar2 from '../assets/images/6a66ec7d35c4e31140ef462c_avatar-2.webp';
import avatar3 from '../assets/images/6a66ec7d5ad4f32b1c8e583c_avatar-3.webp';
import avatar4 from '../assets/images/6a66ec7ea73946cf86de9bf0_avatar-4.webp';

// Brand icons
import iconPlantId from '../assets/icons/6a64f207bd9b2222e38f40c7_icon-6.svg';
import iconDiagnosis from '../assets/icons/6a64f2066b143ef6b0d0308e_icon-7.svg';
import iconCarePlan from '../assets/icons/6a64f206e994c50ea2068804_icon-8.svg';
import iconPlantCare from '../assets/icons/6a653f596b0e3d604314c11e_icon-14.svg';
import iconEmergencyRepairs from '../assets/icons/6a653f59b0c34d7d8bc81c97_icon-15.svg';
import iconCarePlans from '../assets/icons/6a653f59017eec09692f9686_icon-16.svg';
import checkSvg from '../assets/icons/6a653860558f120d4039f6e8_check.svg';

// Capabilities Section Icons (Geeio Design System)
import iconReminders from '../assets/icons/6a65e82dca97e39b2022781a_icon-17.svg';
import iconChecker from '../assets/icons/6a65e82de3f95147b7d9996f_icon-18.svg';
import iconCare from '../assets/icons/6a65e82b6a5afe2ac4069ed8_icon-19.svg';
import iconAskAi from '../assets/icons/6a65e82b68a1aa80970ecd09_icon-20.svg';

// Compliance Badges
import iconIso from '../assets/icons/6a65214d0482171b55fe548e_icon-9.svg';
import iconSoc2 from '../assets/icons/6a65214d6c56029a598c44ba_icon-10.svg';
import iconGdpr from '../assets/icons/6a65214df8fe95d8c07a633a_icon-11.svg';

// Features Page Section Icons
import iconCamera from '../assets/icons/6a671627857e0e4bc6cc0526_icon-24.svg';
import iconSearchAnalytics from '../assets/icons/6a6716271232e4bc2674487b_icon-25.svg';
import iconClock from '../assets/icons/6a671627bb97016fd4ca80bd_icon-26.svg';
import iconChat from '../assets/icons/6a67162715b2ae0c715bc000_icon-27.svg';

export const COMPLIANCE_BADGES = [
  {
    id: 'iso-27001',
    label: 'ISO 27001',
    src: iconIso,
  },
  {
    id: 'soc-2',
    label: 'SOC 2 Type II',
    src: iconSoc2,
  },
  {
    id: 'gdpr',
    label: 'GDPR',
    src: iconGdpr,
  },
];

export const CORE_CAPABILITIES = [
  {
    id: 'unlimited-reminders',
    title: 'Unlimited plant care reminders',
    description:
      "Upload a photo or describe your plant's symptoms, and our AI instantly identifies problems, explains the cause, and recommends the best treatment and care plan.",
    icon: iconReminders,
  },
  {
    id: 'advance-checker',
    title: 'Advance symptoms checker',
    description:
      'Get an AI-powered symptom analysis that detects plant diseases, pests, and nutrient deficiencies, then recommends the best treatment and long-term care.',
    icon: iconChecker,
  },
  {
    id: 'care-reminders',
    title: 'Plant care reminders',
    description:
      'Never miss an important care task again. Get AI-powered reminders for watering, fertilizing, pruning, repotting, and seasonal maintenance, all personalized to your plant.',
    icon: iconCare,
  },
  {
    id: 'ask-ai',
    title: 'Ask AI for any plant problem',
    description:
      'Upload a photo to instantly identify plant issues, detect diseases and pests, and receive personalized treatment with expert care recommendations.',
    icon: iconAskAi,
  },
];

export const POINT_ONCE_DATA = {
  title: 'Point once.\nAI explains everything',
  description:
    "Geeio identifies your plant species, detects problems from leaves and visible symptoms, and creates a personalized care plan tailored to your plant's specific needs.",
  features: [
    {
      id: 'instant-id',
      title: 'Instant plant id',
      description: 'Recognise any plant in seconds',
      icon: iconPlantId,
    },
    {
      id: 'ai-diagnosis',
      title: 'AI health diagnosis',
      description: 'Catch plant problems early',
      icon: iconDiagnosis,
    },
    {
      id: 'care-plan',
      title: 'Personalised care plan',
      description: 'Get care tailored to your plant',
      icon: iconCarePlan,
    },
  ],
  previews: [
    {
      id: 'plants-status',
      alt: 'My plants status',
      src: plantStatusPreview,
    },
    {
      id: 'growth-progress',
      alt: 'Plant growth progress',
      src: growthProgressPreview,
    },
  ],
};

export const HEALTHY_CARE_DATA = {
  title: 'Healthy care for\nlasting growth',
  description:
    'Keep your plants healthy with AI-powered care plans tailored to their unique needs, helping them grow stronger season after season.',
  scannerImg: {
    alt: 'Phone plant scanner',
    src: phoneScannerImg,
  },
  badge: {
    title: 'Snake plant',
    subtitle: 'living room',
    stats: [
      { label: 'Water', value: '45%' },
      { label: 'Sunlight', value: '80%' },
    ],
    plantImg: {
      alt: 'Peace lily',
      src: peaceLilyImg,
    },
  },
  checklist: [
    'Personalised AI care plans tailored to each plant',
    'Smart watering reminders based on real needs',
    'Light and humidity guidance for optimal growth',
  ],
  ctaText: "Download It's Free",
  ctaHref: '/downloads',
};

export const COMPANION_ACCORDION_DATA = {
  title: 'Your complete plant care companion',
  items: [
    {
      id: 'smart-id',
      title: 'Smart plant identification',
      icon: iconPlantCare,
      defaultOpen: true,
      description:
        'Identify any plant instantly by uploading a photo. Get accurate species names, key details, and essential care recommendations in seconds.',
      bullets: [
        'Track your plant care routine',
        'Never miss essential care tasks',
        'Get pruning and repotting reminders',
      ],
    },
    {
      id: 'emergency-repairs',
      title: 'Do you offer emergency repairs?',
      icon: iconEmergencyRepairs,
      defaultOpen: false,
      description:
        "Upload a photo to detect diseases, pests, and nutrient deficiencies. Get accurate insights and personalized treatment recommendations to restore your plant's health.",
      bullets: [
        'Detect diseases and pests instantly',
        'Identify nutrient deficiencies',
        'Receive personalized treatment plans',
      ],
    },
    {
      id: 'care-plans-reminders',
      title: 'Care plans & reminders',
      icon: iconCarePlans,
      defaultOpen: false,
      description:
        'Receive customized care schedules, timely watering reminders, fertilizing tips, and seasonal guidance to keep every plant healthy and thriving year-round.',
      bullets: [
        'Get personalized watering reminders',
        'Receive fertilizing schedules',
        'Follow seasonal care recommendations',
      ],
    },
  ],
  checkIcon: checkSvg,
  previews: [
    {
      id: 'weekly-reports',
      alt: 'Weekly plant care reports',
      src: plantStatusPreview,
    },
    {
      id: 'how-to-care',
      alt: 'How to care',
      src: growthProgressPreview,
    },
  ],
  ctaText: "Download It's Free",
  ctaHref: '/downloads',
};

export const EXTENDED_FEATURES = [
  {
    id: 'photo-diagnosis',
    title: 'Instant photo diagnosis',
    description:
      'Snap a picture of any leaf spot, wilting stem, or unusual growth. Our AI identifies the issue in seconds and gives you a clear action plan to nurse your plant back to health.',
    icon: iconCamera,
  },
  {
    id: 'symptom-analysis',
    title: 'Advanced symptom analysis',
    description:
      "Describe what you're seeing and let AI cross-reference thousands of plant conditions. Get a detailed breakdown of possible causes, severity levels, and step-by-step treatment options.",
    icon: iconSearchAnalytics,
  },
  {
    id: 'smart-scheduling',
    title: 'Smart care scheduling',
    description:
      "Receive timely reminders for watering, feeding, pruning, and repotting based on each plant's species, age, and environment for plant.",
    icon: iconClock,
  },
  {
    id: 'expert-qa',
    title: 'Live expert Q&A',
    description:
      'Have a question that needs a deeper answer? Chat with our AI plant specialist anytime to troubleshoot pests, soil issues, lighting needs.',
    icon: iconChat,
  },
];

export const FEATURES_HERO_DATA = {
  title: 'Smarter care\n for every plant',
  description:
    'Keep every plant healthy with fast AI insights and expert care advice with confidence.',
  ctaPrimary: {
    to: '/downloads',
    label: "Download It's Free",
  },
  ctaSecondary: {
    label: 'Watch demo',
  },
  socialProof: {
    avatars: [
      { id: 1, alt: 'Reviewer 1', src: avatar1 },
      { id: 2, alt: 'Reviewer 2', src: avatar2 },
      { id: 3, alt: 'Reviewer 3', src: avatar3 },
      { id: 4, alt: 'Reviewer 4', src: avatar4 },
    ],
    ratingText: '4.9/5 from 900+ reviews',
  },
  mockup: {
    alt: 'Geeio Mobile App Interface Mockup',
    phoneImg: phone5Img,
    diagnosisCard: {
      plantName: 'Snake plant',
      description:
        "Diagnose your plant. The Geeio give your result what's your plant need to serve.",
      plantImg: snakePlantImg,
    },
  },
};

export const THRIVE_FEATURES_DATA = {
  heading: 'Everything your plants\n need to thrive',
  mainCard: {
    chartImg: {
      alt: 'Plant weekly growth chart',
      src: plantStatusPreview,
    },
    title: 'Instant diagnosis',
    description:
      'Geeio turns everyday plant care into a calm, confident ritual so you always know exactly what your green friends need.',
    checklist: [
      'Identify 10,000+ plant species',
      'Spot pests and common diseases',
      'Get care advice in seconds',
      'Light and humidity guidance',
    ],
    ctaTo: '/downloads',
    ctaText: "Download It's Free",
  },
  subCards: [
    {
      title: 'Care made personal',
      description:
        'A thoughtful routine for every plant, shaped around its variety, home, and season.',
      reminderData: {
        title: 'Plant care reminder',
        subtitle: 'Set your plant care with Geeio',
        plantImg: {
          alt: 'Care reminder plant in white pot',
          src: peaceLilyImg,
        },
        reminders: [
          {
            id: 1,
            type: 'water',
            label: 'Watering',
            schedule: 'Next: Feb 25, 2027 07:00 AM',
          },
          {
            id: 2,
            type: 'fertilise',
            label: 'Fertilising',
            schedule: 'Next: Feb 29, 2027 05:00 PM',
          },
        ],
      },
    },
    {
      title: 'Instant diagnosis',
      description:
        'Keep a gentle record of every new leaf, little win, and lesson along the way.',
      trackerImg: {
        alt: 'Fertilising progress tracker',
        src: growthProgressPreview,
      },
    },
  ],
};

export const HAPPIER_FEATURES_DATA = {
  heading: 'A happier plant life, all in one place',
  cards: [
    {
      id: 'instant-diagnosis',
      title: 'Instant photo diagnosis',
      description:
        'Snap a picture of any leaf spot, wilting stem, or unusual growth. Our AI identifies the issue in seconds and gives you a clear action plan to nurse your plant back to health.',
      icon: iconCamera,
      alt: 'Instant photo diagnosis',
    },
    {
      id: 'symptom-analysis',
      title: 'Advanced symptom analysis',
      description:
        "Describe what you're seeing and let AI cross-reference thousands of plant conditions. Get a detailed breakdown of possible causes, severity levels, and step-by-step treatment options.",
      icon: iconSearchAnalytics,
      alt: 'Advanced symptom analysis',
    },
    {
      id: 'smart-scheduling',
      title: 'Smart care scheduling',
      description:
        "Receive timely reminders for watering, feeding, pruning, and repotting based on each plant's species, age, and environment for plant.",
      icon: iconClock,
      alt: 'Smart care scheduling',
    },
    {
      id: 'live-qa',
      title: 'Live expert Q&A',
      description:
        'Have a question that needs a deeper answer? Chat with our AI plant specialist anytime to troubleshoot pests, soil issues, lighting needs.',
      icon: iconChat,
      alt: 'Live expert Q&A',
    },
  ],
  testimonialCard: {
    stat: '2M+',
    statLabel: 'Plants identified & diagnosed',
    quote:
      'Finally, an app that knows the difference between my pothos and my snake plant.',
    author: 'Daniel K.',
    source: 'Review from Dapps store',
  },
};

export default {
  COMPLIANCE_BADGES,
  CORE_CAPABILITIES,
  POINT_ONCE_DATA,
  HEALTHY_CARE_DATA,
  COMPANION_ACCORDION_DATA,
  EXTENDED_FEATURES,
  FEATURES_HERO_DATA,
  THRIVE_FEATURES_DATA,
  HAPPIER_FEATURES_DATA,
};
