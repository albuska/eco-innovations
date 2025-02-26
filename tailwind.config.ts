import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "370px",
        xsm: "411px",
      },
      fontFamily: {
        montserrat: ["montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-mobile": "url('/images/hero_bg_mobile.webp')",
        "hero-tablet": "url('/images/hero_bg_tablet.webp')",
        "hero-desktop": "url('/images/hero_bg_desktop.webp')",
        "hero-desktop-maxi": "url('/images/hero_bg_desktop_maxi.webp')",
        "business-services-mobile":
          "url('/images/business_services_mobile.webp')",
        "business-services-tablet":
          "url('/images/business_services_tablet.webp')",
        "business-services-desktop":
          "url('/images/business_services_desktop.webp')",
        "get-commercial-offer-mobile":
          "url('/images/getCommercialOffer-bg-img_mobile.webp')",
        "get-commercial-offer-tablet":
          "url('/images/getCommercialOffer-bg-img_tablet.webp')",
        "get-commercial-offer-desktop":
          "url('/images/getCommercialOffer-bg-img_desktop.webp')",
        "get-commercial-offer-desktop-maxi":
          "url('/images/getCommercialOffer-bg-img_desktop-maxi.webp')",
        "legal-support-for-energy-sector-mobile":
          "url('/images/LegalSupportForEnergySector_img_mobile.webp')",
        "legal-support-for-energy-sector-tablet":
          "url('/images/LegalSupportForEnergySector_img_tablet.webp')",
        "legal-support-for-energy-sector-desktop":
          "url('/images/LegalSupportForEnergySector_img_desktop.webp')",
        "legal-support-for-energy-sector-desktop-maxi":
          "url('/images/LegalSupportForEnergySector_img_desktop_maxi.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
