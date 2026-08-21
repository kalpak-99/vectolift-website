"use client";

/** Everyday Calls Extraordinary section. */
export default function EverydayCallsExtraordinarySection({ onContactClick }: { onContactClick?: () => void }) {
  return (
    <section className="h-101 w-full block relative overflow-hidden bg-color-002 max-md:h-88 md:max-lg:h-92" data-cid="n346">
      <div className="h-full w-full block absolute top-0 inset-x-0 pointer-events-none" data-cid="n347" aria-hidden="true">
        <img
          className="w-full h-full block absolute top-0 left-0 overflow-clip object-cover align-middle text-clr-0 pointer-events-none"
          data-cid="n348"
          data-component="image"
          alt=""
          sizes="100vw"
          src="/assets/cloned/images/1cdc5ae0420f.jpg"
          srcSet="/assets/cloned/images/a48fff898501.jpg 640w, /assets/cloned/images/47766ed72d7f.jpg 750w, /assets/cloned/images/de743d801d03.jpg 828w, /assets/cloned/images/74a5ddbddce7.jpg 1080w, /assets/cloned/images/92e84b50ea5b.jpg 1200w, /assets/cloned/images/ee174dd2fec7.webp 1920w, /assets/cloned/images/284779ea0423.jpg 2048w, /assets/cloned/images/1cdc5ae0420f.jpg 3840w"
        />
        <div className="h-full w-full block absolute top-0 inset-x-0 bg-clr-10 pointer-events-none" data-cid="n349" />
      </div>
      <div className="h-full block relative z-10 max-w-288 mx-auto py-28 w-full max-md:px-7.5 md:max-lg:px-8" data-cid="n350">
        <div className="h-full flex flex-col items-start gap-6" data-cid="n351">
          <h2 className="h-29 block text-color-001 text-[3.625rem] font-medium leading-14.5 tracking-[-2.9px] w-[40rem] max-md:h-16 max-md:text-[2rem] max-md:leading-8 max-md:tracking-[-1.6px] max-md:w-full md:max-lg:h-20 md:max-lg:text-[2.5rem] md:max-lg:leading-10 md:max-lg:tracking-[-2px] md:max-lg:w-[25rem]" data-cid="n352" data-component="heading">
            Everyday calls.
            <br className="inline" data-cid="n353" />
            Extraordinary outcomes.
          </h2>
          <div className="h-10 flex gap-2" data-cid="n354">
            <button
              type="button"
              className="inline-flex px-4 rounded-lg justify-center items-center text-color-003 text-[15px] font-medium leading-[1.3125rem] whitespace-nowrap text-nowrap bg-primary cursor-pointer h-10 hover:opacity-90 transition-opacity"
              data-cid="n355"
              data-component="button"
              onClick={onContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
