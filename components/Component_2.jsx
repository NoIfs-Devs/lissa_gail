function Component_2() {
  return (
    <form
      role="search"
      id="searchform"
      autoComplete="off"
      className="[backface-visibility:hidden] pointer-events-none select-none mb-0"
      data-component-id="Component_2"
    >
      <div className="flex flex-wrap justify-between items-center [backface-visibility:hidden] pointer-events-none select-none px-[25px] py-[17px] border-b-[#a7a7a7] border-b">
        <div
          role="button"
          className="[backface-visibility:hidden] pointer-events-none select-none ml-[107px] mr-auto"
        >
          <svg
            viewBox="0 0 94.169 94.132"
            className="align-middle w-5 overflow-x-hidden overflow-y-hidden [backface-visibility:hidden] pointer-events-none select-none mr-[18px]"
            data-svg-size="616"
          >
            <path
              d="M94.169,89.765l-14.968-14.971c6.922-7.939,11.148-18.284,11.148-29.621C90.349,20.266,70.085,0,45.175,0S0,20.266,0,45.173s20.266,45.175,45.175,45.175c11.356,0,21.717-4.243,29.661-11.185l14.968,14.968,4.364-4.366ZM45.175,84.176c-21.505,0-39.003-17.498-39.003-39.003S23.671,6.173,45.175,6.173s39.001,17.496,39.001,39.001-17.496,39.003-39.001,39.003Z"
              className="inline [backface-visibility:hidden] pointer-events-none select-none"
            ></path>
          </svg>
        </div>
        <input
          aria-label="search input"
          type="text"
          name="s"
          id="s"
          placeholder="SEARCH"
          className='bg-[rgba(0,0,0,0)] text-black leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] uppercase block grow [backface-visibility:hidden] pointer-events-none select-none appearance-none mr-auto mt-[3px] focus:opacity-0'
        />
        <div
          role="button"
          className="[backface-visibility:hidden] pointer-events-none select-none group"
        >
          <svg
            x="0px"
            y="0px"
            width="46.1px"
            height="46.1px"
            viewBox="0 0 46.1 46.1"
            className="align-middle w-5 [backface-visibility:hidden] fill-none stroke-black pointer-events-none select-none"
            data-svg-size="549"
          >
            <line
              x1="0.4"
              y1="0.4"
              x2="45.7"
              y2="45.7"
              className="inline [backface-visibility:hidden] fill-none stroke-black pointer-events-none select-none group-hover:rotate-45"
            ></line>
            <line
              x1="0.4"
              y1="45.7"
              x2="45.7"
              y2="0.4"
              className="inline [backface-visibility:hidden] fill-none stroke-black pointer-events-none select-none group-hover:rotate-45"
            ></line>
          </svg>
        </div>
      </div>
      <label className="hidden [backface-visibility:hidden] pointer-events-none select-none">
        search
      </label>
      <input
        aria-label="search submit"
        type="submit"
        id="value"
        name="value"
        className="bg-[rgba(0,0,0,0)] text-[16px] text-center [white-space-collapse:preserve] [text-wrap-mode:nowrap] hidden [backface-visibility:hidden] pointer-events-none select-none appearance-none px-1.5"
      />
    </form>
  );
}

export default Component_2;
