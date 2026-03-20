import Component_5_1 from './Component_5_1';

function Component_5({ isMobile }) {
  return (
    <div
      className="w-full h-screen relative [backface-visibility:hidden] pointer-events-none m-0 p-0"
      data-component-id="Component_5"
    >
      {/* On mobile, render the background video in-flow (stitched) */}
      {isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Component_5_1 />
        </div>
      )}
      <section className="w-full h-full relative [backface-visibility:hidden] pointer-events-none m-0 p-0">
        <div className="h-full max-w-[1820px] absolute z-[1] flex flex-col justify-end [backface-visibility:hidden] pointer-events-none pl-[40px] md:pl-[60px] pr-10 pb-[120px] pt-[60px] top-0 bottom-auto inset-x-0">
          <span className='text-white font-medium leading-[1] [font-family:"Montserrat",sans-serif] text-[80px] md:text-[120px] tracking-[4px] uppercase block [backface-visibility:hidden] caret-white pointer-events-none'>
            LISSA GAIL
          </span>
          <span className='text-white leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] tracking-[0.11px] uppercase block [backface-visibility:hidden] caret-white pointer-events-none -mt-1'>
            collection
          </span>
        </div>
      </section>
    </div>
  );
}

export default Component_5;
