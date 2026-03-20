import Component_3_1_1 from './Component_3_1_1';
import Component_3_1_2 from './Component_3_1_2';
import Component_3_1_3 from './Component_3_1_3';

function Component_3_1() {
  return (
    <div
      className="[backface-visibility:hidden] pointer-events-none select-none mt-[60px]"
      data-component-id="Component_3_1"
    >
      <span className='text-[#f32f1d] leading-[18px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[13px] tracking-[0.65px] uppercase block [backface-visibility:hidden] caret-[#f32f1d] pointer-events-none select-none mb-[30px]'>
        currently trending
      </span>
      <ul className="[backface-visibility:hidden] list-none pointer-events-none select-none my-0 pl-0">
        <Component_3_1_1 />
        <Component_3_1_2 />
        <Component_3_1_3 />
      </ul>
    </div>
  );
}

export default Component_3_1;
