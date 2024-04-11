'use client';
import React, {useState, useEffect} from 'react';
import {HiChevronRight} from "react-icons/hi2";
import {GoDotFill} from "react-icons/go";
import userImage from '../../assets/images/blog/user-image.jpg';
import postImage from '../../assets/images/blog/blog-feature.jpg';
import {Tooltip} from 'flowbite-react';

import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Scrollbar} from "swiper/modules";
import 'swiper/css/navigation';

import catImg1 from "../../assets/images/hiring/cblog1.jpg";
import catImg2 from "../../assets/images/hiring/cblog2.jpg";
import catImg3 from "../../assets/images/hiring/cblog3.jpg";
import catImg4 from "../../assets/images/hiring/cblog4.jpeg";
import catImg5 from "../../assets/images/hiring/cblog5.jpg";
import catImg6 from "../../assets/images/hiring/cblog6.jpeg";
import catImg7 from "../../assets/images/hiring/cblog7.jpeg";
import {SiFacebook, SiLinkedin,} from "react-icons/si";
import {PiEnvelopeThin, PiLinkSimpleLight} from "react-icons/pi";
import {FaXTwitter} from "react-icons/fa6";
import {Link} from 'react-scroll';
import LogoImg from "../../assets/images/logo.svg";
import {BsFacebook, BsLinkedin, BsTwitterX} from "react-icons/bs";

