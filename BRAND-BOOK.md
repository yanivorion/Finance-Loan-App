# קרדיט-IL — Brand Book & Design System

---

## 1. Brand Identity

### Name & Wordmark

| Element | Value |
|---------|-------|
| **Brand name** | קרדיט-IL |
| **Latin fallback** | Credit-IL |
| **Tagline** | הלוואות חוץ-בנקאיות |
| **Tagline (EN)** | Non-bank lending, simplified |

The name blends Hebrew familiarity ("קרדיט") with the Israeli country marker ("IL"), signaling local trust and financial professionalism. The hyphen creates a clean typographic break.

### Logo Mark

The logo is a **₪** (shekel sign) set inside a rounded square container with a frosted glass finish. It acts as both brand mark and currency identifier.

```
Container: 48 × 48px
Corner radius: 14px
Background: accent color at 15% opacity
Border: accent color at 25% opacity
Backdrop: blur(10px)
Symbol: ₪ at 22px, weight 700, accent color
```

**Minimum clear space:** Equal to the logo height on all sides.
**Minimum size:** 32px in digital contexts.

### Brand Voice

| Attribute | Description |
|-----------|-------------|
| **Tone** | Confident, not aggressive. Reassuring, not patronizing. |
| **Language** | Hebrew-first. Clean, short sentences. Financial terms are simplified. |
| **Personality** | A smart friend who happens to understand finance. |
| **Direction** | RTL (right-to-left) throughout. Latin strings (numbers, codes) remain LTR. |

**Copy principles:**
- Lead with benefit, not feature ("כסף כשצריך" not "הלוואה דיגיטלית")
- Use active voice ("אישרנו את ההלוואה" not "ההלוואה אושרה")
- No jargon unless labeling a regulatory field
- Maximum headline length: 6 words

---

## 2. Design Philosophy

### Core Principles

| # | Principle | Meaning |
|---|-----------|---------|
| 1 | **Quiet confidence** | The interface should feel like it knows what it's doing. Minimal noise, clear hierarchy. |
| 2 | **Frosted depth** | Glass surfaces over soft gradients create layered depth without heaviness. |
| 3 | **Breathing room** | Generous whitespace signals professionalism and ease. Never crowd the viewport. |
| 4 | **Progressive disclosure** | Show only what's needed now. Guide through steps, don't overwhelm with a wall of form. |
| 5 | **Subtle motion** | Transitions reinforce spatial mental models. Nothing bounces, nothing flashes. |

### Aesthetic Keywords

Glassmorphism · Frosted surfaces · Blue-gray palette · Soft depth · Wide-tracked labels · Editorial typography · Restrained accent · Micro-interactions

### Reference Aesthetics

Linear App · Apple visionOS panels · Arc browser · Raycast · Vercel dashboard · Smart home control UIs (soft neumorphism)

---

## 3. Theme System

קרדיט-IL ships with two interchangeable visual themes. Both share identical layout, spacing, and typography — only color tokens and radii differ.

### Theme: Minimal

**Feel:** Precise, corporate-friendly, dark-slate anchored.

| Token | Value | Role |
|-------|-------|------|
| Accent | `#3b82f6` | Primary actions, links, highlights |
| Accent Soft | `rgba(59,130,246,0.08)` | Hover fills, backgrounds |
| Accent Glow | `rgba(59,130,246,0.14)` | Focus rings |
| Accent Shadow | `rgba(59,130,246,0.30)` | Button drop shadows |
| Accent Hover | `#2563eb` | Darkened accent on hover |

| Token | Value |
|-------|-------|
| Text 1 (Primary) | `#0f172a` |
| Text 2 (Secondary) | `#334155` |
| Text 3 (Muted) | `#94a3b8` |
| Text 4 (Subtle) | `#64748b` |

| Token | Value |
|-------|-------|
| Page Background | `linear-gradient(145deg, #eef2f7, #e8edf5, #f0f3f8)` |
| Glass Surface | `rgba(255,255,255,0.52)` |
| Glass Strong | `rgba(255,255,255,0.70)` |
| Glass Border | `rgba(255,255,255,0.48)` |
| Dark Background | `linear-gradient(145deg, #0f172a, #1e293b)` |
| Card Radius | `16px` |
| Button Radius | `10px` |
| Input Radius | `8px` |

