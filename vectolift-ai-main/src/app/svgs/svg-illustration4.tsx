export default function Illustration4({ cid }: { cid?: string }) {
  return (
    <span
      data-cid={cid}
      data-component="image"
      className="flex items-center gap-3 text-color-001 w-auto h-12"
      role="presentation"
    >
      {/* Favicon Logo Mark */}
      <img
        src="/favicon-96x96.png"
        alt="Vectolift"
        className="w-9 h-9 object-contain shrink-0 rounded-lg"
      />
      {/* Wordmark */}
      <span className="font-semibold tracking-[-0.5px] text-[1.5rem] leading-none [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif]">
        Vectolift
      </span>
    </span>
  );
}
