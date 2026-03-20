/**
 * Analytics events for GA4 via Google Tag Manager dataLayer.
 * Configure GA4 Event tags in GTM to fire on these event names.
 */

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
};

export const trackBuyNowClick = (location = 'unknown') => {
  trackEvent('buy_now_click', { cta_location: location });
};

export const trackWatchVideoClick = () => {
  trackEvent('watch_video_click');
};

export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup');
};

export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', { depth_percent: depth });
};