### Theme: Fintech

**Feel:** Vibrant, modern, indigo-purple warmth.

| Token | Value | Role |
|-------|-------|------|
| Accent | `#6366f1` | Primary actions, links, highlights |
| Accent Soft | `rgba(99,102,241,0.08)` | Hover fills, backgrounds |
| Accent Glow | `rgba(99,102,241,0.14)` | Focus rings |
| Accent Shadow | `rgba(99,102,241,0.25)` | Button drop shadows |
| Accent Hover | `#4f46e5` | Darkened accent on hover |

| Token | Value |
|-------|-------|
| Text 1 (Primary) | `#1e1b4b` |
| Text 2 (Secondary) | `#3730a3` |
| Text 3 (Muted) | `#a5b4fc` |
| Text 4 (Subtle) | `#6366f1` |

| Token | Value |
|-------|-------|
| Page Background | `linear-gradient(145deg, #eef2ff, #e0e7ff, #eff0ff)` |
| Glass Surface | `rgba(255,255,255,0.68)` |
| Glass Strong | `rgba(255,255,255,0.82)` |
| Glass Border | `rgba(255,255,255,0.55)` |
| Dark Background | `linear-gradient(135deg, #312e81, #4338ca, #6366f1)` |
| Card Radius | `20px` |
| Button Radius | `14px` |
| Input Radius | `12px` |

### Semantic Colors (shared)

| Role | Minimal | Fintech |
|------|---------|---------|
| **Success** | `#16a34a` | `#10b981` |
| **Error** | `#dc2626` | `#ef4444` |
| **Warning** | `#f59e0b` | `#f59e0b` |

---

## 4. Typography

### Font Stack

```
Primary:  'Noto Sans Hebrew', -apple-system, BlinkMacSystemFont,
          'SF Pro Text', 'Segoe UI', system-ui, sans-serif
```

Noto Sans Hebrew was chosen for its excellent Hebrew glyph coverage, even weight distribution, and clean latin companion glyphs.

### Type Scale

| Role | Size | Weight | Letter-spacing | Transform | Usage |
|------|------|--------|----------------|-----------|-------|
| **Display** | 34px | 700 | −0.03em | — | Hero headlines ("כסף כשצריך") |
| **Page Title** | 22–24px | 700 | −0.03em | — | Screen headers |
| **Section Title** | 20px | 700 | −0.02em | — | Card headers, emphasis |
| **Large Value** | 32–40px | 700 | −0.04em | — | Financial amounts (₪33,786) |
| **Body** | 13–14px | 400 | — | — | Descriptions, paragraphs |
| **Body Strong** | 13px | 600 | — | — | Inline emphasis, labels |
| **Small** | 11–12px | 400–500 | 0.02em | — | Sub-descriptions, metadata |
| **Micro Label** | 9–10px | 600 | 0.08–0.10em | UPPERCASE | Category labels, step indicators |
| **Tiny** | 9px | 600 | 0.06em | UPPERCASE | Badges, counters |

### Typography Rules

1. **Headlines never exceed weight 700.** No 800/900 in the system.
2. **Micro labels are always uppercase** with wide letter-spacing (0.06–0.12em).
3. **Financial amounts use tabular figures** for column alignment.
4. **Negative letter-spacing** on headlines (−0.02 to −0.04em) creates a tight, premium feel.
5. **Positive letter-spacing** on micro labels (0.06–0.12em) aids readability at small sizes.
6. **Line heights:** Headlines 1.2, body 1.6–1.7, micro labels 1.4.
7. **Never use pure black text.** Darkest color is `#0f172a` (Minimal) or `#1e1b4b` (Fintech).

---

## 5. Spacing & Layout

### Base Unit: 4px

All spacing derives from a 4px base grid.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 2–3px | Hairline gaps, icon-to-text micro |
| `space-2` | 4–6px | Tight internal gaps, label-to-value |
| `space-3` | 7–8px | Row gaps, pill padding |
| `space-4` | 10–12px | Card internal gaps, button groups |
| `space-5` | 14–16px | Card padding, section spacing |
| `space-6` | 18–20px | Panel padding, screen margins |
| `space-7` | 24px | Screen horizontal padding, generous spacing |
| `space-8` | 28–32px | Section vertical spacing, hero areas |
| `space-9` | 36–48px | Top padding, breathing room |

