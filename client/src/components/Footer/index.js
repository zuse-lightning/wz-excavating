import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

import "./style.css";

const Footer = () => {
    return (
        <div id="footer-container">
            <div className="footer-row">
                <div className="footer-col">
                    <Header as="h3" className="footer-header">About Us</Header>
                    <p className="footer-text">
                        Our company has been providing quality products and services for over 20 years. 
                        We are dedicated to providing the best customer service and satisfaction in the industry.
                    </p>
                </div>
                <div className="footer-col">
                    <Header as="h3" className="footer-header">Contact Information</Header>
                    <p className="footer-text">
                        <Icon name="map pin" />1234 Main Street<br />
                        Springfield, IL 62704<br />
                        <Icon name="phone" /> (217) 555-1234<br />
                        <Icon name="mail" /> info@wzexcavating.com<br />
                    </p>
                </div>
                <div className="footer-col">
                    <Header as="h3" className="footer-header">Connect Online</Header>
                    <div id="footer-social-media">
                        <Icon name="facebook" size="big" />
                        <Icon name="twitter" size="big" />
                        <Icon name="instagram" size="big" />
                    </div>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-col">

                </div>
                <div className="footer-col">

                </div>
            </div>
        </div>
    );
};

export default Footer;