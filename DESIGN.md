---
name: BetterBagac
description: A resident-facing civic reading room for the Municipality of Bagac, Bataan.
colors:
  bataan-deep: "#0032a0"
  bataan-deep-press: "#002170"
  deep-channel: "#003D82"
  marker-amber: "#F77F00"
  marker-amber-ink: "#9A4E00"
  verified-green: "#0A7C5E"
  alert-red: "#D62828"
  reference-blue: "#0B5C8F"
  reading-white: "#FFFFFF"
  cool-paper: "#F8F9FA"
  ink: "#1A1A1A"
  ink-muted: "#666666"
  night-watch: "#00184D"
  slate-footer: "#1A1A1A"
  hairline: "#E5E7EB"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  container: "6px"
  control: "4px"
  chip: "2px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.bataan-deep}"
    textColor: "{colors.reading-white}"
    rounded: "{rounded.control}"
    padding: "11px 22px"
  button-primary-hover:
    backgroundColor: "{colors.bataan-deep-press}"
    textColor: "{colors.reading-white}"
    rounded: "{rounded.control}"
    padding: "11px 22px"
  button-secondary:
    backgroundColor: "{colors.reading-white}"
    textColor: "{colors.bataan-deep}"
    rounded: "{rounded.control}"
    padding: "11px 22px"
  card:
    backgroundColor: "{colors.reading-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.container}"
    padding: "24px"
  input:
    backgroundColor: "{colors.reading-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px"
  badge:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.chip}"
    padding: "4px 8px"
  chip:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.bataan-deep}"
    rounded: "{rounded.chip}"
    padding: "6px 12px"
---

# Design System: BetterBagac

## Overview

**Creative North Star: "The Municipal Reading Room"**

BetterBagac is a reading room, not a storefront. The system treats every page as a counter where
a resident can sit down with one thing — a service, a contract row, an ordinance, a figure — and
leave knowing where it came from. Bataan Deep carries the room's serious half: headers, links,
table heads, the band behind the hero. Cool Paper and Reading White carry the other half: the
quiet, high-legibility surfaces a person actually reads in, dense enough to hold a 118-row table
without turning into a dashboard.

The voice is plain and neighborly. Type is one family at honest sizes, never decoratively
scaled; spacing is tight within a group and generous between them, so a section reads as a
paragraph rather than a card grid. Marker Amber is used the way a librarian uses a highlighter:
a small mark that points at one thing, never a surface, never a paragraph. Nothing is glossy,
nothing floats, and nothing is animated for its own sake — the room is already loud enough with
the material it holds.

Bilingualism is a visual constraint, not a feature: Filipino strings run longer than English
ones, so components are sized for the longer language first, and no headline, chip, or button
may depend on English word lengths.

**Key Characteristics:**
- One blue family (deep navy → channel blue) for structure, one amber mark for attention.
- Flat at rest: hairline borders and tonal paper instead of resting shadows.
- Three corner steps only — container, control, chip — plus true circles.
- One type family in five roles; hierarchy from weight and size, never a second face.
- Every surface legible at 4.5:1 for text, before any aesthetic question is asked.

## Colors

A two-temperature civic palette: cool institutional blue for structure, warm amber for the one
thing that needs attention, and neutrals that behave like paper.

### Primary
- **Bataan Deep** (`#0032a0`): the structural color. Site title, links, table headers, icon
  color, primary buttons, the solid band behind page headers. It is the ink the room is printed
  in, so it may cover large areas (hero band, table head) without losing its authority.
- **Bataan Deep Press** (`#002170`): the pressed state of Bataan Deep. Hover on primary buttons
  and active links. Never a resting color.
- **Deep Channel** (`#003D82`): the second stop of the structural gradient. Appears only inside a
  `135deg` gradient paired with Bataan Deep — hero band, page headers, card icon rails. Never on
  its own.

### Secondary
- **Marker Amber** (`#F77F00`): attention, not decoration. Used for the "needs action" rail, the
  warning badge fill, the SK councilor marker, and single accent strokes. It fails contrast as
  text on light paper, so any amber that must carry words uses Marker Amber Ink instead.
- **Marker Amber Ink** (`#9A4E00`): the readable amber. Text and small marks on white or on the
  amber tint. This is the only amber allowed to sit under white type.

### Tertiary
- **Verified Green** (`#0A7C5E`): confirmation and completion — verified records, open offices,
  completed process steps, progress fills. Deep enough to hold white text at 4.5:1.
- **Alert Red** (`#D62828`): emergency and destructive context only — hotline bar, required-field
  marks, download formats. Never used for brand emphasis.
- **Reference Blue** (`#0B5C8F`): informational metadata — source notes, dates, neutral badges.
  Cooler and quieter than Bataan Deep so it reads as annotation rather than structure.

### Neutral
- **Reading White** (`#FFFFFF`): the page itself and every card surface.
- **Cool Paper** (`#F8F9FA`): alternating section bands, table row hover, inset panels, the
  resting fill for chips and badges. Depth here comes from tone, not shadow.
