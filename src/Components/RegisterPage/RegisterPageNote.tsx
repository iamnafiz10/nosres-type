'use client';
import React, {useState} from 'react';
import {MdOutlineErrorOutline} from "react-icons/md";
import {Link} from "react-router-dom";
import LogoImg from '../../assets/images/logo.svg'
import {FaCheck} from "react-icons/fa6";

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <section id="register-section" className="bg-[#F4F4F4]">
                <div className="container py-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="col">
                            <div className="wrap-one">
                                <h2 className="font-normal">
                                    By creating a Nosres Account you get<br/> access to all products and services.
                                </h2>

                                <div className="icon-box flex gap-2 items-center mt-8">
                                    <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <h3 className="text-[16px]">Marketplace</h3>
                                </div>

                                <div className="icon-box flex gap-2 items-center mt-4">
                                    <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <h3 className="text-[16px]">Pay</h3>
                                </div>

                                <div className="icon-box flex gap-2 items-center mt-4">
                                    <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <h3 className="text-[16px]">Logistics</h3>
                                </div>

                                <div className="icon-box flex gap-2 items-center mt-4">
                                    <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <h3 className="text-[16px]">Telecom</h3>
                                </div>
                            </div>

                            <div className="wrap-two mt-8">
                                <h2 className="font-normal">
                                    Nosres is a dynamic business ecosystem.
                                </h2>

                                <div className="icon-box flex gap-2 items-start mt-6">
                                    <div className="one">
                                        <FaCheck size={15} className="text-primary"/>
                                    </div>
                                    <p>
                                        Nosres is building a dynamic business ecosystem and
                                        inspire humanity to achieve more.
                                    </p>
                                </div>

                                <div className="icon-box flex gap-2 items-start mt-4">
                                    <div className="one">
                                        <FaCheck size={15} className="text-primary"/>
                                    </div>
                                    <p>
                                        Nosres is founded on values that we all share, such as
                                        entrepreneurship, passion, curiosity, creativity,
                                        innovation, and simplicity.
                                    </p>
                                </div>

                                <div className="icon-box flex gap-2 items-start mt-4">
                                    <div className="one">
                                        <FaCheck size={15} className="text-primary"/>
                                    </div>
                                    <p>
                                        We derive guidance from them to choose our<br/>
                                        business partners.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col lg:flex justify-end">
                            <form
                                className="register_form w-full md:w-[550px] h-full px-6 py-6 bg-white rounded">
                                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                                    <div className="col">
                                        <label htmlFor="name" className="text-[14px] text-red-600">First Name</label>
                                        <input
                                            className="mt-1 valid_input rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                            type="text"
                                            placeholder="John"
                                        />
                                        <div className="flex items-center gap-1 mt-2">
                                            <svg fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                 width="9"
                                                 height="9">
                                                <path
                                                    d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5Zm1 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
                                            </svg>
                                            <div
                                                className="text-[12px] text-red-600">Please enter your first name
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="name" className="text-[14px] text-red-600">Last Name</label>
                                        <input
                                            className="mt-1 valid_input rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                            type="text" placeholder="Doe"/>
                                        <div className="flex items-center gap-1 mt-2">
                                            <svg fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                 width="9"
                                                 height="9">
                                                <path
                                                    d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5Zm1 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
                                            </svg>
                                            <div
                                                className="text-[12px] text-red-600">Please enter your last name
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="block mt-4">
                                    <label htmlFor="name" className="text-[14px] text-red-600">Email</label>
                                    <div className="relative">
                                        <input
                                            className="mt-1 valid_input rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-red-500 focus:ring focus:ring-transparent"
                                            type="email"
                                            placeholder="johndoe@mail.com"
                                        />
                                    </div>
                                    <div className="flex items-center gap-1 mt-2">
                                        <svg fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                             width="9"
                                             height="9">
                                            <path
                                                d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5Zm1 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
                                        </svg>
                                        <div
                                            className="text-[12px] text-red-600">Invalid email format
                                        </div>
                                    </div>
                                </div>

                                <div className="block mt-4">
                                    <label htmlFor="password" className="text-[14px] text-red-600">Password</label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            className="mt-1 valid_input rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder={showPassword ? '12345' : '********'}
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 top-1 text-primary flex items-center pr-3">
                                            <div
                                                className="text-[12px] cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? 'Hide' : 'Show'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-0">
                                        <div className="flex items-center gap-1 mt-2">
                                            <svg fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                 width="9"
                                                 height="9">
                                                <path
                                                    d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5Zm1 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
                                            </svg>
                                            <div
                                                className="text-[12px] text-red-600">The password must be at least 8
                                                characters long.
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-[12px] text-[#828D9E]">
                                        By signing up, you agree to Nosres’ <Link to='#'
                                                                                  className="text-primary">Terms of Use</Link> and <Link
                                                to='#'
                                                className="text-primary">Privacy Policy</Link>.
                                    </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="block mt-4">
                                    <button className="bg-primary py-3 px-4 w-full rounded text-white">Create Account
                                    </button>
                                </div>

                                <div className="mt-4 text-center">
                                    <span className="text-[#828D9E] text-[12px]">
                                        Already have an account? <Link to='/' className="text-primary">Sign in</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegisterForm;