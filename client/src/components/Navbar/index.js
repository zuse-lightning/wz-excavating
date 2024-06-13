import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = (props) => {

    const { screenWidth } = props;

    const services = [
        { name: "Top Soil", path: "/services/top-soil" },
        { name: "Gravel", path: "/services/gravel" },
        { name: "Land Grading", path: "/services/land-grading" },
        { name: "Excavation", path: "/services/excavation" },
        { name: "Drainage Systems & Trenches", path: "/services/drainage" },
        { name: "Patios, Walks & Retaining Walls", path: "/services/patios" },
        { name: "Lawn Care", path: "/services/lawn-care" },
        { name: "Site Prep", path: "/services/site-prep" },
        { name: "Driveways", path: "/services/driveways" },
        { name: "Landscape Architecture", path: "/services/landscape" }
    ];

    return (
        <>
            {screenWidth >= 992 ? <DesktopNavbar services={services} /> : <MobileNavbar screenWidth={screenWidth} services={services} />}
        </>
    );
};

export default Navbar;