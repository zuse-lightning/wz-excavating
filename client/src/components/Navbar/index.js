import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Navbar = () => {

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
        { name: "Landscape", path: "/services/landscape" }
    ];

    return (
        <Menu id="main-menu" pointing secondary fluid>
            <Menu.Item
                className="header-nav-item"
                position="left"
                as={Link}
                to="/"
                name="home"
            >
                <div id="wz-logo-container">
                    <Image
                        draggable="false"
                        size="small"
                        id="home-btn-img"
                        src="https://wz-excavating-bucket.s3.amazonaws.com/wz-logo.png"
                    />
                </div>
            </Menu.Item>
            <Menu.Item
                className="header-nav-item"
                as={Link}
                to="/about"
                name="about"
            >
                About
            </Menu.Item>
            <Menu.Item
                className="header-nav-item"
                as={Dropdown}
                name="services"
                text="Services"
            >
                <Dropdown.Menu>
                    {services.map((service, index) => (
                        <Dropdown.Item
                            key={index}
                            as={Link}
                            to={service.path}
                            text={service.name}
                        />
                    ))}
                </Dropdown.Menu>
            </Menu.Item>
            {/* <Menu.Item
                className="header-nav-item"
                as={Link}
                to="/equipment"
                name="equipment"
            >
                Equipment
            </Menu.Item> */}
            <Menu.Item
                className="header-nav-item"
                as={Link}
                to="/gallery"
                name="gallery"
            >
                Gallery
            </Menu.Item>
            <Menu.Item
                className="header-nav-item"
                as={Link}
                to="/contact"
                name="contact"
            >
                Contact
            </Menu.Item>
            <Menu.Item
                className="header-nav-item"
                as={Link}
                to="/quotes"
                name="quotes"
            >
                Get A Quote
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;