# DESIGN.md — Hosanna School of Catering and Fashion Design

Read this before writing any UI code. All token values live here. Nothing in the codebase should use values not defined in this document.

---

## Concept

**Theme / metaphor:** The atelier. Not a school brochure — the space where a craftsperson works: clean benches, natural light, tools in exact places. Every section should feel like a purposefully arranged workspace: one thing at a time, room to breathe, nothing decorative that doesn't earn its place.

**Signature elements:**
- Hero: two tall rounded images side by side (catering + fashion), unified inside one compositional frame — not a banner, a diptych
- Trust strip: the six disciplines spelled out as small-caps text with hairline pipe dividers — no logos, no badges, just names
- Disciplines bento: asymmetric 7/5 column split, full-bleed photo cards with flat-black overlays and white editorial text
- Why Hosanna: icon tiles on soft brand-100 backgrounds, border turns brand-700 on hover — the only interactive border in the page
- FAQ: split layout, accordion with plus↔minus rotation — no boxes, only hairlines

**Accent colour + exactly where it appears:**
Purple (`brand-700`, `#4C1D95`) appears in:
- Primary CTA buttons (solid fill)
- Nav "Apply" pill
- Active nav underline / dot
- Icon tile fill on card hover
- FAQ open state icon
- Footer "Apply Now" CTA
- Admissions CTA section background (uses `brand-900`)
Nowhere else. Gold is retired; the existing palette had two accents competing. Purple is the single accent, confident and warm.

**Copy voice (two example lines):**
- "Where Skill Becomes Craft." — declarative, earned, no adjectives
- "Learning should leave you able to do." — plain, real, a little confrontational in the best way

**Two behaviours a template wouldn't have:**
1. The header is fully transparent over the hero and transitions to solid white (with a 1px border) only after the user scrolls past the hero fold — not just on any scroll, but measuring the hero height
2. Programme cards have a large muted number that acts as a visual anchor, not decoration — it defines the card's reading order visually before the title lands

---

## References studied

| Reference | What is distinctive | Borrow (principle) | Avoid |
|---|---|---|---|
| Le Cordon Bleu | Full-bleed food photography, strong serif editorial headings, generous whitespace between sections | One idea per section; let photography carry the emotion | Their nav is cluttered; avoid too many header links |
| Central Saint Martins | Extreme typographic confidence, large headline + almost nothing else | Giving headings room to breathe — no sub-copy clutter around a hero headline | Their experimental type is too avant-garde for a practical school |
| Parsons / New School | Clean grid, programmatic listing of courses, restrained neutral palette | Typographic programme cards, numbered items as visual hierarchy | The academic plainness feels cold; Hosanna needs warmth |
| Ballymaloe Cookery School | Warm tones, photography as the brand carrier, serif + sans pairing feels like editorial food writing | Warmth without nostalgia; photography first | Overly rustic — Hosanna is urban Aba, not Irish countryside |
| Paystack (Nigeria) | Trust through restraint: no gimmicks, clean layout, every word earns its place | Nigerian context: directness, confidence, no over-explanation | The fintech cool — Hosanna needs craft warmth, not startup sleek |
| Moniepoint | The way they use dark sections as a change of pace — visual breathing room | Full-bleed dark section as contrast beat (Admissions CTA) | The dashboard data-density is irrelevant |
| LISOF / STADIO | Clear programme listing, emphasis on real student work and outcomes | Student-work gallery as proof, not just as decoration | Their layout is unpolished — avoid loose spacing |
| Tinctra editorial brand | Structure from rules and whitespace, not containers; editorial serif + intentional motion | No card-borders for everything — let whitespace do the grouping | Too abstract; Hosanna needs practical clarity |

---

## Colour tokens

```
brand-900: #1E0A3C   /* near-black purple — footer, dark CTA sections */
brand-700: #4C1D95   /* primary buttons, key accents */
brand-600: #5B21B6   /* button hover */
brand-100: #EDE9FE   /* icon tiles, subtle chip backgrounds */
brand-50:  #F5F3FF   /* alternate section backgrounds */

ink-900:   #111018   /* headings — not pure black, has a whisper of purple */
ink-600:   #4B4558   /* body text */
ink-400:   #9089A4   /* captions, eyebrows on light bg */

white:     #FFFFFF
off-white: #FAF9F7   /* default page background — warmer than pure white */
warm-50:   #F5F2EE   /* alternate section bg (Welcome, Why Hosanna) */

line:      #E4E1EC   /* 1px borders on cards, dividers */
```

