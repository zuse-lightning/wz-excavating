import React, { useState, useEffect, createRef } from "react";
import { Sidebar } from "semantic-ui-react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
// import Equipment from "../../pages/Equipment";
import Gallery from "../../pages/Gallery";
import Contact from "../../pages/Contact";
import Quotes from "../../pages/Quotes";
import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Certifications from "../../components/Certifications";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

import "./style.css";


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

    const { width, height } = useWindowDimensions();
    const contextRef = createRef();

    return (
        <>
            <AnnouncementBar />
            <Navbar screenWidth={width} />
            <Sidebar.Pushable id="main-pushable">
                <Sidebar.Pusher>
                    <div id="main-container">
                        <Routes>
                            <Route exact path="/" element={<Home screenWidth={width} />} />
                            <Route exact path="/about" element={<About contextRef={contextRef} screenWidth={width} />} />
                            <Route exact path="/services/*" element={<Services screenWidth={width} />} />
                            {/* <Route exact path="/equipment" element={<Equipment />} /> */}
                            <Route exact path="/gallery" element={<Gallery />} />
                            <Route exact path="/contact" element={<Contact />} />
                            <Route exact path="/quotes" element={<Quotes />} />
                        </Routes>
                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
            <Certifications />
            <Testimonials />
            <Footer />
        </>

    );
};

export default App;