# Pest Control Template — Design Spec

## Context

Scott Apps sells a family of near-identical Next.js marketing-site templates, one per trade, each forked from `hvac-template` and re-skinned. This run forks into `pest-control-template` (catalog slug: `pest-control` · Pest Control & Exterminating), following the established template re-skin playbook used by electrical, flooring, pool-spa, landscaping, and painting.

`hvac-template` still carries an orphaned `src/app/projects/` page and unused sibling gallery components. There is no catalog requirement for a project gallery on this listing (same decision as electrical/landscaping/painting), so the `projects` route is deleted as dead weight; orphan components are left unwired.

## Business Identity (locked, reuse verbatim)

- **Business name:** ShieldPro Pest Control
- **Tagline:** Protecting Central Texas Homes & Businesses from Pests — Guaranteed
- **Location:** Waco, TX (HQ)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Founded:** 2014 · **Owner:** Derek Collins
- **Credentials:** Licensed Pest Control Applicator · Fully Insured · Eco-conscious options
- **Guarantee:** Satisfaction Guaranteed — free re-treat if pests return between scheduled visits
- **Social proof:** 4.9★ · 890+ reviews · "12,000+ properties protected"
- **Brand accent:** pest-amber/gold `#ca8a04` with deep charcoal base (distinct from all other templates)
- **Phone:** (254) 776-3300 / `tel:+12547763300`
- **Email:** hello@shieldpropest.com
- **Domain:** shieldpropest.com
- **Address:** 1800 N Valley Mills Dr, Waco, TX 76710
- **No per-city SEO subpages**

## Services (6)

1. General Pest Control
2. Termite Inspection & Treatment
3. Rodent Control
4. Mosquito Yard Treatment
5. Bed Bug Treatment
6. Commercial Pest Control

## Industries Served (3)

1. Property Management Companies
2. Restaurants & Food Service
3. Healthcare Facilities

## Pages

Home, Services (index + 6 detail), Industries (index + 3 detail), About, Contact, Service Areas, Blog (index + 3 posts). `src/app/projects/` removed.

## Catalog notes

Pest-specific pages, recurring plans, emergency CTA, review funnels. Eco-conscious treatment options called out as a differentiator.

## Non-goals

- No per-city SEO subpages.
- No new component primitives.
- No project gallery / case-study feature.
- No deploy/marketplace flip work.

## Process

1. **Step 0 sweep:** brand tokens, Header/Footer, shared components, root layout/metadata, robots/llms/sitemap, vendor-identity, delete `projects/`.
2. **Page-by-page content** via sibling-clone.
3. **Final sweep + QA** — identity grep, `npm run typecheck`, accent color `#ca8a04`.

## Success Criteria

- Zero HVAC / Arctic Air / vendor-agency content remaining.
- Accent `#ca8a04` on brand tokens and loaders.
- Typecheck passes; routes match new slugs only.
