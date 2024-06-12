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
                        <p className="about-text">
                            Welcome to WZ Trucking & Excavation, your trusted partner for comprehensive construction
                            and landscaping solutions in Snohomish, WA. With a dedication to excellence and a passion
                            for transforming landscapes, we offer a wide array of services designed to meet all your
                            residential and commercial needs. From foundational site preparation to the finishing touches
                            on your landscape, we are committed to delivering high-quality results that exceed your expectations.
                        </p>
                        <Header as="h3" className="about-subheader first-col">Our Journey</Header>
                        <p className="about-text">
                            WZ Trucking & Excavation was established with a vision to provide superior construction and excavation
                            services to the Snohomish community. Since our inception, we have grown into a leading contractor, known
                            for our reliability, expertise, and dedication to customer satisfaction. Our team brings years of experience
                            and a wealth of knowledge to every project, ensuring that we deliver nothing but the best.
                        </p>
                        <Header as="h3" className="about-subheader first-col">Our Services</Header>
                        <List bulleted className="about-list">
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Top Soil & Gravel:</b> High-quality topsoil and gravel for landscaping, gardening, and construction projects, ensuring a solid and fertile base.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Land Grading:</b> Precise grading services to prepare your land for construction, ensuring proper drainage and a stable foundation.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Excavation:</b> Expert excavation services for foundations, basements, and other critical infrastructure projects.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Drainage Systems & Trenches:</b> Comprehensive drainage solutions to manage water flow and prevent erosion and flooding.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Patios, Walks & Retaining Walls:</b> Custom design and installation of patios, walkways, and retaining walls to enhance your outdoor spaces.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Lawn Care:</b> Professional lawn care services to keep your green spaces healthy, lush, and beautiful.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Site Prep:</b> Thorough site preparation services for new construction, including land clearing, grading, and foundation work.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Driveways:</b> Durable and aesthetically pleasing driveway installation, tailored to your preferences and needs.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Landscape Architecture:</b> Creative and functional landscape design to transform your outdoor areas into beautiful, usable spaces.
                            </List.Item>
                        </List>
                        <Header as="h3" className="about-subheader first-col">Why Choose WZ Trucking & Excavation?</Header>
                        <List bulleted className="about-list">
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Expert Team:</b> Our skilled professionals are dedicated to providing top-quality services, ensuring that every project is completed to the highest standards.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Comprehensive Solutions:</b> From initial site preparation to final landscaping touches, we offer a full spectrum of services to handle every aspect of your project.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Quality Materials:</b> We use only the best materials to ensure the durability and beauty of your projects, whether it’s topsoil, gravel, or building materials for your landscape features.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Customer-Centric Approach:</b> We prioritize your vision and needs, working closely with you to ensure your complete satisfaction.
                            </List.Item>
                            <List.Item className="about-list-item">
                                <b className="about-bold-text">Local Expertise:</b> As a locally owned business, we understand the unique challenges and requirements of construction and landscaping in the Snohomish area.
                            </List.Item>
                        </List>
                        <Header as="h3" className="about-subheader first-col">Our Commitment to the Community</Header>
                        <p className="about-text">
                            We are proud to serve the Snohomish community and are committed to contributing to its growth and beautification. 
                            Our services are designed to enhance the local landscape, and we strive to build lasting relationships with our 
                            clients through trust and quality work. We believe in supporting local initiatives and being an active part of 
                            the community we serve.
                        </p>
                        <Header as="h3" className="about-subheader first-col">Get in Touch</Header>
                        <p className="about-text">
                            At WZ Trucking & Excavation, we are here to help you bring your project to life. Whether you need site preparation, 
                            excavation, landscaping, or driveway installation, our team is ready to provide the expert services you need. Contact 
                            us today to learn more about how we can assist you with your next project.
                        </p>
                        <p className="about-text">
                            Thank you for considering WZ Trucking & Excavation! We look forward to working with you to create beautiful and functional spaces that stand the test of time.
                        </p>
                    </div>
                    <div className="about-col">
                        <div id="about-contact-info">
                            <Header as="h3" className="about-subheader second-col">Company Hours</Header>
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
                            <Header as="h3" className="about-subheader second-col">Location</Header>
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
            </div>
        </>
    );
};

export default About;