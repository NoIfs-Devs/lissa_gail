import Component_3_1 from './Component_3_1';
import Component_3_2 from './Component_3_2';

function Component_3() {
  return (
    <div
      className="[backface-visibility:hidden] pointer-events-none select-none pb-[60px] px-[130px]"
      data-component-id="Component_3"
    >
      <Component_3_1 />
      <Component_3_2 />
    </div>
  );
}

export default Component_3;