- **Ink** (`#1A1A1A`): body text and headings inside content. Never pure black.
- **Ink Muted** (`#666666`): secondary text — descriptions, captions, breadcrumbs, timestamps.
  The floor of the neutral scale; nothing lighter carries body copy.
- **Hairline** (`#E5E7EB`): the 1px border that separates a card from the page.
- **Night Watch** (`#00184D`): the live information strip under the header (rates, weather,
  date/time). A darker blue than Bataan Deep so the strip reads as instrumentation, not content.
- **Slate Footer** (`#1A1A1A`): the footer ground, with white at 50–80% opacity for its text.

### Named Rules
**The Marker Rule.** Amber is a mark, not a surface. It may cover at most a small element on a
screen — a badge, a rail, a single icon — and never a card, band, or paragraph. If amber has to
carry a word, the word is set in Marker Amber Ink.

**The Two-Temperature Rule.** Structure is always cool blue; attention is always warm amber.
Status greens and reds exist, but they describe a record's state, never the brand's mood.

## Typography

**Display Font:** Inter (with `sans-serif`)
**Body Font:** Inter (with `sans-serif`)

**Character:** one family, five roles, no exceptions. Inter's tall x-height keeps Filipino and
English copy equally readable at 14–16px, and its tabular figures keep a 118-row contract table
from wobbling. Hierarchy is built by weight and size — 700 for headings, 600 for controls and
labels, 400 for reading — never by a second typeface.

### Hierarchy
- **Display** (700, `2.5rem`/40px, 1.2, −0.02em): page and hero headlines. Centered only inside
  the hero band; left-aligned everywhere else.
- **Headline** (700, `2rem`/32px, 1.2): section headings and page-header titles.
- **Title** (700, `1.5rem`/24px, 1.2): card titles, subsection headings.
- **Body** (400, `1rem`/16px, 1.6): all reading copy, capped near 70ch inside `.container`.
- **Label** (600, `0.75rem`/12px, 0.05em tracking, uppercase): badges, overline labels, table
  column headers, stat captions. Uppercase is reserved for labels and never used for sentences.

### Named Rules
**The Single Voice Rule.** One family carries every role, in both languages. A second face — a
serif for headings, a mono for numbers — is out of scope for this system; if hierarchy is not
reading clearly, fix the size and weight steps.

**The Honest Figure Rule.** Numbers that a resident may compare (fees, populations, contract
amounts, dates) are set in tabular figures and never letter-spaced.

## Layout

A single 1200px reading column (`.container`) with 24px gutters, centered, on every page. Content
inside it either runs full width (prose, tables) or splits into an auto-fitting grid — 2-up from
300px, 3-up from 250px, 4-up from 200px — so cards reflow without a bespoke breakpoint per page.

Vertical rhythm comes from a five-step spacing scale: 8 / 16 / 24 / 32 / 48px. A section is 48px
of padding above and below its band; a card is 24px internally; a group of related fields is 8px
apart and 24px from the next group. Space above a heading always exceeds the space below it, so a
heading binds to its paragraph rather than floating between blocks.

Bands alternate Reading White and Cool Paper to carry the page's structure without adding rules
or shadows. The header is sticky (white, hairline shadow), the live information strip sits below
it in Night Watch, and the footer closes the page in Slate Footer.

Responsive behavior is compositional, not merely narrower: the service sidebar drops from 2/1
columns to a single column below 991px, and multi-column card grids fall to one column below
768px. Type steps down at 575px rather than shrinking uniformly.

## Elevation & Depth

Flat at rest, lifted on interaction. Nothing on the page floats: a card is a white rectangle on
white or on Cool Paper, separated by a single Hairline border, and depth is expressed by tone and
border weight rather than by ambient shadow. Shadows exist only as a response — a pointer over a
card, focus inside a field, a sticky header over scrolling content — and they always carry an
offset and a soft blur, typically tinted with Bataan Deep rather than neutral black.

### Shadow Vocabulary
- **Hairline rest** (`box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05)`): the sticky header only. The
  smallest shadow in the system.
- **Panel rest** (`box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)`): dropdown menus and overlays that
  must detach from the page because they cover it.
- **Card lift** (`box-shadow: 0 4px 16px rgba(0, 50, 160, 0.1)`): hover on a clickable card,
  paired with a 2–4px translate. Blue-tinted, never neutral grey.
- **Focus ring** (`box-shadow: 0 0 0 3px rgba(0, 50, 160, 0.1)`): inset focus on inputs together
  with a Bataan Deep border.

### Named Rules
**The Flat-at-Rest Rule.** A surface at rest has a border, not a shadow. If depth is needed
without interaction, use a Cool Paper fill or a 1px Hairline — never a resting drop shadow.

**The One Lift Rule.** Hover may raise a card by 2–4px and deepen its shadow; nothing else moves.
No parallax, no scale, no shadow that appears on content the pointer is not over.

## Shapes