const BlogDetails = () => {
    // For Page link Copy
    const [copied, setCopied] = useState(false);
    const handleClickCopy = () => {
        // Get the current page URL
        const currentPageURL = window.location.href;

        // Copy the URL to the clipboard
        navigator.clipboard.writeText(currentPageURL)
            .then(() => {
                console.log('Page link copied to clipboard:', currentPageURL);
                setCopied(true); // Set copied state to true
                setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
            })
            .catch((error) => {
                console.error('Failed to copy page link:', error);
                // Handle errors here, if needed
            });
    };


    const [activeTab, setActiveTab] = useState('outline'); // Initial active tab

    const handleScroll = (entries: any[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveTab(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            rootMargin: '-50px 0px -50% 0px', // Adjust this value if needed
            threshold: 0.5,
        });

        const sections = document.querySelectorAll('.section');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const scrollToSection = (sectionId: React.SetStateAction<string>) => {
        // @ts-ignore
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: offsetTop - 50, behavior: 'smooth'});
        }
    };

    const handleClick = (tabId: React.SetStateAction<string>) => {
        setActiveTab(tabId);
        scrollToSection(tabId);
    };
    return (
        <>
            <section id="terms-detail-section">
                <div className="container py-16">
                    <div id="outline" className="section flex items-center gap-2 py-10 text-[14px]">
                        <Link to='#' className="cursor-pointer">Home</Link> <HiChevronRight className="text-black"/>
                        <Link to='#'>Newsroom</Link> <HiChevronRight className="text-black"/> <span
                        className="text-[#828D9E]">Big Education Publisher Pearson to Phase Out Print Textbooks</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Side Sticky */}
                        <div
                            className="col mt-2 lg:col-span-2 flex-initial lg:sticky top-[80px] h-full lg:h-[27vh] w-full overflow-auto">
                            <ul className="space-y-3 text-primary">
                                <li>
                                    <div onClick={() => handleClick('outline')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'outline' ? 'text-primary' : ''}`}>
                                            Outline
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('introduction')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'introduction' ? 'text-primary' : ''}`}>
                                            Introduction
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('huge-advantage')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'huge-advantage' ? 'text-primary' : ''}`}>
                                            Huge Advantage
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('engaging-with-others')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'engaging-with-others' ? 'text-primary' : ''}`}>
                                            Engaging with Others
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('discussion')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'discussion' ? 'text-primary' : ''}`}>
                                            Discussion
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-8">
                            <div id="" className="">
                                <h1 className="text-[34px] font-semibold">
                                    Big Education Publisher Pearson to Phase
                                    Out Print Textbooks
                                </h1>
                                <h4 className="mt-4 text-[#828D9E] text-[16px]">Why a move from print to digital by the
                                    world’s
                                    largest publisher of
                                    educational books could spell
                                    disaster for students?</h4>

                                <div className="block sm:flex items-center gap-2 mt-3">
                                    <div className="flex">
                                        <img src={userImage} className="w-7 h-7 rounded-full ring-2 ring-white"
                                             alt="userImg"/>
                                        <img src={userImage} className="w-7 h-7 -ml-1 rounded-full ring-2 ring-white"
                                             alt="userImg"/>
                                        <img src={userImage} className="w-7 h-7 -ml-1 rounded-full ring-2 ring-white"
                                             alt="userImg"/>
                                    </div>
                                    <h4 className="mt-4 sm:mt-0 text-[#39393B] text-[14px]">
                                        By <Link to='#' className="text-primary cursor-pointer">Jamal
                                        Halam</Link>, <Link to='#'
                                                            className="text-primary cursor-pointer">Jane
                                        Doe</Link>,
                                        and <Link to='#' className="text-primary cursor-pointer">Jack
                                        Appleseed</Link><br/>
                                        Contributor, Chief Marketing Officer, and CFO
                                    </h4>
                                </div>
                                <div className="flex items-center ml-[85px] mt-1 gap-2 pb-4 text-[14px] text-[#828D9E]">
                                    <h4>Published May 02, 2020</h4>
                                    <div className="dot text-[#828D9E]"><GoDotFill size={8}/></div>
                                    <h4>Updated</h4>
                                </div>
                                <hr/>
                                <img src={postImage} className="mt-6 rounded" alt="postImage"/>
                            </div>

                            <div id="introduction" className="section pt-2">
                                <h4 className="pb-2 text-[12px] text-[#828D9E]">
                                    Soaring above a the world's majesty<br/>
                                    Photo credit: Pexels.com
                                </h4>
                                <h4 className="text-[18px] font-semibold">Introduction</h4>
                                <p className="mt-1">
                                    The world’s largest education publisher, Pearson, has said it will gradually phase
                                    out
                                    print textbooks. It has taken a decision to make all of its learning resources
                                    “digital
                                    first”. Pearson said the
                                    future of the industry is in e-books and digital services. Pearson CEO John Fallon
                                    explained more
                                    about the company’s future direction. He told the BBC: “We are now over the digital
                                    tipping point.
                                </p>
                            </div>

                            <div id="huge-advantage" className="section pt-10">
                                <h4 className="text-[18px] font-semibold">Huge Advantage</h4>
                                <p className="mt-1">
                                    Pearson said a huge advantage of digital books is that they can be continually
                                    updated,
                                    which
                                    means teachers will always have access to the latest versions of textbooks. Mr.
                                    Fallon
                                    said Pearson would stop its current business model of revising printed course books
                                    every three years. He
                                    said this model has dominated the industry for over four decades and is now past its
                                    use-by date.
                                </p>
                            </div>

                            <div id="engaging-with-others" className="section pt-10">
                                <h4 className="text-[18px] font-semibold">Engaging with Others</h4>
                                <p className="mt-1">
                                    Fallon said: “We learn by engaging and sharing with others, and a digital
                                    environment
                                    enables you
                                    to do that in a much more effective way.” He added the digital books will appeal to
                                    the
                                    “Netflix
                                    and Spotify generation”. Textbook writers are worried they will earn less from their
                                    books as digital products are sold on a subscription basis.
                                </p>
                            </div>

                            <div id="discussion" className="section pt-10">
                                <h4 className="text-[18px] font-semibold">Discussion</h4>
                                <p className="mt-1">1. Paper books are better than e-books. Do you agree or
                                    disagree? </p>
                                <p className="mt-1">2. Do you think in the next few years people will become hybrid
                                    readers,
                                    who juggle devices and
                                    paper?</p>
                                <div className="tag_area mt-4 block sm:flex items-center gap-4">
                                    <h4 className="text-[14px] mb-3 sm:mb-0">Related Tags</h4>
                                    <button type="button"
                                            className="text-[14px] py-1 px-4 rounded border border-gray-200 hover:bg-primary hover:text-white">
                                        Business
                                    </button>

                                    <button type="button"
                                            className="text-[14px] py-1 px-4 rounded border border-gray-200 hover:bg-primary hover:text-white">
                                        Startup
                                    </button>

                                    <button type="button"
                                            className="text-[14px] py-1 px-4 rounded border border-gray-200 hover:bg-primary hover:text-white">
                                        Another Tag
                                    </button>
                                </div>

                                {/* Mobile Social Icons */}
                                <ul className="mt-4 flex lg:hidden items-center gap-4">
                                    <li>
                                        <div>
                                            <Link to='#' className="cursor-pointer">
                                                <SiFacebook size={21} className="h-7 text-[#0866FF]"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link to='#' className="cursor-pointer">
                                                <FaXTwitter size={19} className="h-7 text-[#000000]"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link to='#' className="cursor-pointer">
                                                <SiLinkedin size={18} className="h-7 text-primary"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link to='#' className="cursor-pointer">
                                                <PiEnvelopeThin size={24} className="h-7 text-gray-600"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Tooltip content={copied ? "Copied" : "Link"} animation="duration-0"
                                                 placement="bottom">
                                            <Link onClick={handleClickCopy} to='#' className="cursor-pointer">
                                                <PiLinkSimpleLight size={22} className="h-7 text-blue-600"/>
                                            </Link>
                                        </Tooltip>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side Social */}
                        <div
                            className="pt-3 col lg:col-span-2 hidden lg:flex justify-end flex-initial lg:sticky top-[80px] h-full lg:h-[36vh] w-full overflow-auto lg:overflow-hidden">
                            <ul className="flex flex-col items-end">
                                <li>
                                    <div>
                                        <Link to='#'>
                                            <BsFacebook size={23} className="w-full cursor-pointer text-[#0866FF]"/>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="mt-5">
                                        <Link to='#'>
                                            <BsTwitterX size={23} className="w-full cursor-pointer text-[#000000]"/>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="mt-5">
                                        <Link to='#'>
                                            <BsLinkedin size={23} className="w-full cursor-pointer text-primary"/>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="mt-4">
                                        <Link to='#'>
                                            <PiEnvelopeThin size={28}
                                                            className="ml-1 w-full cursor-pointer text-gray-500"/>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="mt-3">
                                        <Tooltip content={copied ? "Copied" : "Link"} animation="duration-0"
                                                 placement="left" arrow={true}>
                                            <Link onClick={handleClickCopy} to='#'>
                                                <PiLinkSimpleLight size={25}
                                                                   className="w-full cursor-pointer text-blue-600"/>
                                            </Link>
                                        </Tooltip>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Slider */}
                    <div className="py-8">
                        <h4 className="text-[24px] font-semibold py-6">Similar Stories</h4>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg1} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg2} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg3} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg4} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg5} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg6} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg7} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default BlogDetails;