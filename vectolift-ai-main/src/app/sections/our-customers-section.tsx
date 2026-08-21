export default function OurCustomersSection() {
  const customerLogos = [
    { name: "Chandrama Solutions", src: "/testimonial1.png" },
    { name: "Astronames", src: "/testimonial2.png" },
    { name: "Graph Detector", src: "/testimonial3.png" },
    { name: "Fabulato", src: "/testimonial4.png" },
  ];

  return (
    <section className="block py-20 px-6 bg-color-001 border-t border-color-002/5" id="customers">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Title & Subtitle */}
        <div className="flex flex-col items-center gap-3.5 max-w-xl">
          <h2 className="text-[2.75rem] md:text-[3.4rem] font-bold text-color-002 tracking-[-1.5px] leading-tight [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif]">
            Our Customers
          </h2>
          <p className="text-color-002/75 text-base md:text-[1.05rem] leading-relaxed max-w-[490px] font-normal">
            From small businesses to global enterprises, Vectolift enables organizations of all kinds to speak human to their customers
          </p>
        </div>

        {/* Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-7 pt-4 w-full">
          {customerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-11 md:h-12 w-auto object-contain max-w-[230px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
