import FeatureCard from "../components/feature-card";
import { FeatureCard_cids } from "../_cids";
import { FeatureCard_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block py-24 px-18 bg-color-001 max-md:py-14.5 max-md:px-6 md:max-lg:p-14.5" data-cid="n224" id="benefits">
      <div className="flex max-w-324 px-18 gap-12 mx-auto max-lg:flex-col max-lg:px-0" data-cid="n225">
        <div className="w-105 flex flex-col items-start shrink-0 gap-4 max-md:w-[20.4375rem] max-md:items-center max-lg:shrink-[initial] md:max-lg:w-163" data-cid="n226">
          <p className="block text-color-003 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-sm font-medium leading-3.5 tracking-[1.1px] uppercase max-md:text-xs max-md:leading-3" data-cid="n227">
            Built for Home Services
          </p>
          <h2 className="block text-color-002 text-[2.5rem] font-medium leading-10 tracking-[-2.32px] text-left max-lg:text-[1.75rem] max-lg:leading-7 max-md:tracking-[-0.96px] max-md:text-center md:max-lg:tracking-[-1.28px]" data-cid="n228" data-component="heading">
            Everything a busy trade business needs to capture every lead.
          </h2>
          <p className="block text-color-002 leading-[1.3125rem] text-left max-md:text-sm max-md:leading-[1.125rem] max-md:text-center" data-cid="n229">
            Six essential capabilities built for Australian home service businesses.
          </p>
        </div>
        <div className="flex flex-wrap content-start gap-x-12 gap-y-8 w-[524px] shrink-0 max-lg:w-full" data-cid="n230">
          {features.map((d, i) => <FeatureCard key={i} d={d} cids={FeatureCard_cids[i]} styles={FeatureCard_styles[i]} />)}
        </div>
      </div>
    </section>
  );
}
