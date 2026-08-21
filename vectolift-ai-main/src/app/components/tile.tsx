export type TileData = {
  selected?: boolean;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d, cids }: { d: TileData; cids: string[] }) {
  return (
    <option data-cid={cids[0]} className="min-h-6 block min-w-6 items-center gap-2 whitespace-nowrap" value={d.value}>
      {d.text}
    </option>
  );
}
