import React from 'react';
import {Link} from "react-router-dom";

const SitemapPage = () => {
    return (
        <>
            <section id="sitemap-section">
                <div className="container pt-10 pb-0">
                    <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="col mt-3">
                            <h3 className="font-semibold text-gray-600">Nosres Inc.</h3>
                            <ul className="mt-3 space-y-2 text-primary text-[12px]">
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
                                    <Link to='/'>Brand Resources</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link to='/'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col mt-3">
                            <h3 className="font-semibold text-gray-600">Business Portfolio</h3>
                            <ul className="mt-3 space-y-2 text-primary text-[12px]">
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
                            <h3 className="font-semibold text-gray-600">Resources</h3>
                            <ul className="mt-3 space-y-2 text-primary text-[12px]">
                                <li className="hover:text-primary">
                                    <Link to='/'>Support Center</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link to='/'>Corporate Support</Link>
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
                            <ul className="mt-3 space-y-2 text-primary text-[12px]">
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

                        <div className="col mt-3">
                            <h3 className="font-semibold text-gray-600">Account</h3>
                            <ul className="mt-3 space-y-2 text-primary text-[12px]">
                                <li className="hover:text-primary">
                                    <Link to='/'>Manage Your Nosres Account</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link to='/'>Create an Account</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Sitemap */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
                        <div className="group pt-0 sm:pt-2">
                            <div
                                className="relative pb-4 flex  list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Nosres Inc.
                            </div>
                            <ul className="mt-0 space-y-2 text-primary text-[12px]">
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
                                    <Link to='/'>Brand Resources</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link to='/'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="group pt-0 sm:pt-2">
                            <div
                                className="relative pb-4 flex  list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Business Portfolio
                            </div>
                            <ul className="mt-0 space-y-2 text-primary text-[12px]">
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

                        <div className="group pt-0 sm:pt-2">
                            <div
                                className="relative pb-4 flex  list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Resources
                            </div>
                            <ul className="mt-0 space-y-2 text-primary text-[12px]">
                                <li className="hover:text-primary">
                                    <Link to='/'>Support Center</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link to='/'>Corporate Support</Link>
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

                        <div className="group pt-0 sm:pt-2">
                            <div
                                className="relative pb-4 flex  list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Community
                            </div>
                            <ul className="mt-0 space-y-2 text-primary text-[12px]">
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

                        <div className="group pt-0 sm:pt-2">
                            <div
                                className="relative pb-4 flex  list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Account
                            </div>
                            <ul className="mt-0 space-y-2 text-primary text-[12px]">
                                <li className="hover:text-primary">
                                    <Link to='/'>Manage Your Nosres Account</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link to='/'>Create an Account</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SitemapPage;