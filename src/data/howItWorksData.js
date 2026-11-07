/**
 * src/data/howItWorksData.js
 * 3-step plant onboarding and care workflow
 *
 * Source: export/home.html and export/downloads.html
 */

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Scan your plant',
    description:
      'Snap a photo of your plant. AI instantly identifies the species and understands its unique needs.',
    icon: 'camera',
  },
  {
    step: 2,
    title: 'Detect problems',
    description:
      "Capture any damaged leaf or unusual spot. AI finds the cause and explains what's affecting your plant.",
    icon: 'alert-circle',
  },
  {
    step: 3,
    title: 'Get a care plan',
    description:
      'Receive tailored watering, light, and feeding schedules to help your plant thrive consistently.',
    icon: 'calendar-check',
  },
];

export default HOW_IT_WORKS_STEPS;
