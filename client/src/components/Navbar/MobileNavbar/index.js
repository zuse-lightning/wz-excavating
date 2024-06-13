import React from "react";
import { Menu, Icon, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const MobileNavbar = (props) => {

    const  { screenWidth, services } = props;

    let logoSize;

    if (screenWidth <= 768) {
        logoSize = "small";
    } else {
        logoSize = "medium";
    };

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
                >
                    <Dropdown>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            as={Link}
                            to="/about"
                            text="About"
                        />
                        <Dropdown.Item
                            as={Link}
                            to="/services"
                            text="Services"
                        />
                        {/* <Dropdown.Item
                            as={Link}
                            to="/equipment"
                            text="Equipment"
                        /> */}
                        <Dropdown.Item
                            as={Link}
                            to="/gallery"
                            text="Gallery"
                        />
                        <Dropdown.Item
                            as={Link}
                            to="/contact"
                            text="Contact"
                        />
                        <Dropdown.Item
                            as={Link}
                            to="/quotes"
                            text="Get A Quote"
                        />
                    </Dropdown.Menu></Dropdown>
                </Icon>
            </Menu.Item>
        </Menu>
    );
};

export default MobileNavbar;