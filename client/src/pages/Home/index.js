import React from "react";
import HomeSlideShow from "../../components/HomeSlideShow";
import AboutUs from "../../components/AboutUs";

const Home = (props) => {

    const { screenWidth } = props;

    return (
        <>
            <HomeSlideShow screenWidth={screenWidth} />
            <AboutUs screenWidth={screenWidth} />
        </>
    );
};

export default Home;