import React, {useState} from 'react';
import heroImage from "../../../../assets/images/sitea/contact-bnner.jpg";
import {RxCross1} from "react-icons/rx";
import {FaArrowRightLong} from "react-icons/fa6";

const ContactHero = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(false); // This will hide the acc_wrap div
    };
    return (
        <>
            {isVisible && (
                <div className="acc_wrap pt-[50px]">
                    <div
                        className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                        <div
                            aria-hidden="true"
                            className="absolute left-[max(-7rem,calc(50%-52rem))] bottom-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        >
                            <div
                                className="bg-white"
                            />
                        </div>
                        <div
                            aria-hidden="true"
                            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        >
                            <div
                                className="bg-white"
                            />
                        </div>
                        <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
                            <h4 className="text-[14px] leading-6 text-gray-900">
                                GeneriCon 2023 in on June 7 – 9 in Denver.
                            </h4>
                            <div className="flex cursor-pointer items-center gap-1 text-[14px] font-semibold">
                                Get your ticket
                                <FaArrowRightLong size={16}/>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-end">
                            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                                    onClick={handleDismiss}>
                                <span className="sr-only">Dismiss</span>
                                <RxCross1 className="h-5 w-5 text-gray-900"/>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[300px] pt-[8.5rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl text-center md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                        Get in Touch With the<br/>
                        Nosres Team
                    </h1>
                </div>
            </section>
        </>
    );
};

export default ContactHero;