import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import OurServices from "../../components/OurServices";
import TopSoil from "./TopSoil";
import Gravel from "./Gravel";
import LandGrading from "./LandGrading";
import Excavation from "./Excavation";
import Drainage from "./Drainage";
import Patios from "./Patios";
import LawnCare from "./LawnCare";
import SitePrep from "./SitePrep";
import Driveways from "./Driveways";
import Landscape from "./Landscape";
import SEO from "../../components/SEO";

const Services = (props) => {

    const { screenWidth, location, whichWebsite } = props;
    const pathname = useLocation().pathname;
    const serviceUrl = whichWebsite(location, "https://www.wzexcavating.com/services", "https://www.wzexcavatingllc.com/services");
    
    return (
        <>
            <SEO 
                title="Services | WZ Trucking & Excavation"
                description="We offer a wide range of services to meet your needs, including topsoil, gravel, land grading, excavation, drainage, patios, lawn care, site preparation, driveways, and landscape architecture."
                keywords="Services, WZ Trucking & Excavation, Snohomish, WA, Snohomish County, Top Soil, Gravel, Land Grading, Excavation, Drainage Systems & Trenches, Patio, Walks and Retaining Walls, Lawn Care, Site Preparation, Driveways, Landscape Architecture"
                type="website"
                image="https://wz-excavating-bucket.s3.amazonaws.com/screenshots/Services.png"
                url={serviceUrl}
            />
            {pathname === "/services" ? <OurServices screenWidth={screenWidth} /> : null}
            <Routes>
                <Route exact path="top-soil" element={<TopSoil location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
                <Route exact path="gravel" element={<Gravel location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
                <Route exact path="land-grading" element={<LandGrading location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
                <Route exact path="excavation" element={<Excavation location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
                <Route exact path="drainage" element={<Drainage location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
                <Route exact path="patios" element={<Patios location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
                <Route exact path="lawn-care" element={<LawnCare location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
                <Route exact path="site-prep" element={<SitePrep location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
                <Route exact path="driveways" element={<Driveways location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
                <Route exact path="landscape" element={<Landscape location={location} whichWebsite={whichWebsite} screenWidth={screenWidth} />} />
            </Routes>
        </>
    );
};

export default Services;