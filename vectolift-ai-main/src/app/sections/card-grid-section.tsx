import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
/** Card Grid section: Customer Stories. */
export default function CardGridSection() {
  return (
    <section className="block bg-clr-6 w-full" data-cid="n273" id="case-preview">
      <div className="block max-w-288 mx-auto py-20 w-full max-lg:py-10 max-md:px-7.5 md:max-lg:px-8" data-cid="n274">
        <div className="h-[27.3125rem] flex items-start gap-20 max-md:h-[38.875rem] max-lg:flex-col max-lg:gap-10 max-lg:[align-items:initial] md:max-lg:h-[772.7px] grid-cols-1 lg:grid-cols-2" data-cid="n275">
          <div className="flex flex-col flex-1 gap-10 max-lg:gap-6" data-cid="n276">
            <div className="flex flex-col gap-8 max-lg:gap-6" data-cid="n277">
              <div className="flex flex-col gap-6" data-cid="n280">
                <p className="block text-color-003 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-sm leading-3.5 tracking-[1.4px] uppercase" data-cid="n281">
                  Apex Electrical, Melbourne
                </p>
                <p className="block text-color-003 text-lg font-medium leading-[1.375rem] tracking-[-0.72px]" data-cid="n282">
                  &ldquo;Our call volume doubled after a Google Ads campaign, and we couldn&apos;t keep up. Vectolift handled the overflow, booked appointments, and sent us the details. We didn&apos;t hire a single extra person. That alone saved us $50k in salary.&rdquo;
                </p>
                <div className="h-8.5 flex items-center gap-2" data-cid="n283">
                  <div className="w-8.5 h-8.5 block relative rounded-full shrink-0 overflow-hidden" data-cid="n284">
                    <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle text-clr-0" data-cid="n285" data-component="image" alt="Sarah Chen" sizes="34px" src="/assets/cloned/images/f0a29d0f38ff.jpg" srcSet="/assets/cloned/images/ad79459d8791.jpg 32w, /assets/cloned/images/f386bc375938.webp 48w, /assets/cloned/images/88033bde5432.jpg 64w, /assets/cloned/images/b489f60b450e.jpg 96w, /assets/cloned/images/1b6a9b0b0bc2.jpg 128w, /assets/cloned/images/2e9605f84b4a.jpg 256w, /assets/cloned/images/d036cb45c992.jpg 384w, /assets/cloned/images/00428420b1e9.jpg 640w, /assets/cloned/images/7aa1cce10cac.jpg 750w, /assets/cloned/images/3c292a020c00.jpg 828w, /assets/cloned/images/8ef49cd039d2.jpg 1080w, /assets/cloned/images/b2b36ea0d104.jpg 1200w, /assets/cloned/images/91038b4dcae8.jpg 1920w, /assets/cloned/images/aa0a70cf76e3.jpg 2048w, /assets/cloned/images/f0a29d0f38ff.jpg 3840w" />
                  </div>
                  <p className="h-[1.925rem] block opacity-70 text-color-003 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-sm font-medium leading-[0.9375rem] tracking-[-0.28px]" data-cid="n286">
                    Sarah Chen,
                    <br className="inline" data-cid="n287" aria-hidden="true" />
                    {"Operations Manager, Apex Electrical"}
                  </p>
                </div>
                <a className="w-[9.0625rem] h-[37.5px] border border-solid border-color-004 flex py-2 px-3.5 rounded-full items-center gap-1.5 text-color-003 text-[0.8125rem] font-medium leading-[1.25rem] bg-color-001 cursor-pointer hover:border-clr-13" data-cid="n288" data-component="button" href="/#customers">
                  Read case study
                  <Icon6 cid={"n289"} />
                </a>
              </div>
            </div>
          </div>
          <button className="h-[27.3125rem] block relative rounded-xl shrink-0 overflow-hidden text-center bg-clr-7 cursor-pointer w-[42.3125rem] max-md:h-[203.3px] max-lg:aspect-[677/437] max-lg:w-full md:max-lg:h-[28.4rem]" data-cid="n290" data-component="button" type="button">
            <div className="h-full block absolute top-0 inset-x-0 pointer-events-none" data-cid="n291" aria-hidden="true">
              <video className="w-[42.3125rem] h-[27.3125rem] block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle pointer-events-none max-md:w-[19.6875rem] max-md:h-[12.6875rem] md:max-lg:w-176 md:max-lg:h-113.5" data-cid="n292" autoPlay loop muted playsInline preload="auto">
                <source className="inline text-color-002 [font-family:'Times_New_Roman'] leading-4.5 text-start" data-cid="n293" src="/assets/cloned/videos/9d3e2a43ccf4.mp4" type="video/quicktime; codecs=hvc1" />
                <source className="inline text-color-002 [font-family:'Times_New_Roman'] leading-4.5 text-start" data-cid="n294" src="/assets/cloned/videos/6f2026064526.webm" type="video/webm" />
              </video>
            </div>
            <div className="h-16 flex absolute right-0 bottom-0 left-107 p-4 items-center gap-4 max-md:left-[6.3125rem] md:max-lg:left-[28.4375rem]" data-cid="n295">
              <span className="block text-color-001 text-lg font-medium leading-[1.375rem] max-md:text-sm max-md:leading-[1.0625rem]" data-cid="n296">
                Watch the case study
              </span>
              <Icon7 cid={"n297"} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
