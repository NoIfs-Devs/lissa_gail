import Component_5_1_1_1 from './Component_5_1_1_1';

function Component_5_1_1() {
  return (
    <div
      className="text-left w-full h-screen absolute z-[3] flex flex-col justify-between [backface-visibility:hidden] pointer-events-none pt-[90px] pb-10 px-10"
      data-component-id="Component_5_1_1"
    >
      <div className="[font-variant-ligatures:normal] tabular-nums [font-variant-east-asian:normal] [font-variant-caps:normal] [font-variant-alternates:normal] [font-variant-position:normal] [font-variant-emoji:normal] [backface-visibility:hidden] pointer-events-none">
        <div
          aria-label="Current time"
          className='text-white leading-[45px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] [font-variant-ligatures:normal] tabular-nums [font-variant-east-asian:normal] [font-variant-caps:normal] [font-variant-alternates:normal] [font-variant-position:normal] [font-variant-emoji:normal] font-thin text-[39.9936px] invisible [backface-visibility:hidden] caret-white pointer-events-none'
        >
          00:
          <span className="[font-variant-ligatures:normal] tabular-nums [font-variant-east-asian:normal] [font-variant-caps:normal] [font-variant-alternates:normal] [font-variant-position:normal] [font-variant-emoji:normal] [backface-visibility:hidden] caret-white pointer-events-none">
            00:00
          </span>
        </div>
        <div
          aria-label="Duration"
          className="[font-variant-ligatures:normal] tabular-nums [font-variant-east-asian:normal] [font-variant-caps:normal] [font-variant-alternates:normal] [font-variant-position:normal] [font-variant-emoji:normal] hidden invisible [backface-visibility:hidden] pointer-events-none"
        >
          00:40
        </div>
      </div>
      <Component_5_1_1_1 />
    </div>
  );
}

export default Component_5_1_1;
