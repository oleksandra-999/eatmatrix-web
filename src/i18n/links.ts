// External and cross-page links, copied from the live eatmatrix.com site (2026-09-23).
export const links = {
  privacy: '/privacy-policy',
  terms: '/terms',
  support: '/support',
  supportEmail: 'support@eatmatrix.com',
  appStore: 'https://apps.apple.com/app/id6751504815',
  // Live site sends checkout to Stripe payment links. Confirm with Adomas whether web checkout stays.
  stripeYearly: 'https://buy.stripe.com/aFaeVd8IO9047dK9NEdEU39',
  stripeQuarterly: 'https://buy.stripe.com/28E7sL5wCfos1TqaRIdEU2B',
  // TODO(adomas): both profiles are carried over from the live site; the Instagram handle is maxhuman.ai.
  instagram: 'https://www.instagram.com/maxhuman.ai',
  facebook: 'https://www.facebook.com/profile.php?id=61561604709910',
} as const;
