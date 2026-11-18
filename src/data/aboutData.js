import aboutBannerImg from '../assets/images/6a66eece0a58a12ba183cae3_d79991a97b86ea998b849de5d39675eb_about-banner.webp';
import aboutImg1 from '../assets/images/6a66eece2b116c94cb25a728_about-1.webp';
import aboutImg2 from '../assets/images/6a66eece9b55b67017f48f2e_about 2.webp';
import scannerIcon from '../assets/icons/6a670cd19f359440cf566bec_scanner 1.svg';
import stethoscopeIcon from '../assets/icons/6a670cd1900b66cceed4446d_Stethoscope.svg';
import scheduleIcon from '../assets/icons/6a670cd197ac4cd2df0a097c_schedule 1.svg';

/**
 * src/data/aboutData.js
 * Structured mock data for the Geeio About Us page
 */

export const ABOUT_HERO_DATA = {
  title: 'Our Story',
  description:
    'Our mission is to simplify plant care with fast identification, accurate diagnosis, and expert guidance powered by AI. From instant identification to personalized care plans.',
  banner: {
    image: aboutBannerImg,
    alt: 'The Geeio botanical and engineering team collaborating in an open green studio',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
};

export const ABOUT_MISSION_DATA = {
  tag: 'Our mission',
  headline: 'Empowering every plant owner to grow healthier, happier plants with AI',
  narrative:
    'We believe healthy plants should be easy to grow. Geeio delivers personalized recommendations, timely reminders, and expert guidance to help every plant flourish. Geeio empowers every plant owner with instant identification, accurate health analysis, and personalized care plans, making it easier to keep plants healthy throughout every season.',
  editorialImages: [
    {
      id: 'typing',
      src: aboutImg1,
      alt: 'Man typing on a laptop',
    },
    {
      id: 'smartphone',
      src: aboutImg2,
      alt: 'Over-the-shoulder view of hands holding smartphone',
    },
  ],
};

export const ABOUT_METRICS_DATA = [
  {
    id: 'species',
    value: '15K+',
    label: 'Plant species',
  },
  {
    id: 'accuracy',
    value: '98%',
    label: 'AI detection accuracy',
  },
  {
    id: 'diagnosed',
    value: '2M+',
    label: 'Plants identified & diagnosed',
  },
];

export const ABOUT_PILLARS_DATA = {
  title: 'AI plant care that works for every plant',
  pillars: [
    {
      id: 'identification',
      title: 'AI plant identification',
      description:
        'Identify thousands of plant species instantly with a single photo and AI-powered recognition.',
      icon: scannerIcon,
      iconAlt: 'Scanner icon',
    },
    {
      id: 'diagnosis',
      title: 'AI health diagnosis',
      description:
        'Detect diseases, pests, and nutrient deficiencies with fast, accurate AI-powered plant analysis.',
      icon: stethoscopeIcon,
      iconAlt: 'Stethoscope icon',
    },
    {
      id: 'care-plans',
      title: 'Personalised care plans',
      description:
        'Receive customized watering, lighting, fertilizing, and care schedules tailored to every plant.',
      icon: scheduleIcon,
      iconAlt: 'Schedule calendar icon',
    },
  ],
};

export default {
  hero: ABOUT_HERO_DATA,
  mission: ABOUT_MISSION_DATA,
  metrics: ABOUT_METRICS_DATA,
  pillars: ABOUT_PILLARS_DATA,
};
