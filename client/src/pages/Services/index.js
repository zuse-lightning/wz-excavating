import React from "react";
import { Route, Routes } from "react-router-dom";
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

const Services = (props) => {

    const { screenWidth } = props;
    
    return (
        <>
            <Routes>
                <Route exact path="top-soil" element={<TopSoil screenWidth={screenWidth} />} />
                <Route exact path="gravel" element={<Gravel screenWidth={screenWidth} />} />
                <Route exact path="land-grading" element={<LandGrading screenWidth={screenWidth} />} />
                <Route exact path="excavation" element={<Excavation screenWidth={screenWidth} />} />
                <Route exact path="drainage" element={<Drainage screenWidth={screenWidth} />} />
                <Route exact path="patios" element={<Patios screenWidth={screenWidth} />} />
                <Route exact path="lawn-care" element={<LawnCare screenWidth={screenWidth} />} />
                <Route exact path="site-prep" element={<SitePrep screenWidth={screenWidth} />} />
                <Route exact path="driveways" element={<Driveways screenWidth={screenWidth} />} />
                <Route exact path="landscape" element={<Landscape screenWidth={screenWidth} />} />
            </Routes>
        </>
    );
};

export default Services;