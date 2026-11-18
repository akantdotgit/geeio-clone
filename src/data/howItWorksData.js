/**
 * src/data/howItWorksData.js
 * 3-step plant onboarding and care workflow
 *
 * Source: export/home.html and export/downloads.html
 */

import icon21 from '../assets/icons/6a65e82b151830893c5cce90_icon-21.svg';
import icon22 from '../assets/icons/6a65e82b7d95a8a4846a1e22_icon-22.svg';
import icon23 from '../assets/icons/6a65e82b38ad0c6d6d137bb1_icon-23.svg';

export const HOW_IT_WORKS_DATA = {
  title: 'Smarter plant care in three simple steps',
  mockup: {
    alt: 'Geeio Plant Care App Interface',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRN2q_XIDM-2JjOUIilX2-v8yLomK46M8TcD2Yo7e6a_Ift1vNX7A27iQUlTSjZkcRPHufgp3DW53qjV4pvbj5cb-qEzzqmWS2-Wdvfmz6ASM_poHM7ZqjaV7ux0SnJhXNa7RyPWaFXnf7lnWXOPYT174Gcj-PjCohWIwzoa24nFt3Vzq2clp2uduZTpuWGfnrPrSJsKmHoQWKMBMWKoeNFuKnf1Oq5BH1CfE32NsUncDldt9jU9eDtmdypgEw3X_VR20',
  },
  steps: [
    {
      step: 1,
      title: 'Scan your plant',
      description:
        'Snap a photo of your plant. AI instantly identifies the species and understands its unique needs.',
      icon: icon21,
      iconName: 'icon-21',
    },
    {
      step: 2,
      title: 'Detect problems',
      description:
        "Capture any damaged leaf or unusual spot. AI finds the cause and explains what's affecting your plant.",
      icon: icon22,
      iconName: 'icon-22',
    },
    {
      step: 3,
      title: 'Get a care plan',
      description:
        'Receive a personalized care plan with watering, light, nutrition, and recovery tips tailored to your plant.',
      icon: icon23,
      iconName: 'icon-23',
    },
  ],
};

export const HOW_IT_WORKS_STEPS = HOW_IT_WORKS_DATA.steps;

export default HOW_IT_WORKS_STEPS;
