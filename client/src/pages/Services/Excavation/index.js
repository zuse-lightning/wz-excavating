import React from "react";
import { Image, Header, Button, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Excavation = (props) => {
    return (
        <>
            <div id="excavation-container">
                <Image id="excavation-banner" src={"https://wz-excavating-bucket.s3.amazonaws.com/banners/desktop/excavation.png"} fluid />
                <div id="excavation">
                    <Header className="excavation-header" as="h1">Excavation</Header>
                    <p className="excavation-text">
                        Excavation is a critical component of construction, landscaping, and infrastructure projects,
                        involving the removal of soil, rock, and other materials to create foundations, trenches, and
                        other necessary features. Our professional excavation services are designed to meet the diverse
                        needs of residential, commercial, and industrial projects, ensuring precision, safety, and efficiency.
                    </p>
                    <div id="excavation-content-container">
                        <div className="excavation-content-col">
                            <Image className="excavation-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/foundation-excavation.jpg"} />
                        </div>
                        <div className="excavation-content-col">
                            <Header className="excavation-subheader" as="h3">Foundation Excavation</Header>
                            <p className="excavation-text">
                                Foundation excavation is essential for any construction project, providing a stable base for buildings
                                and structures. Our team specializes in preparing sites for foundations of all sizes, from residential
                                homes to large commercial buildings. We use advanced equipment and techniques to dig precise and level
                                foundation trenches, ensuring that the structural integrity of your project is maintained. Our expertise
                                in soil analysis and site assessment ensures that the excavation process is tailored to the specific
                                conditions of your site, minimizing risks and potential issues.
                            </p>
                            <Header className="excavation-subheader" as="h3">Trenching and Utility Installation</Header>
                            <p className="excavation-text">
                                Trenching is a key aspect of excavation services, necessary for the installation of utilities such as water
                                lines, sewage systems, electrical conduits, and telecommunications cables. Our trenching services are conducted
                                with meticulous attention to detail, ensuring that trenches are dug to the correct depth and width to accommodate
                                the required utilities. We also prioritize safety and regulatory compliance, making sure that all excavations adhere
                                to local codes and standards. Our efficient trenching solutions help facilitate smooth utility installation and
                                integration into your project.
                            </p>
                        </div>
                        <div className="excavation-content-col">
                            <Header className="excavation-subheader" as="h3">Site Preparation and Grading</Header>
                            <p className="excavation-text">
                                Effective site preparation is crucial for the success of any construction or landscaping project. Our excavation services
                                include clearing and grading the site to create a suitable working environment. This involves removing unwanted vegetation,
                                debris, and existing structures, as well as leveling the ground to meet the project’s specifications. Proper site preparation
                                not only ensures a solid foundation for subsequent construction activities but also improves drainage and prevents future issues
                                such as soil erosion and water pooling.
                            </p>
                            <Header className="excavation-subheader" as="h3">Land Clearing and Demolition</Header>
                            <p className="excavation-text">
                                In addition to excavation, we offer comprehensive land clearing and demolition services. Whether you need to clear a site for new 
                                construction or remove old structures, our team can handle the job with precision and care. We use state-of-the-art equipment to 
                                safely and efficiently remove trees, shrubs, and debris, as well as demolish existing buildings and other structures. Our environmentally 
                                responsible approach ensures that all materials are disposed of properly, with a focus on recycling and minimizing waste.
                            </p>
                        </div>
                        <div className="excavation-content-col">
                            <Image className="excavation-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/trenching-utility.jpg"} />
                        </div>
                        <div className="excavation-content-col">
                            <Image className="excavation-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/demolition-land-clearing.jpg"} />
                        </div>
                        <div className="excavation-content-col">
                            <Header className="excavation-subheader" as="h3">Excavation for Landscaping Projects</Header>
                            <p className="excavation-text">
                                Excavation is also integral to landscaping projects, from creating ponds and water features to shaping terrain and installing retaining
                                walls. Our team works closely with landscape architects and designers to execute their visions accurately and effectively. We provide
                                detailed excavation services that enhance the aesthetic and functional aspects of your outdoor space, ensuring that all elements are
                                properly integrated and supported.
                            </p>
                            <Header className="excavation-header" as="h1">Why Choose Us?</Header>
                            <List id="excavation-list">
                                <List.Item className="excavation-list-item">
                                    <List.Icon className="excavation-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="excavation-list-desc">
                                            <b className="excavation-bold-text">Expertise and Experience:</b> Skilled team with extensive experience in a wide range of excavation projects.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="excavation-list-item">
                                    <List.Icon className="excavation-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="excavation-list-desc">
                                            <b className="excavation-bold-text">Advanced Equipment:</b> Utilization of modern machinery for precise and efficient excavation.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="excavation-list-item">
                                    <List.Icon className="excavation-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="excavation-list-desc">
                                            <b className="excavation-bold-text">Customized Solutions:</b> Tailored services to meet the unique needs of each project.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="excavation-list-item">
                                    <List.Icon className="excavation-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="excavation-list-desc">
                                            <b className="excavation-bold-text">Safety and Compliance:</b> Adherence to all safety standards and regulatory requirements.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="excavation-list-item">
                                    <List.Icon className="excavation-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="excavation-list-desc">
                                            <b className="excavation-bold-text">Comprehensive Services:</b> From foundation excavation and trenching to land clearing and landscaping.
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

export default Excavation;