import type { FramerImageKey } from '../assets/framer/manifest';
import { ltTodo, type Lang } from './index';
import { links } from './links';

/**
 * Landing page copy, ported verbatim from the live eatmatrix.com page on 2026-09-23 (typos included,
 * flagged with "LIVE TYPO" so nobody fixes them silently before Adomas confirms).
 */
const en = {
  meta: {
    title: 'EatMatrix',
    description: "Scan Food Labels Instantly and Know What's Safe to Eat.",
  },
  hero: {
    badge: 'Warning: hidden inflammation detected',
    // Words wrapped in *asterisks* render in the italic serif accent (see <Rich>).
    titleLine1: 'Scan Your *Food*.',
    titleLine2: 'Stop the *Inflamation*.', // LIVE TYPO: "Inflamation"
    body: "Topical creams can't fix internal triggers. EatMatrix instantly scans any ingredient label to detect the hidden oils and additives causing acne, puffiness, and premature aging.",
    cta: 'Start free trial',
    ctaHref: '#pricing',
    reassurance: 'Try it risk-free. Cancel anytime.',
    carouselBadge: 'Risk detected',
    carouselAlt: 'Scanning a food label in a supermarket aisle',
    carousel: ['heroCarousel2', 'heroCarousel4', 'heroCarousel6'] as FramerImageKey[],
  },
  stats: {
    scans: { value: '93,402+', label: 'Scans performed' },
    others: ['"Better than Botox"', '100% Risk-free', '4.9/5 Rating'],
  },
  why: {
    title: 'Why Skincare Fails',
    subtitle: "You can’t scrub away a problem you’re feeding.",
    triggerTitle: 'The Trigger',
    blocksTitle: 'EatMatrix Blocks It',
    resultTitle: 'The Result: Inflammation Stopped',
    stepsTitle: 'With EatMatrix',
    steps: ['You scan the label', 'Trigger Detected', "You don't eat it", 'Skin stays clear'],
    closing: 'Scan the trigger. Save your skin.',
    cta: 'Scan my food',
    ctaHref: '#pricing',
  },
  proof: {
    aisleAlt: 'Scanning products in a supermarket',
    quoteAlt: 'eatwellwithjens: the app that every influencer and celebrity chef in LA uses to get rid of the junk',
  },
  comparison: {
    title: 'Target the *Source*',
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
    cta: 'Start free trial',
    ctaHref: '#pricing',
  },
  ingredients: {
    titleLine1: '*The "Healthy"*',
    titleLine2: 'Ingredients We Help You Avoid',
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
          { name: 'Titanium Dioxide', effect: '' },
          { name: 'BHT', effect: '' },
          { name: 'Polysorbate 80', effect: '' },
        ],
      },
    ],
    moreCount: '+ 14,988 more',
    closing: "You can't memorize them all. But EatMatrix can detect them instantly.",
  },
  testimonials: {
    titleLine1: 'Real Women.',
    titleLine2: '*Real Clear Skin.*',
    subtitle: 'No filters. No expensive treatments. Just removing the hidden triggers.',
    items: [
      {
        found: 'Found: Rapeseed Oil in "Oat Milk"',
        quote: '"I cut it out and found another milk substitute. My cystic acne vanished in 21 days."',
        name: '— Sarah B, 34',
        image: 'testimonialSarah' as FramerImageKey,
      },
      {
        found: 'Found: High Sodium "Diet" Crackers',
        quote: '"My face shape completely changed. The inflammation is just gone."',
        name: '— Elena K, 31',
        image: 'testimonialElena' as FramerImageKey,
      },
      {
        found: 'Found: Hidden Sugars in "Keto" Bars',
        quote: '"I thought I just looked old. Turns out, it was sugar inflammation."',
        name: '— Michelle O, 54',
        image: 'testimonialMichelle' as FramerImageKey,
      },
    ],
  },
  howItWorks: {
    title: 'Stop Inflammation in 3 Seconds',
    subtitleLines: ["You don't need a strict diet.", 'You just need a filter.'],
    // **Double asterisks** render bold (see <Rich>).
    steps: [
      { label: 'Step 1', title: 'Scan', body: 'Point your camera at **any ingredient label. No barcode needed.** We read 200+ languages instantly.', image: 'stepScan' as FramerImageKey },
      { label: 'Step 2', title: 'Detect', body: 'EatMatrix identifies the **specific Inflammatory Agents** (seed oils, hidden sugars, additives) that trigger your skin and gut issues.', image: 'stepDetect' as FramerImageKey },
      { label: 'Step 3', title: 'Protect', body: '**Avoid the trigger.** Choose a cleaner alternative. Watch your skin clear up as the inflammation fades.', image: 'stepProtect' as FramerImageKey },
    ],
    closing: 'It’s like having a Dermatologist & Nutritionist in your pocket.',
    cta: 'Start scanning',
    ctaHref: '#pricing',
  },
  pricing: {
    titleLine1: 'Try EatMatrix',
    titleLine2: 'Risk-Free',
    subtitle: 'Join 93,000+ women reclaiming their skin. Cancel anytime.',
    perMonth: '/ month',
    plans: [
      {
        badge: 'Best deal (save 43%)',
        name: 'Yearly access',
        // TODO(adomas): live page says $2.00/month but bills $48/year ($4.00/month). Ported as-is.
        price: '$2.00',
        billing: 'Billed as $48 per year',
        features: ['Unlimited Ingredient Scans', 'Personalized Inflammation Alerts', 'Free Trial Included'],
        missing: [] as string[],
        cta: 'Start 14-day free trial',
        ctaHref: links.stripeYearly,
        note: "You won't be charged until Day 14",
        highlighted: true,
      },
      {
        badge: '',
        name: 'Quarterly access',
        price: '$7.00',
        billing: 'Billed as $21 every 3 months',
        features: ['Unlimited Ingredient Scans', 'Personalized Inflammation Alerts'],
        missing: ['No Free Trial'],
        cta: 'Select quarterly',
        ctaHref: links.stripeQuarterly,
        note: '',
        highlighted: false,
      },
    ],
    guaranteeTitle: '100% RISK-FREE GUARANTEE',
    guaranteeBody: "If you don't see clearer skin and less bloating in your first 14 days, simply cancel in the app settings. You won't be charged a penny.",
  },
  researchDesk: {
    title: 'From the *Research Desk*',
    subtitle: 'Guides on additives, label reading and food scanner apps. Every claim cited.',
    all: 'All articles',
  },
  faq: {
    title: 'Frequently Asked Questions',
    // Answers as shown on eatmatrix.com on 2026-09-23 (they replaced the earlier Lorem Ipsum placeholders).
    items: [
      {
        q: 'Is this a strict diet? Will I have to starve?',
        a: 'No. EatMatrix is a filter, not a diet: it shows what is in a product so you can pick a cleaner alternative in the same aisle.',
      },
      {
        q: 'Does it work without barcodes? I buy fresh food.',
        a: 'Yes. EatMatrix reads the ingredient list itself with your camera, no barcode needed, and recognizes unpackaged products too.',
      },
      {
        q: "I'm going through menopause. Will this help?",
        a: 'EatMatrix shows which additives and ingredients are in your food and what regulators and research say about them. It is information to choose with, not a medical treatment.',
      },
      {
        q: 'How is this different from Yuka or MyFitnessPal?',
        // TODO(adomas): says "10+ label languages" while the steps section says "200+ languages". Both are live copy.
        a: 'EatMatrix reads the label without a barcode, rates every additive against EFSA and FDA assessments, reads 10+ label languages, and personalizes alerts to your allergies and diet.',
      },
      {
        q: 'How easy is it to cancel the trial?',
        a: 'Subscriptions are managed by Apple: Settings → your name → Subscriptions → EatMatrix → Cancel. Cancel before day 14 and you are not charged.',
      },
    ],
  },
  finalCta: {
    title: 'Ready to stop the *inflammation?*',
    body: 'You spend $200 on serums, but you might be eating inflammatory triggers for breakfast.',
    cta: 'Start 14-day free trial',
    ctaHref: '#pricing',
  },
};

export type LandingCopy = typeof en;

/** Replaces every string in `value` with an ltTodo() marker, keeping hrefs and image keys intact. */
function todoFrom<T>(value: T, key = ''): T {
  if (typeof value === 'string') {
    const keep = /href$|^image$|^carousel$/i.test(key) || value === '' || value.startsWith('http') || value.startsWith('#');
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
