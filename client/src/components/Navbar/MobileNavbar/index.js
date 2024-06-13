import React, { useState } from "react";
import { Menu, Icon, Image, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const MobileNavbar = (props) => {

    const { screenWidth } = props;
    const [mainVisible, setMainVisible] = useState(false);

    let logoSize;

    if (screenWidth <= 768) {
        logoSize = "small";
    } else {
        logoSize = "medium";
    };

    console.log(logoSize);
    console.log(screenWidth);

    return (
        <Menu id="mobile-main-menu" pointing secondary fluid>
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
            <Menu.Item>
                <Icon
                    name="bars"
                    id="header-nav-stack"
                    onClick={(e) => setMainVisible(!mainVisible)}
                />
            </Menu.Item>
            <Sidebar
                as={Menu}
                id="mobile-sidebar"
                animation="overlay"
                icon="labeled"
                inverted
                onHide={() => setMainVisible(false)}
                vertical
                visible={mainVisible}
                width="wide"
            >
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    onClick={(e) => setMainVisible(false)}
                    to="/about"
                    name="about"
                >
                    About
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    onClick={(e) => setMainVisible(false)}
                    to="/services"
                    className="header-nav-item"
                    name="services"
                >
                    Services
                </Menu.Item>
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    onClick={(e) => setMainVisible(false)}
                    to="/gallery"
                    name="gallery"
                >
                    Gallery
                </Menu.Item>
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    onClick={(e) => setMainVisible(false)}
                    to="/contact"
                    name="contact"
                >
                    Contact
                </Menu.Item>
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    onClick={(e) => setMainVisible(false)}
                    to="/quotes"
                    name="quotes"
                >
                    Get A Quote
                </Menu.Item>
            </Sidebar>
        </Menu>
    );
};

export default MobileNavbar;