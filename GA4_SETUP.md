# GA4 Measurement ID Setup

Your custom events (`buy_now_click`, `watch_video_click`, `newsletter_signup`, `scroll_depth`) are now sent **directly to GA4** instead of relying on GTM tags.

## Step 1: Get your Measurement ID

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your property (the one showing "xgimi portable projector")
3. Click **Admin** (gear icon, bottom left)
4. Under **Property**, click **Data streams**
5. Click your **Web** stream
6. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 2: Update index.html

1. Open `index.html`
2. Replace **both** occurrences of `G-XXXXXXXXXX` with your Measurement ID
3. Save the file

```html
<!-- Find and replace G-XXXXXXXXXX with your actual ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID-HERE"></script>
...
gtag('config', 'G-YOUR-ID-HERE');
```

## Step 3: Deploy

```bash
npm run build
```

Then deploy to Netlify (or your host).

## Step 4: Test

1. Open your live site
2. Click "Buy Now", "Watch Video", submit the newsletter, scroll to bottom
3. In GA4: **Reports → Realtime** — events should appear within ~30 seconds
4. In GA4: **Admin → Events** — custom events appear within 24–48 hours

## Optional: Avoid duplicate page views

If you have a **GA4 Configuration** tag in GTM with the same Measurement ID, you may get duplicate page views. You can remove that tag from GTM since the site now loads GA4 directly.
