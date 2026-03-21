# Basic SEO Implementation

This document describes the SEO elements implemented on the MoGo 4 landing page.

---

## 1. Title Tag

**Location:** `index.html` — `<head>`

**Implementation:**
```html
<title>XGIMI MoGo 4 | Portable Google TV Projector</title>
```

**Purpose:** Main page title shown in search results and browser tabs. Includes brand, product, and main benefit.

**Best practices applied:**
- 50–60 characters
- Brand + product + core benefit
- Clear and descriptive

---

## 2. Meta Description

**Location:** `index.html` — `<head>`

**Implementation:**
```html
<meta name="description" content="Experience the latest XGIMI MoGo 4 and MoGo 4 Pro portable projectors. 1080p resolution, built-in battery, and Google TV. Limitless play anywhere." />
```

**Purpose:** Short summary shown in search results.

**Best practices applied:**
- ~155 characters
- Includes product, main features, and benefit
- Compelling for click-through

---

## 3. Headers (H1, H2, H3)

### H1 (one per page)
**Location:** HeroSection.jsx

```html
<h1>XGIMI MoGo 4 <br /><span>Limitless Play.</span></h1>
```

**Purpose:** Single main page topic; supports SEO and accessibility.

---

### H2 (section titles)

| Section        | H2 Text                         | Component    |
|----------------|----------------------------------|--------------|
| Features       | Redefine Portable                | Features     |
| Features       | See the MoGo 4 in Action         | Features     |
| Features       | Cinematic Brilliance / Limitless Play Outdoors / Your Favorites, Built-in / Power Anywhere / Click, Click, BOOM | Features |
| Accessories    | Ready For Anywhere               | Accessories  |
| Products       | Choose Your MoGo                | Products     |
| Platform Rating| Rate Our Platform                | PlatformRating |
| Newsletter     | Join the Community               | Newsletter   |
| Comparison     | Which MoGo 4 is right for you?   | Comparison   |
| Footer         | XGIMI                            | Footer       |

---

### H3 (subsections)

| Section   | H3 Text               | Component    |
|-----------|------------------------|--------------|
| Features  | 550 ISO Lumens, 71Wh Battery, BT.2020 Contrast, Google TV | Features |
| Accessories | The Complete Ecosystem, In The Box | Accessories |
| Products  | MoGo 4, MoGo 4 Pro     | Products     |
| Comparison| MoGo 4, MoGo 4 Pro     | Comparison   |
| Platform  | Email Us Directly      | PlatformRating |
| Footer    | Products, Support     | Footer       |

---

## 4. Additional SEO Elements Implemented

| Element           | Location    | Status |
|-------------------|-------------|--------|
| Canonical URL     | index.html  | Done   |
| Open Graph tags   | index.html  | Done   |
| Twitter Card tags | index.html  | Done   |
| JSON-LD Product   | index.html  | Done   |
| Sitemap           | public/sitemap.xml | Done |
| robots.txt        | public/robots.txt  | Done |
| Viewport meta     | index.html  | Done   |
| lang attribute    | index.html  | `en`   |

---

## 5. Header Hierarchy

```
H1: XGIMI MoGo 4 — Limitless Play. (page title)
├── H2: Redefine Portable
│   ├── H3: 550 ISO Lumens
│   ├── H3: 71Wh Built-in Battery
│   ├── H3: 110% BT.2020 & 1000:1 Contrast
│   └── H3: Google TV Built-in
├── H2: See the MoGo 4 in Action
├── H2: Cinematic Brilliance / Limitless Play Outdoors / etc.
├── H2: Ready For Anywhere
│   ├── H3: The Complete Ecosystem
│   └── H3: In The Box
├── H2: Choose Your MoGo
│   ├── H3: MoGo 4
│   └── H3: MoGo 4 Pro
├── H2: Which MoGo 4 is right for you?
├── H2: Rate Our Platform
│   └── H3: Email Us Directly
├── H2: Join the Community
└── H2: XGIMI (Footer)
    ├── H3: Products
    └── H3: Support
```

---

## 6. Checklist

- [x] Title tag (50–60 chars)
- [x] Meta description (~155 chars)
- [x] Single H1 per page
- [x] H2 for main sections
- [x] H3 for subsections
- [x] Logical header order (no skipped levels)
- [x] Canonical URL
- [x] Open Graph
- [x] Twitter Card
- [x] JSON-LD Product
- [x] Sitemap
- [x] robots.txt

---

*Document version: 1.0 — MoGo 4 Landing Page*
