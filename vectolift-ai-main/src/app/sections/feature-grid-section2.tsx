import Tile2, { type Tile2Data } from "../components/tile2";
import { Tile2_cids } from "../_cids";
import { Tile2_styles } from "../_styles";

const Tile2_data: Tile2Data[] = [
  { description: "24/7", description2: "AI voice availability" },
  { description: "99.9%", description2: "Uptime" },
  { description: "100%", description2: "Customizable workflows" },
  { description: "1:1", description2: "Personalized customer interactions" },
  { description: "<600ms", description2: "Average response time" }
];

/** Feature Grid section. */
export default function FeatureGridSection2({ tile2Data = Tile2_data } = {}) {
  return (
    <section className="block py-24 px-18 bg-color-001 max-md:py-14.5 max-md:px-6 md:max-lg:p-14.5" data-cid="n326" id="calculator">
      <div className="flex max-w-324 flex-col items-center gap-18 mx-auto max-lg:gap-6" data-cid="n327">
        <div className="flex flex-col gap-4" data-cid="n328">
          <h2 className="block text-color-002 text-[2.5rem] font-medium leading-10 tracking-[-2.32px] text-center max-lg:text-[1.75rem] max-lg:leading-7 max-md:tracking-[-0.96px] md:max-lg:tracking-[-1.28px]" data-cid="n329" data-component="heading">
            Everyday calls. Extraordinary outcomes.
          </h2>
        </div>
        <div className="h-39 flex justify-center w-full max-lg:h-auto max-lg:flex-wrap max-lg:gap-y-6 md:max-lg:max-w-full" data-cid="n330">
          {tile2Data.map((d, i) => (
            <Tile2 key={i} d={d} cids={Tile2_cids[i]} styles={Tile2_styles[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
