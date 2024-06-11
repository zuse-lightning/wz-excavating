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
                            <Image className="drainage-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/drainage-install.webp"} />
                        </div>
                        <div className="drainage-content-col">
                            <Header className="drainage-subheader" as="h3">Key Components of Drainage Services</Header>
                            <List className="drainage-list">
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
                            <Header className="drainage-subheader" as="h3">Trench Services</Header>
                            <p className="drainage-text">
                                Trench services are crucial for the installation and maintenance of underground utilities and infrastructure. Trenches are excavated
                                to lay down pipes, cables, and other utility lines for water, gas, electricity, and telecommunications services. This process requires
                                precision and expertise to ensure safe and efficient excavation, minimizing disruption to the surrounding environment and existing
                                infrastructure.
                            </p>
                            <Header className="drainage-subheader" as="h3">Maintenance and Inspection</Header>
                            <p className="drainage-text">
                                Regular maintenance and inspection are crucial to ensure the integrity of buried utilities. Routine inspections help identify potential
                                issues early, allowing for timely repairs and preventing costly damage or service interruptions.
                            </p>
                        </div>
                        <div className="drainage-content-col">
                            <Image className="drainage-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/trenching-scaled.webp"} />
                        </div>
                        <div className="drainage-content-col">
                            <Image className="drainage-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/trench-planning.jpg"} />
                        </div>
                        <div className="drainage-content-col">
                            <Header className="drainage-subheader" as="h3">Steps in Trench Services</Header>
                            <List className="drainage-list">
                                <List.Item className="drainage-list-item">
                                    <List.Header className="drainage-list-header">
                                        <b className="drainage-bold-text">1. Planning and Site Assessment:</b>
                                    </List.Header>
                                    <List bulleted className="drainage-sub-list">
                                        <List.Item className="drainage-sub-list-item">
                                            Determining the most suitable path for the trench.
                                        </List.Item>
                                        <List.Item className="drainage-sub-list-item">
                                            Employs pipes and underground systems to manage groundwater.
                                        </List.Item>
                                    </List>
                                </List.Item>
                                <List.Item className="drainage-list-item">
                                    <List.Header className="drainage-list-header">
                                        <b className="drainage-bold-text">2. Excavation:</b>
                                    </List.Header>
                                    <List bulleted className="drainage-sub-list">
                                        <List.Item className="drainage-sub-list-item">
                                            Using specialized equipment like trenchers, backhoes, and excavators.
                                        </List.Item>
                                        <List.Item className="drainage-sub-list-item">
                                            Ensuring proper depth and width based on utility type and local regulations.
                                        </List.Item>
                                        <List.Item className="drainage-sub-list-item">
                                            Implementing shoring and safety measures to prevent trench collapse.
                                        </List.Item>
                                    </List>
                                </List.Item>
                                <List.Item className="drainage-list-item">
                                    <List.Header className="drainage-list-header">
                                        <b className="drainage-bold-text">3. Utility Installation:</b>
                                    </List.Header>
                                    <List bulleted className="drainage-sub-list">
                                        <List.Item className="drainage-sub-list-item">
                                            Laying and securing water pipes, sewer lines, electrical conduits, or communication cables.
                                        </List.Item>
                                        <List.Item className="drainage-sub-list-item">
                                            Backfilling and compacting the trench to restore the ground surface.
                                        </List.Item>
                                    </List>
                                </List.Item>
                                <List.Item className="drainage-list-item">
                                    <List.Header className="drainage-list-header">
                                        <b className="drainage-bold-text">4. Quality Control:</b>
                                    </List.Header>
                                    <List bulleted className="drainage-sub-list">
                                        <List.Item className="drainage-sub-list-item">
                                            Ensuring installed utilities function correctly.
                                        </List.Item>
                                        <List.Item className="drainage-sub-list-item">
                                            Meeting all safety and regulatory standards.
                                        </List.Item>
                                    </List>
                                </List.Item>
                            </List>
                        </div>
                    </div>
                    <p className="drainage-text" id="drainage-last-line">
                        By choosing our drainage and trench services, you ensure the longevity and reliability of your infrastructure. Contact us today for expert solutions tailored to your needs!
                    </p>
                    <div id="drainage-btn-container">
                        <Button className="drainage-btn" as={Link} to="/gallery">Gallery</Button>
                        <Button className="drainage-btn" as={Link} to="/quotes">Get A Quote</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drainage;