import React from "react";
import { Header, List } from "semantic-ui-react"
import { Link } from "react-router-dom";

import "./style.css";

const AboutUs = () => {
    return (
        <div id="about-us-container">
            <div className="about-us-col">
                <Header as="h1">About Us</Header>
                <Header as="h4">Family owned and operated since 2021</Header><p>
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
            <div className="about-us-col">
                <Header as="h1">Why Choose Us?</Header>
                <List id="choose-us-list">
                    <List.Item className="choose-us-list-item">
                        <List.Icon name="check circle" />
                        <List.Content>
                            <List.Header>Family Owned and Operated</List.Header>
                            <List.Description>Our team is dedicated to providing the highest quality service and customer satisfaction.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item className="choose-us-list-item">
                        <List.Icon name="check circle" />
                        <List.Content>
                            <List.Header>Experienced Professionals</List.Header>
                            <List.Description>Our team of professionals is experienced and trained to handle any excavation project.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item className="choose-us-list-item">
                        <List.Icon name="check circle" />
                        <List.Content>
                            <List.Header>Quality Service</List.Header>
                            <List.Description>We take pride in our work and strive to exceed our customers' expectations.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item className="choose-us-list-item">
                        <List.Icon name="check circle" />
                        <List.Content>
                            <List.Header>Free Estimates</List.Header>
                            <List.Description>Contact us today for a free estimate on your next project!</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </div>

            
        </div>
    );
};

export default AboutUs;