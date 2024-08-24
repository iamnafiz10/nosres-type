import React, {useState} from 'react';
import LogoImg from '../../assets/images/logo.svg';
import {Link} from "react-router-dom";
import {FaArrowRightLong, FaFacebookF} from "react-icons/fa6";
import {IoLogoInstagram} from "react-icons/io5";
import {FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {RxCross1, RxPlus} from "react-icons/rx";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import {useLocation} from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();

    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(false); // This will hide the acc_wrap div
    };
    // Check if the current path is "sitea-contact"
    const shouldDisplay = location.pathname === "/sitea-contact";
    return (
        <>
            <section id="footer-section" className="bg-[#F4F4F4] mt-10">
                <div className="container py-10">
                    <footer>
                        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <div className="col">
                                <div className="logo">
                                    <Link to='/' className="flex items-center gap-2">
                                        <img src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                        <span className="font-[500] text-xl">nosres</span>
                                    </Link>
                                </div>
                                <div className="social-icons mt-6 flex items-center gap-3">
                                    <FaFacebookF size={15}
                                                 className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <IoLogoInstagram size={15}
                                                     className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaLinkedin size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaXTwitter size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                </div>
                                <h3 className="mt-8 text-gray-600 font-semibold">Get Newsletter</h3>
                                <p className="mt-1 text-gray-500 text-[12px]">Sign up for the latest Nosres news and
                                    articles. By signing up you are agreeing to
                                    our Privacy Policy.</p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link to='/'
                                          className="text-[14px]">
                                        Subscribe
                                    </Link>
                                </div>
                            </div>

                            <div className="col mt-3">
                                <h3 className="font-semibold text-gray-600">Nosres Inc.</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>About Nosres</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Newsroom</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Careers</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Investors</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Ethics and Compliance</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Brand Resources</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col mt-3">
                                <h3 className="font-semibold text-gray-600">Business Portfolio</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Marketplace</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Pay</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Logistics</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Telecom</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col mt-3">
                                <h3 className="font-semibold text-gray-600">Nosres Support</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Support Center</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Marketplace Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Pay Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Logistics Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Telecom Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Business Support</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col mt-3">
                                <h3 className="font-semibold text-gray-600">Community</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Events</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Blog</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Forum</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Refer a Friend</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Become an Affiliate Partner</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mobile Footer */}
                        <div className="block lg:hidden">
                            <div className="col pb-8">
                                <div className="logo">
                                    <Link to='/' className="flex items-center gap-2">
                                        <img src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                        <span className="font-[500] text-xl">nosres</span>
                                    </Link>
                                </div>
                                <div className="social-icons mt-6 flex items-center gap-3">
                                    <FaFacebookF size={15}
                                                 className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <IoLogoInstagram size={15}
                                                     className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaLinkedin size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaXTwitter size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                </div>
                                <h3 className="mt-8 text-gray-600 font-semibold">Get Newsletter</h3>
                                <p className="mt-1 text-gray-500 text-[12px]">Sign up for the latest Nosres news and
                                    articles. By signing up you are agreeing to
                                    our Privacy Policy.</p>
                                <div
                                    className="lg:hidden mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link to='/'
                                          className="text-[14px]">
                                        Subscribe
                                    </Link>
                                </div>
                            </div>

                            <details className="group">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Nosres Inc.
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>About Nosres</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Newsroom</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Careers</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Investors</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Ethics and Compliance</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Brand Resources</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Contact Us</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Business Portfolio
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Marketplace</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Pay</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Logistics</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Telecom</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Nosres Support
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Support Center</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Marketplace Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Pay Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Logistics Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Telecom Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Business Support</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Community
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Events</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Blog</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Forum</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Refer a Friend</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Become an Affiliate Partner</Link>
                                    </li>
                                </ul>
                            </details>
                        </div>

                        {/* Copyright */}
                        <div
                            className="copyright sm:flex  justify-between pt-4 mt-10">
                            <div className="left">
                                <ul className="flex items-center gap-4 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Terms</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Privacy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Policies</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Sitemap</Link>
                                    </li>
                                </ul>
                                <p className="mt-1 text-gray-500 text-[12px]">© {currentYear} Nosres Inc. All rights
                                    reserved.</p>
                            </div>
                            <div className="right">
                                <p className="cursor-pointer">United States</p>
                            </div>
                        </div>
                    </footer>
                </div>

                {isVisible && shouldDisplay && (
                    <div className="acc_wrap w-full fixed bottom-0 pt-[0px]">
                        <div
                            className="relative isolate w-full flex items-center text-left justify-start gap-x-6 overflow-hidden bg-gray-50 py-2.5">
                            <div className="container flex items-center justify-center">
                                <div className="flex items-center justify-center w-full">
                                    <div className="flex items-center gap-x-1 gap-y-2 pl-1">
                                        <h4 className="text-[14px] leading-6 text-gray-900">
                                            GeneriCon 2023 in on June 7 – 9 in Denver.
                                        </h4>
                                        <div
                                            className="flex cursor-pointer items-center gap-1 text-[14px] font-semibold">
                                            Get your ticket
                                            <FaArrowRightLong size={16}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="float-right flex items-center justify-end pr-1">
                                    <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                                            onClick={handleDismiss}>
                                        <span className="sr-only">Dismiss</span>
                                        <RxCross1 className="h-5 w-5 text-gray-900"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Footer;