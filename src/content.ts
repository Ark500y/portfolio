/**
 * Portfolio content for ARK — Creative Engineer & Systems Architect.
 * Blends lunar-grade precision, cinematic motion, and high-performance digital craft.
 */

const b = import.meta.env.BASE_URL.replace(/\/$/, '');

export const brand = {
  name: 'ARK',
  wordmark: 'ARK',
  role: 'Creative Engineer & Full-Stack Architect',
  email: 'ark203777@gmail.com',
  phone: '+92 314 1495630',
  phoneRaw: '+923141495630',
  whatsapp: 'https://wa.me/923141495630',
};

export const nav = [
  {label: 'Projects', href: '#log'},
  {label: 'Trajectory', href: '#trajectory'},
  {label: 'Capabilities', href: '#missions'},
  {label: 'Contact', href: '#reserve'},
];

export const hero = {
  title: 'ARK',
  kicker: 'Creative Engineer & Systems Architect · Portfolio',
  site: 'Base Tranquillitatis · 0.67°N 23.47°E · Earth / Space',
};

export const intro = {
  eyebrow: 'Selected Work',
  heading: 'Building software that leaves an impact.',
  body: 'Bridging architectural rigor, real-time graphics, and high-throughput systems. Every project built with space-grade precision, frame by frame.',
};

export const log = [
  {
    tag: 'Case 01',
    title: 'Nova Engine',
    body: 'Ultra-low latency telemetry and distributed compute engine built for real-time mission-critical applications.',
    image: `${b}/media/cards/m1-launch.webp`,
  },
  {
    tag: 'Case 02',
    title: 'Orbital Spatial UI',
    body: 'Next-generation web experience with GPU-accelerated shaders, smooth-scrolled physics, and tactile interaction.',
    image: `${b}/media/cards/m2-orbit.webp`,
  },
  {
    tag: 'Case 03',
    title: 'Tranquillity Cloud',
    body: 'Autonomous edge infrastructure and fault-tolerant orchestration platform supporting 10M+ daily events.',
    image: `${b}/media/cards/m3-base.webp`,
  },
  {
    tag: 'Case 04',
    title: 'Pioneer Protocol',
    body: 'Zero-knowledge verification and immutable registry architecture crafted with end-to-end cryptographic integrity.',
    image: `${b}/media/cards/m4-walk.webp`,
  },
];

/** Legs of the development trajectory, in drawing order. */
export const trajectory = {
  eyebrow: 'Engineering Trajectory',
  heading: '384,400 km of code, systems, and craft.',
  legs: [
    {
      day: 'Phase 01',
      title: 'Architecture & Foundations',
      body: 'Domain modeling, database topology, and resilient distributed foundations engineered for zero single points of failure.',
    },
    {
      day: 'Phase 02',
      title: 'High-Velocity Execution',
      body: 'Full-stack engineering sprint with zero technical debt, sub-millisecond response curves, and automated CI/CD pipelines.',
    },
    {
      day: 'Phase 03',
      title: 'Interface & Polish',
      body: 'Cinematic interaction design, responsive micro-animations, accessible telemetry, and sustained 60+ FPS fluid motion.',
    },
    {
      day: 'Phase 04',
      title: 'Production Deployment',
      body: 'Global edge distribution, observability monitoring, and battle-tested reliability from launch to scale.',
    },
  ],
};

export const missions = {
  eyebrow: 'Capabilities',
  heading: 'Three ways to collaborate.',
  note: 'Custom scopes available upon request.',
  items: [
    {
      name: 'Sprint',
      days: 7,
      lines: ['Full-stack rapid MVP or prototype', 'Architecture audit & performance tune', 'Production-ready code & docs'],
      cta: 'Book a sprint',
    },
    {
      name: 'Product Build',
      days: 14,
      lines: ['End-to-end custom web application', 'Cinematic motion & design system', 'Zero-downtime deployment pipeline'],
      cta: 'Commission a build',
      featured: true,
    },
    {
      name: 'Residency',
      days: 30,
      lines: ['Embedded fractional lead engineer', 'High-complexity systems refactor', 'Core protocol architecture & delivery'],
      cta: 'Inquire for residency',
    },
  ],
};

export const reserve = {
  eyebrow: 'Initiate Contact',
  heading: 'Put your project on the manifest.',
  body: 'Looking for a standout digital flagship, high-performance architecture, or creative web engineering? Tell me about your timeline and vision.',
  /** Illustrative launch window for the countdown (the Apollo 11 anniversary). */
  window: '2031-07-20T20:17:00Z',
  windowLabel: 'Next project availability window',
};
