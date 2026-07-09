# ShieldPro Pest Control — Implementation Plan

**Goal:** Re-skin the forked `hvac-template` codebase (now `pest-control-template`) into a complete "ShieldPro Pest Control" marketing site. Identity locked in `docs/superpowers/specs/2026-07-09-pest-control-design.md`.

**Method:** Sibling-reference pattern against electrical / flooring / pool-spa templates. Same components and prop shapes; only copy/data/slugs change.

## Slug maps

### Services (6)
| Old (HVAC) | New | Label |
|---|---|---|
| ac-repair | general-pest-control | General Pest Control |
| heating | termite-inspection-treatment | Termite Inspection & Treatment |
| installation | rodent-control | Rodent Control |
| duct-cleaning | mosquito-yard-treatment | Mosquito Yard Treatment |
| indoor-air-quality | bed-bug-treatment | Bed Bug Treatment |
| maintenance | commercial-pest-control | Commercial Pest Control |

Delete each old service dir's `waco-tx` / `temple-tx` / `killeen-tx` city subpages.

### Industries (3)
| Old | New | Label |
|---|---|---|
| automotive | property-management | Property Management Companies |
| manufacturing | restaurants-food-service | Restaurants & Food Service |
| oil-gas | healthcare-facilities | Healthcare Facilities |

### Blogs (3)
| Old | New | Topic |
|---|---|---|
| heat-pump-vs-traditional-hvac-texas | termite-prevention-tips-central-texas | Termite prevention for Central Texas |
| how-often-should-you-replace-hvac-filter | how-often-should-you-schedule-pest-control-waco-tx | Recurring pest control schedule |
| signs-ac-needs-replacement-waco-tx | signs-you-have-a-rodent-problem-waco-tx | Rodent problem warning signs |

## Tasks

1. Brand tokens — `$orange: #ca8a04` (+ light/dark variants), keep token names.
2. Header & Footer — name, tagline, marquee, phone/email/address, licensing.
3. Vendor/infra — robots, sitemap, llms.txt, not-found, privacy, root layout, admin strings; delete `src/app/projects/`.
4. Homepage hero — WelcomePage.
5. Homepage body — services, metrics, WhyChooseUs, process, FAQ, CTAs.
6–11. Service pages ×6 + delete city subpages + old dirs.
12. Services index.
13–15. Industry pages ×3.
16. Industries index.
17. Reviews data.
18–20. Blog posts ×3.
21. About / Contact / Service Areas.
22. Final identity grep + `npm run typecheck`.

Commits: logical chunks (`docs:`, `brand:`, `feat:`, `content:`).
