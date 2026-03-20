/**
 * Analytics events for GA4.
 * Sends to dataLayer (for GTM) and directly to GA4 via gtag when available.
 */

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return;

  // Push to dataLayer for GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });

  // Send directly to GA4 (bypasses GTM - ensures events reach GA4)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
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
