import React from "react";
import HomeSlideShow from "../../components/HomeSlideShow";
import AboutUs from "../../components/AboutUs";
import OurServices from "../../components/OurServices";

const Home = (props) => {

    const { screenWidth } = props;

    return (
        <>
            <HomeSlideShow screenWidth={screenWidth} />
            <AboutUs screenWidth={screenWidth} />
            <OurServices screenWidth={screenWidth} />
        </>
    );
};

export default Home;