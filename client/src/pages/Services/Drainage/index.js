import React from "react";
import { Image, Header, Button, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Drainage = (props) => {
    return (
        <>
            <div id="drainage-container">
                <Image id="drainage-banner" src={"https://wz-excavating-bucket.s3.amazonaws.com/banners/desktop/drainage.png"} fluid />
                <div id="drainage">
                    <Header className="drainage-header" as="h1">Drainage Systems & Trenches</Header>
                    <Header className="drainage-subheader" as="h3">Drainage Services</Header>
                    <p className="drainage-text">
                        Drainage services are essential for managing and directing water flow in residential,
                        commercial, and industrial settings. These services include the installation, maintenance,
                        and repair of drainage systems to prevent water accumulation that can lead to flooding,
                        erosion, and structural damage. Effective drainage solutions ensure water is efficiently
                        carried away from buildings, roads, and other infrastructure, safeguarding the integrity
                        of these structures and the surrounding environment.
                    </p>
                    <div id="drainage-content-container">
                        <div className="drainage-content-col">
                            <Image className="drainage-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/foundation-excavation.jpg"} />
                        </div>
                        <div className="drainage-content-col">
                            <Header className="drainage-subheader" as="h3">Key Components of Drainage Services</Header>
                            <List id="drainage-list">
                                <List.Item className="drainage-list-item">
                                    <List.Header className="drainage-list-header">
                                        <b className="drainage-bold-text">1. Installation of Drainage Systems:</b>
                                    </List.Header>
                                    <List bulleted className="drainage-sub-list">
                                        <List.Item className="drainage-sub-list-item">
                                            <b className="drainage-bold-text">Surface Drainage:</b> Uses channels, ditches, and gutters to guide water away from the surface.
                                        </List.Item>
                                        <List.Item className="drainage-sub-list-item">
                                            <b className="drainage-bold-text">Subsurface Drainage:</b> Employs pipes and underground systems to manage groundwater.
                                        </List.Item>
                                        <List.Item className="drainage-sub-list-item">
                                            <b className="drainage-bold-text">Stormwater Management Systems:</b> Handles large volumes of rainwater, incorporating features like detention basins, infiltration trenches, and rain gardens.
                                        </List.Item>
                                    </List>
                                </List.Item>
                                <List.Item className="drainage-list-item">
                                    <List.Header className="drainage-list-header">
                                        <b className="drainage-bold-text">2. Maintenance and Repair:</b>
                                    </List.Header>
                                    <List bulleted className="drainage-sub-list">
                                        <List.Item className="drainage-sub-list-item">
                                            <b className="drainage-bold-text">Regular Maintenance:</b> Includes cleaning gutters, checking for pipe blockages, and ensuring all components function properly.
                                        </List.Item>
                                        <List.Item className="drainage-sub-list-item">
                                            <b className="drainage-bold-text">Repair Services:</b> Addresses issues such as cracked pipes, damaged drains, and malfunctioning pumps, preventing small issues from becoming major problems.
                                        </List.Item>
                                    </List>
                                </List.Item>
                            </List>
                        </div>
                        <div className="drainage-content-col">
                            <Header className="drainage-subheader" as="h3">Site Preparation and Grading</Header>
                            <p className="drainage-text">
                                Effective site preparation is crucial for the success of any construction or landscaping project. Our excavation services
                                include clearing and grading the site to create a suitable working environment. This involves removing unwanted vegetation,
                                debris, and existing structures, as well as leveling the ground to meet the project’s specifications. Proper site preparation
                                not only ensures a solid foundation for subsequent construction activities but also improves drainage and prevents future issues
                                such as soil erosion and water pooling.
                            </p>
                            <Header className="drainage-subheader" as="h3">Land Clearing and Demolition</Header>
                            <p className="drainage-text">
                                In addition to excavation, we offer comprehensive land clearing and demolition services. Whether you need to clear a site for new
                                construction or remove old structures, our team can handle the job with precision and care. We use state-of-the-art equipment to
                                safely and efficiently remove trees, shrubs, and debris, as well as demolish existing buildings and other structures. Our environmentally
                                responsible approach ensures that all materials are disposed of properly, with a focus on recycling and minimizing waste.
                            </p>
                        </div>
                        <div className="drainage-content-col">
                            <Image className="drainage-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/trenching-utility.jpg"} />
                        </div>
                        <div className="drainage-content-col">
                            <Image className="drainage-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/demolition-land-clearing.jpg"} />
                        </div>
                        <div className="drainage-content-col">
                            <Header className="drainage-subheader" as="h3">Excavation for Landscaping Projects</Header>
                            <p className="drainage-text">
                                Excavation is also integral to landscaping projects, from creating ponds and water features to shaping terrain and installing retaining
                                walls. Our team works closely with landscape architects and designers to execute their visions accurately and effectively. We provide
                                detailed excavation services that enhance the aesthetic and functional aspects of your outdoor space, ensuring that all elements are
                                properly integrated and supported.
                            </p>
                            <Header className="drainage-header" as="h1">Why Choose Us?</Header>
                            <List id="drainage-list">
                                <List.Item className="drainage-list-item">
                                    <List.Icon className="drainage-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="drainage-list-desc">
                                            <b className="drainage-bold-text">Expertise and Experience:</b> Skilled team with extensive experience in a wide range of excavation projects.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="drainage-list-item">
                                    <List.Icon className="drainage-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="drainage-list-desc">
                                            <b className="drainage-bold-text">Advanced Equipment:</b> Utilization of modern machinery for precise and efficient excavation.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="drainage-list-item">
                                    <List.Icon className="drainage-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="drainage-list-desc">
                                            <b className="drainage-bold-text">Customized Solutions:</b> Tailored services to meet the unique needs of each project.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="drainage-list-item">
                                    <List.Icon className="drainage-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="drainage-list-desc">
                                            <b className="drainage-bold-text">Safety and Compliance:</b> Adherence to all safety standards and regulatory requirements.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="drainage-list-item">
                                    <List.Icon className="drainage-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="drainage-list-desc">
                                            <b className="drainage-bold-text">Comprehensive Services:</b> From foundation excavation and trenching to land clearing and landscaping.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </div>
                    </div>
                    <p className="excavation-text" id="excavation-last-line">
                        Transform your site with our professional excavation services. Contact us today to discuss your project and discover how we can provide the expert excavation solutions you need to ensure success.
                    </p>
                    <div id="excavation-btn-container">
                        <Button className="excavation-btn" as={Link} to="/gallery">Gallery</Button>
                        <Button className="excavation-btn" as={Link} to="/quotes">Get A Quote</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drainage;