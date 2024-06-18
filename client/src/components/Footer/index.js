import React from "react";
import { Header, Icon, Image, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
    return (
        <div id="footer-container">
            <div id="footer">

                <div className="footer-col">
                    <Header as="h3" className="footer-header">About Us</Header>
                    <p className="footer-text" id="footer-about">
                        Our company has been providing quality products and services for over 20 years.
                        We are dedicated to providing the best customer service and satisfaction in the industry.
                    </p>
                </div>
                <div className="footer-col">
                    <Header as="h3" className="footer-header">Contact Information</Header>
                    <p className="footer-text" id="footer-contact-info">
                        <Icon className="footer-icon" name="map marker alternate" />1323 Ave D Unit 1129, Snohomish, WA 98291<br />
                        <Icon className="footer-icon" name="phone" />(203) 738-8106<br />
                        <Icon className="footer-icon" name="mail" /> tyler@wzexcavating.com<br />
                    </p>
                </div>
                <div className="footer-col">
                    <Header as="h3" className="footer-header">Hours of Operation</Header>
                    <div id="footer-hours-container">
                        <div className="footer-hours-col">
                            <p className="footer-text">Monday - Friday</p>
                        </div>
                        <div className="footer-hours-col">
                            <p className="footer-text">6:00 AM - 6:00 PM</p>
                        </div>
                        <div className="footer-hours-col">
                            <p className="footer-text">Saturday</p>
                        </div>
                        <div className="footer-hours-col">
                            <p className="footer-text">9:00 AM - 5:00 PM</p>
                        </div>
                        <div className="footer-hours-col">
                            <p className="footer-text">Sunday</p>
                        </div>
                        <div className="footer-hours-col">
                            <p className="footer-text">Closed</p>
                        </div>
                    </div>
                </div>
                <div className="footer-col">
                    <Image as={Link} to="/" id="footer-logo" src="https://wz-excavating-bucket.s3.amazonaws.com/wz-logo.png" size="small" />
                </div>
                <div className="footer-col">
                    <Header as="h3" className="footer-header">Connect Online</Header>
                    <div id="footer-social-media">
                        <Icon className="footer-icon" name="facebook" size="big" />
                        <Icon className="footer-icon" name="twitter" size="big" />
                        <Icon className="footer-icon" name="instagram" size="big" />
                    </div>
                </div>
                <div className="footer-col">
                    <p className="footer-text" id="footer-copyright">© 2024 WZ Trucking & Excavation LLC</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;