import React from "react";
import { Header, List } from "semantic-ui-react"
import { Link } from "react-router-dom";

import "./style.css";

const AboutUs = () => {
    return (
        <div id="about-us-container">
            <div id="about-us">
                <div className="about-us-col">
                    <Header id="about-us-header" as="h1">About Us</Header>
                    <Header id="about-us-subheader" as="h4">Family owned and operated since 2021</Header>
                    <p className="about-us-text">
                        WZ Excavating is a family-owned and operated business located in Danbury, CT. We have been serving the Fairfield County area for over 20 years. We specialize in residential and commercial excavation, septic system installation, and site work. Our team is dedicated to providing the highest quality service and customer satisfaction.
                    </p>
                    <p className="about-us-text">
                        We are fully licensed and insured. Our team of professionals is experienced and trained to handle any excavation project. We take pride in our work and strive to exceed our customers' expectations.
                    </p>
                    <p className="about-us-text">
                        Contact us today for a free estimate on your next project!
                    </p>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className="about-us-col">
                    <Header id="choose-us-header" as="h1">Why Choose Us?</Header>
                    <List id="choose-us-list">
                        <List.Item className="choose-us-list-item">
                            <List.Icon name="check circle" />
                            <List.Content>
                                <List.Header className="choose-us-list-header">Family Owned and Operated</List.Header>
                                <List.Description className="choose-us-list-desc">Our team is dedicated to providing the highest quality service and customer satisfaction.</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item className="choose-us-list-item">
                            <List.Icon name="check circle" />
                            <List.Content>
                                <List.Header className="choose-us-list-header">Experienced Professionals</List.Header>
                                <List.Description className="choose-us-list-desc">Our team of professionals is experienced and trained to handle any excavation project.</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item className="choose-us-list-item">
                            <List.Icon name="check circle" />
                            <List.Content>
                                <List.Header className="choose-us-list-header">Quality Service</List.Header>
                                <List.Description className="choose-us-list-desc">We take pride in our work and strive to exceed our customers' expectations.</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item className="choose-us-list-item">
                            <List.Icon name="check circle" />
                            <List.Content>
                                <List.Header className="choose-us-list-header">Free Estimates</List.Header>
                                <List.Description className="choose-us-list-desc">Contact us today for a free estimate on your next project!</List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                </div>
            </div>



        </div>
    );
};

export default AboutUs;