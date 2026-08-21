"use client";

import { useState } from "react";
import DropdownMenu from "./ditto/DropdownMenu";
import ContactModal from "./components/contact-modal";
import ListenDemoBar from "./components/listen-demo-bar";
import LogoCloudSection from "./sections/logo-cloud-section";
import FeatureGridSection from "./sections/feature-grid-section";
import OurCustomersSection from "./sections/our-customers-section";
import CardGridSection from "./sections/card-grid-section";
import CardGridSection2 from "./sections/card-grid-section2";
import FeatureGridSection2 from "./sections/feature-grid-section2";
import EverydayCallsExtraordinarySection from "./sections/everyday-calls-extraordinary-section";
import Illustration from "./svgs/svg-illustration";
import ListRow, { type ListRowData } from "./components/list-row";
import Icon2 from "./svgs/svg-icon2";
import Icon3 from "./svgs/svg-icon3";
import Tile, { type TileData } from "./components/tile";
import Icon4 from "./svgs/svg-icon4";
import dynamic from "next/dynamic";
const Illustration2 = dynamic(() => import("./svgs/svg-illustration2"), { ssr: false });
const Illustration3 = dynamic(() => import("./svgs/svg-illustration3"), { ssr: false });
import Illustration4 from "./svgs/svg-illustration4";
const HologramOverlay = dynamic(() => import("./components/hologram-overlay"), { ssr: false });
import TextLink, { type TextLinkData } from "./components/text-link";
import SocialLinks from "./components/social-links";
import { ListRow_cids, Tile_cids, TextLink_cids2 } from "./_cids";

