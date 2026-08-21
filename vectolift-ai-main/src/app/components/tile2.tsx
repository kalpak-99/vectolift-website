import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("h-39 flex min-w-px p-10 flex-col justify-center items-center flex-1 gap-2.5 text-color-002 text-center max-lg:shrink-0 max-lg:min-w-0 max-lg:grow-[initial] max-lg:basis-[initial]", styles.className)}>
      <p data-cid={cids[1]} className="block text-[2.5rem] font-medium leading-10 tracking-[-1.6px] whitespace-nowrap text-nowrap max-lg:text-[2rem] max-lg:leading-8 max-lg:tracking-[-0.96px]">
        {d.description}
      </p>
      <p data-cid={cids[2]} className="block leading-[1.1875rem] max-lg:text-[0.9375rem] max-lg:leading-4.5">
        {d.description2}
      </p>
    </div>
  );
}
