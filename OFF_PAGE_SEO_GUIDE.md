# Off-Page SEO & Analytics Framework Guide

## Part 1: Off-Page SEO (Outside Your Site)

### 1. Backlinks – Get links from relevant sites

| Action | How to do it |
|--------|--------------|
| **Product review sites** | Submit MoGo 4 to CNET, TechRadar, Wirecutter, Tom's Guide, PCMag. Reach out to their editorial teams or use their product submission forms. |
| **Affiliate/partner sites** | Partner with projector, home theater, or outdoor gear blogs. Offer them affiliate links or review units. |
| **XGIMI official** | Ask XGIMI to link to your landing page from their regional site, press releases, or partner pages. |
| **Press releases** | Use PR Newswire, Business Wire, or regional equivalents. Include your URL in the release. |
| **Broken link building** | Find projector-related pages with broken links; suggest your page as a replacement. |

**Tools:** Ahrefs, Moz, SEMrush (to find backlink opportunities and track links).

---

### 2. Social profiles – Create XGIMI/MoGo 4 presence

| Platform | Action |
|----------|--------|
| **X (Twitter)** | Create @XGIMIMoGo4 or similar. Share product updates, use cases, customer photos. |
| **Instagram** | Post lifestyle shots (outdoor, bedroom, gaming). Use hashtags: #portableprojector #MoGo4 #XGIMI. |
| **YouTube** | Create a channel. Upload demos, unboxing, comparison videos. Link to your landing page in descriptions. |
| **Facebook** | Create a Page. Run ads, share reviews, join projector/home theater groups (where allowed). |
| **LinkedIn** | If targeting B2B or pro users, post product updates and case studies. |
| **TikTok** | Short clips of setup, outdoor use, “limitless play” moments. |

**Tip:** Add your landing page URL to all profile bios and link in posts.

---

### 3. Directory listings – Submit to product/tech directories

| Type | Examples |
|------|----------|
| **Product directories** | G2, Capterra, GetApp, Software Advice (if applicable) |
| **Tech/electronics** | Product Hunt, AlternativeTo (for streaming/entertainment angle) |
| **Local/regional** | Google Business Profile, Yelp, regional tech directories |
| **Niche** | ProjectorCentral, AVS Forum (if they have product listings) |

**Action:** Create a short, consistent description and use your landing page URL everywhere.

---

### 4. Guest posts – Write for projector/tech blogs

| Step | Action |
|------|--------|
| **Find sites** | Search “portable projector blog”, “home theater blog”, “outdoor entertainment”. |
| **Pitch topics** | “Best portable projectors 2026”, “Outdoor movie night setup”, “MoGo 4 vs [competitor]”. |
| **Include link** | Add 1–2 contextual links to your landing page in the article. |
| **Be useful** | Focus on value (tips, comparisons) rather than pure promotion. |

**Tools:** Hunter.io (find editor emails), BuzzStream (outreach).

---

### 5. Brand mentions – Encourage reviews and mentions

| Action | How |
|--------|-----|
| **Reviews** | Ask buyers to review on Amazon, XGIMI site, Google. Include a short link in post-purchase emails. |
| **User-generated content** | Run contests: “Share your MoGo 4 setup” with a hashtag. Feature best posts. |
| **Influencers** | Send units to tech/outdoor YouTubers and Instagrammers for honest reviews. |
| **Forums & communities** | Participate in Reddit (r/projectors, r/hometheater), AVS Forum. Answer questions and mention MoGo 4 when relevant. |

---

## Part 2: Analytics Framework – GTM Setup

### GA4 events now tracked in code

| Event name | When it fires | Parameters |
|------------|---------------|------------|
| `buy_now_click` | User clicks “Buy Now” | `cta_location`: "hero" or "header" |
| `watch_video_click` | User clicks “Watch Video” | — |
| `newsletter_signup` | User submits newsletter form | — |
| `scroll_depth` | User scrolls to 25%, 50%, 75%, or 100% | `depth_percent`: 25, 50, 75, or 100 |

### Configure in Google Tag Manager

1. **GA4 Event tag – buy_now_click**
   - Tag type: Google Analytics: GA4 Event  
   - Event name: `buy_now_click`  
   - Trigger: Custom Event → Event name = `buy_now_click`

2. **GA4 Event tag – watch_video_click**
   - Event name: `watch_video_click`  
   - Trigger: Custom Event → `watch_video_click`

3. **GA4 Event tag – newsletter_signup**
   - Event name: `newsletter_signup`  
   - Trigger: Custom Event → `newsletter_signup`

4. **GA4 Event tag – scroll_depth**
   - Event name: `scroll_depth`  
   - Trigger: Custom Event → `scroll_depth`

5. **Mark as conversions (GA4 Admin)**
   - In GA4: Admin → Events → Mark `buy_now_click` and `newsletter_signup` as conversions.

---

## Part 3: Where to see your KPIs

| KPI | Where |
|-----|-------|
| Sessions, users, traffic sources | GA4 → Reports → Acquisition → User acquisition |
| Bounce rate, session duration | GA4 → Reports → Engagement → Overview |
| Scroll depth, CTA clicks | GA4 → Reports → Engagement → Events |
| Newsletter signups | GA4 → Reports → Engagement → Events (filter: newsletter_signup) |
| Search impressions, clicks | Search Console → Performance |
| Indexing issues | Search Console → Index → Pages |
