import React from "react";
import { Header, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const About = (props) => {
    return (
        <>
            <div id="about-container">
                <div id="about">
                    <div className="about-col">
                        <Header as="h1" id="about-header">About</Header>
                    </div>
                    <div className="about-col">
                        <Header as="h3" className="about-subheader">Company Hours</Header>
                        <div id="about-hours-container">
                            <div className="about-hours-col">
                                <p className="about-text">Monday - Friday</p>
                            </div>
                            <div className="about-hours-col">
                                <p className="about-text">6:00 AM - 6:00 PM</p>
                            </div>
                            <div className="about-hours-col">
                                <p className="about-text">Saturday</p>
                            </div>
                            <div className="about-hours-col">
                                <p className="about-text">9:00 AM - 5:00 PM</p>
                            </div>
                            <div className="about-hours-col">
                                <p className="about-text">Sunday</p>
                            </div>
                            <div className="about-hours-col">
                                <p className="about-text">Closed</p>
                            </div>
                        </div>
                        <Header as="h3" className="about-subheader">Location</Header>
                        <p className="about-text">1323 Ave D #1129, Snohomish, WA 98290</p>
                        <iframe
                            title="Google Map"
                            id="wz-location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.4218473076103!2d-122.10027402264797!3d47.928223265711466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa9a2eaca780d%3A0xd7565576af106584!2s1323%20Ave%20D%20%231129%2C%20Snohomish%2C%20WA%2098290!5e0!3m2!1sen!2sus!4v1717519186719!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;