### Screen Layout Anatomy

```
┌──────────────────────────────────┐
│         STATUS BAR (48px)        │
├──────────────────────────────────┤
│  ← Back button (padding: 0 24)  │
│                                  │
│  Progress bar (if applicable)    │
│                                  │
│  ╔════════════════════════════╗  │
│  ║                            ║  │
│  ║    SCROLLABLE CONTENT      ║  │
│  ║    padding: 0 24px         ║  │
│  ║                            ║  │
│  ╚════════════════════════════╝  │
│                                  │
├──────────────────────────────────┤
│  CTA BUTTON (padding: 14 24 36) │
│  border-top: 1px separator      │
└──────────────────────────────────┘
```

### Screen Types

| Type | Structure | Examples |
|------|-----------|---------|
| **Dark hero** | Full dark bg, centered content, no scroll | Splash, Credit Check, Success |
| **Form** | Light bg, top title, scroll area, sticky CTA at bottom | Register, Personal, Employment, Expenses |
| **Split** | Dark header transitioning into light scroll body | Offer, Dashboard |
| **Progress** | Light bg, centered stepper/progress visualization | Underwriting |
| **Result** | Light bg, centered score/badge, detail card below | Credit Result, Approved |

---

## 6. Visual Effects

### Glassmorphism — The Signature Surface

Every card, panel, and container uses a frosted glass treatment:

**Standard Glass:**
```css
background: rgba(255, 255, 255, 0.52);       /* 0.68 for Fintech */
backdrop-filter: blur(24px) saturate(180%);
-webkit-backdrop-filter: blur(24px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.48);  /* 0.55 for Fintech */
box-shadow:
  0 4px 24px rgba(0, 0, 0, 0.045),
  0 1px 3px rgba(0, 0, 0, 0.02),
  inset 0 1px 0 rgba(255, 255, 255, 0.55);
```

**Strong Glass** (bottom bars, headers):
```css
background: rgba(255, 255, 255, 0.70);       /* 0.82 for Fintech */
/* Same blur, border, shadow as standard */
```

### Shadow Hierarchy

| Level | Shadow | Usage |
|-------|--------|-------|
| **Resting** | `0 4px 24px rgba(0,0,0,0.045)` | Cards, panels at rest |
| **Hover** | `0 8px 32px rgba(0,0,0,0.07)` | Card hover, focused elements |
| **Accent Glow** | `0 2px 10px {accentShadow}` | Primary buttons resting |
| **Accent Hover** | `0 8px 24px {accentShadow}` | Primary buttons hovered |
| **Elevated** | `0 12px 48px rgba(0,0,0,0.12)` | Tooltips, popovers |
| **Modal** | `0 24px 64px rgba(0,0,0,0.12)` | Overlay panels |
| **Phone Shell** | `0 40px 100px rgba(0,0,0,0.15)` | Outer device frame |

**Rule:** Shadow opacity never exceeds 15%. Depth is suggested, never forced.

### Border Radius Scale

| Minimal | Fintech | Usage |
|---------|---------|-------|
| 6px | 6px | Pills, badges, small controls |
| 8px | 12px | Inputs, dropdowns |
| 10px | 14px | Buttons |
| 16px | 20px | Cards, panels |
| 48px | 48px | Phone shell |
| 999px | 999px | Full-pill shapes, avatar rings |

**Principle:** Fintech uses ~4px more radius everywhere, creating a softer, rounder feel.

### Decorative Background Elements

Both themes use **large circular outlines** as subtle background decoration on dark hero screens:

```
Position: absolute (overflowing viewport edges)
Border: 1px solid {splashCircle opacity}
Border-radius: 50%
Size: 220–320px
pointer-events: none
```

Fintech adds **additional concentric arcs** for a more layered orbital effect.

A **radial gradient glow** adds warmth:
```
background: radial-gradient(circle, {splashGlow} 0%, transparent 70%)
Size: ~120px
```

---

## 7. Component Library

### Status Bar

```
Height: 48px
Content: time (left), signal bars (right)
Dark variant: semi-transparent dark bg
Light variant: transparent
Font: 13px / 600
```

### Navigation — Back Button

```
Element: <button>
Icon: ArrowLeft (Lucide), 14px, strokeWidth 2
Label: "חזרה" (9–11px, weight 500)
Color: Text 4 (subtle)
Padding: 8px 0
Background: none
```

### Progress Bar

```
Container: flex row, gap 4px
Segments: equal flex, height 3px, radius 999
Active: accent color
Inactive: rgba(0,0,0,0.06)
Label below: "שלב X מתוך Y" — 9px, uppercase, wide-spaced
Transition: background 0.4s ease-out
```

### Input Field

| State | Background | Border | Shadow |
|-------|-----------|--------|--------|
| **Rest** | rgba(255,255,255,0.60) | 1px controlBorder | none |
| **Focus** | controlHover | 1px accent | 0 0 0 3px accentGlow |

```
Height: 44px
Padding: 0 14px
Font: 13px / 400
Radius: inputRadius token
Direction: rtl
Label above: 9px / 600 / uppercase / wide-spaced / Text 3
```

### Select (Dropdown)

Same dimensions as Input. Custom chevron SVG via `background-image`, positioned `left 12px center`. `appearance: none`.

### Primary Button

| State | Background | Shadow | Transform |
|-------|-----------|--------|-----------|
| **Rest** | accent | 0 2px 10px accentShadow | none |
| **Hover** | accentHover | 0 8px 24px accentShadow | translateY(−1px) |
| **Disabled** | rgba(0,0,0,0.06) | none | none |

```
Height: 48px
Width: 100% (full bleed in form CTAs)
Font: 13px / 600 / white
Radius: btnRadius token
Transition: all 0.25s ease-out
```

### Ghost Button

```
Height: 44px
Background: rgba(255,255,255,0.50) → 0.85 on hover
Border: 1px controlBorder
Color: Text 2
Font: 13px / 500
```

### Toggle (Segmented Control)

```
Container: flex, background rgba(0,0,0,0.04), radius inputRadius+2, padding 3px
Segment height: 38px
Active: white bg, Text 1, weight 600, shadow
Inactive: transparent, Text 3, weight 400
Transition: all 0.25s ease-out
```

### Glass Card

```
Standard glass surface
Radius: cardRadius token
Padding: 14–18px
Used for: info boxes, document rows, stat grids, payment history
```

### Document Upload Row

```
Layout: flex row, gap 12
Left: 40×40 icon box (rounded, accent or gray bg)
Center: label (13px/600) + status (10px, colored)
Right: action text or check icon
Border: 1.5px (accent when uploaded, border when not)
Background: accentSoft when uploaded, glass when not
```

### Dashboard Stat Card

```
Layout: 2×2 CSS grid, gap 10px
Each card: glass surface, cardRadius-2
Icon: 16px Lucide, accent color, strokeWidth 1.5
Value: 16px / 700, Text 1
Label: 9px / 500, Text 3
Padding: 13px 14px
```

### Bottom Tab Bar

```
Surface: glassStrong
Border-top: 1px separator
Padding: 8px 16px 24px (safe area)
Layout: space-around flex
Each tab: icon (18px) + label (9px)
Active: accent color, weight 700, full opacity
Inactive: Text 3, weight 400, 30% opacity
```

---

## 8. Iconography

### Library: Lucide React

