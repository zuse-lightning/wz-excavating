import React, { useState, useEffect } from "react";
import { Sidebar } from "semantic-ui-react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Gallery from "../../pages/Gallery";
import Contact from "../../pages/Contact";
import Quotes from "../../pages/Quotes";
import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Certifications from "../../components/Certifications";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

import "./style.css";

export const useCurrentUrl = () => {
    const [currentUrl, setCurrentUrl] = useState(window.location.href);

    useEffect(() => {
        const handlePageLoad = () => {
            setCurrentUrl(window.location.href);
        }
        window.addEventListener("load", handlePageLoad);
        return window.removeEventListener("load", handlePageLoad);
    }, []);

    return currentUrl;
}

export const whichWebsite = (url, wzElement, llcElement) => {
    if (url.includes("wzexcavating.com")) {
        return wzElement;
    } else if (url.includes("wzexcavatingllc.com")) {
        return llcElement;
    } else if (url.includes("localhost")) {
        return wzElement;
    }
};

const getWindowDimensions = () => {
    const page = document.querySelector("html");
    const { clientWidth: width, clientHeight: height } = page;
    return {
        width,
        height
    }
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

const App = () => {

    const { width } = useWindowDimensions();

    return (
        <>
            <AnnouncementBar />
            <Navbar screenWidth={width} />
            <Sidebar.Pushable id="main-pushable">
                <Sidebar.Pusher>
                    <div id="main-container">
                        <Routes>
                            <Route exact path="/" element={<Home location={useCurrentUrl()} whichWebsite={whichWebsite} screenWidth={width} />} />
                            <Route exact path="/about" element={<About location={useCurrentUrl()} whichWebsite={whichWebsite} screenWidth={width} />} />
                            <Route exact path="/services/*" element={<Services location={useCurrentUrl()} whichWebsite={whichWebsite} screenWidth={width} />} />
                            <Route exact path="/gallery" element={<Gallery location={useCurrentUrl()} whichWebsite={whichWebsite} />} />
                            <Route exact path="/contact" element={<Contact location={useCurrentUrl()} whichWebsite={whichWebsite} />} />
                            <Route exact path="/quotes" element={<Quotes location={useCurrentUrl()} whichWebsite={whichWebsite} />} />
                        </Routes>
                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
            {/* <Certifications /> */}
            <Testimonials screenWidth={width} />
            <Footer />
        </>

    );
};

export default App;