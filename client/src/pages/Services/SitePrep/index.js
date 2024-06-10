import React from "react";
import { Button, Header, Image, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const SitePrep = (props) => {
    return (
        <>
            <div id="site-prep-container">
                <Image id="site-prep-banner" src={"https://wz-excavating-bucket.s3.amazonaws.com/banners/desktop/site-prep.png"} fluid />
                <div id="site-prep">
                    <Header className="site-prep-header" as="h1">Site Preparation</Header>
                    <Header className="site-prep-subheader" as="h3">Site Clearing and Grading</Header>
                    <p className="site-prep-text">
                        Site preparation is a crucial first step in any construction or landscaping project, 
                        laying the foundation for successful and sustainable development. Our site clearing 
                        and grading services ensure that your site is ready for the next phase of construction 
                        by removing obstacles, leveling the ground, and creating a stable and safe base for 
                        building. This process involves clearing vegetation, debris, and any existing structures, 
                        followed by grading to achieve the desired topography and proper drainage.
                    </p>
                    <div id="site-prep-content-container">
                        <div className="site-prep-content-col">
                            <Header className="site-prep-subheader" id="site-prep-key-components" as="h3">Key Services:</Header>
                            <List bulleted className="site-prep-list">
                                <List.Item className="site-prep-list-item">
                                    <b className="site-prep-bold-text">Site Clearing:</b> We remove trees, shrubs, rocks, and debris to create a clean, obstruction-free site. This includes cutting down trees, grinding stumps, and removing underbrush, as well as demolishing and removing any existing structures that need to be cleared.
                                </List.Item>
                                <List.Item className="site-prep-list-item">
                                    <b className="site-prep-bold-text">Grading:</b> Our grading services involve reshaping the land to ensure proper drainage and a level surface. We use advanced equipment to cut and fill the soil, creating a balanced landscape that prevents erosion and water accumulation. This process is essential for preparing the site for foundation work and other construction activities.
                                </List.Item>
                            </List>
                        </div>
                        <div className="site-prep-content-col">
                            <Image className="site-prep-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/site-clearing.jpg"} />
                        </div>
                        <div className="site-prep-content-col">
                            <Header className="site-prep-subheader" as="h3">Excavation and Earthmoving</Header>
                            <p className="site-prep-text">
                                Excavation and earthmoving are integral to site preparation, involving the digging, 
                                moving, and managing of soil and rock to create the required foundation for your project. 
                                Our excavation and earthmoving services are designed to meet the specific needs of your 
                                project, whether it involves digging trenches for utilities, creating basements, or preparing 
                                foundations for buildings and infrastructure. We use modern equipment and techniques to ensure 
                                precise and efficient excavation, minimizing disruptions and maintaining the integrity of the 
                                surrounding environment.
                            </p>
                        </div>
                        <div className="site-prep-content-col">
                            <Image className="site-prep-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/earthmoving.jpg"} />
                        </div>
                        <div className="site-prep-content-col">
                            <Header className="site-prep-subheader" id="site-prep-trench-steps" as="h3">Key Services:</Header>
                            <List bulleted className="site-prep-list">
                                <List.Item className="site-prep-list-item">
                                    <b className="site-prep-bold-text">Excavation:</b> We perform detailed excavation for foundations, basements, and utility trenches, ensuring accurate depth and alignment. This includes digging for footings, foundations, and any sub-surface structures required for your project.
                                </List.Item>
                                <List.Item className="site-prep-list-item">
                                    <b className="site-prep-bold-text">Earthmoving:</b> Our earthmoving services involve the relocation and reshaping of soil and rock to meet the design specifications of your project. This includes large-scale earthworks for road construction, landscaping, and creating embankments or retaining walls.
                                </List.Item>
                                <List.Item className="site-prep-list-item">
                                    <b className="site-prep-bold-text">Soil Stabilization:</b> We provide soil stabilization services to enhance the strength and durability of the site. This involves techniques such as soil compaction, chemical stabilization, and geotextiles to improve the load-bearing capacity and prevent erosion.
                                </List.Item>
                            </List>
                        </div>
                        <div className="site-prep-content-col">
                            <Header className="site-prep-subheader" as="h3">Erosion Control and Drainage Solutions</Header>
                            <p className="site-prep-text">
                                Erosion control and proper drainage are critical components of site preparation, ensuring long-term 
                                stability and preventing water-related issues. Our erosion control and drainage solutions help to 
                                protect your site from soil erosion, water runoff, and flooding, creating a sustainable foundation 
                                for your project. We implement a range of measures to manage water flow and control erosion, safeguarding 
                                the site and its surroundings from potential damage.
                            </p>
                        </div>
                        <div className="site-prep-content-col">
                            <Header className="site-prep-subheader" id="site-prep-trench-steps" as="h3">Key Services:</Header>
                            <List bulleted className="site-prep-list">
                                <List.Item className="site-prep-list-item">
                                    <b className="site-prep-bold-text">Erosion Control:</b> We install erosion control measures such as silt fences, erosion control blankets, and sediment basins to prevent soil loss and protect water quality. These measures are crucial for stabilizing slopes, protecting topsoil, and preventing sedimentation in nearby water bodies.
                                </List.Item>
                                <List.Item className="site-prep-list-item">
                                    <b className="site-prep-bold-text">Drainage Solutions:</b> Our drainage solutions include the design and installation of systems to manage surface water and groundwater. This involves creating swales, installing French drains, and constructing retention or detention ponds to manage water flow and prevent flooding.
                                </List.Item>
                                <List.Item className="site-prep-list-item">
                                    <b className="site-prep-bold-text">Stormwater Management:</b> We provide comprehensive stormwater management services to handle runoff and mitigate the impact of heavy rainfall. This includes the installation of stormwater retention systems, permeable pavements, and rain gardens to control and filter stormwater effectively.
                                </List.Item>
                            </List>
                        </div>
                        <div className="site-prep-content-col">
                            <Image className="site-prep-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/stormwater-management.jpg"} />
                        </div>
                    </div>
                    <p className="site-prep-text" id="site-prep-last-line">
                        Our comprehensive site preparation services ensure that your project starts with a solid and stable foundation, 
                        ready for successful construction. Contact us today to discuss your site preparation needs and get your project 
                        off to the best possible start!
                    </p>
                    <div id="site-prep-btn-container">
                        <Button className="site-prep-btn" as={Link} to="/gallery">Gallery</Button>
                        <Button className="site-prep-btn" as={Link} to="/quotes">Get A Quote</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SitePrep;