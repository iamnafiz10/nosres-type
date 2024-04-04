import React from 'react';
import {Link} from "react-router-dom";
import {HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";

const SearchResultPage = () => {
    return (
        <>
            <section id="search-result-section">
                <div className="container pt-16">
                    <div className="search_result_wrap box mt-10">
                        <h4 className="text-[28px]">Results for “account”</h4>
                        <p className="pb-4">120 results found</p>
                        <hr/>
                        <div className="search_content">
                            <h4 className="text-[16px] pt-4">Sign In to Nosres Account</h4>
                            <p>
                                Your Nosres Account is the account you use for all Nosres services.
                            </p>
                            <Link to='#' className="pt-1 text-primary text-[14px]">
                                https://accounts.nosres.com
                            </Link>
                        </div>

                        <div className="search_content">
                            <h4 className="text-[16px] pt-4">Manage your Nosres Account</h4>
                            <p>
                                Shopping on the Nosres Square is better when you have a Nosres Account. Learn how to
                                create your Nosres Account, how to manage your account and much more.
                            </p>
                            <Link to='#' className="pt-1 text-primary text-[14px]">
                                https://accounts.nosres.com
                            </Link>
                        </div>

                        <div className="search_content">
                            <h4 className="text-[16px] pt-4">Sign In to Nosres Account</h4>
                            <p>
                                Your Nosres Account is the account you use for all Nosres services.
                            </p>
                            <Link to='#' className="pt-1 text-primary text-[14px]">
                                https://accounts.nosres.com
                            </Link>
                        </div>

                        <div className="search_content">
                            <h4 className="text-[16px] pt-4">Sign In to Nosres Account</h4>
                            <p>
                                Your Nosres Account is the account you use for all Nosres services.
                            </p>
                            <Link to='#' className="pt-1 text-primary text-[14px]">
                                https://accounts.nosres.com
                            </Link>
                        </div>

                        <div className="search_content">
                            <h4 className="text-[16px] pt-4">Sign In to Nosres Account</h4>
                            <p>
                                Your Nosres Account is the account you use for all Nosres services.
                            </p>
                            <Link to='#' className="pt-1 text-primary text-[14px]">
                                https://accounts.nosres.com
                            </Link>
                        </div>

                        <div className="search_content">
                            <h4 className="text-[16px] pt-4">Sign In to Nosres Account</h4>
                            <p>
                                Your Nosres Account is the account you use for all Nosres services.
                            </p>
                            <Link to='#' className="pt-1 text-primary text-[14px]">
                                https://accounts.nosres.com
                            </Link>
                        </div>

                        <div className="pb-4"></div>
                        <hr/>
                        {/* Pagination */}
                        <div className="pagination my-8 flex items-center justify-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex -space-x-px text-[14px] gap-1">
                                    <li>
                                        <Link to='#' aria-current="page"
                                              className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                            <HiArrowLongLeft/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#' aria-current="page"
                                              className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-blue-50 hover:text-primary">
                                            1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#'
                                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:border-primary hover:text-primary">
                                            2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#' aria-current="page"
                                              className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                            <HiArrowLongRight/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SearchResultPage;