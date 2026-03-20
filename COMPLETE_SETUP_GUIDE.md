# Complete Setup Guide: SEO, Analytics & Search Console
## New Google Account — Step by Step

This guide walks you through setting up SEO, analytics, and Search Console from scratch. Follow each step in order.

---

# PART A: GOOGLE ACCOUNT & PROPERTIES

## Step 1: Create or Sign In to Google Account

1. Go to [google.com](https://www.google.com)
2. Click **Sign in** (top right)
3. Either sign in with an existing account or click **Create account**
4. Complete account creation (name, email, password)
5. Verify your email if prompted

---

## Step 2: Create Google Analytics 4 (GA4) Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click **Get started** (or **Start measuring**)
4. You’ll see the **Account setup** screen

### 2a. Create Account

1. **Account name:** e.g. "My Marketing" or "MoGo 4 Marketing"
2. Select data sharing settings (or leave defaults)
3. Click **Next**

### 2b. Create Property

1. **Property name:** e.g. "MoGo 4 Landing Page"
2. **Reporting time zone:** Your timezone (e.g. East Africa, UTC+3)
3. **Currency:** Your currency (e.g. USD)
4. Click **Next**

### 2c. Business Details

1. **Industry category:** e.g. "Consumer electronics" or "Technology"
2. **Business size:** Select your size
3. **Goals:** e.g. "Get baseline reports", "Measure customer engagement"
4. Click **Create**
5. Accept Terms of Service if shown

### 2d. Create Data Stream

1. **Platform:** Click **Web**
2. **Website URL:** e.g. `https://mogo4-landing.netlify.app`
3. **Stream name:** e.g. "xgimi portable projector" (or your preference)
4. Click **Create stream**
5. **IMPORTANT:** Copy and save your **Measurement ID** (format: `G-XXXXXXXXXX`)

---

## Step 3: Add Measurement ID to Your Site

1. Open `index.html` in your project
2. Find both occurrences of `G-XXXXXXXXXX`
3. Replace both with your Measurement ID
4. Save the file
5. Run `npm run build` and deploy your site

---

## Step 4: Verify GA4 Is Receiving Data

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your property
3. Click **Reports** → **Realtime** (left sidebar)
4. Open your live site in another tab
5. Within 1–2 minutes, Realtime should show 1 active user
6. If yes, GA4 is working

---

# PART B: GOOGLE SEARCH CONSOLE

## Step 5: Add Your Site to Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with the same Google account
3. Click **Add property**

### 5a. Choose Property Type

1. Select **URL prefix** (not Domain)
2. Enter your full site URL: `https://mogo4-landing.netlify.app`
3. Click **Continue**

### 5b. Verify Ownership

Choose **HTML tag** method:

1. Search Console will show a meta tag, e.g.:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXX" />
   ```
2. Copy the **content** value (the long string after `content=`)

3. Add it to your site:
   - Open `index.html`
   - Inside `<head>`, add (replace with your actual content value):
   ```html
   <meta name="google-site-verification" content="YOUR_CONTENT_VALUE_HERE" />
   ```
4. Save, build, and deploy
5. Return to Search Console
6. Click **Verify**

**Alternative verification methods (if HTML tag is hard):**
- **HTML file:** Download the file, put it in your `public/` folder, deploy, then verify
- **Google Analytics:** If GA4 is on the site and you have Edit access, this can verify automatically
- **Google Tag Manager:** If GTM is on the site and you have Publish permission

---

## Step 6: Submit Sitemap in Search Console

1. After verification, you’ll see your property dashboard
2. In the left sidebar, click **Sitemaps**
3. Under "Add a new sitemap", you’ll see a prefix like `https://mogo4-landing.netlify.app/`
4. In the text box, enter: **sitemap.xml** (not the full URL)
5. Click **Submit**
6. Status may show "Succeeded" or "Couldn't fetch" initially—"Succeeded" means it’s accepted

---

## Step 7: Link Search Console to GA4 (Optional but Useful)

1. In **GA4**, go to **Admin** → **Product links** (under Property)
2. Find **Search Console links**
3. Click **Link**
4. Select your Search Console property
5. Choose the web stream
6. Click **Submit**

This lets you see search data in GA4 reports.

---

# PART C: GOOGLE TAG MANAGER (Optional)

## Step 8: Create GTM Account & Container

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Click **Create Account**
3. **Account name:** e.g. "MoGo 4 Marketing"
4. **Container name:** e.g. "MoGo 4 Landing Page"
5. **Target platform:** Web
6. Click **Create**
7. Accept Terms of Service
8. Copy the **GTM-XXXXXXX** container ID

---

## Step 9: Add GTM to Your Site (If Not Already Added)

1. GTM will show two code snippets
2. **Snippet 1 (head):** Goes in `<head>` — you already have this
3. **Snippet 2 (body):** Goes right after `<body>` — you already have this
4. If not, add both snippets to `index.html` as instructed by GTM
5. Replace the container ID with yours if different
6. Build and deploy

---

## Step 10: GA4 Configuration Tag in GTM

1. In GTM, click **Tags** → **New**
2. Click the tag configuration area
3. Choose **Google Analytics: GA4 Configuration**
4. **Measurement ID:** Paste your GA4 Measurement ID
5. Click the trigger area → **All Pages**
6. **Tag name:** "GA4 - Configuration"
7. Click **Save**
8. Click **Submit** (top right) → **Publish**

*Note: If you already have direct gtag in index.html, you can skip the GA4 Config tag in GTM to avoid duplicate data.*

---

# PART D: SEO STRATEGY — WHAT'S ALREADY DONE VS. YOUR TASKS

## On-Page SEO (Already in Your Code)

| Item | Status | Location |
|------|--------|----------|
| Title tag | Done | `index.html` |
| Meta description | Done | `index.html` |
| H1/H2 hierarchy | Done | Components |
| Canonical URL | Done | `index.html` |
| Open Graph tags | Done | `index.html` |
| Twitter Card tags | Done | `index.html` |
| JSON-LD Product schema | Done | `index.html` |
| Image alt text | Check | Ensure all images have `alt` |
| Internal links | Done | Single page — N/A |

**Your task:** Go through each component and ensure every `<img>` has a descriptive `alt` attribute.

---

## Technical SEO (Already in Your Code)

| Item | Status | Location |
|------|--------|----------|
| Sitemap | Done | `public/sitemap.xml` |
| robots.txt | Done | `public/robots.txt` |
| Mobile-friendly | Done | Viewport + responsive CSS |
| HTTPS | Done | Netlify provides it |

**Your task:** 
1. Update `sitemap.xml` and `robots.txt` if your URL changes
2. Test speed: [pagespeed.web.dev](https://pagespeed.web.dev) — enter your URL
3. In Search Console: **URL Inspection** → enter your URL → check indexing status

---

## Off-Page SEO (Your Ongoing Tasks)

| Task | Action |
|------|--------|
| **Backlinks** | Reach out to projector/tech blogs for reviews or links. Submit to product directories (G2, Capterra, Product Hunt). |
| **Social profiles** | Create XGIMI/MoGo 4 accounts on Twitter, Instagram, YouTube, Facebook. Add your site URL in bios. |
| **Directory listings** | Submit to Google Business Profile, tech directories, electronics listings. |
| **Guest posts** | Write for projector/home theater blogs; include a link to your site. |
| **Brand mentions** | Ask customers for reviews, use hashtags, engage in Reddit/AVS Forum when relevant. |

---

# PART E: ANALYTICS FRAMEWORK — KPIs & MEASUREMENT

## Step 11: KPIs You’re Tracking

| KPI | What It Means | Where in GA4 |
|-----|---------------|--------------|
| **Sessions** | Visits to your site | Reports → Acquisition → User acquisition |
| **Users** | Unique visitors | Reports → Acquisition → User acquisition |
| **Traffic sources** | Where users come from (organic, direct, referral) | Reports → Acquisition → Traffic acquisition |
| **Bounce rate** | % who leave without interaction | Reports → Engagement → Overview |
| **Avg. session duration** | Time spent on site | Reports → Engagement → Overview |
| **buy_now_click** | CTA clicks (conversion) | Reports → Engagement → Events |
| **newsletter_signup** | Newsletter signups (conversion) | Reports → Engagement → Events |
| **watch_video_click** | Watch Video clicks | Reports → Engagement → Events |
| **scroll_depth** | 25%, 50%, 75%, 100% scroll | Reports → Engagement → Events |

---

## Step 12: Mark Key Events (Conversions) in GA4

1. In GA4, go to **Admin** → **Events**
2. Find **buy_now_click** in the list
3. Toggle **Mark as key event** (star icon) to ON
4. Find **newsletter_signup**
5. Toggle **Mark as key event** to ON
6. These will appear in **Reports → Engagement → Conversions**

*Note: Events show up 24–48 hours after they first fire. Trigger them on your live site first.*

---

## Step 13: Search Console — Key Reports

1. **Performance** — Queries, pages, countries, devices
2. **Index** → **Pages** — Indexing status
3. **Index** → **Sitemaps** — Sitemap status
4. **Experience** → **Core Web Vitals** — Page speed metrics
5. **Enhancements** → **Mobile usability** — Mobile issues

---

## Step 14: Create Custom Reports in GA4 (Optional)

1. **Reports** → **Explore** (left sidebar)
2. Click **Blank** or **Free form**
3. Add dimensions (e.g. Event name, Session source)
4. Add metrics (e.g. Event count, Users)
5. Save for future use

---

# PART F: CHECKLIST SUMMARY

## One-Time Setup

- [ ] Google account created/signed in
- [ ] GA4 account + property + web stream created
- [ ] Measurement ID copied
- [ ] Measurement ID added to `index.html` (replace G-XXXXXXXXXX)
- [ ] Site built and deployed
- [ ] GA4 Realtime shows data
- [ ] Search Console property added
- [ ] Ownership verified (HTML tag or other method)
- [ ] Sitemap submitted (sitemap.xml)
- [ ] Search Console linked to GA4
- [ ] GTM container added (if using GTM)
- [ ] Trigger buy_now_click, newsletter_signup on live site
- [ ] Wait 24–48 hours for events to appear in GA4
- [ ] Mark buy_now_click and newsletter_signup as key events

## Ongoing

- [ ] Check GA4 weekly: Sessions, events, conversions
- [ ] Check Search Console weekly: Queries, indexing, issues
- [ ] Add image alt text where missing
- [ ] Run PageSpeed Insights monthly
- [ ] Work on off-page SEO (backlinks, social, directories)

---

# PART G: TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| No data in GA4 Realtime | Verify Measurement ID, check ad blockers, ensure site is deployed |
| Events not in GA4 Events list | Trigger events on live site; wait 24–48 hours |
| Search Console "Couldn't fetch" sitemap | Check URL is correct; ensure sitemap is at /sitemap.xml |
| Verification failed | Recheck meta tag or HTML file; ensure it's on the live site |
| Duplicate page views | Remove GA4 Configuration tag from GTM if using direct gtag |

---

*Last updated for MoGo 4 Landing Page project.*
