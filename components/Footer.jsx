import React from 'react';
import { Instagram, ChevronRight } from 'lucide-react';

const PinterestIcon = ({ size = 22, ...props }) => (
    <svg 
        viewBox="0 0 24 24" 
        width={size} 
        height={size} 
        fill="currentColor" 
        {...props}
    >
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-6 md:px-20 font-sans border-t border-gray-900">
            <div className="max-w-[1920px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <div className="bg-black w-32 h-32 flex items-center justify-center p-6 border border-gray-800 shadow-sm">
                            <img src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/1fe2db83-d7f9-47c6-bdfa-befc9b7308d2/1773875727558-58f591d1/6b5cb054-957e-4eca-8431-46c476be491a.png" alt="LG Lissa Gail" className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 lg:mr-20">
                        <div className="min-w-[180px]">
                            <h3 className="font-bold uppercase tracking-[2px] mb-8 text-[12px] [font-family:'GT_America_LG_Extended',arial,system-ui,sans-serif] text-gray-300">Quick Links</h3>
                            <ul className="space-y-4 text-[13px] text-gray-400 [font-family:'Aeonik_Pro',arial,system-ui,sans-serif]">
                                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Style Consultation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Return Policy</a></li>
                            </ul>
                        </div>
                        <div className="min-w-[180px]">
                            <h3 className="font-bold uppercase tracking-[2px] mb-8 text-[12px] [font-family:'GT_America_LG_Extended',arial,system-ui,sans-serif] text-gray-300">Support</h3>
                            <ul className="space-y-4 text-[13px] text-gray-400 [font-family:'Aeonik_Pro',arial,system-ui,sans-serif]">
                                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Gold Filled vs Gold Plated</a></li>
                                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Jewelry Sizing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Jewelry Care Program</a></li>
                                <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Newsletter and Social row */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-16">
                    <div className="w-full max-w-2xl">
                        <div className="space-y-2 mb-6">
                            <span className="font-bold text-[15px] [font-family:'GT_America_LG_Extended',arial,system-ui,sans-serif]">Join Our Email List: </span>
                            <span className="text-gray-400 text-[15px] [font-family:'Aeonik_Pro',arial,system-ui,sans-serif]">Want to stay in the loop? Sign up for Lissa Gail Jewelry emails and be the first to know.</span>
                        </div>
                        <div className="relative mt-4 border-b border-gray-700 group focus-within:border-white transition-colors text-white">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full bg-transparent outline-none py-3 pr-10 italic text-[14px] [font-family:'Aeonik_Pro',arial,system-ui,sans-serif] placeholder-gray-500 text-white"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:translate-x-1 transition-transform">
                                <ChevronRight size={20} strokeWidth={1.5} className="text-white" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
                        <div className="flex gap-5">
                            <a href="#" className="text-white hover:opacity-60 transition-opacity"><Instagram size={22} strokeWidth={1.5} /></a>
                            <a href="#" className="text-white hover:opacity-60 transition-opacity"><PinterestIcon size={22} /></a>
                        </div>
                        <button className="bg-[#5a31f4] hover:bg-[#4824d6] text-white px-8 py-3 rounded-full flex items-center gap-3 text-[14px] font-medium transition-all shadow-sm active:scale-95">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            Follow on shop
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-gray-900 flex flex-col items-center gap-8">
                    <div className="flex flex-wrap justify-center items-center gap-4 invert brightness-200 grayscale opacity-60">
                        {/* Inline SVGs for payment methods */}
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.svg" alt="Amex" className="h-6" />
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/apple_pay.svg" alt="Apple Pay" className="h-6" />
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/diners_club.svg" alt="Diners Club" className="h-6" />
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/discover.svg" alt="Discover" className="h-6" />
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/google_pay.svg" alt="Google Pay" className="h-6" />
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.svg" alt="MasterCard" className="h-6" />
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/paypal.svg" alt="PayPal" className="h-6" />
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/shop_pay.svg" alt="Shop Pay" className="h-6" />
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.svg" alt="Visa" className="h-6" />
                    </div>
                    <p className="text-[11px] text-gray-500 tracking-wider uppercase [font-family:'GT_America_LG_Extended',arial,system-ui,sans-serif]">
                        © 2026, Lissa Gail SITE CREDIT Powered by Shopify
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
