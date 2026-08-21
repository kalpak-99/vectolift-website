export default function Illustration2({ cid }: { cid?: string }) {
  return (
    <div
      data-cid={cid}
      data-component="image"
      className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl"
    >
      <img
        src="/1image.png"
        alt="Agents Dashboard"
        className="w-full h-auto max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
      />
    </div>
  );
}
