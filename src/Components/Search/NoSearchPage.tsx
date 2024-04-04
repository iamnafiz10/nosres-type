import React from 'react';
import { LuSearchX } from "react-icons/lu";

const NoSearchPage = () => {
    return (
        <>
            <section id="no-search-section">
                <div className="container pt-16">
                    <div className="mt-10 box flex flex-col items-center justify-center">
                        <LuSearchX size={80} className="text-center text-gray-400"/>
                        <h4 className="text-[20px] mt-4 text-center">
                            Sorry, no results were found for<br/>
                            “qtqqtqtaaaavavava”.
                        </h4>
                        <p className="mt-2">
                            Try a new search.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NoSearchPage;