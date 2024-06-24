import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const DesktopNavbar = (props) => {

    const { services } = props;

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

export default DesktopNavbar;