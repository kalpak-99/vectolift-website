export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, cids }: { d: ListRowData; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <a data-cid={cids[1]} className="inline text-[0.9375rem] font-medium leading-[1.3125rem] cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