All icons use [Lucide](https://lucide.dev) — an open-source icon set with consistent 24px grid, 2px stroke, rounded caps and joins.

### Standard Properties

| Context | Size | StrokeWidth | Color |
|---------|------|-------------|-------|
| **Inline with text** | 12px | 1.5 | inherits text color |
| **Card icon** | 16px | 1.5 | accent or Text 3 |
| **Feature icon** | 18px | 1.5 | white or Text 3 |
| **Hero icon** | 28–40px | 1.2–1.5 | accent or white |
| **Success checkmark** | 40px | 2.5 | white on green circle |
| **Tab bar** | 18px | 1.5 (inactive) / 2 (active) | accent or Text 3 |

### Icon Inventory

| Icon | Lucide Name | Usage |
|------|-------------|-------|
| Lock | `Lock` | Security badges |
| Lightning | `Zap` | Speed badges |
| Card | `CreditCard` | Payment, fees |
| Clipboard | `ClipboardList` | Info boxes, underwriting |
| Document | `FileText` | Pay slips, documents tab |
| Bank | `Landmark` | Bank statements |
| ID | `IdCard` | Identity documents |
| House | `Home` | Rental agreements |
| Chat | `MessageSquare` | SMS notifications |
| Check | `Check` | Confirmations, completions |
| Sparkle | `Sparkles` | Success celebrations |
| Bell | `Bell` | Notifications |
| Chart | `BarChart3` | Interest rates, stats |
| Star | `Star` | Credit score |
| Circle Check | `CheckCircle` | Completed payments |
| Grid | `LayoutGrid` | Home tab |
| List | `List` | Payments tab |
| User | `CircleUser` | Profile tab |
| Shield | `Shield` | Privacy notices |
| Arrow Left | `ArrowLeft` | Back navigation |

**Rule:** No emojis, ever. Every pictorial element is a Lucide icon.

---

## 9. Animation & Motion

### Easing Functions

| Name | Curve | Character |
|------|-------|-----------|
| **Ease Out** | `cubic-bezier(0.22, 1, 0.36, 1)` | The default. Smooth deceleration. |
| **Spring** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Slight overshoot. For celebrations. |
| **Linear** | `linear` | Spinners only. |

### Duration Scale

| Context | Duration |
|---------|----------|
| Color, opacity, shadow changes | 200–250ms |
| Transform (move, scale) | 300–500ms |
| Screen transition | 300ms |
| Staggered entrance (per item) | 80–100ms delay increment |
| Loading spinner rotation | 800ms per revolution |
| Celebration entrance | 500–600ms with spring easing |

### Screen Transitions

```css
/* Forward navigation */
@keyframes slideInFwd {
  from { opacity: 0; transform: translateX(-24px) scale(0.98); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
}

/* Backward navigation */
@keyframes slideInBck {
  from { opacity: 0; transform: translateX(24px) scale(0.98); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
}
```

### Micro-interactions

| Element | Trigger | Animation |
|---------|---------|-----------|
| Primary button | hover | translateY(−1px), shadow increase |
| Glass card | hover | shadow increase (optional) |
| Progress bar segment | enter viewport | width 0→value over 700ms, staggered |
| Credit score circle | mount | scale(0.5)→scale(1) with spring |
| Success checkmark | mount | scale(0.4)→scale(1) with spring, 500ms |
| Step indicator | progress | background transition 400ms |
| Content blocks | mount | opacity 0→1, translateY(20px)→0, staggered |

### Loading States

**Credit check spinner:**
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}
/* 72px circle, 3px border, top border = accent, 800ms linear infinite */
```

**Pulsing active step:**
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.08); opacity: 0.85; }
}
/* 1.5s ease infinite */
```

---

## 10. Dark Surface System

Several screens use a dark mode surface (Splash, Credit Check, Offer header, Success, Dashboard header). These surfaces have their own sub-system:

### Dark Surface Tokens

| Token | Minimal | Fintech |
|-------|---------|---------|
| Background | `#0f172a → #1e293b` | `#312e81 → #4338ca → #6366f1` |
| Card | `rgba(255,255,255,0.06)` | `rgba(255,255,255,0.10)` |
| Card Border | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.15)` |
| Text | `rgba(255,255,255,0.45)` | `rgba(255,255,255,0.55)` |
| Text Dim | `rgba(255,255,255,0.35)` | `rgba(255,255,255,0.40)` |
| Text Label | `rgba(255,255,255,0.40)` | `rgba(255,255,255,0.50)` |

### Dark-to-Light Transition

When a screen has a dark header and light body (Offer, Dashboard), the light section overlaps the dark with a negative margin and generous top border-radius:

```
margin-top: -18px
border-radius: {cardRadius + 4}px {cardRadius + 4}px 0 0
position: relative
z-index: 1
```

---

## 11. Responsive & Platform Notes

### Target Device

The primary target is a **390 × 844px** viewport (iPhone 14/15 class) displayed inside a phone shell for demo/presentation purposes.

### Phone Shell

```
Width: 390px
Height: 844px
Border-radius: 48px
Background: phoneBg token
Shadow: 0 40px 100px rgba(0,0,0,0.15),
        0 0 0 1px rgba(0,0,0,0.06),
        inset 0 0 0 1px rgba(255,255,255,0.3)