Three corner steps, no exceptions: containers and cards at 6px, controls (buttons, inputs,
selects) at 4px, chips and badges at 2px. Perfect circles (50%) are reserved for genuinely round
objects — step numbers, icon buttons, status dots, avatars.

The tightening is deliberate: the room reads as printed material rather than as an app. Rectangles
with a slight soften hold dense tables and long list rows better than 12–16px cards, and the
smaller step keeps nested shapes from looking inflated. Nested elements take the same step as
their role, not a smaller one: a badge inside a card is still 2px.

Borders are 1px Hairlines or Bataan Deep at focus. A 2px border is reserved for the outline button
family, and no surface uses a colored side stripe as its identity — state is carried by fill,
border color, or a leading icon.

### Named Rules
**The Three-Step Rule.** 6 container, 4 control, 2 chip, plus true circles. If a value is not on
this list, it is a defect, not a variation.

**The No-Stripe Rule.** A colored left or right border above 1px never stands in for state or
category. Use the fill, the border color, or the icon.

## Components

### Buttons
- **Shape:** 4px control radius, 2px transparent border that becomes the outline color, 11px/22px
  padding, 14px label at 600 weight, 8px icon gap.
- **Primary:** Bataan Deep fill with Reading White text; hover presses to Bataan Deep Press,
  lifts 2px, and deepens the blue-tinted shadow. Always a single primary action per view.
- **Secondary:** Reading White fill, Bataan Deep text, 20%-opacity Bataan Deep border; hover adds a
  4% Bataan Deep wash and a full-strength border.
- **Small:** 7px/14px padding at 13px when a button sits inside a card or a table row.
- **Disabled:** 45% opacity, `not-allowed` cursor, no lift, no shadow.

### Chips (hotline and quick-link pills)
- **Style:** translucent white on the red hotline bar, Cool Paper on white, 2px radius, 4–6px
  vertical padding, one leading icon at 12px, white or Bataan Deep text.
- **State:** hover raises the translucent fill and lightens the text; chips are never selected
  toggles — they are destinations.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** Reading White on white or on Cool Paper bands.
- **Shadow Strategy:** none at rest (see Elevation & Depth).
- **Border:** 1px Hairline; hover swaps the border to Bataan Deep on clickable cards.
- **Internal Padding:** 24px at rest, 16px when a card sits in a dense list.

### Inputs / Fields
- **Style:** Reading White, 1px Hairline border, 4px radius, 12px padding, 16px text, Ink color;
  placeholders in Ink Muted (never a lighter grey).
- **Focus:** Bataan Deep border plus a 3px Bataan Deep 10%-opacity ring; the outline is removed
  only because the ring replaces it.
- **Error / Disabled:** a disabled field drops to Cool Paper with Ink Muted text and `not-allowed`
  cursor; the required marker is Alert Red and is never the only signal.

### Navigation
- **Header:** white, sticky, 16px vertical padding, hairline shadow. Site title in Bataan Deep at
  24px/700 with the logo to its left, tagline beneath in Ink Muted at 14px.
- **Links:** Ink at 500 weight, 24px gaps, hover and active both resolve to Bataan Deep; the
  current section is state, not decoration, so no underline or bar is added.
- **Dropdowns:** white panel, 6px radius, 4px/8px shadow, 220px minimum width, Cool Paper hover
  row. Open on hover and on focus-within so keyboard users reach the same items.
- **Mobile:** a single menu toggle replaces the row; the language selector stays visible because
  switching language is a primary action, not a settings detail.

### Data Tables
- **Style:** full-width, collapsed borders, Bataan Deep header row with Reading White 600-weight
  labels, 16px cell padding, hairline row dividers, Cool Paper row hover. Numbers align right in
  tabular figures; text stays left.

### Badges
- **Style:** 2px radius, 12px uppercase 600 label, 4px/8px padding, on a 10%-strength tint of its
  own hue (green on green, amber on amber, blue on blue). Text is always the ink variant of that
  hue, never the mid-tone.

## Do's and Don'ts

### Do:
- **Do** keep one structural blue family and let Cool Paper bands create separation.
- **Do** keep every corner on the 6 / 4 / 2 scale, with 50% only for true circles.
- **Do** size components for the longer Filipino string, then check English.
- **Do** give every figure a visible source and a date near it; the type system supports
  annotation, so use it.
- **Do** keep text at 4.5:1 and placeholder text at 4.5:1 — placeholders are text.

### Don't:
- **Don't** use Marker Amber as a surface, a band, or body text.
- **Don't** add a colored side stripe (border-left/right above 1px) to a card, list item, or alert.
- **Don't** put a resting drop shadow on a card, and don't make the shadow neutral grey when it
  does appear — tint it with Bataan Deep.
- **Don't** introduce gradient text, glass panels, or blur as decoration; the hero gradient is a
  two-stop structural blue band and nothing else.
- **Don't** build a second typeface or use monospace as a "technical" costume — tabular figures
  handle numbers.
- **Don't** stack cards inside cards; a card in a Cool Paper section is the deepest container.
