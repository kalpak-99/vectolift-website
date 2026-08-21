export default function Illustration({ cid }: { cid?: string }) {
  return (
    <span
      data-cid={cid}
      data-component="image"
      className="flex items-center h-12 max-lg:h-10 shrink-0"
      role="presentation"
    >
      <img
        src="/vectolift-2.png"
        alt="Vectolift Logo"
        className="h-10.5 w-auto object-contain max-lg:h-8 transition-transform duration-300 hover:scale-105"
      />
    </span>
  );
}
