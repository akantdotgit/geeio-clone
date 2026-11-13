import swiftLogo from '../assets/icons/6a651d527323c0dbae66fcc7_0a2388f52da0d2747057ce23ee65ec81_brand-logo-3.svg';
import sparkleLogo from '../assets/icons/6a651d536379d772b76a15b2_5c1a8be1d004b05ef2b1af9b90fdccd8_brand-logo-4.svg';
import pulseLogo from '../assets/icons/6a651d52adb4c1ef82542720_9c4343b03e5bfb526ac826e6c8dd6f6b_brand-logo-5.svg';
import zenzapLogo from '../assets/icons/6a651d5333086439cf0d2abd_37e04c4eea9e93d1f9e2e10d600cc3a3_brand-logo-1.svg';
import lumLabsLogo from '../assets/icons/6a651d53db0d110395cfa022_dae5f72d401ea5572dc871c5452659a4_brand-logo-2.svg';

/**
 * src/data/featuredData.js
 * Featured partner & publication brand logos for the brand ticker
 *
 * Source: export/home.html (BRAND LOGO TICKER)
 */

export const FEATURED_BRANDS = [
  {
    id: 'swift',
    name: 'Swift',
    alt: 'Swift',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBobANVz9aNA7Ov-YigRvgH-Nrue3tVj_644GdQSzNizK7V6eD4rLOaPSABSy41HbDd5AnIys39Im_rQBohdRQVqA3qcKL8Up4NS5hxdarSripadIsAsNu7K8d6PxYwL4N9inKsQiLIkzShGmvzYKDEz1jQHRk42fMChld5NJ63RdWPjOeXnTLE-mFhUEa34Yad0uaXA21oMQ-PxqLo8FFo874k9jECjsIl0-tCe1RSxQWClVEtpQvBNh4DF0Qj6uoFzO4',
    fallbackSrc: swiftLogo,
  },
  {
    id: 'sparkle',
    name: 'Sparkle',
    alt: 'Sparkle',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlNRIwAz3j2F-5H7Y8-TQK-TFqKdVl7AdWofFiYs8zh8SDZAu9rl2qThfiP5WdejbET6MzaY-rzMErI5ss9YjPMAPa5GqyrwJ8Vc_GZYZRFNDn5Me6H4lIVjUl9vkePtrnMPdCbv1zFWy0N4kOLRmKHObEX-9Y8d4VPeDVZ25c1AW0Unt3lSn-MOWm-7ZRk44az-pxDgd7j7gJR9_MjiZBr2dbiAaZCd0g9j1v2ZbJGMMPUBFMBoeIOdk5mK-UDuEQZLw',
    fallbackSrc: sparkleLogo,
  },
  {
    id: 'pulse',
    name: 'Pulse',
    alt: 'Pulse',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd0GxMGruz_lQappKyHz9-xVN7PLZwVRhShRLxVuzc-f0kTz7PF9GyVYBkWrbOvNrDaTQJ8bGx-GSW8N69OaLm0xZmlygVWowcxNEWREyNANItVfqItnY4fhIKdsISWb2C9a3FBk6StvnuT_dQSMvqKS3I27sLBT0QtzUnFXVWzptgboDZPuK_65_FBAPM_BSHGvDdtWefozELaPKx098rIH8r6FiWqKNec63UoVjLTZvRGEmc_H9eZW3IblzbzYdVsUc',
    fallbackSrc: pulseLogo,
  },
  {
    id: 'zenzap',
    name: 'ZenZap',
    alt: 'ZenZap',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoNgbOkfhz1ZxoVDPTpvlZslz8m-m4FhH65uKP-iYGTZ7PRXljeW3HFH512raMbUbZIMxnotUDVhV0hysNsT6_5sb1rFKhJ_ACFBiJIOt0kRUsGtjlct8bnUV7wixygtaf1pf0y6C1LumH0SEm1I_cpl_QTu-YdRWjbsCClJYqg056ZcCUy_62gSHNarM55CYnU2_fCWFLyzEci1W9-3UwCLsaMleS613Dwuy7mFN20JBR5hJrE0U1Xi3AUGbgFY2tatw',
    fallbackSrc: zenzapLogo,
  },
  {
    id: 'lum-labs',
    name: 'Lum Labs',
    alt: 'Lum Labs',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-nXdkmDpE1AuEQC5Ap4IHqGx1p1GmzehFMVEBG2htRL6oSG6D7hIxPrjldE4ArhGdWvzIxwrHzbYFPd1aQWtX-hfPadrYBoqPz7KtSVbo7QgWUM-FFO-kn0oFwwtoUx6_zPGhqldL0MIDDJCzoHVRhFzfb18hxxpPE1oRrz-lPAx3geiRmPCzUAN1xShCO0sz4k-kYQcmHefgDyM-p_PUBthgt7S50D_xUfYzCY1UdfbQwbUFvvdeXho1NRnymfPhcLk',
    fallbackSrc: lumLabsLogo,
  },
];

export default FEATURED_BRANDS;
