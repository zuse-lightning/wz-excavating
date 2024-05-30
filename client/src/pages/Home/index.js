import React from "react";
import HomeSlideShow from "../../components/HomeSlideShow";
import AboutUs from "../../components/AboutUs";
import OurServices from "../../components/OurServices";
import Certifications from "../../components/Certifications";
import Testimonials from "../../components/Testimonials";

const Home = (props) => {

    const { screenWidth } = props;

    return (
        <>
            <HomeSlideShow screenWidth={screenWidth} />
            <AboutUs screenWidth={screenWidth} />
            <OurServices screenWidth={screenWidth} />
            <Certifications screenWidth={screenWidth} />
            <Testimonials screenWidth={screenWidth} />
        </>
    );
};

export default Home;