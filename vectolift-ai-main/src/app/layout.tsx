import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
   "title": "AI Receptionist for Plumbers in Australia | Vectolift",
   "description": "Never miss a plumber call. AI receptionist for Ausralian plumbers answers 24/7, books jobs & handles emergency calls.",
  "keywords": [
    "AI Receptionist",
    "Voice AI",
    "Home Services AI",
    "AI Call Answering",
    "Trade Business AI",
    "Australian Voice AI",
    "Plumber Answering Service Australia",
    "24/7 Plumber Call Answering",
  ],
  "robots": "index, follow",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Vectolift - Never Miss Another Call",
    "description": "Your AI receptionist answers every call, books jobs, and sounds like your best team member — 24/7, without missing a beat.",
    "type": "website",
    "siteName": "Vectolift",
    "url": "/",
    "images": [
      "/assets/cloned/images/db6fb70a8189.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vectolift - Never Miss Another Call",
    "description": "Your AI receptionist answers every call, books jobs, and sounds like your best team member — 24/7, without missing a beat.",
    "site": "@Vectolift",
    "creator": "@Vectolift",
    "images": [
      "/assets/cloned/images/db6fb70a8189.jpg"
    ]
  },
  "manifest": "/site.webmanifest",
  "icons": {
    "icon": [
      {
        "url": "/favicon.ico",
        "type": "image/x-icon",
        "sizes": "32x32"
      },
      {
        "url": "/favicon.svg",
        "type": "image/svg+xml",
        "sizes": "any"
      },
      {
        "url": "/favicon-96x96.png",
        "type": "image/png",
        "sizes": "96x96"
      }
    ],
    "apple": [
      {
        "url": "/apple-touch-icon.png",
        "type": "image/png",
        "sizes": "180x180"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#0E0E13"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vectolift",
      url: SITE_ORIGIN || "http://localhost:3000",
      logo: `${SITE_ORIGIN || "http://localhost:3000"}/favicon.svg`,
      sameAs: [
        "https://twitter.com/Vectolift",
        "https://www.linkedin.com/company/vectolift",
      ],
      description: "AI receptionist for Australian home service businesses",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Vectolift",
      url: SITE_ORIGIN || "http://localhost:3000",
    },
  ];

  return (
    <html lang={"en"} suppressHydrationWarning>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning className="h-full block relative text-foreground [font-family:seasonSans,_'seasonSans_Fallback'] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
