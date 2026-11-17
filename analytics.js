// Site analytics. Fill in the two IDs once (steps in github.com/suhibug/personal-analytics).
// While an ID is empty, that tool does not load at all.
const GA4_ID = "G-4QHGR986MS";      // Google Analytics 4 Measurement ID, looks like G-XXXXXXXXXX
const CLARITY_ID = "zfahm6103m";  // Microsoft Clarity project ID, about 10 letters and numbers

if (GA4_ID) {
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", GA4_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
}

// Clarity shows heatmaps and replays of visits, so I can see which parts people read or skip.
if (CLARITY_ID) {
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);
}
