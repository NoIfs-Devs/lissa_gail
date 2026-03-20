import Component_1_1 from './Component_1_1';

function Component_1() {
  return (
    <div
      className="absolute right-[-25px] z-[9] invisible opacity-0 [backface-visibility:hidden] select-none left-auto top-0 bottom-auto"
      data-component-id="Component_1"
    >
      <div className="w-[250px] relative [backface-visibility:hidden] select-none top-[30px] bottom-auto inset-x-auto">
        <Component_1_1 />
        <div className="bg-black flex justify-end [backface-visibility:hidden] select-none mt-px px-5 py-[22px] rounded-br-[3px] rounded-t-[3px] rounded-bl-[3px]">
          <a
            href="#"
            className='text-[#a2a2a2] leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[10px] uppercase flex justify-end items-center [backface-visibility:hidden] caret-[#a2a2a2] select-none hover:text-[#f32f1d] group'
          >
            Sign out
            <svg
              viewBox="0 0 13.6 7.5"
              className="align-middle w-3 block overflow-x-visible overflow-y-visible [backface-visibility:hidden] caret-[#a2a2a2] select-none ml-3.5"
              data-svg-size="438"
            >
              <polygon
                points="9.9 0 9.4 .5 12.3 3.4 .7 3.4 .7 .2 0 .2 0 4.1 12.3 4.1 9.4 7 9.9 7.5 13.6 3.8 9.9 0"
                className="inline [backface-visibility:hidden] fill-[#7a7a7a] stroke-0 caret-[#a2a2a2] select-none group-hover:fill-[#f32f1d]"
              ></polygon>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Component_1;
