import LogoCloudItem from "../components/logo-cloud-item";
import { LogoCloudItem_cids } from "../_cids";
import { LogoCloudItem_styles } from "../_styles";
import { logos as logosContent } from "../content";
/** Hero section — the page's lead block. */
export default function HeroSection({ logos = logosContent } = {}) {
  return (
    <section className="block bg-clr-6" data-cid="n72">
      <div className="flex max-w-289 mx-auto py-20 px-8 flex-col w-full max-lg:py-10" data-cid="n73">
        <div className="flex justify-between items-start gap-6 w-full max-lg:flex-col max-lg:items-center max-lg:[justify-content:initial] max-lg:gap-[initial]" data-cid="n74">
          <div className="flex flex-col items-start shrink-0 gap-6 w-[41.3125rem] max-lg:py-10 max-lg:items-center max-lg:shrink-[initial] max-lg:w-full" data-cid="n75">
            <div className="block relative h-8 w-auto max-lg:h-6" data-cid="n76">
              <img className="w-full h-[1.5625rem] block max-w-full overflow-clip object-contain aspect-[auto_120/40] align-middle text-clr-0" data-cid="n77" data-component="image" alt="QuickFix Plumbing" height="40" src="/assets/cloned/svg/7b9593302ffb.svg" srcSet="/assets/cloned/svg/39471ed97ad2.svg 1x, /assets/cloned/svg/7b9593302ffb.svg 2x" width="120" />
            </div>
            <div className="block text-color-003 text-xl leading-6.5 text-left max-md:text-[0.9375rem] max-md:leading-[1.25rem] max-md:tracking-[-0.28px] max-lg:text-center md:max-lg:text-lg md:max-lg:leading-[1.4375rem] md:max-lg:tracking-[-0.36px]" data-cid="n78">
              <p className="block max-md:h-[136.5px] md:max-lg:h-[5.85rem]" data-cid="n79">
                {"\"We were losing 4–5 jobs a week to voicemail. Vectolift now books them in while we're on the tools. Our customers love how quickly they get through, and "}
                <strong className="inline font-semibold" data-cid="n80">
                  we've never missed a beat since.
                </strong>
                {" It's like having an office manager who never sleeps.\""}
              </p>
            </div>
            <div className="h-8.5 flex items-center gap-2" data-cid="n82">
              <div className="w-8.5 h-8.5 block relative rounded-full shrink-0 overflow-hidden" data-cid="n83">
                <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle text-clr-0" data-cid="n84" data-component="image" sizes="34px" src="/assets/cloned/images/4002082399e9.png" srcSet="/assets/cloned/images/3eb7e3ec01c0.png 32w, /assets/cloned/images/1d99d64f8c12.png 48w, /assets/cloned/images/c2e1acfc62a5.png 64w, /assets/cloned/images/c1ac31fef3f4.png 96w, /assets/cloned/images/0ac4ddc89273.png 128w, /assets/cloned/images/13ffbe16b9a5.png 256w, /assets/cloned/images/f8e9e8ebf1f8.png 384w, /assets/cloned/images/601c19eb91ec.png 640w, /assets/cloned/images/0c296fa1621a.png 750w, /assets/cloned/images/05baace6d4e7.png 828w, /assets/cloned/images/fdf7160e49fa.png 1080w, /assets/cloned/images/8260f8f7f8e6.png 1200w, /assets/cloned/images/e02e4376ef21.png 1920w, /assets/cloned/images/7094ef5441f5.png 2048w, /assets/cloned/images/4002082399e9.png 3840w" />
              </div>
              <div className="h-[1.65rem] block opacity-70 text-color-003 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs leading-[0.8125rem] tracking-[-0.24px]" data-cid="n85">
                <p className="block" data-cid="n86">
                  Mark Wilson
                </p>
                <p className="block whitespace-nowrap" data-cid="n87">
                  Owner, QuickFix Plumbing · Sydney
                </p>
              </div>
            </div>
          </div>
          <div className="flex py-1 px-18 flex-col items-center shrink-0 gap-10 w-[25.875rem] max-lg:py-10 max-lg:px-0 max-lg:shrink-[initial] max-lg:w-full" data-cid="n88">
            <p className="block text-color-003 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-sm font-medium leading-3.5 tracking-[1.1px] text-center uppercase max-md:text-xs max-md:leading-3" data-cid="n89">
              Trusted by leading Australian home service businesses
            </p>
            <div className="flex opacity-50 max-w-103.5 flex-wrap justify-center items-center gap-12.5 w-full max-lg:justify-between max-lg:gap-8 max-lg:max-w-none" data-cid="n90">
              {logos.map((d, i) => <LogoCloudItem key={i} d={d} cids={LogoCloudItem_cids[i]} styles={LogoCloudItem_styles[i]} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
