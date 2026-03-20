import React, { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Component_1 from './components/Component_1';
import Component_2 from './components/Component_2';
import Component_3 from './components/Component_3';
import Component_4 from './components/Component_4';
import Component_5 from './components/Component_5';
import Component_6 from './components/Component_6';
import Component_7 from './components/Component_7';
import Component_8 from './components/Component_8';
import Component_9 from './components/Component_9';
import Component_10 from './components/Component_10';
import Component_11 from './components/Component_11';
import Component_12 from './components/Component_12';
import Component_13 from './components/Component_13';
import Component_14 from './components/Component_14';
import Component_15 from './components/Component_15';
import Component_5_1 from './components/Component_5_1';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      const scrollTop = container ? container.scrollTop : (window.pageYOffset || document.documentElement.scrollTop);
      // Trigger when most of the hero is scrolled (e.g. 80% of window height)
      setScrolled(scrollTop > (window.innerHeight * 0.8));
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Execute delayed scripts after React has rendered
    console.log('[React] DOM rendered, executing delayed scripts...');

    // Execute regular delayed scripts first
    const delayedScripts = document.querySelectorAll(
      'script[type="text/delayed"]'
    );

    delayedScripts.forEach((script) => {
      // Prevent duplicate script injection (especially in React.StrictMode)
      if (script.dataset.src) {
        if (document.querySelector(`script[src="${script.dataset.src}"]`)) {
          console.log(`[React] Script already loaded: ${script.dataset.src}`);
          return;
        }
      } else if (script.id) {
        if (document.getElementById(script.id) && document.body.contains(document.getElementById(script.id))) {
          // This is tricky because we usually replace the script. 
          // But for inline scripts without IDs, it's harder.
          // However, most important one here is UserWay widget.js which has a src.
        }
      }

      const newScript = document.createElement('script');

      // External script (has data-src)
      if (script.dataset.src) {
        newScript.src = script.dataset.src;

        // Copy other attributes (integrity, crossorigin, defer, etc.)
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        // Inline script
        newScript.textContent = script.textContent;

        // Copy data-* attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });

    // Execute delayed module scripts (Pattern 006: Pre-bundled ES Module Scripts)
    const delayedModules = document.querySelectorAll(
      'script[type="text/delayed-module"]'
    );

    delayedModules.forEach((script) => {
      const newScript = document.createElement('script');
      newScript.type = 'module'; // Restore original type

      // External module script (has data-src)
      if (script.dataset.src) {
        newScript.src = script.dataset.src;

        // Copy other attributes (crossorigin, etc.)
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        // Inline module script
        newScript.textContent = script.textContent;

        // Copy data-* attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });

    console.log(
      `[React] Executed ${delayedScripts.length} delayed scripts + ${delayedModules.length} delayed modules`
    );
  }, []);

  // Nuclear fix for persistent scroll locks injected by the environment (e.g. antigravity-scroll-lock)
  useEffect(() => {
    const fixScroll = () => {
      if (document.body.classList.contains('antigravity-scroll-lock')) {
        document.body.classList.remove('antigravity-scroll-lock');
      }
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
      }
      if (document.documentElement.style.overflow === 'hidden') {
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';
      }
    };

    fixScroll();
    const observer = new MutationObserver(fixScroll);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style'] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

    // Aggressive touchstart neutralization for iOS
    const handleTouch = () => {
      fixScroll();
    };
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });

    // Inject a global style override at the end of the head
    const style = document.createElement('style');
    style.innerHTML = `
      html, body, #root, #app {
        overflow-y: auto !important;
        height: auto !important;
        min-height: 100% !important;
        -webkit-overflow-scrolling: touch !important;
      }
      .antigravity-scroll-lock {
        overflow-y: auto !important;
        height: auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      observer.disconnect();
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className='bg-transparent [font-family:"Aeonik_Pro",arial,system-ui,sans-serif] relative'>
      {/* Desktop Fixed Hero Background */}
      {!isMobile && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <Component_5_1 />
        </div>
      )}
        <div className={`w-full fixed z-[200] [backface-visibility:hidden] left-0 right-auto top-0 bottom-auto transition-all duration-500 ease-in-out ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
          <div className="w-full relative flex items-center [backface-visibility:hidden] select-none px-5 md:px-10">
            <div className="flex-1 flex items-center [backface-visibility:hidden] select-none">
              <div
                role="button"
                aria-label="hamburger menu"
                className="[backface-visibility:hidden] select-none px-5 md:px-10 py-[1px] cursor-pointer block md:!hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="grid justify-center content-center [backface-visibility:hidden] select-none text-white">
                  {mobileMenuOpen ? (
                    <X size={28} strokeWidth={1} />
                  ) : (
                    <Menu size={28} strokeWidth={1} />
                  )}
                </span>
              </div>
              <div
                aria-label="search"
                role="button"
                className="text-left flex items-center [backface-visibility:hidden] select-none ml-5 mr-auto"
              >
                <svg
                  viewBox="0 0 94.169 94.132"
                  className="align-middle w-5 block overflow-x-hidden overflow-y-hidden [backface-visibility:hidden] select-none mr-5"
                  data-svg-size="588"
                >
                  <path
                    d="M94.169,89.765l-14.968-14.971c6.922-7.939,11.148-18.284,11.148-29.621C90.349,20.266,70.085,0,45.175,0S0,20.266,0,45.173s20.266,45.175,45.175,45.175c11.356,0,21.717-4.243,29.661-11.185l14.968,14.968,4.364-4.366ZM45.175,84.176c-21.505,0-39.003-17.498-39.003-39.003S23.671,6.173,45.175,6.173s39.001,17.496,39.001,39.001-17.496,39.003-39.001,39.003Z"
                    className="inline [backface-visibility:hidden] fill-white select-none"
                  ></path>
                </svg>
                <span
                  className='text-white leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] relative hidden md:block [background-position-x:100%] [background-position-y:100%] bg-no-repeat bg-[0px_1px] [backface-visibility:hidden] caret-white select-none'
                  data-style-id="style-2-1773778729182"
                >
                  SEARCH
                </span>
              </div>
              <nav className="hidden lg:!flex items-center gap-6 ml-8 [backface-visibility:hidden] select-none">
                <a
                  href="https://www.lissagail.com/collections"
                  className='text-white leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] uppercase tracking-[0.11px] [backface-visibility:hidden] hover:opacity-70 transition-opacity whitespace-nowrap'
                >
                  Collections
                </a>
                <a
                  href="https://www.lissagail.com/collections/all"
                  className='text-white leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] uppercase tracking-[0.11px] [backface-visibility:hidden] hover:opacity-70 transition-opacity whitespace-nowrap'
                >
                  Shop all
                </a>
                <a
                  href="#"
                  className='text-white leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] uppercase tracking-[0.11px] [backface-visibility:hidden] hover:opacity-70 transition-opacity whitespace-nowrap'
                >
                  Events
                </a>
                <a
                  href="https://www.lissagail.com/pages/shopify-com-store-6mymaz-1g-pages-106182869069"
                  className='text-white leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] uppercase tracking-[0.11px] [backface-visibility:hidden] hover:opacity-70 transition-opacity whitespace-nowrap'
                >
                  About
                </a>
                <a
                  href="#"
                  className='text-white leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] uppercase tracking-[0.11px] [backface-visibility:hidden] hover:opacity-70 transition-opacity whitespace-nowrap'
                >
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex-1 [backface-visibility:hidden] select-none">
              {scrolled && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center transition-opacity duration-500 opacity-100">
                  <span className='text-white [font-family:"Montserrat",sans-serif_!important] font-medium text-[14px] md:text-[22px] tracking-[1px] md:tracking-[2px] uppercase whitespace-nowrap'>
                    LISSA GAIL
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1 flex justify-end items-center [backface-visibility:hidden] select-none">
              <div className="relative [backface-visibility:hidden] select-none">
                <div
                  aria-label="user button"
                  role="button"
                  className="flex items-center [backface-visibility:hidden] select-none"
                >
                  <div className="relative [backface-visibility:hidden] select-none">
                    <span
                      className='text-white leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] uppercase relative hidden md:!inline-block [background-position-x:100%] [background-position-y:100%] bg-no-repeat bg-[0px_1px] [backface-visibility:hidden] caret-white select-none hover:no-underline hover:decoration-[initial] hover:[text-decoration-style:initial] hover:bg-[0px_100%] hover:bg-no-repeat hover:bg-[100%_1px] hover:bg-[linear-gradient(var(--color-2),var(--color-2))]'
                      data-style-id="style-3-1773778729182"
                    >
                      LOGIN / SIGN UP
                    </span>
                  </div>
                </div>
                <Component_1 />
              </div>
              <div
                aria-label="cart button"
                role="button"
                className="text-white relative flex items-center [backface-visibility:hidden] caret-white select-none ml-5 md:ml-[30px] group"
              >
                <span
                  className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] uppercase relative block [background-position-x:100%] [background-position-y:100%] bg-no-repeat bg-[0px_1px] [backface-visibility:hidden] caret-white select-none group-hover:no-underline group-hover:decoration-[initial] group-hover:[text-decoration-style:initial] group-hover:bg-[0px_100%] group-hover:bg-no-repeat group-hover:bg-[100%_1px] group-hover:bg-[linear-gradient(var(--color-2),var(--color-2))]'
                  data-style-id="style-4-1773778729183"
                >
                  CART
                </span>
                <div className="relative flex flex-col justify-center items-center [backface-visibility:hidden] caret-white select-none ml-3.5">
                  <span className="leading-[18px] text-[11px] text-center min-w-5 relative grid overflow-x-hidden overflow-y-hidden [backface-visibility:hidden] caret-white select-none px-[5px] py-0.5 border-white border group-hover:text-black group-hover:[transform:translateZ(0px)]">
                    0
                  </span>
                </div>
              </div>
            </div>
            <div className="[backface-visibility:hidden] pointer-events-none select-none">
              <div className="bg-[#efefef] w-full max-w-[600px] absolute invisible [backface-visibility:hidden] [clip-path:polygon(0px_0px,100%_0px,100%_0px,0px_0px)] pointer-events-none select-none rounded-br-[10px] rounded-t-[10px] rounded-bl-[10px] left-2.5 right-auto top-2.5 bottom-auto">
                <Component_2 />
                <Component_3 />
              </div>
            </div>
          </div>
          {/* Mobile Menu Dropdown */}
          <div className={`lg:hidden w-full bg-black transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] border-t border-white/20' : 'max-h-0'}`}>
            <nav className="flex flex-col items-center py-8 gap-8">
              <a href="https://www.lissagail.com/collections" className='text-white font-bold leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[14px] uppercase tracking-[2px] hover:opacity-70 transition-opacity'>Collections</a>
              <a href="https://www.lissagail.com/collections/all" className='text-white font-bold leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[14px] uppercase tracking-[2px] hover:opacity-70 transition-opacity'>Shop all</a>
              <a href="#" className='text-white font-bold leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[14px] uppercase tracking-[2px] hover:opacity-70 transition-opacity'>Events</a>
              <a href="https://www.lissagail.com/pages/shopify-com-store-6mymaz-1g-pages-106182869069" className='text-white font-bold leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[14px] uppercase tracking-[2px] hover:opacity-70 transition-opacity'>About</a>
              <a href="#" className='text-white font-bold leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[14px] uppercase tracking-[2px] hover:opacity-70 transition-opacity'>Contact</a>
              <a href="#" className='text-white font-bold leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[14px] uppercase tracking-[2px] hover:opacity-70 transition-opacity mt-4 pt-8 border-t border-white/20 w-3/4 text-center'>Login / Sign up</a>
            </nav>
          </div>
        </div>
        <main
          id="app"
          ref={scrollContainerRef}
          className="w-full max-w-[1920px] mx-auto relative z-[2] bg-transparent"
        >
          <div className="[backface-visibility:hidden]">
            <div className="bg-white w-full h-[963px] fixed z-[10000] overflow-y-scroll invisible [backface-visibility:hidden] left-0 right-auto top-0 bottom-auto">
              <div className="w-full fixed z-[1] flex items-center [backface-visibility:hidden] p-10 left-0 right-auto top-0 bottom-auto">
                <span className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] tracking-[0.11px] block [backface-visibility:hidden]'>
                  1
                </span>
                <span className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] tracking-[0.11px] block [backface-visibility:hidden] ml-5'>
                  /
                </span>
                <span className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] tracking-[0.11px] block [backface-visibility:hidden] ml-[5px]'>
                  00
                </span>
                <span className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] tracking-[0.11px] uppercase block [backface-visibility:hidden] ml-20'>
                  left hand cuff
                </span>
              </div>
            </div>
            <div className="[backface-visibility:hidden] pt-[0.1px]">
              <div className="relative z-[30] bg-[#efefef] [backface-visibility:hidden]">
                <Component_4 />
              </div>
              <div className="relative z-[30]">
                <Component_5 isMobile={isMobile} />
              </div>
              <div className="relative z-[30] bg-[#efefef] [backface-visibility:hidden]">
                <Component_6 />
              </div>
            </div>
          </div>
          <div className="bg-black sticky bottom-0 z-[10] flex flex-col justify-center items-center [backface-visibility:hidden] min-h-screen">
            <div className="w-full relative z-[1] [backface-visibility:hidden] mx-auto px-5">
              <ul className="bg-white w-full grid grid-cols-1 md:grid-cols-4 items-stretch [backface-visibility:hidden] mt-5 pl-0 py-10 rounded-br-[5px] rounded-t-[5px] rounded-bl-[5px]">
                <li className="min-h-[135px] relative flex flex-col items-start [backface-visibility:hidden] list-none list-outside px-10">
                  <a
                    href="#"
                    aria-label="SECURE PAYMENT"
                    className="h-full absolute z-[1] block [backface-visibility:hidden] top-0 bottom-auto inset-x-0"
                  ></a>
                  <span className="min-w-[30px] max-w-[335px] block [backface-visibility:hidden]">
                    <svg
                      className="w-full [content-visibility:visible] align-middle h-[25px] overflow-x-hidden overflow-y-hidden [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden]"
                      width="20"
                      height="25"
                      viewBox="0 0 20 25"
                    >
                      <use
                        href="assets/minas-designs_com/svg-sprite.svg#svg-symbol-22"
                        xlinkHref="assets/minas-designs_com/svg-sprite.svg#svg-symbol-22"
                      ></use>
                    </svg>
                  </span>
                  <span className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] tracking-[0.11px] uppercase text-left max-w-[335px] block [backface-visibility:hidden] mt-5 mb-2.5'>
                    SECURE PAYMENT
                  </span>
                  <span className='leading-[20px] [font-family:"Blacker_Pro_Text_Book",arial,system-ui,sans-serif] font-light text-[14px] tracking-[0.42px] text-left max-w-[335px] block [backface-visibility:hidden] mb-5'>
                    Our safety is our top priority, thus your payment
                    information is processed securely.
                  </span>
                  <span className="max-w-[335px] block [backface-visibility:hidden] mt-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 73 9"
                      width="73"
                      height="9"
                      className="h-full [content-visibility:visible] align-middle w-full overflow-x-hidden overflow-y-hidden [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden]"
                      data-svg-size="1874"
                    >
                      <g className='inline [backface-visibility:hidden] [clip-path:url("#\_\_lottie\_element\_64")]'>
                        <g
                          transform="matrix(0.9649999737739563,0,0,0.9649999737739563,-196.26531982421875,-321.6851806640625)"
                          opacity="1"
                          className="block [transform:matrix(0.965,0,0,0.965,-196.265,-321.685)] [backface-visibility:hidden]"
                        >
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,238.84800720214844,337.5660095214844)"
                            className="inline [transform:matrix(1,0,0,1,238.848,337.566)] [backface-visibility:hidden]"
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,0,0)"
                              className="inline [backface-visibility:hidden]"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                stroke="rgb(0, 0, 0)"
                                strokeWidth="1px"
                                d=" M5.468999862670898,0.0020000000949949026 C5.468999862670898,0.0020000000949949026 -6.440000057220459,0 -6.440000057220459,0"
                                className="inline [backface-visibility:hidden] [fill-opacity:0] stroke-black"
                              ></path>
                            </g>
                          </g>
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,243.4510040283203,337.5660095214844)"
                            className="inline [transform:matrix(1,0,0,1,243.451,337.566)] [backface-visibility:hidden]"
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,0,0)"
                              className="inline [backface-visibility:hidden]"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                stroke="rgb(0, 0, 0)"
                                strokeWidth="1px"
                                d=" M-2.7309999465942383,-3.5169999599456787 C-2.7309999465942383,-3.5169999599456787 0.7879999876022339,0.0020000000949949026 0.7879999876022339,0.0020000000949949026 C0.7879999876022339,0.0020000000949949026 -2.7309999465942383,3.5220000743865967 -2.7309999465942383,3.5220000743865967"
                                className="inline [backface-visibility:hidden] [fill-opacity:0] stroke-black"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </li>
                <li className="min-h-[135px] relative flex flex-col items-start [backface-visibility:hidden] list-none list-outside px-10 border-l-[#ebeae7] border-l">
                  <a
                    href="#"
                    aria-label="free shipping"
                    className="h-full absolute z-[1] block [backface-visibility:hidden] top-0 bottom-auto inset-x-0"
                  ></a>
                  <span className="min-w-[30px] max-w-[335px] block [backface-visibility:hidden]">
                    <svg
                      className="w-full [content-visibility:visible] align-middle h-[25px] overflow-x-hidden overflow-y-hidden [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden]"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                    >
                      <use
                        href="assets/minas-designs_com/svg-sprite.svg#svg-symbol-24"
                        xlinkHref="assets/minas-designs_com/svg-sprite.svg#svg-symbol-24"
                      ></use>
                    </svg>
                  </span>
                  <span className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] tracking-[0.11px] uppercase text-left max-w-[335px] block [backface-visibility:hidden] mt-5 mb-2.5'>
                    free shipping
                  </span>
                  <span className='leading-[20px] [font-family:"Blacker_Pro_Text_Book",arial,system-ui,sans-serif] font-light text-[14px] tracking-[0.42px] text-left max-w-[335px] block [backface-visibility:hidden] mb-5'>
                    Free domestic shipping and returns for purchases over $500.
                  </span>
                  <span className="max-w-[335px] block [backface-visibility:hidden] mt-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 73 9"
                      width="73"
                      height="9"
                      className="h-full [content-visibility:visible] align-middle w-full overflow-x-hidden overflow-y-hidden [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden]"
                      data-svg-size="1875"
                    >
                      <g className='inline [backface-visibility:hidden] [clip-path:url("#\_\_lottie\_element\_131")]'>
                        <g
                          transform="matrix(0.9649999737739563,0,0,0.9649999737739563,-196.26531982421875,-321.6851806640625)"
                          opacity="1"
                          className="block [transform:matrix(0.965,0,0,0.965,-196.265,-321.685)] [backface-visibility:hidden]"
                        >
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,238.84800720214844,337.5660095214844)"
                            className="inline [transform:matrix(1,0,0,1,238.848,337.566)] [backface-visibility:hidden]"
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,0,0)"
                              className="inline [backface-visibility:hidden]"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                stroke="rgb(0, 0, 0)"
                                strokeWidth="1px"
                                d=" M5.468999862670898,0.0020000000949949026 C5.468999862670898,0.0020000000949949026 -6.440000057220459,0 -6.440000057220459,0"
                                className="inline [backface-visibility:hidden] [fill-opacity:0] stroke-black"
                              ></path>
                            </g>
                          </g>
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,243.4510040283203,337.5660095214844)"
                            className="inline [transform:matrix(1,0,0,1,243.451,337.566)] [backface-visibility:hidden]"
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,0,0)"
                              className="inline [backface-visibility:hidden]"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                stroke="rgb(0, 0, 0)"
                                strokeWidth="1px"
                                d=" M-2.7309999465942383,-3.5169999599456787 C-2.7309999465942383,-3.5169999599456787 0.7879999876022339,0.0020000000949949026 0.7879999876022339,0.0020000000949949026 C0.7879999876022339,0.0020000000949949026 -2.7309999465942383,3.5220000743865967 -2.7309999465942383,3.5220000743865967"
                                className="inline [backface-visibility:hidden] [fill-opacity:0] stroke-black"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </li>
                <li className="min-h-[135px] relative flex flex-col items-start [backface-visibility:hidden] list-none list-outside px-10 border-l-[#ebeae7] border-l">
                  <a
                    href="#"
                    aria-label="stores & retailers"
                    className="h-full absolute z-[1] block [backface-visibility:hidden] top-0 bottom-auto inset-x-0"
                  ></a>
                  <span className="min-w-[30px] max-w-[335px] block [backface-visibility:hidden]">
                    <svg
                      className="w-full [content-visibility:visible] align-middle h-[25px] overflow-x-hidden overflow-y-hidden [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <use
                        href="assets/minas-designs_com/svg-sprite.svg#svg-symbol-26"
                        xlinkHref="assets/minas-designs_com/svg-sprite.svg#svg-symbol-26"
                      ></use>
                    </svg>
                  </span>
                  <span className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] tracking-[0.11px] uppercase text-left max-w-[335px] block [backface-visibility:hidden] mt-5 mb-2.5'>
                    stores & retailers
                  </span>
                  <span className='leading-[20px] [font-family:"Blacker_Pro_Text_Book",arial,system-ui,sans-serif] font-light text-[14px] tracking-[0.42px] text-left max-w-[335px] block [backface-visibility:hidden] mb-5'>
                    Discover our stores and find a location near you.
                  </span>
                  <span className="max-w-[335px] block [backface-visibility:hidden] mt-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 73 9"
                      width="73"
                      height="9"
                      className="h-full [content-visibility:visible] align-middle w-full overflow-x-hidden overflow-y-hidden [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden]"
                      data-svg-size="1875"
                    >
                      <g className='inline [backface-visibility:hidden] [clip-path:url("#\_\_lottie\_element\_164")]'>
                        <g
                          transform="matrix(0.9649999737739563,0,0,0.9649999737739563,-196.26531982421875,-321.6851806640625)"
                          opacity="1"
                          className="block [transform:matrix(0.965,0,0,0.965,-196.265,-321.685)] [backface-visibility:hidden]"
                        >
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,238.84800720214844,337.5660095214844)"
                            className="inline [transform:matrix(1,0,0,1,238.848,337.566)] [backface-visibility:hidden]"
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,0,0)"
                              className="inline [backface-visibility:hidden]"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                stroke="rgb(0, 0, 0)"
                                strokeWidth="1px"
                                d=" M5.468999862670898,0.0020000000949949026 C5.468999862670898,0.0020000000949949026 -6.440000057220459,0 -6.440000057220459,0"
                                className="inline [backface-visibility:hidden] [fill-opacity:0] stroke-black"
                              ></path>
                            </g>
                          </g>
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,243.4510040283203,337.5660095214844)"
                            className="inline [transform:matrix(1,0,0,1,243.451,337.566)] [backface-visibility:hidden]"
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,0,0)"
                              className="inline [backface-visibility:hidden]"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                stroke="rgb(0, 0, 0)"
                                strokeWidth="1px"
                                d=" M-2.7309999465942383,-3.5169999599456787 C-2.7309999465942383,-3.5169999599456787 0.7879999876022339,0.0020000000949949026 0.7879999876022339,0.0020000000949949026 C0.7879999876022339,0.0020000000949949026 -2.7309999465942383,3.5220000743865967 -2.7309999465942383,3.5220000743865967"
                                className="inline [backface-visibility:hidden] [fill-opacity:0] stroke-black"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </li>
                <li className="min-h-[135px] relative flex flex-col items-start [backface-visibility:hidden] list-none list-outside px-10 border-l-[#ebeae7] border-l">
                  <a
                    href="#"
                    aria-label="support"
                    className="h-full absolute z-[1] block [backface-visibility:hidden] top-0 bottom-auto inset-x-0"
                  ></a>
                  <span className="min-w-[30px] max-w-[335px] block [backface-visibility:hidden]">
                    <svg
                      className="w-full [content-visibility:visible] align-middle h-[25px] overflow-x-hidden overflow-y-hidden [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden]"
                      width="27"
                      height="26"
                      viewBox="0 0 27 26"
                    >
                      <use
                        href="assets/minas-designs_com/svg-sprite.svg#svg-symbol-28"
                        xlinkHref="assets/minas-designs_com/svg-sprite.svg#svg-symbol-28"
                      ></use>
                    </svg>
                  </span>
                  <span className='leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] tracking-[0.11px] uppercase text-left max-w-[335px] block [backface-visibility:hidden] mt-5 mb-2.5'>
                    support
                  </span>
                  <span className='leading-[20px] [font-family:"Blacker_Pro_Text_Book",arial,system-ui,sans-serif] font-light text-[14px] tracking-[0.42px] text-left max-w-[335px] block [backface-visibility:hidden] mb-5'>
                    We are more than happy to reply to any questions and tell
                    you more about our products.
                  </span>
                  <span className="max-w-[335px] block [backface-visibility:hidden] mt-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 73 9"
                      width="73"
                      height="9"
                      className="h-full [content-visibility:visible] align-middle w-full overflow-x-hidden overflow-y-hidden [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden]"
                      data-svg-size="1875"
                    >
                      <g className='inline [backface-visibility:hidden] [clip-path:url("#\_\_lottie\_element\_173")]'>
                        <g
                          transform="matrix(0.9649999737739563,0,0,0.9649999737739563,-196.26531982421875,-321.6851806640625)"
                          opacity="1"
                          className="block [transform:matrix(0.965,0,0,0.965,-196.265,-321.685)] [backface-visibility:hidden]"
                        >
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,238.84800720214844,337.5660095214844)"
                            className="inline [transform:matrix(1,0,0,1,238.848,337.566)] [backface-visibility:hidden]"
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,0,0)"
                              className="inline [backface-visibility:hidden]"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                stroke="rgb(0, 0, 0)"
                                strokeWidth="1px"
                                d=" M5.468999862670898,0.0020000000949949026 C5.468999862670898,0.0020000000949949026 -6.440000057220459,0 -6.440000057220459,0"
                                className="inline [backface-visibility:hidden] [fill-opacity:0] stroke-black"
                              ></path>
                            </g>
                          </g>
                          <g
                            opacity="1"
                            transform="matrix(1,0,0,1,243.4510040283203,337.5660095214844)"
                            className="inline [transform:matrix(1,0,0,1,243.451,337.566)] [backface-visibility:hidden]"
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,0,0)"
                              className="inline [backface-visibility:hidden]"
                            >
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                stroke="rgb(0, 0, 0)"
                                strokeWidth="1px"
                                d=" M-2.7309999465942383,-3.5169999599456787 C-2.7309999465942383,-3.5169999599456787 0.7879999876022339,0.0020000000949949026 0.7879999876022339,0.0020000000949949026 C0.7879999876022339,0.0020000000949949026 -2.7309999465942383,3.5220000743865967 -2.7309999465942383,3.5220000743865967"
                                className="inline [backface-visibility:hidden] [fill-opacity:0] stroke-black"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full relative z-0 [backface-visibility:hidden] mx-auto px-5">
              <div className="grid items-start gap-y-10 md:gap-y-[normal] gap-x-5 grid-cols-1 md:grid-cols-[minmax(0px,1fr)_minmax(0px,1fr)_380px] [backface-visibility:hidden] pt-[90px] pb-[50px] px-5 md:px-[45px]">
                <Component_7 />
                <Component_8 />
                <Component_9 />
                <div className="[backface-visibility:hidden] mt-[130px] mb-[45px]">
                  <a
                    href="#"
                    aria-label="newsletter"
                    className='text-white leading-[45px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] font-thin text-[39.9936px] relative inline-block [backface-visibility:hidden] caret-white hover:text-white hover:scale-100'
                  >
                    NEWSLETTER
                  </a>
                </div>
                <Component_10 />
                <div className="[white-space-collapse:collapse] [text-wrap-mode:nowrap] [backface-visibility:hidden] mb-2.5">
                  <span className='text-[#a09f9c] leading-[15px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[11px] [text-wrap-mode:nowrap] [backface-visibility:hidden] caret-[#a09f9c]'>
                    COMMERCIAL REGISTER NUMBER 176122203000
                  </span>
                </div>
                <Component_11 />
                <Component_12 />
              </div>
            </div>
          </div>
        </main>
        <aside className="w-full h-[963px] fixed z-[100000] [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden] pointer-events-none left-0 right-auto top-0 bottom-auto">
          <div className="w-full h-full fixed flex overflow-x-hidden overflow-y-hidden invisible flex-col [justify-content:start] items-start opacity-0 [backface-visibility:hidden]">
            <div className="w-full h-[963px] flex overflow-x-hidden flex-col [backface-visibility:hidden]">
              <div className="w-full z-[1] flex flex-col [backface-visibility:hidden] px-[65px] py-[45px]">
                <Component_13 />
                <Component_14 />
                <Component_15 />
              </div>
            </div>
          </div>
          <div className="[backface-visibility:hidden] pointer-events-none">
            <div className="w-full min-h-[963px] fixed overflow-x-hidden invisible [backface-visibility:hidden] pointer-events-none left-0 right-auto top-0 bottom-auto">
              <div className="bg-[#e9e9e9] w-full min-h-full max-w-1/2 absolute flex flex-col justify-between [transform:translate3d(200px,0px,0px)] [backface-visibility:hidden] [clip-path:polygon(100%_0px,100%_0px,100%_100%,100%_100%)] pt-[65px] pb-[30px] px-10 left-auto right-0 top-0 bottom-auto">
                <button
                  type="button"
                  aria-label="close mini cart"
                  className="bg-[#e9e9e9] text-[16px] absolute block [backface-visibility:hidden] appearance-none p-0 left-auto right-[50px] top-[50px] bottom-auto focus:[outline-style:auto] focus:outline-[5px] focus:outline-[-webkit-focus-ring-color] group"
                >
                  <svg
                    x="0px"
                    y="0px"
                    width="46.1px"
                    height="46.1px"
                    viewBox="0 0 46.1 46.1"
                    className="text-center align-middle w-5 overflow-x-hidden overflow-y-hidden [backface-visibility:hidden] fill-none stroke-black"
                    data-svg-size="487"
                  >
                    <line
                      x1="0.4"
                      y1="0.4"
                      x2="45.7"
                      y2="45.7"
                      className="inline [backface-visibility:hidden] fill-none stroke-black group-hover:rotate-45"
                    ></line>
                    <line
                      x1="0.4"
                      y1="45.7"
                      x2="45.7"
                      y2="0.4"
                      className="inline [backface-visibility:hidden] fill-none stroke-black group-hover:rotate-45"
                    ></line>
                  </svg>
                </button>
                <span className='leading-[23px] [font-family:"GT_America_LG_Extended",arial,system-ui,sans-serif] text-[18px] block [backface-visibility:hidden]'>
                  YOUR CART IS EMPTY
                </span>
              </div>
            </div>
          </div>
          <div className="[backface-visibility:hidden] pointer-events-none"></div>
        </aside>
      </div>
    </>
  );
}

export default App;
