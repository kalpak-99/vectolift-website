"use client";

import Icon5 from "../svgs/svg-icon5";
import Logo, { type LogoData } from "../components/logo";

const row1Base: LogoData[] = [
  { alt: "Google Sheets", imgSrc: "/assets/cloned/images/4da6a9bc2e45.png", srcSet: "/assets/cloned/images/4da6a9bc2e45.png", label: "Google Sheets", kind: "image" },
  { alt: "Twilio", imgSrc: "/assets/cloned/images/15b7f1ee37b9.png", srcSet: "/assets/cloned/images/15b7f1ee37b9.png", label: "Twilio", kind: "image" },
  { alt: "Skydo", imgSrc: "/assets/cloned/svg/skydo.svg", srcSet: "/assets/cloned/svg/skydo.svg", label: "Skydo", kind: "image" },
  { alt: "Microsoft Teams", imgSrc: "/assets/cloned/svg/ms-teams.svg", srcSet: "/assets/cloned/svg/ms-teams.svg", label: "Microsoft Teams", kind: "image" },
  { alt: "Zoho CRM", imgSrc: "/assets/cloned/svg/zoho-crm.svg", srcSet: "/assets/cloned/svg/zoho-crm.svg", label: "Zoho CRM", kind: "image" },
  { alt: "Google Calendar", imgSrc: "/assets/cloned/images/fffcebc9d9da.png", srcSet: "/assets/cloned/images/fffcebc9d9da.png", label: "Google Calendar", kind: "image" },
  { alt: "Microsoft Outlook", imgSrc: "/assets/cloned/svg/ms-outlook.svg", srcSet: "/assets/cloned/svg/ms-outlook.svg", label: "Microsoft Outlook", kind: "image" },
];

const row2Base: LogoData[] = [
  { alt: "Salesforce", imgSrc: "/assets/cloned/images/cc4d1d7d2480.png", srcSet: "/assets/cloned/images/cc4d1d7d2480.png", label: "Salesforce", kind: "image" },
  { alt: "HubSpot", imgSrc: "/assets/cloned/images/b9063e26fd3b.png", srcSet: "/assets/cloned/images/b9063e26fd3b.png", label: "HubSpot", kind: "image" },
  { alt: "Slack", imgSrc: "/assets/cloned/images/fcb2a6efa869.png", srcSet: "/assets/cloned/images/fcb2a6efa869.png", label: "Slack", kind: "image" },
  { alt: "Zapier", imgSrc: "/assets/cloned/images/e2c81a70dbec.png", srcSet: "/assets/cloned/images/e2c81a70dbec.png", label: "Zapier", kind: "image" },
  { alt: "Elevenlabs", imgSrc: "/assets/cloned/images/e11f5fdb17d1.png", srcSet: "/assets/cloned/images/e11f5fdb17d1.png", label: "Elevenlabs", kind: "image" },
  { alt: "ChatGPT", imgSrc: "/assets/cloned/images/00371d634dc4.png", srcSet: "/assets/cloned/images/00371d634dc4.png", label: "ChatGPT", kind: "image" },
  { alt: "Notion", imgSrc: "/assets/cloned/images/8ac0909b7d4d.png", srcSet: "/assets/cloned/images/8ac0909b7d4d.png", label: "Notion", kind: "image" },
];

// Repeat 6 times for seamless, smooth infinite marquee loop across wide screens
const logoDataRow1 = [...row1Base, ...row1Base, ...row1Base, ...row1Base, ...row1Base, ...row1Base];
const logoDataRow2 = [...row2Base, ...row2Base, ...row2Base, ...row2Base, ...row2Base, ...row2Base];

/** Logo Cloud section with a responsive smooth scroll animation to top Hero section. */
export default function LogoCloudSection() {
  const handleScrollToHero = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="block bg-color-002 overflow-hidden py-4" data-cid="n122">
      <div className="h-80 flex max-w-324 py-16 px-18 items-center gap-12 mx-auto w-full max-md:h-[23.8375rem] max-lg:py-10 max-md:px-7.5 max-lg:flex-col max-lg:gap-10 max-lg:[align-items:initial] md:max-lg:h-[21.1875rem] md:max-lg:px-8" data-cid="n123">
        {/* Left Column */}
        <div className="h-[9.9rem] flex flex-col justify-between items-start shrink-0 gap-4 w-60 max-md:h-[6.3375rem] max-md:[justify-content:initial] max-md:[align-items:initial] max-lg:shrink-[initial] max-lg:w-full md:max-lg:h-[3.6875rem] md:max-lg:items-end md:max-lg:[flex-direction:initial]" data-cid="n124">
          <div className="flex flex-col gap-4" data-cid="n125">
            <p className="block text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-[0.9375rem] leading-[0.9375rem] tracking-[1.4px] uppercase max-md:text-sm max-md:leading-3.5 max-md:tracking-[1.2px]" data-cid="n126">
              Integrations
            </p>
            <h2 className="block text-color-001 text-[2.5rem] font-medium leading-10 tracking-[-1.6px] max-md:text-2xl max-md:tracking-[-0.96px] max-md:leading-[inherit] md:max-lg:text-[1.75rem] md:max-lg:leading-7 md:max-lg:tracking-[-1.12px]" data-cid="n127" data-component="heading">
              Works with your existing tools
            </h2>
          </div>
          <a
            className="w-auto h-[2.25rem] border border-solid border-color-001 flex py-1 px-3.5 rounded-md items-center gap-1.5 text-color-001 text-[0.9375rem] font-medium leading-[1.3125rem] tracking-[-0.28px] cursor-pointer hover:bg-white/10 transition-colors whitespace-nowrap"
            data-cid="n128"
            data-component="button"
            href="#hero"
            onClick={handleScrollToHero}
          >
            Explore our platform
            <Icon5 cid={"n129"} />
          </a>
        </div>

        {/* Right Column: Two Rows of Ultra-Smooth Slow Scrolling Tiles */}
        <div className="w-212 flex relative min-w-0 flex-col flex-1 gap-4.5 max-md:w-[19.6875rem] md:max-lg:w-176 2xl:w-216" data-cid="n130">
          {/* Row 1: Slow Leftward scroll (85s) */}
          <div className="block relative overflow-hidden" data-cid="n131">
            <ul className="flex min-w-max gap-4.5 [list-style-type:none] list-outside [animation-name:scroll] [animation-duration:85s] [animation-timing-function:linear] [animation-iteration-count:infinite]" data-cid="n132">
              {logoDataRow1.map((d, i) => (
                <Logo key={`r1-${i}`} d={d} />
              ))}
            </ul>
          </div>

          {/* Row 2: Slow Rightward reverse scroll (85s) */}
          <div className="block relative overflow-hidden" data-cid="n175">
            <ul className="flex min-w-max gap-4.5 [list-style-type:none] list-outside [animation-name:scroll] [animation-duration:85s] [animation-timing-function:linear] [animation-iteration-count:infinite] [animation-direction:reverse]" data-cid="n176">
              {logoDataRow2.map((d, i) => (
                <Logo key={`r2-${i}`} d={d} />
              ))}
            </ul>
          </div>

          {/* Gradient Edge Fades */}
          <div className="h-full block absolute top-0 left-0 z-10 min-w-0 pointer-events-none w-28" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--color-002) 0%, var(--clr-0) 100%)" }} data-cid="n222" aria-hidden="true" />
          <div className="h-full block absolute top-0 right-0 z-10 min-w-0 pointer-events-none w-28" style={{ backgroundImage: "linear-gradient(to left in oklab, var(--color-002) 0%, var(--clr-0) 100%)" }} data-cid="n223" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
