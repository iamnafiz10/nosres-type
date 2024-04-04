import React from 'react';
import Header from "../../Components/Header/Header";
import SitemapPage from "../../Components/SiteA/Sitemap/SitemapPage";
import SitemapHero from "../../Components/SiteA/Sitemap/SitemapHero/SitemapHero";
import Footer from "../../Components/Footer/Footer";

const Sitemap = () => {
    return (
        <>
            <Header/>
            <SitemapHero/>
            <SitemapPage/>
            <Footer/>
        </>
    );
};

export default Sitemap;