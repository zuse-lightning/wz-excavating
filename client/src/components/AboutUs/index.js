import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const AboutUs = () => {
    return (
        <div id="about-us-container">
            <h1>About Us</h1>
            <p>
                WZ Excavating is a family-owned and operated business located in Danbury, CT. We have been serving the Fairfield County area for over 20 years. We specialize in residential and commercial excavation, septic system installation, and site work. Our team is dedicated to providing the highest quality service and customer satisfaction.
            </p>
            <p>
                We are fully licensed and insured. Our team of professionals is experienced and trained to handle any excavation project. We take pride in our work and strive to exceed our customers' expectations.
            </p>
            <p>
                Contact us today for a free estimate on your next project!
            </p>
            <Link to="/contact">Contact Us</Link>
        </div>
    );
};

export default AboutUs;