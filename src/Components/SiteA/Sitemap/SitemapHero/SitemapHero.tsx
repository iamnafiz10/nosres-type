import React from 'react';
import heroImage from "../../../../assets/images/sitea/sitemap-banner.jpeg";

const SitemapHero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[300px] pt-[8.5rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                        Sitemap
                    </h1>
                </div>
            </section>
        </>
    );
};

export default SitemapHero;