Notch: 120×34px, centered, #000, radius 0 0 20px 20px
```

### RTL Specifics

- `direction: rtl` on root element
- `lang="he"` on HTML
- Back arrow points LEFT (user navigates by pressing left = going back in RTL)
- Text alignment defaults to `right`
- Range sliders: max label on left, min label on right
- OTP inputs: `direction: ltr` (numbers are LTR even in RTL context)

### Safe Areas

- **Top:** 48px status bar zone (no interactive content)
- **Bottom:** 36px padding below CTA buttons (home indicator zone)
- **Horizontal:** 24px padding (content never touches screen edges)

---

## 12. Content Architecture

### User Flow

```
Splash → Register → OTP → Personal → Employment → Expenses
  → Credit Check (auto) → Credit Result → Offer
  → Documents → Underwriting (auto) → Approved
  → Contract → Bank Setup → Success → Dashboard → Payments
```

**17 screens total.** 2 are auto-advancing (Credit Check, Underwriting). The rest require user action.

### Screen Inventory

| # | Screen | Type | Dark/Light |
|---|--------|------|------------|
| 1 | Splash | Hero | Dark |
| 2 | Register | Form | Light |
| 3 | OTP | Form | Light |
| 4 | Personal | Form | Light |
| 5 | Employment | Form | Light |
| 6 | Expenses | Form | Light |
| 7 | Credit Check | Loading | Dark |
| 8 | Credit Result | Result | Light |
| 9 | Offer | Split | Dark → Light |
| 10 | Documents | Form | Light |
| 11 | Underwriting | Progress | Light |
| 12 | Approved | Result | Light |
| 13 | Contract | Form | Light |
| 14 | Bank Setup | Form | Light |
| 15 | Success | Hero | Dark |
| 16 | Dashboard | Split | Dark → Light |
| 17 | Payments | Form | Light |

---

## 13. Do's & Don'ts

### DO

- Use the frosted glass surface for every card and container
- Keep shadows at 4–8% opacity maximum for resting state
- Use wide letter-spacing (0.06–0.12em) on uppercase micro-labels
- Leave generous whitespace — the beauty comes from breathing room
- Use accent color sparingly — only for primary actions and key data
- Use Lucide icons consistently (same size and strokeWidth per context)
- Stagger entrance animations by 80–100ms per item
- Use negative letter-spacing on headlines for a tight, premium feel
- Keep dark surfaces for hero/feature moments, not everyday forms
- Use semi-transparent whites for layering (never opaque white cards)

### DON'T

- Use pure black (`#000000`) — darkest is `#0f172a` or `#1e1b4b`
- Use pure white backgrounds — always tint with blue-gray or lavender
- Use emojis — every pictorial element is a Lucide icon
- Use thick borders — maximum 1.5px, most are 1px at low opacity
- Use heavy drop shadows — this aesthetic is about whispered depth
- Use font weights above 700 — no extra-bold or black weights
- Use more than one accent color per screen
- Overcrowd any screen — if it feels full, it needs an additional step
- Mix themes within a single view — each screen is fully one theme
- Use decorative typefaces — system fonts or Noto Sans Hebrew only

---

## 14. Asset Checklist

| Asset | Format | Status |
|-------|--------|--------|
| Logo mark (₪ container) | SVG / React component | Implemented inline |
| Icon library | Lucide React | Installed (`lucide-react`) |
| Font | Noto Sans Hebrew | Google Fonts CDN |
| Color tokens | JS object / CSS custom properties | Defined in `themes` object |
| Animations | CSS @keyframes | Defined in `index.css` |
| Phone shell | React inline styles | Implemented in `App.jsx` |

---

## 15. Implementation Reference

### File Structure

```
src/
├── App.jsx          ← All screens, themes, components
├── index.css        ← Global reset, font import, keyframes
├── main.jsx         ← React entry point
index.html           ← RTL configuration, meta
BRAND-BOOK.md        ← This document
DESIGN-GUIDE.md      ← Original design guide (component-level detail)
```

### Theme Switching (Code Pattern)

```jsx
const ThemeContext = createContext(themes.minimal);
const useTheme = () => useContext(ThemeContext);

// In any component:
const C = useTheme();
// Then use C.accent, C.t1, C.glass, etc.
```

Themes are hot-swappable with no page reload. All components re-render with new tokens instantly via React Context.

---

*Last updated: March 2026*
*Version: 1.0*
