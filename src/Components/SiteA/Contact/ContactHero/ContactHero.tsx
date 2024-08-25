import React, {useState} from 'react';
import heroImage from "../../../../assets/images/sitea/contact-bnner.jpg";
import {FaArrowRightLong} from "react-icons/fa6";
import {useLocation} from "react-router-dom";

const ContactHero = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    // Check if the current path is "sitea-contact"
    const shouldDisplay = location.pathname === "/sitea-contact";
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[350px] pt-[12rem] pb-[5rem]"
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