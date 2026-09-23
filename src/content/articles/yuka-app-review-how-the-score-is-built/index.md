---
title: "Yuka App Review: How the Score Is Built"
seoTitle: "Yuka App Review: Score Breakdown vs EatMatrix"
description: "Yuka scores products on a 60/30/10 nutrition, additive and organic formula. See how that works, what backs it, and how it compares to EatMatrix."
date: 2026-09-23T14:17:40.172Z
lang: en
tags: []
cover: ./cover.webp
readingTime: 7
featured: false
tldr: "Yuka turns a barcode scan into a single 0 to 100 score built from Nutri-Score (60 percent), an additive risk tier (30 percent) and an organic bonus (10 percent), with a hard cap of 49 for any high-risk additive. EatMatrix skips the blended number and reads a photographed label directly, linking each additive to its own EFSA, FDA or WHO/JECFA assessment instead."
takeaways:
  - "Yuka's score is 60 percent Nutri-Score, 30 percent additive risk tier, 10 percent organic bonus"
  - "A single high-risk additive caps Yuka's score at 49 out of 100 regardless of nutrition"
  - "Nutri-Score's own validation research still calls its product-level validity undetermined"
  - "EatMatrix reads a photographed label with no barcode required and no blended score"
  - "EatMatrix ties each additive verdict to its own EFSA, FDA or WHO/JECFA source"
faq:
  - q: "How does Yuka calculate its score?"
    a: "Yuka blends three weighted inputs into one 0 to 100 number: nutritional quality using Nutri-Score at 60 percent, additive risk tiers at 30 percent, and organic status at 10 percent."
  - q: "Is Yuka's score scientifically validated?"
    a: "Partly. Its additive risk tiers draw on EFSA and IARC assessments, but 60 percent of the score rests on Nutri-Score, and a review of Nutri-Score's validation process found its ability to rank individual products' healthfulness is still undetermined."
  - q: "Does Yuka work without a barcode?"
    a: "No, Yuka's scan is a barcode lookup. EatMatrix reads a photographed label directly, so it can return a verdict even when there is no barcode or the product is not in a database."
  - q: "Is Yuka free?"
    a: "The barcode scan and score are free. A pay-what-you-want premium tier, roughly 10 to 20 dollars a year, unlocks scanning without a barcode, offline mode and dietary filters."
  - q: "Should I use Yuka or EatMatrix?"
    a: "Choose Yuka for a fast single number on packaged products already in its database. Choose EatMatrix to understand why a specific additive was flagged, to scan a label with no barcode, or to filter results against a personal allergy or diet."
---
Yuka is a fast, free way to turn a barcode into a single number between 0 and 100, built mostly from the Nutri-Score label and a database of additive risk tiers. It is genuinely useful for exactly that job. Where it runs out of road is anything a barcode cannot reach: an imported product, a regional brand not yet in its database, or the question of why one additive dragged the score down. That is the gap [EatMatrix](https://apps.apple.com/app/id6751504815) is built to close, reading the label itself rather than looking a barcode up.

Both apps are trying to answer the same question a shopper asks standing in an aisle: is this worth buying. They just answer it in different shapes, one number Yuka produces on the spot versus a set of separate, sourced verdicts EatMatrix lays out. Neither shape is wrong. Knowing which one you need decides which app earns a place on your phone.

## How Yuka calculates its score

Yuka’s 0 to 100 score blends three separately weighted inputs into one number.

- **Nutritional quality, 60 percent.** Calculated using the Nutri-Score system, which grades foods A to E by weighing calories, saturated fat, sugar and salt against fiber, protein and the amount of fruit, vegetables or legumes in the product.
- **Additives, 30 percent.** Each additive gets a risk tier (risk free, limited risk, moderate risk, high risk), informed by EFSA and IARC assessments alongside independent research.
- **Organic status, 10 percent.** A flat bonus for products carrying an official organic label, national or international.

> **The one rule that overrides the math:** if a product contains an additive Yuka classifies as high risk, the total score cannot exceed 49 out of 100, no matter how well it scores on nutrition or organic status.

That cap is the most consequential design choice in the whole system. It means Yuka’s number is not really “how healthy is this food” so much as “does this food contain anything on our red list, and if not, how nutritious is it.” Both are fair questions. They are just not the same question, and the blended score does not tell you which one moved the needle.

<figure class="illustration"><img alt="A phone scanning a barcode beneath a three-part circular score dial" height="1024" loading="lazy" src="/images/articles/yuka-app-review-how-the-score-is-built/cb22a87337.webp" width="1536"/><figcaption>Yuka's score blends three separate measurements into one number.</figcaption></figure>

## How EatMatrix reaches a verdict

EatMatrix starts from a different premise: read the label itself instead of looking up a barcode, and keep each additive’s evidence separate rather than folding it into one number.

- **No barcode required.** EatMatrix reads a photographed ingredient panel directly, so it can return a verdict on a product that has no barcode yet, or one not in any database.
- **Per-additive sourcing.** Each additive verdict is tied to that additive’s own EFSA re-evaluation, FDA GRAS status, or WHO/JECFA position, rather than being averaged into a blended score.
- **Personalization.** Results are filtered against the reader’s own allergies and diet, so two shoppers scanning the same label can see different flags depending on what they each need to avoid.

The practical difference shows up the moment a shopper wants to know *why*. Yuka’s high-risk cap tells you a product hit a ceiling. EatMatrix’s per-additive approach tells you which additive did it, and what the regulator that evaluated it said.

## Where each app’s evidence comes from

This is the part worth being honest about, because “backed by EFSA data” and “backed by an algorithm regulators have not endorsed” are different claims, and Yuka’s score rests on both at once.

The additive tier system draws on EFSA and IARC assessments, which is solid regulatory ground. The nutrition component, 60 percent of the total score, rests on Nutri-Score, and Nutri-Score’s own validation record is more mixed than its A-to-E simplicity suggests.

> **What the research on Nutri-Score settles:** a review of the algorithm’s development and validation process found that while it is one of the most studied front-of-pack labels in the EU, its validity and applicability in the European context is still undetermined. It can rank foods across the entire food supply, but has not been shown to reflect the actual healthfulness of products within a single grade.<sup><a href="#cite-1">[1]</a></sup>

Seven countries have adopted or moved toward adopting Nutri-Score, and an international scientific committee was set up specifically to keep evaluating the algorithm and its European applicability.<sup><a href="#cite-1">[1]</a></sup> That an official review committee still exists to answer open questions about the label is itself the honest summary. It is useful for sorting a shelf of similar products. It is not yet a settled measurement of individual healthfulness.

EFSA’s own additive assessments sit on firmer ground by design. EFSA authorizes a food additive only after a centralized scientific safety assessment that produces a published opinion covering the evidence behind it, the kind of source EatMatrix links to for each additive verdict.<sup><a href="#cite-2">[2]</a></sup> That opinion covers identity, production process, composition, exposure and toxicology data, and by the end of 2023 EFSA had published 45 such opinions for additives derived from food by-products alone, each with its own evidence trail. That is the layer EatMatrix draws on: the regulator’s own published reasoning, rather than a proprietary risk tier.

The comparison is a bit like a restaurant’s posted health inspection letter grade versus the inspector’s full report. The letter grade (Yuka’s number) is fast and useful for a quick decision at the door. The inspector’s report (EatMatrix’s per-additive sourcing) tells you whether the problem was a temperature log or something that would change your order.

## Price, coverage and personalization

- **Cost.** Yuka’s barcode scan and score are free. A pay-what-you-want premium tier, roughly 10 to 20 dollars a year, unlocks scanning without a barcode, offline mode, and dietary filters.
- **Database coverage.** Yuka’s product database is built in part on the crowdsourced Open Food Facts project. A newly launched or regional product can return no result until someone else scans it in first.
- **Language and label reading.** EatMatrix reads a photographed label in more than ten languages and does not depend on a barcode lookup at all, which matters for imported groceries or products sold without one.

**Yuka vs EatMatrix, at a glance**

|  | Yuka | EatMatrix |
| --- | --- | --- |
| How it reads a product | Barcode lookup | Photographed label, barcode optional |
| Verdict basis | Blended 0 to 100 score (60/30/10 weighting) | Per-additive EFSA, FDA and WHO/JECFA sourcing |
| Cost to scan | Free | See app listing |
| Offline use | Premium only | See app listing |
| Personalization | Dietary filters (premium) | Allergen and diet personalisation |
| Database gap risk | New or regional products may return no result | Reads the label directly, no database lookup required |

*Core differences for a shopper deciding between the two.*

<figure class="illustration"><img alt="Two plain cans compared side by side, one marked with a barcode symbol and one with a magnifying lens" height="1024" loading="lazy" src="/images/articles/yuka-app-review-how-the-score-is-built/0a0c81524c.webp" width="1536"/><figcaption>Barcode lookup versus direct label reading is the core difference between the two approaches.</figcaption></figure>

## Choose Yuka if, choose EatMatrix if

**Choose Yuka if** the priority is a fast single number for packaged products whose barcodes are already sitting in a crowdsourced database, and a blended score is enough to compare two similar items on a shelf.

- Standing in an aisle comparing three brands of the same snack.
- Wanting one glance to see whether a product improved after a reformulation.
- Happy to accept a nutrition score built on Nutri-Score’s grading logic.

**Choose EatMatrix if** the priority is understanding why a specific additive got flagged, reading a label that has no barcode or is not yet in any database, or filtering results against a personal allergy or diet rather than a generic score.

- Scanning an imported product, a farmers market item, or anything with no barcode to look up.
- Managing a specific allergy or diet where a generic score is not the actual question.
- Wanting to know which regulator said what about a flagged additive, beyond the bare fact that it was flagged.

Plenty of shoppers will want both, and that is a reasonable outcome. A blended number is good for a fast first pass. The regulator’s own reasoning behind a single additive is good for the moment that number does not settle the question.

## When the two disagree

A product can land in a different place on each app, and that is not a bug in either one. Yuka can dock a product hard for one high-risk additive even if the rest of the nutrition profile is strong, because the cap overrides everything else. EatMatrix will flag that same additive but keep the rest of the label’s information intact instead of collapsing it into one number.

If the two disagree, the additive causing the gap is the thing worth reading about directly. A single flagged ingredient, checked against its own regulatory record, tells a shopper more than either app’s summary number does on its own.

## The bottom line

> **Bottom line:** Yuka’s additive tiers rest on real EFSA and IARC assessments, but 60 percent of its score comes from Nutri-Score, a label whose own validation research still calls its ability to rank individual products’ healthfulness undetermined. EatMatrix skips the blended number and links each additive verdict straight to the regulator that evaluated it, at the cost of not producing one tidy score at all.

Neither app is a medical or regulatory authority. Both are a reasonable place to start reading a label you do not recognize. Neither is the final word on whether to buy it.

For a closer look at where Yuka’s score holds up and where it does not, see [our full breakdown of its accuracy](/articles/is-yuka-accurate-half-the-score-is-proven-half-isnt). If Yuka is one of several apps on your shortlist, [our wider comparison](/articles/best-food-scanner-apps-2026-eatmatrix-vs-yuka-on-the-evidence) lines up the rest.

---

This article summarises publicly available regulatory assessments and peer-reviewed research about food ingredients. It is general information and is not intended to diagnose, treat, cure, or prevent any disease, and it is not personalised dietary or medical advice. Regulatory positions change; the EatMatrix app reflects the current assessments in our database. If you have an allergy, a medical condition, or are pregnant, talk to a qualified clinician or dietitian before changing what you eat.

<section class="references"><h2 id="references">References</h2><ol><li id="cite-1"><a href="https://doi.org/10.3389/fnut.2022.974003">The Nutri-Score algorithm: Evaluation of its validation process.</a>. <em>Frontiers in nutrition</em>, 2022.</li><li id="cite-2"><a href="https://doi.org/10.3389/fnut.2024.1390734">Novel foods, food enzymes, and food additives derived from food by-products of plant or animal origin: principles and overview of the EFSA safety assessment.</a>. <em>Frontiers in nutrition</em>, 2024.</li></ol></section>
