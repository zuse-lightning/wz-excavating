import React from "react";
import { Route, Routes } from "react-router-dom";

const Services = (props) => {
    return (
        <>
            <Routes>
                <Route exact path="top-soil" />
                <Route exact path="gravel" />
                <Route exact path="land-grading" />
                <Route exact path="excavation" />
                <Route exact path="drainage" />
                <Route exact path="patios" />
                <Route exact path="lawn-care" />
                <Route exact path="snow-removal" />
            </Routes>
        </>
    );
};

export default Services;