import React from "react";
import { Route, Routes } from "react-router-dom";
import TopSoil from "./TopSoil";
import Gravel from "./Gravel";
import LandGrading from "./LandGrading";
import Excavation from "./Excavation";
import Drainage from "./Drainage";
import Patios from "./Patios";
import LawnCare from "./LawnCare";
import SnowRemoval from "./SnowRemoval";
import SitePrep from "./SitePrep";
import Driveways from "./Driveways";
import Landscape from "./Landscape";

const Services = (props) => {
    return (
        <>
            <Routes>
                <Route exact path="top-soil" element={<TopSoil />} />
                <Route exact path="gravel" element={<Gravel />} />
                <Route exact path="land-grading" element={<LandGrading />} />
                <Route exact path="excavation" element={<Excavation />} />
                <Route exact path="drainage" element={<Drainage />} />
                <Route exact path="patios" element={<Patios />} />
                <Route exact path="lawn-care" element={<LawnCare />} />
                <Route exact path="snow-removal" element={<SnowRemoval />} />
                <Route exact path="site-prep" element={<SitePrep />} />
                <Route exact path="driveways" element={<Driveways />} />
                <Route exact path="landscape" element={<Landscape />} />
            </Routes>
        </>
    );
};

export default Services;