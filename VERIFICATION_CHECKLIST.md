# Verification Checklist — How to Check Each Section

Use this guide to confirm that each part of your setup is working correctly.

---

## C: Google Tag Manager — How to Check

| Check | How to verify |
|-------|----------------|
| **GTM is loaded** | 1. Open your live site<br>2. Right-click → **Inspect** (or F12)<br>3. Open **Console** tab<br>4. Type: `typeof google_tag_manager`<br>5. Should return: `"object"` |
| **GTM Preview works** | 1. Go to [tagmanager.google.com](https://tagmanager.google.com)<br>2. Open your container → Click **Preview**<br>3. Enter your site URL → **Connect**<br>4. Your site opens with GTM debug panel at bottom<br>5. If you see tag fires, GTM is working |
| **Container ID is correct** | 1. View page source on your live site (Ctrl+U)<br>2. Search for `GTM-`<br>3. Confirm it matches your GTM container ID |

---

## D: SEO Strategy — How to Check

### On-Page SEO

| Check | How to verify |
|-------|----------------|
| **Title tag** | 1. Open your live site<br>2. Look at browser tab — should show "XGIMI MoGo 4 \| Portable Google TV Projector"<br>Or: Right-click → Inspect → `<head>` → find `<title>` |
| **Meta description** | 1. View page source (Ctrl+U)<br>2. Search for `meta name="description"`<br>3. Confirm it has your product description |
| **Open Graph** | 1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)<br>2. Enter your site URL → **Debug**<br>3. Should show title, description, and image preview |
| **Canonical URL** | 1. View page source<br>2. Search for `rel="canonical"`<br>3. Confirm it matches your live URL |
| **Schema/JSON-LD** | 1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)<br>2. Enter your URL<br>3. Should detect Product schema |
| **Image alt text** | 1. Open each component (HeroSection, Features, Products, etc.)<br>2. Ensure every `<img>` has `alt="..."` with a short description |

### Technical SEO

| Check | How to verify |
|-------|----------------|
| **Sitemap** | 1. Open `https://your-site.netlify.app/sitemap.xml`<br>2. Should show XML with your URL<br>3. In Search Console: **Sitemaps** → status should be "Succeeded" |
| **robots.txt** | 1. Open `https://your-site.netlify.app/robots.txt`<br>2. Should show `User-agent: *`, `Allow: /`, and Sitemap line |
| **Mobile-friendly** | 1. Go to [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)<br>2. Enter your URL<br>3. Should say "Page is mobile friendly" |
| **Page speed** | 1. Go to [PageSpeed Insights](https://pagespeed.web.dev)<br>2. Enter your URL<br>3. Check score for Mobile and Desktop |

### Off-Page SEO

| Check | How to verify |
|-------|----------------|
| **Backlinks** | Use [Google Search Console](https://search.google.com/search-console) → **Links** (takes time to populate) |
| **Social profiles** | Manually confirm: Do you have Twitter/Instagram/YouTube/Facebook set up with your URL in bio? |
| **Directories** | Manually confirm: Have you submitted to at least 2–3 directories? |

---

## E: Analytics Setup — How to Check

### KPIs & Data Flow

| Check | How to verify |
|-------|----------------|
| **GA4 receives traffic** | 1. GA4 → **Reports** → **Realtime**<br>2. Open your site in another tab<br>3. Within 1–2 min: "Users in last 30 minutes" should show 1 or more |
| **Sessions / Users** | 1. GA4 → **Reports** → **Acquisition** → **User acquisition**<br>2. Should show numbers (even if small at first) |
| **Traffic sources** | 1. GA4 → **Reports** → **Acquisition** → **Traffic acquisition**<br>2. Should show Direct, Organic Search, etc. |
| **Custom events** | 1. Trigger: click Buy Now, Watch Video, submit newsletter, scroll to bottom<br>2. GA4 → **Reports** → **Realtime** → scroll down to "Event count by Event name"<br>3. Within ~30 sec: `buy_now_click`, `newsletter_signup`, etc. should appear |
| **Events in Events list** | 1. GA4 → **Admin** → **Events**<br>2. After 24–48 hours and after triggering: `buy_now_click`, `watch_video_click`, `newsletter_signup`, `scroll_depth` should be in "Recent events" |
| **Key events (conversions)** | 1. GA4 → **Admin** → **Events**<br>2. `buy_now_click` and `newsletter_signup` should have star filled (marked as key event) |
| **Conversions report** | 1. GA4 → **Reports** → **Engagement** → **Conversions**<br>2. Should list your key events with counts |

---

## F: Setup Checklist — Quick Tick List

Print or copy this and tick as you verify:

```
□ GA4 account created
□ GA4 property + web stream created
□ Measurement ID in index.html
□ Site deployed
□ GA4 Realtime shows users
□ Search Console property added
□ Ownership verified
□ Sitemap submitted and "Succeeded"
□ Search Console linked to GA4
□ GTM container on site (if using)
□ Buy Now / Watch Video / Newsletter clicked on live site
□ Events appear in GA4 Realtime
□ Events appear in GA4 Admin → Events (after 24–48h)
□ buy_now_click and newsletter_signup marked as key events
□ Title + meta description correct
□ Open Graph working (Facebook debugger)
□ Sitemap.xml loads
□ robots.txt loads
□ Mobile-friendly test passes
□ PageSpeed score checked
```

---

## G: Troubleshooting — Quick Reference

| Symptom | What to try |
|---------|-------------|
| **No data in GA4 Realtime** | • Confirm Measurement ID in index.html<br>• Disable ad blocker<br>• Open site in Incognito<br>• Confirm site is deployed (not localhost) |
| **Custom events not in GA4** | • Trigger events on **live** site (not localhost)<br>• Wait 24–48 hours<br>• Check GA4 Realtime → Event count by Event name<br>• Confirm index.html has gtag script (not only GTM) |
| **Search Console verification failed** | • Confirm verification meta tag is in live site's `<head>`<br>• View source and search for `google-site-verification`<br>• Re-deploy after adding tag |
| **Sitemap "Couldn't fetch"** | • Visit your-url/sitemap.xml directly — must load<br>• Ensure robots.txt references correct sitemap URL<br>• Check URL in sitemap matches your live domain |
| **GTM Preview shows no tags** | • Ensure GTM container ID in index.html matches your container<br>• Check tags are set to fire on correct triggers<br>• Publish GTM container |
| **Duplicate page views** | • Use either direct gtag OR GTM GA4 Config, not both<br>• Remove GA4 Configuration tag from GTM if using direct gtag in index.html |

---

## One-Page Verification Flow

1. **GTM (if used):** `tagmanager.google.com` → Preview → connect to your URL → confirm tags fire  
2. **SEO on-page:** Facebook Sharing Debugger + Rich Results Test  
3. **SEO technical:** Open /sitemap.xml, /robots.txt, run PageSpeed Insights  
4. **GA4:** Realtime with site open → trigger events → check Event count  
5. **Search Console:** Sitemaps → status; Performance → any data  
6. **Conversions:** Admin → Events → stars on buy_now_click & newsletter_signup  

---

*Use this checklist weekly to confirm everything stays healthy.*