const ListRow_data: ListRowData[] = [
    { href: "#technology", label: "Technology" },
    { href: "#benefits", label: "Benefits" },
    { href: "/calculator", label: "Calculator" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "#customers", label: "Customers" }
];
const Tile_data: TileData[] = [
    { selected: true, value: "customer-support", text: "Customer Support" },
    { value: "qualification", text: "Lead Qualification" },
    { value: "appointment-scheduling", text: "Appointment Scheduling" }
];
const TextLink_data2: TextLinkData[] = [
    { href: "/faq", label: "FAQ" },
    { href: "mailto:vectolift@gmail.com", label: "Contact" }
];
export default function Page() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <div className="min-h-screen flex relative flex-col [font-family:avantt,_'avantt_Fallback']" data-cid="n1">
        <a className="block fixed top-3 left-3 z-1000 min-w-0 rounded-lg overflow-hidden text-color-001 text-[0.9375rem] font-semibold leading-[0.9375rem] whitespace-nowrap text-nowrap bg-color-002 [clip-path:inset(50%)] cursor-pointer h-px w-px focus:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-4)_0px_6px_24px_0px] focus:outline-clr-15 focus:[outline-style:solid] focus:outline-2" data-cid="n2" data-component="link" href="#main-content">
          Skip to main content
        </a>
        <main className="h-full block flex-1" data-cid="n3" id="main-content">

          <header className="h-0 block sticky top-0 z-50" data-cid="n11">
            <nav className="block py-4 px-18 bg-surface-2 [backdrop-filter:blur(40px)] max-lg:py-3 max-lg:px-5" data-cid="n12" data-component="nav">
              <div className="flex max-w-360 justify-between items-center mx-auto w-full" data-cid="n13">
                <a className="flex shrink-0 items-center gap-3.5 cursor-pointer transition-transform duration-200 hover:scale-[1.02]" data-cid="n14" data-component="link" aria-label="Vectolift home" href="/">
                  <Illustration cid={"n15"} />
                  <span className="text-[1.75rem] font-extrabold tracking-[-0.8px] leading-none text-color-002 [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif] max-lg:text-[1.35rem]">
                    vectolift
                  </span>
                </a>
                <ul className="flex items-center gap-10 text-color-002 [list-style-type:none] list-outside max-lg:hidden" data-cid="n16">
                  {ListRow_data.map((d, i) => (
                    <ListRow key={i} d={d} cids={ListRow_cids[i] ?? [`nav-${i}`, `nav-${i}-link`]} />
                  ))}
                </ul>
                <div className="flex items-center gap-2" data-cid="n32">
                  <a
                    className="hidden px-3 rounded-lg justify-center items-center text-color-002 text-[15px] font-medium leading-[1.3125rem] cursor-pointer h-10 max-lg:inline-flex max-lg:h-8"
                    href="/faq"
                  >
                    FAQ
                  </a>
                  <button
                    type="button"
                    className="inline-flex px-4 rounded-lg justify-center items-center text-color-003 text-[15px] font-medium leading-[1.3125rem] bg-primary cursor-pointer h-10 max-lg:h-8 hover:opacity-90 transition-opacity"
                    data-cid="n33"
                    data-component="button"
                    onClick={() => setContactOpen(true)}
                  >
                    Contact Us
                  </button>
                  <button className="hidden min-w-0 shrink-0 text-color-002 text-center cursor-pointer max-lg:h-6 max-lg:block" data-cid="n35" aria-label="Open menu" type="button">
                    <Icon2 cid={"n36"} />
                  </button>
                </div>
              </div>
            </nav>
          </header>
          <div className="block bg-color-001 h-[4.5rem] max-lg:h-14" data-cid="n37" />
          <div className="block" data-cid="n38" id="page-content">
            <section className="min-h-160 grid relative overflow-hidden text-color-001 bg-color-002 aspect-[1.803] w-full grid-cols-1 grid-rows-[auto] max-lg:min-h-177.5 max-md:aspect-[0.422] md:max-lg:aspect-[1.082] 2xl:min-h-216 2xl:aspect-[2.222]" data-cid="n39" id="hero">
              <div className="h-full block absolute top-0 inset-x-0 z-0 min-w-0" data-cid="n40" aria-hidden="true">
                {/* Hero background — plumber + Australia AI map composite */}
                <img
                  className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover object-[50%_50%] align-middle pointer-events-none"
                  data-cid="n41"
                  alt=""
                  aria-hidden="true"
                  src="/assets/hero-plumber.jpg"
                />
              </div>
              {/* Subtle dark overlay — left side for text readability, transparent on right so hologram stays visible */}
              <div
                className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.28) 40%, rgba(0,0,0,0.10) 65%, rgba(0,0,0,0) 100%)",
                }}
                data-cid="n44"
                aria-hidden="true"
              />
              <div className="grid relative z-40 aspect-[1.803] grid-cols-1 grid-rows-[auto] max-md:aspect-[0.422] md:max-lg:aspect-[1.082] 2xl:aspect-[2.222]" data-cid="n45">

                <div className="max-w-324 h-177.5 min-h-177.5 flex relative z-3 pt-15 pb-9 px-18 justify-start items-center col-start-1 row-start-1 mx-auto w-full max-md:h-222 max-md:py-6 max-md:px-8 2xl:h-216" data-cid="n46">
                  {/* LEFT: Hero copy */}
                  <div className="flex flex-col items-start gap-8 w-full max-w-[676px] shrink-0" data-cid="n47">
                    <div className="flex flex-col items-start gap-[1.5rem] w-full" data-cid="n48">
                      <h1 className="m-0 block text-[80px] font-semibold leading-[1.05] tracking-[-3.2px] w-full max-w-[676px] text-white [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif] max-md:text-[2.5rem] max-md:tracking-[-1.6px] md:max-lg:text-[3.5rem]" data-cid="n49" data-component="heading">
                        Never miss another call.
                      </h1>
                      <p className="m-0 block text-[18px] leading-[1.4] w-full max-w-[508px] text-white [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif] max-md:text-base" data-cid="n50">
                        AI receptionist that answers every call and books jobs — naturally, 24/7.
                      </p>
                      {/* White CTA button */}
                      <button
                        type="button"
                        className="inline-flex px-5 rounded-lg justify-center items-center text-color-003 text-[15px] font-medium leading-[1.3125rem] bg-primary cursor-pointer h-10 max-md:self-stretch hover:opacity-90 transition-opacity"
                        data-cid="n51"
                        data-component="button"
                        onClick={() => setContactOpen(true)}
                      >
                        Contact Us
                      </button>
                    </div>
                    <ListenDemoBar />
                  </div>

                </div>
              </div>
            </section>
            <section className="block px-18 bg-color-001 max-md:px-6 md:max-lg:px-14.5" data-cid="n99" id="technology">
              <div className="flex max-w-324 px-18 flex-col mx-auto max-md:p-8 max-md:gap-8 md:max-lg:p-14.5 md:max-lg:gap-14.5" data-cid="n100">
                <div className="block pt-24 max-lg:pt-0" data-cid="n101">
                  <div className="flex max-w-127 mx-60.5 flex-col items-center gap-4 max-md:max-w-none max-md:mx-0 max-md:[align-items:initial] md:max-lg:max-w-120 md:max-lg:mx-7 2xl:mx-80.5" data-cid="n102">
                    <p className="block text-color-003 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-sm font-medium leading-3.5 tracking-[1.1px] uppercase max-md:text-xs max-md:leading-3" data-cid="n103">
                      Unified Platform
                    </p>
                    <h2 className="block text-color-002 text-[2.5rem] font-medium leading-10 tracking-[-2.32px] text-center max-lg:text-[1.75rem] max-lg:leading-7 max-md:tracking-[-0.96px] max-md:text-left md:max-lg:tracking-[-1.28px]" data-cid="n104" data-component="heading">
                      One AI team for every customer conversation.
                    </h2>
                    <p className="block text-color-002 leading-[1.3125rem] text-center max-md:text-sm max-md:leading-[1.125rem] max-md:text-left" data-cid="n105">
                      From the first call to the booked job, Vectolift handles customer conversations automatically — 24/7.
                    </p>
                  </div>
                </div>
                <div className="flex pt-24 justify-between items-center gap-6 max-lg:flex-col max-lg:pt-0 max-lg:[justify-content:initial] max-lg:[align-items:initial]" data-cid="n106">
                  <div className="w-100 flex flex-col shrink-0 gap-4 max-md:w-[16.4375rem] max-lg:shrink-[initial] md:max-lg:w-134" data-cid="n107">
                    <img className="w-8 h-8 block max-w-full shrink-0 overflow-clip aspect-[auto_32/32] align-middle text-clr-0 max-lg:w-6 max-lg:h-6" data-cid="n108" data-component="image" alt="Waveform icon" height="32" src="/assets/cloned/svg/394401f32c0a.svg" width="32" />
                    <h3 className="block text-color-002 text-[2.5rem] font-medium leading-10 tracking-[-1.6px] max-md:max-w-90 max-md:text-lg max-md:leading-4.5 max-md:tracking-[-0.72px] md:max-lg:text-2xl md:max-lg:tracking-[-0.96px] md:max-lg:leading-[inherit]" data-cid="n109" data-component="heading">
                      Turn every call into a booked job.
                    </h3>
                    <p className="block max-w-130 text-color-002 text-sm leading-[1.25rem] max-md:max-w-100 max-md:text-xs max-md:leading-[1rem]" data-cid="n110">
                      VectoLift AI answers, understands, and handles customer calls from hello to confirmed appointment.
                    </p>
                  </div>
                  <div className="block max-w-165.5 rounded-xl overflow-hidden aspect-[803/537] w-full" data-cid="n111">
                    <div className="block" data-cid="n112">
                      <Illustration2 cid={"n113"} />
                    </div>
                  </div>
                </div>
                <div className="flex py-24 flex-row-reverse justify-between items-center gap-6 max-lg:flex-col max-lg:py-0 max-lg:[justify-content:initial] max-lg:[align-items:initial]" data-cid="n114">
                  <div className="w-100 flex flex-col shrink-0 gap-4 max-md:w-[16.4375rem] max-lg:shrink-[initial] md:max-lg:w-134" data-cid="n115">
                    <img className="w-8 h-8 block max-w-full shrink-0 overflow-clip aspect-[auto_32/32] align-middle text-clr-0 max-lg:w-6 max-lg:h-6" data-cid="n116" data-component="image" alt="Priority alert icon" height="32" src="/assets/cloned/svg/e4288ed4f77e.svg" width="32" />
                    <h3 className="block text-color-002 text-[2.5rem] font-medium leading-10 tracking-[-1.6px] max-md:max-w-90 max-md:text-lg max-md:leading-4.5 max-md:tracking-[-0.72px] md:max-lg:text-2xl md:max-lg:tracking-[-0.96px] md:max-lg:leading-[inherit]" data-cid="n117" data-component="heading">
                      More calls answered. More jobs booked. Less time on the phone.
                    </h3>
                    <p className="block max-w-130 text-color-002 text-sm leading-[1.25rem] max-md:max-w-100 max-md:text-xs max-md:leading-[1rem]" data-cid="n118">
                      See every conversation, booking, and missed opportunity while your team gets time back to do the work.
                    </p>
                  </div>
                  <div className="block max-w-165.5 rounded-xl overflow-hidden aspect-[803/537] w-full" data-cid="n119">
                    <div className="block" data-cid="n120">
                      <Illustration3 cid={"n121"} />
                    </div>
                  </div>
                </div>

              </div>
            </section>
            <LogoCloudSection />
            <FeatureGridSection />
            <OurCustomersSection />
            <FeatureGridSection2 />
            <EverydayCallsExtraordinarySection onContactClick={() => setContactOpen(true)} />
          </div>
          <footer className="block bg-color-002" data-cid="n357">
            <div className="flex max-w-288 mx-auto py-20 flex-col gap-8 w-full max-lg:py-10 max-md:px-7.5 md:max-lg:px-8" data-cid="n358">
              <div className="flex justify-between items-start gap-10 max-md:flex-col max-md:[justify-content:initial] max-md:[align-items:initial]" data-cid="n359">
                <Illustration4 cid={"n360"} />
                <div className="flex gap-18 max-lg:gap-4" data-cid="n361">
                  <div className="flex flex-col gap-4" data-cid="n368">
                    <p className="block text-primary [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs font-medium leading-3 tracking-[1.2px] uppercase" data-cid="n369">
                      Company
                    </p>
                    {TextLink_data2.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids2[i]} />)}
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="block text-primary [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs font-medium leading-3 tracking-[1.2px] uppercase">
                      Resources
                    </p>
                    <a className="block text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs font-medium leading-3 cursor-pointer hover:text-primary transition-colors" href="/blog">Blog</a>
                    <a className="block text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs font-medium leading-3 cursor-pointer hover:text-primary transition-colors" href="/privacy">Privacy Policy</a>
                    <a className="block text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs font-medium leading-3 cursor-pointer hover:text-primary transition-colors" href="/faq">FAQ</a>
                    <a className="block text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs font-medium leading-3 cursor-pointer hover:text-primary transition-colors" href="/terms-and-conditions">Terms and Conditions</a>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-18 max-md:flex-col max-md:[justify-content:initial] max-md:[align-items:initial]" data-cid="n375">
                <div className="flex items-center gap-6 max-md:flex-col max-md:gap-2 max-md:[align-items:initial]" data-cid="n376">
                  <p className="h-3 block text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs font-medium leading-3" data-cid="n377">
                    {"© "}
                    <span className="inline" data-cid="n378">
                      2026
                    </span>
                    {" Vectolift. All rights reserved."}
                  </p>
                  <a className="block text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs font-medium leading-3 cursor-pointer" data-cid="n379" data-component="link" href="/privacy">
                    Privacy Policy
                  </a>
                  <a className="block text-color-001 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs font-medium leading-3 cursor-pointer" data-cid="n380" data-component="link" href="/terms-and-conditions">
                    Terms and Conditions
                  </a>
                </div>
                <div className="flex gap-4" data-cid="n381">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
      <div className="block [font-family:Arial] leading-4.5" data-cid="n388" id="hxe1a5dv" />
      <DropdownMenu menus={[{"trigger":"n56","hoverOpen":false,"gap":57,"align":"left","html":"<div style=\"position:absolute;margin:0;display:flex;box-sizing:border-box;width:1280px;height:108.781px;min-width:0px;max-width:none;min-height:0px;padding-top:32px;padding-right:32px;padding-bottom:32px;padding-left:32px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(250, 250, 250);border-right-color:rgb(250, 250, 250);border-bottom-color:rgb(250, 250, 250);border-left-color:rgb(250, 250, 250);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(0, 0, 0);color:rgb(250, 250, 250);box-shadow:none;opacity:0;font-family:Helvetica, Arial, &quot;Hiragino Sans GB&quot;, STXihei, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, Hind, &quot;MS Gothic&quot;, &quot;Apple SD Gothic Neo&quot;, NanumBarunGothic, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;gap:24px;row-gap:24px;column-gap:24px;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:auto\" aria-label=\"Cookie Consent Banner\">     </div>"}]} />
    </>
  );
}
