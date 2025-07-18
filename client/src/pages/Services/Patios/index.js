import React from "react";
import { Image, Header, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";

import "./style.css";

const Patios = (props) => {

    const { screenWidth, location, whichWebsite } = props;
    let desktopBanner = "https://wz-excavating-bucket.s3.amazonaws.com/banners/desktop/patios.png";
    let mobileBanner = "https://wz-excavating-bucket.s3.amazonaws.com/banners/mobile/patios-mobile.png";
    const patiosUrl = whichWebsite(location, "https://www.wzexcavating.com/services/patios", "https://www.wzexcavatingllc.com/services/patios");

    return (
        <>
            <SEO 
                title="Patios, Walks, and Retaining Walls Services | WZ Trucking & Excavation"
                description="Our patio services include design, installation, and maintenance, ensuring you get a durable and beautiful outdoor area that enhances your property's appeal and functionality. We offer a range of styles and materials, providing a personalized touch that complements your home's architecture and your personal taste."
                keywords="Patios, Walks, Retaining Walls, Patio Design, Patio Installation, Patio Maintenance, Walkway Design, Walkway Installation, Walkway Maintenance, Retaining Wall Design, Retaining Wall Installation, Retaining Wall Maintenance, WZ Trucking & Excavation, Snohomish, WA, Snohomish County"
                type="website"
                image="https://wz-excavating-bucket.s3.amazonaws.com/screenshots/Patios.png"
                url={patiosUrl}
            />
            <div id="patios-container">
                <Image id="patios-banner" src={screenWidth >= 992 ? desktopBanner : mobileBanner} fluid />
                <div id="patios">
                    <Header className="patios-subheader" as="h3">Patios Services</Header>
                    <p className="patios-text">
                        Patios are essential for creating versatile outdoor living spaces, perfect for relaxation, dining, and entertaining.
                        Our patio services include design, installation, and maintenance, ensuring you get a durable and beautiful outdoor area
                        that enhances your property's appeal and functionality. We offer a range of styles and materials, providing a personalized
                        touch that complements your home's architecture and your personal taste.
                    </p>
                    <Header className="patios-subheader" as="h3">Key Services:</Header>
                    <List className="patios-list">
                        <List.Item className="patios-list-item">
                            <List.Header className="patios-list-header">
                                <b className="patios-bold-text">1. Design and Installation:</b>
                            </List.Header>
                            <List bulleted className="patios-sub-list">
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Custom Design:</b> We create a patio layout that meets your needs and complements your landscape.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Material Selection:</b> Choose from concrete, pavers, stone, or brick.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Professional Installation:</b> We ensure proper grading and drainage for longevity.
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item className="patios-list-item">
                            <List.Header className="patios-list-header">
                                <b className="patios-bold-text">2. Maintenance and Repair:</b>
                            </List.Header>
                            <List bulleted className="patios-sub-list">
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Regular Maintenance:</b> Power washing, resealing, and surface cleaning.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Repairs:</b> Fixing cracks and loose materials to maintain aesthetics and functionality.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Renovation:</b> Updating older patios to restore charm and usability.
                                </List.Item>
                            </List>
                        </List.Item>
                    </List>
                    <Image className="patios-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/patio-installation.jpg"} />
                    <Header className="patios-subheader" as="h3">Walks Services</Header>
                    <p className="patios-text">
                        Walkways are crucial for navigating outdoor spaces and enhancing the flow of your landscape. Our walks services include design, installation,
                        and maintenance, providing safe and attractive pathways through gardens, yards, and commercial areas. We focus on durability and aesthetic appeal,
                        ensuring your walkways are both functional and visually pleasing.
                    </p>
                    
                    <Header className="patios-subheader" as="h3">Key Services:</Header>
                    <List className="patios-list">
                        <List.Item className="patios-list-item">
                            <List.Header className="patios-list-header">
                                <b className="patios-bold-text">1. Design and Installation:</b>
                            </List.Header>
                            <List bulleted className="patios-sub-list">
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Custom Layout:</b> We design walkways that seamlessly connect different areas.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Material Options:</b> Choose from concrete, gravel, stone, or pavers.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Expert Installation:</b> Proper excavation and base preparation for stability.
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item className="patios-list-item">
                            <List.Header className="patios-list-header">
                                <b className="patios-bold-text">2. Maintenance and Repair:</b>
                            </List.Header>
                            <List bulleted className="patios-sub-list">
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Routine Cleaning:</b> Removing debris, moss, and algae for safety.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Repairs:</b> Addressing uneven surfaces, cracks, and settling issues to maintain safety and appearance.
                                </List.Item>
                            </List>
                        </List.Item>
                    </List>
                    <Image className="patios-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/walkway-installation.jpg"} />
                    <Header className="patios-subheader" as="h3">Retaining Walls Services</Header>
                    <p className="patios-text">
                        Retaining walls are vital for managing elevation changes, preventing soil erosion,
                        and creating level areas in landscapes. Our retaining walls services cover design,
                        construction, and maintenance, ensuring strong, durable, and aesthetically integrated
                        structures that add both functional and visual value to your outdoor space.
                    </p>
                    
                    <Header className="patios-subheader" as="h3">Key Services:</Header>
                    <List className="patios-list">
                        <List.Item className="patios-list-item">
                            <List.Header className="patios-list-header">
                                <b className="patios-bold-text">1. Design and Installation:</b>
                            </List.Header>
                            <List bulleted className="patios-sub-list">
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Site Assessment:</b> Understanding soil mechanics and drainage needs.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Material Selection:</b> Options include concrete, stone, or timber.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Professional Construction:</b> Ensuring proper drainage to prevent water pressure build-up.
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item className="patios-list-item">
                            <List.Header className="patios-list-header">
                                <b className="patios-bold-text">2. Maintenance and Repair:</b>
                            </List.Header>
                            <List bulleted className="patios-sub-list">
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Regular Inspections:</b> Checking for cracks, bulging, or tilting.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Cleaning and Reinforcement:</b> Maintaining structural integrity and addressing drainage problems.
                                </List.Item>
                                <List.Item className="patios-sub-list-item">
                                    <b className="patios-bold-text">Timely Repairs:</b> Preventing small issues from becoming major structural problems.
                                </List.Item>
                            </List>
                        </List.Item>
                    </List>
                    <Image className="patios-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/retaining-wall-installation.jpg"} />
                    <p className="patios-text" id="patios-last-line">
                        Transform your outdoor spaces with our comprehensive patios, walks, and retaining walls services. Contact us today to create a stunning and functional landscape tailored to your needs!
                    </p>
                    <div id="patios-btn-container">
                        <Button className="patios-btn" as={Link} to="/gallery">Gallery</Button>
                        <Button className="patios-btn" as={Link} to="/quotes">Get A Quote</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Patios;