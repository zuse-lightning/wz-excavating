import React from "react";
import { Image, Header, Button, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Gravel = (props) => {

    const { screenWidth } = props;
    let desktopBanner = "https://wz-excavating-bucket.s3.amazonaws.com/banners/desktop/gravel.png";
    let mobileBanner = "https://wz-excavating-bucket.s3.amazonaws.com/banners/mobile/gravel-mobile.png";

    return (
        <>
            <div id="gravel-container">
                <Image id="gravel-banner" src={screenWidth >= 992 ? desktopBanner : mobileBanner} fluid />
                <div id="gravel">
                    <p className="gravel-text">
                        Gravel is essential for a variety of construction, landscaping, and maintenance projects, offering both
                        functional and aesthetic benefits. From driveways and pathways to drainage systems and decorative landscaping, gravel
                        is a versatile material that serves multiple purposes. Our gravel services provide comprehensive solutions tailored to
                        meet the specific needs of each project, ensuring durability, practicality, and visual appeal.
                    </p>
                    <div id="gravel-content-container">
                        <div className="gravel-content-col">
                            <Image className="gravel-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/gravel-driveway.jpg"} />
                        </div>
                        <div className="gravel-content-col">
                            <Header className="gravel-subheader" as="h3">Driveway and Pathway Installation</Header>
                            <p className="gravel-text">
                                Gravel driveways and pathways are popular for their cost-effectiveness, ease of installation, and low maintenance
                                requirements. Our team specializes in creating durable, well-graded gravel surfaces that can withstand heavy use and
                                weather conditions. We offer a range of gravel types and sizes to suit different preferences and functional needs, ensuring
                                a smooth and stable surface that enhances the accessibility and appearance of your property.
                            </p>
                            <Header className="gravel-subheader" as="h3">Drainage Solutions</Header>
                            <p className="gravel-text">
                                Effective drainage is crucial to prevent waterlogging and soil erosion. Our gravel drainage solutions are designed to facilitate
                                proper water flow and reduce the risk of flooding. We install gravel trenches, French drains, and permeable gravel surfaces that
                                efficiently manage water runoff, protecting your landscape and structures. Our expertise ensures that the right type and size of
                                gravel are used to maximize drainage efficiency.
                            </p>
                        </div>
                        <div className="gravel-content-col">
                            <Header className="gravel-subheader" as="h3">Decorative Landscaping</Header>
                            <p className="gravel-text">
                                Enhance the beauty of your outdoor spaces with our decorative gravel landscaping services. Gravel can be used to create stunning
                                garden paths, borders, and accents that add texture and contrast to your landscape design. We provide a variety of decorative gravel
                                options in different colors, shapes, and sizes, allowing you to customize your landscape to reflect your personal style. Whether you’re
                                looking to create a modern, minimalist garden or a rustic, naturalistic setting, our decorative gravel solutions can transform your outdoor area.
                            </p>
                            <Header className="gravel-subheader" as="h3">Gravel Delivery and Installation</Header>
                            <p className="gravel-text">
                                Our comprehensive gravel services include delivery and professional installation. We source high-quality gravel and ensure timely delivery to your
                                site. Our installation process involves precise placement and compaction to achieve a stable and attractive surface. We also offer guidance on the
                                best gravel choices for your specific needs and provide maintenance tips to keep your gravel surfaces in excellent condition.
                            </p>
                            
                        </div>
                        <div className="gravel-content-col">
                            <Image className="gravel-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/gravel-decorative-landscape.jpg"} />
                        </div>
                        <div className="gravel-content-col">
                            <Image className="gravel-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/gravel-site-prep.jpg"} />
                        </div>
                        <div className="gravel-content-col">
                            <Header className="gravel-subheader" as="h3">Site Preparation and Grading</Header>
                            <p className="gravel-text">
                                Proper site preparation and grading are critical for any gravel project. We offer expert site assessment and grading services to ensure a solid
                                foundation for your gravel installation. This includes clearing and leveling the site, removing debris, and establishing the correct slope for
                                optimal drainage. Our attention to detail in site preparation ensures the longevity and functionality of your gravel surfaces.
                            </p>
                        </div>
                        <div className="gravel-content-col">
                        <Header className="gravel-header" as="h1">Why Choose Us?</Header>
                            <List id="gravel-list">
                                <List.Item className="gravel-list-item">
                                    <List.Icon className="gravel-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="gravel-list-desc">
                                            <b className="gravel-bold-text">Expert Installation:</b> Professional and durable gravel driveways, pathways, and drainage systems.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="gravel-list-item">
                                    <List.Icon className="gravel-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="gravel-list-desc">
                                            <b className="gravel-bold-text">High-Quality Materials:</b> Sourcing top-grade gravel for various applications.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="gravel-list-item">
                                    <List.Icon className="gravel-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="gravel-list-desc">
                                            <b className="gravel-bold-text">Aesthetic Landscaping:</b> Customizable decorative gravel options to enhance your landscape.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="gravel-list-item">
                                    <List.Icon className="gravel-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="gravel-list-desc">
                                            <b className="gravel-bold-text">Comprehensive Services:</b> From delivery to installation and maintenance guidance.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="gravel-list-item">
                                    <List.Icon className="gravel-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="gravel-list-desc">
                                            <b className="gravel-bold-text">Attention to Detail:</b> Thorough site preparation and grading for optimal results.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </div>
                    </div>
                    <p className="gravel-text" id="gravel-last-line">
                        Transform your outdoor spaces with our reliable and versatile gravel services. Contact us today to discuss your project and receive a tailored solution that meets your needs.
                    </p>
                    <div id="gravel-btn-container">
                        <Button className="gravel-btn" as={Link} to="/gallery">Gallery</Button>
                        <Button className="gravel-btn" as={Link} to="/quotes">Get A Quote</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gravel;