"use client";

export const getQuery = () => {
  const utms: Record<string, string> = {};
  if (typeof window !== "undefined") {
    const utm_source = sessionStorage.getItem("utm_source");
    const utm_medium = sessionStorage.getItem("utm_medium");
    const utm_campaign = sessionStorage.getItem("utm_campaign");
    const utm_term = sessionStorage.getItem("utm_term");
    const utm_content = sessionStorage.getItem("utm_content");

    if (utm_source) {
      utms.utm_source = utm_source;
    } else {
      utms.utm_source = "direct";
    }
    if (utm_medium) {
      utms.utm_medium = utm_medium;
    } else {
      utms.utm_medium = "referral";
    }
    if (utm_campaign) utms.utm_campaign = utm_campaign;
    if (utm_term) utms.utm_term = utm_term;
    if (utm_content) utms.utm_content = utm_content;
  }
  return utms;
};
