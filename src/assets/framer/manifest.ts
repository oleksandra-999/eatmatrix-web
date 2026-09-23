/**
 * Images on the live Framer page, in document order (2026-09-23).
 * Run `node scripts/fetch-framer-assets.mjs` to download them into this folder; <FramerImage> uses the local
 * file when it exists and a labelled placeholder when it doesn't.
 */
export const framerImages = {
  heroCarousel1: { file: '24X5gexLtEJ3GHK8zItQUKPIE7E.png', width: 724, height: 752 },
  heroCarousel2: { file: 'reDpp1G9lwQyIgvWeamwzEI49xU.png', width: 724, height: 752 },
  heroCarousel3: { file: 'uuuZ2EOCFQ2iNKR8mtaTvBvSc.png', width: 692, height: 720 },
  heroCarousel4: { file: 'h94T8H4hOkRQcRT7nNQTripR1Us.png', width: 692, height: 720 },
  heroCarousel5: { file: 'eXx1B8vBcQ2pduOytZmA49tYg2U.png', width: 692, height: 720 },
  heroCarousel6: { file: 'KRxbVOttG9ajxUm2OWOg340nDI.png', width: 692, height: 720 },
  whyIcon: { file: 'WsQ9dzNTbKyHfRheO1mzYQROMqU.png', width: 240, height: 240 },
  whySmall: { file: '0bogoEgLgbfEmPxyNEXws8EkO4.png', width: 224, height: 356 },
  whyTrigger: { file: 'M8hSbIGIwmB2jbkfrIwJQdfn0g.png', width: 1126, height: 1820 },
  blocksIt: { file: 'M3K1jvnAeC0WDDdHV2Mbe3rij98.png', width: 424, height: 204 },
  theTrigger: { file: 'oxl8WMf8esLWF2O6N5rfJpnTeM.png', width: 488, height: 712 },
  result: { file: 'QcSoQ6pIBbIpasMaVfPPZkbWbNk.png', width: 1576, height: 2304 },
  comparisonHeader: { file: 'MCcQs6uJAkvernHP7kVM2T9l2o.png', width: 1456, height: 352 },
  comparisonSkincare: { file: '5JsyQmBppT8B0yLfCH8S1LzbI.png', width: 1344, height: 628 },
  comparisonApp: { file: 'nD304R0htGzDbU4dkTRf209cMZU.png', width: 1256, height: 588 },
  benefits: { file: 'xiW0iNp3fTyi2IsvgXf6fWwpH4.png', width: 1576, height: 2304 },
  testimonialSarah: { file: 'swDe6Rdeck59MpyMhWVAqLbym4.jpg', width: 628, height: 452 },
  testimonialElena: { file: 'JA3MoyONTYehTJ58AJZcQUV525o.jpg', width: 628, height: 452 },
  testimonialMichelle: { file: 'bH5GBqZEIPOQQH4bTM6Fj8pDgRw.jpg', width: 628, height: 452 },
  stepScan: { file: 'bZV2F4OJlZFV1XW60nChinUhulY.png', width: 628, height: 518 },
  stepDetect: { file: 'ENMZpSNKCV0YZLOQJB5kIqVyIMg.png', width: 628, height: 518 },
  stepProtect: { file: '82OUKrd7iq1GIEKZJ8P4YMIknRw.png', width: 628, height: 518 },
  footerWordmark: { file: 'RFglpFf45JizSbmPWFjYkYuysA.png', width: 23896, height: 2508 },
  ogImage: { file: 'd1H6bGGts5KM8IDKoEuOUY7Fmk.png', width: 1200, height: 630 },
} as const;

export type FramerImageKey = keyof typeof framerImages;
export const FRAMER_CDN = 'https://framerusercontent.com/images/';
