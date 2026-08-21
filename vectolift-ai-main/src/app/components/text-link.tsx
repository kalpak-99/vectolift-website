export type TextLinkData = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, cids }: { d: TextLinkData; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="block text-color-001 text-xs leading-[0.875rem] cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