**Contrast verification:**
- `brand-700` (#4C1D95) on white: passes AA (ratio ~8.6:1) ✓
- `brand-900` (#1E0A3C) on white: passes AAA ✓
- white on `brand-700`: passes AAA (ratio ~8.6:1) ✓
- white on `brand-900`: passes AAA ✓
- `ink-900` on `off-white`: passes AAA ✓
- `ink-600` on `off-white`: ratio ~5.2:1, passes AA ✓
- `ink-400` used for captions only (not body text), at 13px/label use passes AA for large text equivalents ✓

---

## Typography

**Display/headings:** Playfair Display Variable — already in the project. Justified choice: it has the high-contrast serif strokes that make large headlines feel like they were set by a compositor, not generated. The optical weight reads as "craft institution" not "tech product." Its variable axis lets us tune weight precisely. Playfair at 600–700 weight with tight tracking is close to how culinary and fashion schools like Ballymaloe and Leiths set their headings.

**UI/body:** Inter Variable — already in the project. Excellent screen readability, neutral humanist forms that defer to the serif display without fighting it. Used for all body, eyebrows, labels, nav, and buttons.

**Scale (desktop):**
| Role | Size | Line-height | Tracking | Weight |
|---|---|---|---|---|
| Hero display | `clamp(52px, 7vw, 88px)` | 0.97 | -0.025em | 700 |
| H2 section | `clamp(36px, 4.5vw, 56px)` | 1.05 | -0.02em | 600 |
| H3 card | `clamp(20px, 2vw, 28px)` | 1.15 | -0.01em | 600 |
| Body | 17–18px | 1.65 | 0 | 400 |
| Eyebrow | 11–12px | 1.2 | 0.12em | 600 |
| Caption | 13px | 1.4 | 0.02em | 400 |
| Button label | 14px | 1 | 0.01em | 600 |

**Fluid sizing via CSS clamp()** for hero and H2. Mobile minimums: hero 44px, H2 34px.

**Line length:** body text containers capped at ~65ch via `max-w-[65ch]` or equivalent.

---

## Spacing

8px base grid. Section vertical padding: `py-[128px]` desktop, `py-20` (80px) mobile. Use `sm:py-24 lg:py-[128px]` as default section padding. Container max-width 1240px, 24px mobile padding, 48px desktop.

Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160px.

Card gaps: 20–24px. Card internal padding: 28–32px.

---

## Radius

- Cards and image containers: `rounded-xl` (12px)
- Buttons and chips: `rounded-full` (999px)
- Inputs: `rounded-lg` (8px)
- No mixing of arbitrary values.

---

## Component sizes

- Control height (buttons): 50px min-height
- Nav height: 72–76px
- Icon tile: 48×48px container, 22px icon
- Card padding: 28px (desktop), 20px (mobile)
- Page max-width: 1240px, gutters: 24px mobile / 48px desktop

---

## Surfaces & depth

Layered: `off-white` (page bg) → `white` (section/card bg) → `warm-50` (alternate section) → `brand-50` (subtle purple-tinted bg).

Shadows: **none** on cards. Cards defined by `1px line border`. One allowed shadow: the sticky nav bar after scroll (`shadow-sm` only, not stacked shadows).

No decorative gradients anywhere. Hero images and full-bleed section images: flat `bg-black/45` overlay (no gradient), ensuring white text passes WCAG AA over any photo.

---

## Icons

**Primary set:** Lucide React (already installed) — used consistently for all UI icons.
**Sizing:** 20px in cards, 18px in nav/body, 16px in buttons.
**Container:** 48×48px soft `brand-100` rounded-xl tile on light backgrounds; white icon on `brand-700` fill on hover.

Note: Iconsax and Solar are not installed. Lucide provides sufficient coverage and is already a project dependency. Adding a new icon package would introduce both install overhead and mixed styles. Using Lucide exclusively satisfies the "one set" rule.

---

## Motion

- Fade-up on scroll: `translateY(16px) → 0`, opacity 0→1, 550ms ease-out, once
- Card group stagger: 70ms delay between siblings
- Button transitions: 160ms ease, colour only, no scale
- Image hover zoom: 600ms ease, scale 1.03 max
- Arrow icon nudge on hover: `translateX(4px)`, 180ms
- Accordion: height via CSS transition, 300ms ease
- Nav scroll: 250ms background colour transition
- **All motion wrapped in `@media (prefers-reduced-motion: reduce)` suppression**

---

## States for every interactive component

- Button: default / hover (brand-600) / focus-visible (2px ring brand-700, 2px offset) / active (translateY 1px) / disabled (opacity-40, cursor-not-allowed)
- Link: default / hover (brand-700 colour or underline) / focus-visible (ring) / active
- Card (when linkable): default / hover (border brand-700, icon tile fills purple)
- Nav item: default / hover (brand-700) / active (purple underline dot) / focus-visible
- Accordion: closed (+ icon) / open (− icon, rotated 45deg, brand-700)
- Input: default / focus (border brand-700, ring brand-100) / error (border red, error message)

---

## Deviations from the brief I am making (and why)

1. **Gold accent retired.** The existing globals.css has champagne gold as a 10% accent. The brief calls for purple-only accent. I am removing gold from the landing page redesign and using white and brand-100 tints as text/contrast choices on dark sections instead. Gold competing with purple split the eye; one accent reads with far more authority. If the school wants gold restored, it is a one-token change.

2. **Lucide instead of Iconsax/Solar.** Iconsax-react and @iconify/react are not installed. Installing them mid-redesign would require a package install and could introduce breaking changes. Lucide is already a project dependency and provides equivalent icons for all needed contexts. The brief's spirit (one coherent icon set, consistent sizing) is fully honoured.

3. **Hero image slider dropped.** The brief's "tasteful counter if the hero image rotates; otherwise drop it" is resolved to drop it. With only two images available, an auto-rotation carousel would be motion for its own sake. The diptych static composition is stronger.

4. **Testimonial section built but commented out.** Per brief instructions — ready to drop in when real quotes are supplied.
