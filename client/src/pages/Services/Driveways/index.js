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
                <Header className="driveways-header" as="h1">Driveways</Header>
                <Header className="driveways-subheader" as="h3">Lawn Maintenance</Header>
                <p className="driveways-text">
                    A well-maintained lawn is the cornerstone of a beautiful landscape, enhancing
                    the aesthetic appeal and value of your property. Our lawn maintenance services
                    are designed to keep your lawn healthy, lush, and vibrant year-round. These
                    services include routine mowing, trimming, edging, and debris removal to ensure
                    a neat and manicured appearance. We use professional-grade equipment and techniques
                    to provide precise and efficient care, tailored to the specific needs of your lawn
                    and its growth patterns.
                </p>
                <div id="driveways-content-container">
                    <div className="driveways-content-col">
                        <Image className="driveways-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/lawn-maintenance.jpg"} />
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" id="driveways-key-components" as="h3">Key Services:</Header>
                        <List bulleted className="driveways-list">
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Mowing:</b> Regular mowing is essential to keep the grass at an optimal height, promoting healthy growth and a uniform look. Our team ensures that your lawn is mowed with precision, avoiding scalping and uneven patches.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Trimming and Edging:</b> Trimming around borders, flower beds, and trees, along with crisp edging along walkways and driveways, gives your lawn a polished finish and prevents overgrowth.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Debris Removal:</b> Removing leaves, twigs, and other debris maintains the lawn’s health and appearance by preventing the buildup of thatch and promoting better airflow and sunlight penetration.
                            </List.Item>
                        </List>
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" as="h3">Lawn Health Care</Header>
                        <p className="driveways-text">
                            Healthy lawns are more than just a matter of aesthetics; they play a crucial role 
                            in reducing soil erosion, filtering rainwater, and improving air quality. Our lawn 
                            health care services focus on maintaining the vitality and resilience of your grass 
                            through fertilization, weed control, aeration, and pest management. These services 
                            are customized to address the specific conditions of your lawn, ensuring it thrives 
                            in its environment.
                        </p>
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" id="driveways-trench-steps" as="h3">Key Services:</Header>
                        <List bulleted className="driveways-list">
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Fertilization:</b> We apply high-quality, balanced fertilizers to provide essential nutrients, promoting strong root development and vibrant green growth. Our approach is tailored to the specific nutrient needs of your lawn, ensuring it receives the right balance of nitrogen, phosphorus, and potassium.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Weed Control:</b> Effective weed control prevents unwanted plants from competing with your grass for nutrients and water. We use selective herbicides that target weeds without harming your lawn, keeping it healthy and free of invasive species.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Aeration:</b> Aeration involves perforating the soil to alleviate compaction and improve the movement of air, water, and nutrients to the roots. This process enhances the lawn’s ability to absorb essential resources and promotes deeper root growth.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Pest Management:</b> We identify and treat common lawn pests such as grubs, chinch bugs, and armyworms, preventing damage to your grass and maintaining its overall health.
                            </List.Item>
                        </List>
                    </div>
                    <div className="driveways-content-col">
                        <Image className="driveways-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/weed-control.jpg"} />
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" as="h3">Seasonal Services</Header>
                        <p className="driveways-text">
                            Seasonal changes can have a significant impact on your lawn’s health and appearance. Our 
                            seasonal lawn care services are designed to address the unique challenges posed by each 
                            season, ensuring your lawn remains robust and attractive throughout the year. From spring 
                            rejuvenation to winter preparation, our services are tailored to meet the needs of your 
                            lawn during each stage of the annual growth cycle.
                        </p>
                    </div>
                    <div className="driveways-content-col">
                        <Image className="driveways-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/seasonal-services.jpg"} />
                    </div>
                    <div className="driveways-content-col">
                        <Header className="driveways-subheader" id="driveways-trench-steps" as="h3">Key Services:</Header>
                        <List bulleted className="driveways-list">
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Spring Services:</b> Spring is the time to rejuvenate your lawn after the winter months. Our services include dethatching to remove dead grass and debris, reseeding to fill in bare spots, and applying pre-emergent herbicides to prevent weed growth.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Summer Services:</b> Summer heat can stress your lawn, making regular watering, pest control, and mowing at the right height critical for maintaining its health. We offer irrigation audits to ensure efficient water use and provide treatments to manage heat-related stress.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Fall Services:</b> Fall is the ideal time for aeration, overseeding, and fertilization to prepare your lawn for winter. These treatments help to strengthen the grass and ensure it recovers quickly in the spring.
                            </List.Item>
                            <List.Item className="driveways-list-item">
                                <b className="driveways-bold-text">Winter Services:</b> Preparing your lawn for the winter involves applying winterizing fertilizers and addressing any lingering issues. Our winter services also include leaf removal and setting your lawn up for a healthy start in the coming spring.
                            </List.Item>
                        </List>
                    </div>
                </div>
                <p className="driveways-text" id="driveways-last-line">
                    For a lush, healthy lawn that enhances the beauty and value of your property, our comprehensive lawn 
                    care services provide tailored solutions to meet your needs. Contact us today to keep your lawn thriving 
                    year-round!
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