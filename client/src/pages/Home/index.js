import React from "react";
import HomeSlideShow from "../../components/HomeSlideShow";
import AboutUs from "../../components/AboutUs";
import OurServices from "../../components/OurServices";
import SEO from "../../components/SEO";

const Home = (props) => {

    const { screenWidth } = props;

    return (
        <>
            <SEO 
                title="WZ Trucking & Excavating"
                description="WZ Excavating is a family-owned and operated business located in Snohomish County. We have been serving the area for over 20 years. We specialize in residential and commercial excavation, septic system installation, and site work. Our team is dedicated to providing the highest quality service and customer satisfaction."
                keywords="WZ Trucking & Excavating, Snohomish, WA, Snohomish County, Top Soil, Gravel, Land Grading, Excavation, Drainage Systems & Trenches, Patio, Walks and Retaining Walls, Lawn Care, Site Preparation, Driveways, Landscape Architecture"
                type="website"
                image="https://wz-excavating-bucket.s3.amazonaws.com/screenshots/Home.png"
                url="https://www.wzexcavating.com"
            />
            <HomeSlideShow screenWidth={screenWidth} />
            <AboutUs screenWidth={screenWidth} />
            <OurServices screenWidth={screenWidth} />
        </>
    );
};

export default Home;