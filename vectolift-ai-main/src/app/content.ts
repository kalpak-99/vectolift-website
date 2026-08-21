// Semantic page content extracted from recognized recipe sections.

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "#technology", label: "Technology" },
    { href: "#benefits", label: "Benefits" },
    { href: "/calculator", label: "Calculator" },
    { href: "/blog", label: "Blog" },
    { href: "#customers", label: "Customers" }
];

export type LogosItem = {
  alt: string;
  height?: string;
  href?: string;
  imgSrc: string;
  rel?: string;
  srcSet?: string;
  target?: string;
  tooltip?: string;
  width?: string;
};
export const logos: LogosItem[] = [
    { alt: "Apex Plumbing", height: "24", imgSrc: "/assets/cloned/svg/1143ab6c1ecf.svg", srcSet: "/assets/cloned/svg/d65bd67b2f20.svg 1x, /assets/cloned/svg/1143ab6c1ecf.svg 2x", width: "120" },
    { alt: "BlueStar Electrical", height: "20", imgSrc: "/assets/cloned/svg/acd533112e17.svg", srcSet: "/assets/cloned/svg/418a48c4fe0c.svg 1x, /assets/cloned/svg/acd533112e17.svg 2x", width: "100" },
    { alt: "ClimatePro HVAC", height: "30", imgSrc: "/assets/cloned/svg/0d383d51d597.svg", srcSet: "/assets/cloned/svg/8c5ff9006aa1.svg 1x, /assets/cloned/svg/0d383d51d597.svg 2x", width: "163" },
    { alt: "SafeState Pest Control", height: "48", imgSrc: "/assets/cloned/svg/8a8978b6c884.svg", srcSet: "/assets/cloned/svg/72685ff14151.svg 1x, /assets/cloned/svg/8a8978b6c884.svg 2x", width: "48" }
];

export type FeaturesItem = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
};
export const features: FeaturesItem[] = [
    { alt: "headphone", imgSrc: "/assets/cloned/svg/11d25ee62a63.svg", srcSet: "/assets/cloned/svg/87f7a9229f1f.svg 640w, /assets/cloned/svg/3ffcbf3000a2.svg 750w, /assets/cloned/svg/f665d2ee9fe0.svg 828w, /assets/cloned/svg/e2a9185f57e9.svg 1080w, /assets/cloned/svg/57137e7325c8.svg 1200w, /assets/cloned/svg/a73aae6cdaea.svg 1920w, /assets/cloned/svg/d97a9bbe2d00.svg 2048w, /assets/cloned/svg/11d25ee62a63.svg 3840w", description: "24/7 Call Answering", description2: "Never let a call go to voicemail again. Day or night, public holiday or weekend, we're live." },
    { alt: "handshake", imgSrc: "/assets/cloned/svg/763f4dc2ec13.svg", srcSet: "/assets/cloned/svg/785de2674186.svg 640w, /assets/cloned/svg/324d7e88e9d2.svg 750w, /assets/cloned/svg/b5a4abd08400.svg 828w, /assets/cloned/svg/50f566d0e45c.svg 1080w, /assets/cloned/svg/2873552fb45c.svg 1200w, /assets/cloned/svg/da6935f5d473.svg 1920w, /assets/cloned/svg/4899146cee56.svg 2048w, /assets/cloned/svg/763f4dc2ec13.svg 3840w", description: "Emergency Detection & Escalation", description2: "Burst pipe? Gas leak? The AI recognises emergencies and instantly notifies you via SMS." },
    { alt: "lock", imgSrc: "/assets/cloned/svg/dbc53694f9ca.svg", srcSet: "/assets/cloned/svg/a9c209fbaeb2.svg 640w, /assets/cloned/svg/5eee83b50856.svg 750w, /assets/cloned/svg/3c3c15a1d2ea.svg 828w, /assets/cloned/svg/6c91e6b6c392.svg 1080w, /assets/cloned/svg/7e9dd8ff8cac.svg 1200w, /assets/cloned/svg/c3a249accf71.svg 1920w, /assets/cloned/svg/e7b5410888b8.svg 2048w, /assets/cloned/svg/dbc53694f9ca.svg 3840w", description: "Human‑like Australian Voice", description2: "Powered by ElevenLabs. Your callers hear a natural, friendly Australian accent — not a robot." },
    { alt: "trend-up", imgSrc: "/assets/cloned/svg/7dfd879ec1c5.svg", srcSet: "/assets/cloned/svg/4a81474e813c.svg 640w, /assets/cloned/svg/14d4d7ab66e9.svg 750w, /assets/cloned/svg/3ed1956006f2.svg 828w, /assets/cloned/svg/a26e67fc7353.svg 1080w, /assets/cloned/svg/b9fc23c4670d.svg 1200w, /assets/cloned/svg/316c0bbf367d.svg 1920w, /assets/cloned/svg/dfe3c24a9a2e.svg 2048w, /assets/cloned/svg/7dfd879ec1c5.svg 3840w", description: "Seamless Calendar Booking", description2: "Integrates directly with Cal.com and Google Calendar. Jobs are booked automatically, no double‑bookings." },
    { alt: "select-area", imgSrc: "/assets/cloned/images/b9fe721ec167.png", srcSet: "/assets/cloned/images/b1cff0e4fd3d.png 640w, /assets/cloned/images/cf4cc4535b8d.png 750w, /assets/cloned/images/bc430272fa81.png 828w, /assets/cloned/images/95dd6c3a32d2.png 1080w, /assets/cloned/images/f32451e565d0.png 1200w, /assets/cloned/images/5aa83ff21414.png 1920w, /assets/cloned/images/d1cb3435b965.png 2048w, /assets/cloned/images/b9fe721ec167.png 3840w", description: "Call Recording & Privacy Compliance", description2: "Every call is recorded (with consent) and stored securely. We meet Australia's privacy standards." },
    { alt: "shield-check", imgSrc: "/assets/cloned/svg/edb88fba6df3.svg", srcSet: "/assets/cloned/svg/2b2a25218050.svg 640w, /assets/cloned/svg/d58972c34535.svg 750w, /assets/cloned/svg/d74e04830897.svg 828w, /assets/cloned/svg/5eb8067b7af7.svg 1080w, /assets/cloned/svg/9065f4db49e3.svg 1200w, /assets/cloned/svg/30ff69cc7f04.svg 1920w, /assets/cloned/svg/a267144667fa.svg 2048w, /assets/cloned/svg/edb88fba6df3.svg 3840w", description: "Scalable to Handle Peak Volumes", description2: "From 10 calls a day to 100 during a storm, the infrastructure scales instantly with sub‑second latency." }
];

export type TextLinkDataItem = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/#technology", label: "Technology" },
    { href: "/#benefits", label: "Benefits" },
    { href: "/calculator", label: "Calculator" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" }
];

export type TextLinkData2Item = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
export const textLinkData2: TextLinkData2Item[] = [
    { href: "/#customers", label: "Customers" },
    { href: "/calculator", label: "Calculator" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "mailto:vectolift@gmail.com", label: "Contact" }
];
