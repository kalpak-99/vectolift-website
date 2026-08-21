export type LogoData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  label: string;
  kind?: string;
};

/** A precision logo tile: 76px square, dark bg, crisp 1px border, rounded-lg. */
export default function Logo({ d, cids }: { d: LogoData; cids?: string[] }) {
  return (
    <li
      data-cid={cids?.[0]}
      className="group relative w-19 h-19 border border-white/10 bg-[#08080A] flex justify-center items-center shrink-0 rounded-lg hover:border-white/35 hover:bg-[#121216] transition-all duration-300"
      title={d.label}
    >
      <img
        data-cid={cids?.[1]}
        className="w-10.5 h-10.5 block max-w-full overflow-clip object-contain aspect-square align-middle transition-transform duration-300 group-hover:scale-105"
        alt={d.alt}
        height="42"
        src={d.imgSrc}
        srcSet={d.srcSet}
        title={d.label}
        width="42"
        data-component={d.kind}
      />
    </li>
  );
}
