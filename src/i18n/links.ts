// External links used on the landing page, copied from the live Framer site (2026-09-23).
export const links = {
  // TODO: switch to /privacy-policy and /terms on this site once Adomas sends the authoritative text.
  privacy: 'https://app.eatmatrix.com/privacy-policy',
  terms: 'https://app.eatmatrix.com/terms-of-service',
  appStore: 'https://apps.apple.com/app/id6751504815',
  // Live site sends checkout to Stripe payment links. The quarterly link on the live page also carried a
  // per-visitor client_reference_id, which is dropped here. Confirm with Adomas whether web checkout stays.
  stripeYearly: 'https://buy.stripe.com/aFaeVd8IO9047dK9NEdEU39',
  stripeQuarterly: 'https://buy.stripe.com/28E7sL5wCfos1TqaRIdEU2B',
  // TODO(adomas): both profiles are carried over from the live site; the Instagram handle is maxhuman.ai.
  instagram: 'https://www.instagram.com/maxhuman.ai',
  facebook: 'https://www.facebook.com/profile.php?id=61561604709910',
} as const;
