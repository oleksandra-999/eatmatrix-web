import type { FramerImageKey } from '../assets/framer/manifest';
import { ltTodo, type Lang } from './index';
import { links } from './links';

/**
 * Landing page copy, ported verbatim from the live Framer page on 2026-09-23 (typos included,
 * flagged with "LIVE TYPO" so nobody fixes them silently before Adomas confirms).
 */
const en = {
  meta: {
    title: 'EatMatrix',
    description: "Scan Food Labels Instantly and Know What's Safe to Eat.",
  },
  nav: { cta: 'Get started', ctaHref: '#pricing' },
  hero: {
    titleLine1: 'Scan Your Food.',
    titleLine2: 'Stop the Inflamation.', // LIVE TYPO: "Inflamation"
    body: "Topical creams can't fix internal triggers. EatMatrix instantly scans any ingredient label to detect the hidden oils and additives causing acne, puffiness, and premature aging.",
    cta: 'START FREE TRIAL',
    ctaHref: '#pricing',
    reassurance: 'Try it risk-free. Cancel anytime.',
    carouselBadge: 'RISK DETECTED',
    carousel: [
      'heroCarousel1',
      'heroCarousel2',
      'heroCarousel3',
      'heroCarousel4',
      'heroCarousel5',
      'heroCarousel6',
    ] as FramerImageKey[],
  },
  stats: [
    { value: '93,402+', label: 'SCANS PERFORMED' },
    { value: '"BETTER THAN BOTOX"', label: '' },
    { value: '100%', label: 'RISK-FREE' },
    { value: '4.9/5', label: 'RATING' },
  ],
  why: {
    title: 'Why Skincare Fails',
    subtitle: "You can't scrub away a problem you're feeding.",
    blocksTitle: 'EatMatrix Blocks It',
    triggerTitle: 'The Trigger',
    resultTitle: 'The Result: Inflammation Stopped',
    stepsTitle: 'With EatMatrix',
    steps: ['You scan the label', 'Trigger Detected', "You don't eat it", 'Skin stays clear'],
    closing: 'Scan the trigger. Save your skin.',
    cta: 'SCAN MY FOOD',
    ctaHref: '#pricing',
  },
  comparison: {
    eyebrow: 'Target the Source',
    skincare: {
      title: 'Expensive Scincare', // LIVE TYPO: "Scincare"
      points: ['Treats the symptom (The Pimple)', 'Costs $200/month', 'Works after damage is done', 'Guesswork'],
    },
    app: {
      title: 'EatMatrix App',
      points: ['Blocks the cause (The Trigger)', 'Costs less than a coffee', 'Works before you eat', 'Science-Backed Clarity'],
    },
    closing: 'EatMatrix is the only skincare that works before the damage is done.',
    reassurance: 'Try it risk-free. Cancel anytime.',
    cta: 'START FREE TRIAL',
    ctaHref: '#pricing',
  },
  ingredients: {
    title: 'The "Healthy" Ingredients We Help You Avoid',
    intro: "We track over 15,000+ inflammatory additives hiding in your food. Here are just a few you're likely eating today:",
    groups: [
      {
        title: 'The "Hormone Disruptors"',
        items: [
          { name: 'Rapeseed Oil', effect: 'Inflammation' },
          { name: 'Soybean Oil', effect: 'Omega-6 Overload' },
          { name: 'BPA Linings', effect: 'Estrogen Mimic' },
          { name: 'Phthalates', effect: 'Hormone Blocker' },
        ],
      },
      {
        title: 'The "Gut Destroyers"',
        items: [
          { name: 'Carrageenan', effect: 'Gut Leaking' },
          { name: 'Maltodextrin', effect: 'Bacteria Killer' },
          { name: 'Guar Gum', effect: 'Bloating' },
          { name: 'Sucralose', effect: 'Microbiome Damage' },
        ],
      },
      {
        title: 'The "Skin Agers"',
        items: [
          { name: 'High Fructose Corn Syrup', effect: 'Wrinkles' },
          { name: 'Red 40 / Yellow 5', effect: 'Allergic Rashes' },
          { name: 'Sodium Benzoate', effect: 'Cell Stress' },
          { name: 'Nitrates', effect: 'Collagen Breakdown' },
        ],
      },
    ],
    more: ['Titanium Dioxide', 'BHT', 'Polysorbate 80'],
    moreCount: '+ 14,988 more',
    closing: "You can't memorize them all. But EatMatrix can detect them instantly.",
  },
  testimonials: {
    titleLine1: 'Real Women.',
    titleLine2: 'Real Clear Skin.',
    subtitle: 'No filters. No expensive treatments. Just removing the hidden triggers.',
    items: [
      // LIVE TYPO: a word is missing after "I" on the live site.
      { quote: 'I it out and found another milk substitute. My cystic acne vanished in 21 days.', name: 'Sarah B, 34', image: 'testimonialSarah' as FramerImageKey },
      { quote: 'My face shape completely changed. The inflammation is just gone.', name: 'Elena K, 31', image: 'testimonialElena' as FramerImageKey },
      { quote: 'I thought I just looked old. Turns out, it was sugar inflammation.', name: 'Michelle O, 54', image: 'testimonialMichelle' as FramerImageKey },
    ],
  },
  howItWorks: {
    title: 'Stop Inflammation in 3 Seconds',
    subtitle: "You don't need a strict diet. You just need a filter.",
    steps: [
      { label: 'Step 1', title: 'Scan', body: 'Point your camera at any ingredient label. No barcode needed. We read 200+ languages instantly.', image: 'stepScan' as FramerImageKey },
      { label: 'Step 2', title: 'Detect', body: 'EatMatrix identifies the specific Inflammatory Agents (seed oils, hidden sugars, additives) that trigger your skin and gut issues.', image: 'stepDetect' as FramerImageKey },
      { label: 'Step 3', title: 'Protect', body: 'Avoid the trigger. Choose a cleaner alternative. Watch your skin clear up as the inflammation fades.', image: 'stepProtect' as FramerImageKey },
    ],
    closing: "It's like having a Dermatologist & Nutritionist in your pocket.",
    cta: 'START SCANNING',
    ctaHref: '#pricing',
  },
  pricing: {
    title: 'Try EatMatrix Risk-Free',
    subtitle: 'Join 93,000+ women reclaiming their skin. Cancel anytime.',
    perMonth: '/ month',
    plans: [
      {
        badge: 'BEST DEAL (SAVE 43%)',
        name: 'YEARLY ACCESS',
        // TODO(adomas): live page says $2.00/month but bills $48/year ($4.00/month). Ported as-is.
        price: '$2.00',
        billing: 'Billed as $48 per year',
        features: ['Unlimited Ingredient Scans', 'Personalized Inflammation Alerts', 'Free Trial Included'],
        cta: 'START 14-DAY FREE TRIAL',
        ctaHref: links.stripeYearly,
        note: "You won't be charged until Day 14",
        highlighted: true,
      },
      {
        badge: '',
        name: 'QUARTERLY ACCESS',
        price: '$7.00',
        billing: 'Billed as $21 every 3 months',
        features: ['Unlimited Ingredient Scans', 'Personalized Inflammation Alerts', 'No Free Trial'],
        cta: 'SELECT QUARTERLY',
        ctaHref: links.stripeQuarterly,
        note: '',
        highlighted: false,
      },
    ],
    guaranteeTitle: '100% RISK-FREE GUARANTEE',
    guaranteeBody: "If you don't see clearer skin and less bloating in your first 14 days, simply cancel in the app settings. You won't be charged a penny.",
  },
  faq: {
    title: 'Frequently Asked Questions',
    // The live answers are Lorem Ipsum; real answers are needed from Adomas before launch.
    items: [
      { q: 'Is this a strict diet? Will I have to starve?', a: '' },
      { q: 'Does it work without barcodes? I buy fresh food.', a: '' },
      { q: "I'm going through menopause. Will this help?", a: '' },
      { q: 'How is this different from Yuka or MyFitnessPal?', a: '' },
      { q: 'How easy is it to cancel the trial?', a: '' },
    ],
    missingAnswer: 'TODO: answer needed (the live site shows placeholder text here).',
  },
  finalCta: {
    title: 'Ready to stop the inflammation?',
    body: 'You spend $200 on serums, but you might be eating inflammatory triggers for breakfast.',
    cta: 'START 14-DAY FREE TRIAL',
    ctaHref: '#pricing',
  },
  footer: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    appStore: 'Download on the App Store',
    instagram: 'Instagram',
    facebook: 'Facebook',
  },
};

export type LandingCopy = typeof en;

/** Replaces every string in `value` with an ltTodo() marker, keeping hrefs and image keys intact. */
function todoFrom<T>(value: T, key = ''): T {
  if (typeof value === 'string') {
    const keep = /href|image|carousel/i.test(key) || value === '' || value.startsWith('http') || value.startsWith('#');
    return (keep ? value : ltTodo(value)) as T;
  }
  if (Array.isArray(value)) return value.map((v) => todoFrom(v, key)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, todoFrom(v, k)])) as T;
  }
  return value;
}

// No Lithuanian copy exists yet. A translator replaces this line with a full `LandingCopy` object;
// TypeScript then enforces that no string is missing. Never machine-translate.
const lt: LandingCopy = todoFrom(en);

export const landing: Record<Lang, LandingCopy> = { en, lt };
