# Nexorra Studio — Premium Design Guide

> Use this document as a prompt/reference when building or refining the Nexorra Studio website.

---

## 🎨 Design Philosophy

Nexorra Studio is a **premium digital product design & development agency**. The website must feel like a high-end studio portfolio — sharp, atmospheric, and confident. Think **Arounda Agency**, **Ramotion**, **Cuberto** level polish.

**Core Aesthetic:** Dark, atmospheric, editorial luxury with surgical precision.

---

## 🔤 Typography

### Primary Font Pairing

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| **Display / Headlines** | **Playfair Display** (Google Fonts) | 400 Italic, 600 Italic | Hero headlines, section titles, emphasized words |
| **Body / UI** | **Inter** (Google Fonts) | 300, 400, 500, 600, 700 | Body text, navigation, buttons, labels |

### Typography Rules

- **Hero headline:** 5.5rem+ (88px) on desktop, semibold Inter with select words in Playfair Display italic inside glassmorphism pills
- **Section headers:** 3rem–3.5rem (48–56px), semibold
- **Body text:** 0.875rem–1rem (14–16px), regular weight, muted color
- **Labels / Tags:** 0.75rem (12px), uppercase, letter-spacing: 0.25–0.3em
- **Line height:** Headlines 1.1, Body 1.6–1.7
- **Never use more than 2 font families**

### Alternative Premium Font Options

If you want to swap fonts, consider these premium pairings:

| Display Font | Body Font | Vibe |
|-------------|-----------|------|
| **Cormorant Garamond** (italic) | **Satoshi** or **General Sans** | Classic luxury |
| **Editorial New** | **Neue Montreal** | High fashion editorial |
| **Instrument Serif** (italic) | **Inter** | Modern elegance |
| **Fraunces** (italic) | **Space Grotesk** | Warm premium |
| **Clash Display** | **Cabinet Grotesk** | Bold contemporary |

---

## 🎨 Color System

### Core Palette (HSL)

```css
--background: 220 20% 4%;          /* Near-black with blue undertone */
--foreground: 0 0% 95%;            /* Off-white text */
--card: 220 18% 7%;                /* Slightly lighter cards */
--primary: 72 100% 50%;            /* Lime/Chartreuse accent — bold and electric */
--primary-foreground: 220 20% 4%;  /* Dark text on primary */
--secondary: 220 15% 12%;          /* Subtle elevated surface */
--muted-foreground: 220 10% 55%;   /* Dimmed text */
--border: 220 15% 15%;             /* Subtle borders */
--text-dim: 220 10% 45%;           /* Very muted labels */
```

### Atmospheric Gradients

```css
/* Hero background glow — deep blue/purple radial */
background: radial-gradient(ellipse 70% 50% at 50% 45%, 
  hsla(250, 70%, 20%, 0.6) 0%, 
  hsla(230, 60%, 12%, 0.3) 40%, 
  transparent 75%);

/* Secondary glow layer */
background: radial-gradient(ellipse 40% 35% at 45% 50%, 
  hsla(260, 80%, 30%, 0.25) 0%, 
  transparent 70%);

/* Text gradient for emphasis */
background: linear-gradient(135deg, hsl(280, 80%, 70%), hsl(330, 80%, 70%), hsl(72, 100%, 50%));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Button glow shadow */
box-shadow: 0 0 60px -15px hsl(72 100% 50% / 0.2);
```

### Color Rules

- **Never use pure black (#000)** — always use the deep blue-black background
- **Never use pure white (#fff)** — use off-white (95% lightness)
- **Accent color (lime) used sparingly** — stat numbers, buttons, hover states, key highlights
- **Borders are nearly invisible** — 15% lightness, only for structure

---

## ✨ Animations (Framer Motion)

### Philosophy

Animations should feel **effortless and confident** — not bouncy or playful. Think Apple-level restraint with Arounda-level atmosphere.

### Recommended Animation Patterns

#### 1. Staggered Fade-Up (Hero & Section Entries)
```tsx
// Each element fades up with increasing delay
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.15 * index }}
```

#### 2. Scroll-Triggered Reveals (Sections)
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: index * 0.1 }}
```

#### 3. Infinite Marquee (Logo Strip)
```css
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
animation: marquee 30s linear infinite;
/* Pause on hover */
&:hover { animation-play-state: paused; }
```

#### 4. Floating/Breathing (Scroll Arrows, Decorative Elements)
```tsx
animate={{ y: [0, 4, 0] }}
transition={{ repeat: Infinity, duration: 2 }}
```

#### 5. Hover State Transitions
```tsx
// Card border glow on hover
className="hover:border-primary/30 transition-all duration-500"

