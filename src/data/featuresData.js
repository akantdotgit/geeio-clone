/**
 * src/data/featuresData.js
 * Feature cards, capabilities, and compliance certifications
 *
 * Source: export/home.html and export/features.html
 */

export const COMPLIANCE_BADGES = [
  { id: 'iso-27001', label: 'ISO 27001' },
  { id: 'soc-2', label: 'SOC 2 Type II' },
  { id: 'gdpr', label: 'GDPR' },
];

export const CORE_CAPABILITIES = [
  {
    id: 'unlimited-reminders',
    title: 'Unlimited plant care reminders',
    description:
      "Upload a photo or describe your plant's symptoms, and our AI instantly identifies problems, explains the cause, and recommends the best treatment and care plan.",
    icon: 'bell',
  },
  {
    id: 'advance-checker',
    title: 'Advance symptoms checker',
    description:
      'Get an AI-powered symptom analysis that detects plant diseases, pests, and nutrient deficiencies, then recommends the best treatment and long-term care.',
    icon: 'search',
  },
  {
    id: 'care-reminders',
    title: 'Plant care reminders',
    description:
      'Never miss an important care task again. Get AI-powered reminders for watering, fertilizing, pruning, repotting, and seasonal maintenance, all personalized to your plant.',
    icon: 'calendar',
  },
  {
    id: 'ask-ai',
    title: 'Ask AI for any plant problem',
    description:
      'Upload a photo to instantly identify plant issues, detect diseases and pests, and receive personalized treatment with expert care recommendations.',
    icon: 'sparkles',
  },
];

export const EXTENDED_FEATURES = [
  {
    id: 'photo-diagnosis',
    title: 'Instant photo diagnosis',
    description:
      'Snap a picture of any leaf spot, wilting stem, or unusual growth. Our AI identifies the issue in seconds and gives you a clear action plan to nurse your plant back to health.',
    icon: 'camera',
  },
  {
    id: 'symptom-analysis',
    title: 'Advanced symptom analysis',
    description:
      "Describe what you're seeing and let AI cross-reference thousands of plant conditions. Get a detailed breakdown of possible causes, severity levels, and step-by-step treatment options.",
    icon: 'search-analytics',
  },
  {
    id: 'smart-scheduling',
    title: 'Smart care scheduling',
    description:
      "Receive timely reminders for watering, feeding, pruning, and repotting based on each plant's species, age, and environment for plant.",
    icon: 'clock',
  },
  {
    id: 'expert-qa',
    title: 'Live expert Q&A',
    description:
      'Have a question that needs a deeper answer? Chat with our AI plant specialist anytime to troubleshoot pests, soil issues, lighting needs.',
    icon: 'chat',
  },
];

export default CORE_CAPABILITIES;
