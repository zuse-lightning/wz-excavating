import React from "react";
import { Button, Header, Image, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Driveways = (props) => {
    return (
        <>
        <div id="driveways-container">
            <Image id="driveways-banner" src={"https://wz-excavating-bucket.s3.amazonaws.com/banners/desktop/driveways.png"} fluid />
            <div id="driveways">
                <Header className="driveways-subheader" as="h3">Driveway Design and Installation</Header>
                <p className="driveways-text">
                    A well-designed and professionally installed driveway not only enhances the curb appeal 
                    of your property but also provides a durable and functional surface for daily use. Our 
                    driveway design and installation services are tailored to meet the unique needs of 
                    residential, commercial, and industrial properties, ensuring an aesthetically pleasing 
                    and long-lasting solution. We work with a variety of materials and styles to create 
                    driveways that complement your property and meet your specific requirements.
                </p>
                <div id="driveways-content-container">
                    <div className="driveways-content-col">
                        <Image className="driveways-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/driveway-design.jpg"} />
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" as="h3">Key Services:</Header>
                        <List bulleted className="driveways-list">
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Custom Design:</b> Our experts work with you to design a driveway that fits your aesthetic preferences and functional needs. We consider factors such as property layout, traffic patterns, and landscape integration to create a design that enhances your property's overall appearance.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Material Options:</b> We offer a range of materials including asphalt, concrete, pavers, and gravel, each with its own benefits. Asphalt and concrete provide durable and low-maintenance options, while pavers offer flexibility in design and aesthetics. Gravel driveways are an economical choice that also provides good drainage.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Professional Installation:</b> Our installation process involves site preparation, excavation, and the precise laying of materials to ensure a stable and even surface. We pay attention to details like grading and drainage to prevent water accumulation and extend the lifespan of your driveway.
                            </List.Item>
                        </List>
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" as="h3">Driveway Maintenance and Repair</Header>
                        <p className="driveways-text">
                            Regular maintenance and timely repairs are crucial to keep your driveway in excellent 
                            condition and extend its lifespan. Our driveway maintenance and repair services help 
                            prevent deterioration and address any issues before they become major problems, ensuring 
                            a safe and attractive surface for your vehicles.
                        </p>
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" as="h3">Key Services:</Header>
                        <List bulleted className="driveways-list">
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Routine Maintenance:</b> We provide regular maintenance services including sealing, cleaning, and minor repairs to protect your driveway from weathering, oil stains, and other common issues. Sealing helps to prevent water infiltration and UV damage, while cleaning removes debris and stains.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Crack and Pothole Repair:</b> Addressing cracks and potholes promptly prevents them from expanding and causing more extensive damage. We use high-quality materials and techniques to fill and seal cracks and repair potholes, restoring the integrity and appearance of your driveway.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Resurfacing and Overlay:</b> For driveways with more extensive wear and tear, resurfacing and overlay services provide a cost-effective way to renew the surface without the need for a full replacement. We apply a new layer of material over the existing surface, improving durability and appearance.
                            </List.Item>
                        </List>
                    </div>
                    <div className="driveways-content-col">
                        <Image className="driveways-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/pothole-repair.jpg"} />
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" as="h3">Driveway Replacement and Upgrades</Header>
                        <p className="driveways-text">
                            Over time, driveways can suffer from significant wear, settling, and structural issues that 
                            necessitate replacement or major upgrades. Our driveway replacement and upgrade services 
                            provide comprehensive solutions to replace old, damaged driveways or upgrade to more modern 
                            and functional designs.
                        </p>
                    </div>
                    <div className="driveways-content-col">
                        <Image className="driveways-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/permeable-driveway.jpg"} />
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" as="h3">Key Services:</Header>
                        <List bulleted className="driveways-list">
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Full Replacement:</b> When a driveway is beyond repair, a full replacement may be necessary. We remove the old driveway, prepare the site, and install a new driveway using your choice of materials. This ensures a fresh start and a long-lasting solution that meets current standards and your needs.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Upgrades and Extensions:</b> We offer upgrades such as adding decorative elements, improving drainage, or extending the driveway to accommodate more vehicles. These enhancements not only improve the functionality of your driveway but also increase the value and appeal of your property.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Permeable Solutions:</b> For environmentally conscious clients, we offer permeable driveway solutions that allow water to filter through the surface, reducing runoff and promoting groundwater recharge. Options include permeable pavers and gravel, which provide a sustainable and eco-friendly alternative to traditional driveways.
                            </List.Item>
                        </List>
                    </div>
                </div>
                <p className="driveways-text" id="driveways-last-line">
                    Enhance the functionality and beauty of your property with our comprehensive driveway services. 
                    Whether you need design, installation, maintenance, or upgrades, we provide tailored solutions 
                    to meet your needs. Contact us today to transform your driveway into a durable and attractive 
                    feature of your landscape!
                </p>
                <div id="driveways-btn-container">
                    <Button className="driveways-btn" as={Link} to="/gallery">Gallery</Button>
                    <Button className="driveways-btn" as={Link} to="/quotes">Get A Quote</Button>
                </div>
            </div>
        </div>
    </>
    );
};

export default Driveways;