// Icon container color shift
className="group-hover:bg-primary/10 transition-colors"
```

### Animation Timing Guidelines

| Element | Duration | Delay | Easing |
|---------|----------|-------|--------|
| Hero headline | 0.9s | 0.15s | ease-out |
| Hero subtext | 0.6s | 0.5s | ease-out |
| Section headers | 0.6s | 0s | ease-out |
| Cards (staggered) | 0.6s | i × 0.1s | ease-out |
| Tags/pills | 0.6s | 0.7s | ease-out |
| Hover transitions | 0.3–0.5s | 0s | ease |

### Animation Rules

- **Never use bounce easing** — always ease-out or custom cubic-bezier
- **Never animate more than 3 properties at once**
- **Scroll animations fire once** (`viewport={{ once: true }}`)
- **Keep durations between 0.3s–0.9s** — nothing longer
- **Stagger delays: 0.1s between siblings**

---

## 🏗️ Layout & Spacing

### Grid System
- Max container width: **1400px**, centered
- Horizontal padding: **1.5rem (24px)** on mobile, **2rem** on desktop
- Section vertical padding: **6rem (96px)** mobile, **8rem (128px)** desktop
- Card grid gap: **1.5rem (24px)**

### Component Patterns

#### Glassmorphism Pills (Keyword Highlights)
```tsx
<span className="inline-block rounded-full border border-border/60 px-5 py-1 
  bg-secondary/40 backdrop-blur-sm">
  <em className="font-display italic font-normal">keyword</em>
</span>
```

#### Section Header Pattern
```tsx
<p className="text-xs uppercase tracking-[0.3em] text-dim mb-4">Label</p>
<h2 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-tight">
  Main text <em className="font-display italic font-normal">emphasized</em>
</h2>
```

#### Card Pattern
```tsx
<div className="rounded-2xl bg-card border border-border p-8 md:p-10 
  hover:border-primary/30 transition-all duration-500">
```

#### CTA Button
```tsx
<a className="rounded-full bg-primary text-primary-foreground px-8 py-4 
  text-sm font-semibold hover:brightness-110 transition-all 
  shadow-[0_0_60px_-15px_hsl(72_100%_50%_/_0.2)]">
  Book a Call
</a>
```

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + CSS custom properties |
| Components | shadcn/ui (customized) |
| Animations | Framer Motion |
| Icons | Lucide React |

---

## ❌ Anti-Patterns (Never Do This)

- ❌ Purple gradients on white backgrounds (generic AI look)
- ❌ Rounded-full avatars with stock photos
- ❌ Card shadows on dark backgrounds (use border glow instead)
- ❌ More than 2 accent colors
- ❌ Bouncy/springy animations
- ❌ Gradients on every element
- ❌ Text smaller than 12px
- ❌ Using Inter for everything (mix with Playfair Display)
- ❌ Centered body text (left-align body copy)
- ❌ Generic "Lorem ipsum" placeholder content

---

## ✅ Premium Checklist

- [ ] Deep atmospheric background with radial glows
- [ ] Massive hero headline (5rem+) with keyword pills
- [ ] Staggered fade-up animations on page load
- [ ] Scroll-triggered section reveals
- [ ] Glassmorphism navbar with backdrop-blur
- [ ] Lime/chartreuse accent used sparingly
- [ ] Logo marquee with smooth infinite scroll
- [ ] Stats section with large accent-colored numbers
- [ ] Service cards with icon + tag pills
- [ ] Testimonial cards with initials avatars
- [ ] Full-width CTA section with glow button
- [ ] Minimal footer with social links
- [ ] Smooth hover transitions on all interactive elements
- [ ] Consistent 0.75rem border-radius on cards
- [ ] Dark mode only (no light mode toggle needed)

---

*Generated for Nexorra Studio — www.nexorrastudio.com*
