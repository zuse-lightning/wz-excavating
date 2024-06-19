import React from "react";
import { Image, Header, Button, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const LandGrading = (props) => {
    return (
        <>
            <div id="land-grading-container">
                <Image id="land-grading-banner" src={"https://wz-excavating-bucket.s3.amazonaws.com/banners/desktop/land-grading.png"} fluid />
                <div id="land-grading">
                    <p className="land-grading-text">
                        Land grading services are fundamental for preparing a site for construction, landscaping, agriculture, and various other
                        applications. Proper land grading ensures a stable and level foundation, promotes effective drainage, and prevents issues
                        such as erosion and water pooling. Our professional land grading services are designed to meet the specific requirements of
                        your project, ensuring optimal results and long-term success.
                    </p>
                    <div id="land-grading-content-container">
                        <div className="land-grading-content-col">
                            <Image className="land-grading-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/land-grading-site-prep.jpeg.webp"} />
                        </div>
                        <div className="land-grading-content-col">
                            <Header className="land-grading-subheader" as="h3">Site Preparation and Leveling</Header>
                            <p className="land-grading-text">
                                Effective site preparation is crucial for any construction or landscaping project. Our land grading services start with
                                a thorough assessment of the site to determine the necessary modifications. We use advanced equipment and techniques to
                                clear debris, remove vegetation, and level the ground. By establishing a smooth and even surface, we create a solid
                                foundation for building structures, planting, or other intended uses. Our meticulous approach ensures that the site
                                is ready for the next phase of development.
                            </p>
                            <Header className="land-grading-subheader" as="h3">Drainage and Erosion Control</Header>
                            <p className="land-grading-text">
                                Proper drainage is a key aspect of land grading. Without effective water management, properties can suffer from waterlogging,
                                erosion, and structural damage. Our land grading services include creating slopes and contours that facilitate natural water
                                flow away from buildings and other critical areas. We design and implement drainage solutions such as swales, berms, and grading
                                slopes to prevent water accumulation and soil erosion. These measures not only protect your property but also enhance its usability
                                and longevity.
                            </p>
                        </div>
                        <div className="land-grading-content-col">
                            <Header className="land-grading-subheader" as="h3">Foundation Preparation</Header>
                            <p className="land-grading-text">
                                For construction projects, accurate land grading is essential to ensure the stability and durability of the foundation. Uneven or
                                improperly graded land can lead to structural issues and costly repairs down the line. Our experienced team uses precise grading
                                techniques to establish a level base for foundations, driveways, and other structures. By ensuring a uniform surface, we help prevent
                                settling and shifting, providing a reliable platform for construction activities.
                            </p>
                            <Header className="land-grading-subheader" as="h3">Landscape Shaping and Aesthetic Enhancement</Header>
                            <p className="land-grading-text">
                                In landscaping, land grading is used to create visually appealing and functional outdoor spaces. Whether you’re designing a garden, creating
                                terraces, or installing a new lawn, our land grading services can help shape the terrain to achieve your desired aesthetic and practical goals.
                                We contour the land to enhance its natural beauty, improve accessibility, and support healthy plant growth. Our expertise in landscape grading
                                ensures that your outdoor space is both beautiful and sustainable.
                            </p>

                        </div>
                        <div className="land-grading-content-col">
                            <Image className="land-grading-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/land-grading-foundation-prep.jpg"} />
                        </div>
                        <div className="land-grading-content-col">
                            <Image className="land-grading-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/land-grading-solutions.jpg"} />
                        </div>
                        <div className="land-grading-content-col">
                            <Header className="land-grading-subheader" as="h3">Comprehensive Grading Solutions</Header>
                            <p className="land-grading-text">
                                Our land grading services are comprehensive, covering every aspect of the grading process from initial assessment to final execution. We work closely
                                with clients to understand their specific needs and objectives, providing customized solutions that meet their requirements. Our team is equipped with
                                the latest machinery and technology to handle projects of all sizes and complexities, delivering high-quality results with efficiency and precision.
                            </p>
                            <Header className="land-grading-header" as="h1">Why Choose Us?</Header>
                            <List id="land-grading-list">
                                <List.Item className="land-grading-list-item">
                                    <List.Icon className="land-grading-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="land-grading-list-desc">
                                            <b className="land-grading-bold-text">Professional Expertise:</b> Skilled team with extensive experience in land grading.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="land-grading-list-item">
                                    <List.Icon className="land-grading-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="land-grading-list-desc">
                                            <b className="land-grading-bold-text">Advanced Equipment:</b> Use of modern machinery for precise and efficient grading.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="land-grading-list-item">
                                    <List.Icon className="land-grading-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="land-grading-list-desc">
                                            <b className="land-grading-bold-text">Customized Solutions:</b> Tailored grading services to meet specific project needs.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="land-grading-list-item">
                                    <List.Icon className="land-grading-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="land-grading-list-desc">
                                            <b className="land-grading-bold-text">Comprehensive Services:</b> From site preparation and leveling to drainage and erosion control.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item className="land-grading-list-item">
                                    <List.Icon className="land-grading-list-icon" name="check circle" />
                                    <List.Content>
                                        <List.Description className="land-grading-list-desc">
                                            <b className="land-grading-bold-text">Quality Assurance:</b> Commitment to delivering high-quality, durable, and aesthetically pleasing results.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </div>
                    </div>
                    <p className="land-grading-text" id="land-grading-last-line">
                        Transform your property with our expert land grading services. Contact us today to discuss your project and learn how we can help you achieve a perfectly graded site for construction, landscaping, and more.
                    </p>
                    <div id="land-grading-btn-container">
                        <Button className="land-grading-btn" as={Link} to="/gallery">Gallery</Button>
                        <Button className="land-grading-btn" as={Link} to="/quotes">Get A Quote</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandGrading;