import Component_14_1 from './Component_14_1';
import Component_14_2 from './Component_14_2';
import Component_14_3 from './Component_14_3';
import Component_14_4 from './Component_14_4';
import Component_14_5 from './Component_14_5';
import Component_14_6 from './Component_14_6';
import Component_14_7 from './Component_14_7';
import Component_14_8 from './Component_14_8';
import Component_14_9 from './Component_14_9';

function Component_14() {
  return (
    <div
      className="grid gap-y-10 md:gap-y-0 gap-x-60 grid-cols-1 md:grid-cols-[minmax(0px,1fr)_minmax(auto,350px)] [backface-visibility:hidden]"
      data-component-id="Component_14"
    >
      <div className="grid gap-y-0 gap-x-4 md:gap-x-[90px] grid-cols-1 md:grid-cols-[repeat(2,minmax(0px,1fr))] [backface-visibility:hidden]">
        <div className="relative [backface-visibility:hidden]">
          <hr />
          <div
            role="button"
            className="flex justify-between items-center [backface-visibility:hidden] pointer-events-none pr-5 py-[25px]"
          >
            <span className='leading-[23px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[18px] uppercase block grow basis-[0%] [backface-visibility:hidden] pointer-events-none'>
              product categories
            </span>
          </div>
          <Component_14_1 />
        </div>
        <div className="relative [backface-visibility:hidden]">
          <hr />
          <div
            role="button"
            className="flex justify-between items-center [backface-visibility:hidden] pointer-events-none pr-5 py-[25px]"
          >
            <span className='leading-[23px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[18px] uppercase block grow basis-[0%] [backface-visibility:hidden] pointer-events-none'>
              collections
            </span>
          </div>
          <Component_14_2 />
        </div>
        <ul className="grid gap-y-0 gap-x-4 md:gap-x-[90px] grid-cols-1 md:grid-cols-[repeat(2,minmax(0px,1fr))] col-start-1 col-end-[-1] [backface-visibility:hidden] list-none my-0 pl-0">
          <Component_14_3 />
          <Component_14_4 />
          <Component_14_5 />
          <Component_14_6 />
          <Component_14_7 />
          <Component_14_8 />
        </ul>
        <div className="relative [backface-visibility:hidden]">
          <hr />
          <div
            role="button"
            className="flex justify-between items-center [backface-visibility:hidden] pointer-events-none pr-5 py-[25px]"
          >
            <span className='leading-[23px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[18px] uppercase block grow basis-[0%] [backface-visibility:hidden] pointer-events-none'>
              house of minas
            </span>
          </div>
          <Component_14_9 />
        </div>
        <hr />
      </div>
      <div className="[backface-visibility:hidden]">
        <div className="bg-white min-h-[500px] flex flex-col [backface-visibility:hidden] pt-2.5 pb-[30px] px-2.5 rounded-br-[5px] rounded-t-[5px] rounded-bl-[5px]">
          <div className="h-[180px] [backface-visibility:hidden]">
            <img
              width="2600"
              height="2600"
              src="https://minas-designs.com/wp-content/uploads/2025/02/cobra-s-hq.jpg"
              alt="Cobra earrings silver MInas"
              className="align-middle w-full h-full aspect-[auto_2600_/_2600] block [backface-visibility:hidden] object-cover"
            />
          </div>
          <span className='leading-[18px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[15px] uppercase block [backface-visibility:hidden] ml-5 mt-[30px]'>
            The New Cobra earrings
          </span>
          <span className='leading-[20px] [font-family:"Blacker_Pro_Text_Book",arial,system-ui,sans-serif] font-light text-[14px] tracking-[0.42px] block [backface-visibility:hidden] mt-2.5 mx-5'>
            A sculptural emblem of strength, and timeless motion.
          </span>
          <a
            href="#"
            className="text-center max-w-[190px] relative block overflow-x-hidden overflow-y-hidden justify-center content-center [backface-visibility:hidden] [mask-image:linear-gradient(rgb(0,0,0)_0px,rgb(0,0,0)_0px)] ml-5 mt-auto pt-[19px] pb-5 px-[30px] rounded-br-[3px] rounded-t-[3px] rounded-bl-[3px] border-[#a7a7a7] border"
          >
            <span className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] uppercase relative z-[1] [backface-visibility:hidden]'>
              An Icon is born
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Component_14;
