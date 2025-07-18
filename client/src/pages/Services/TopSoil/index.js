import React from "react";
import { Image, Header, Button, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";

import "./style.css";

const TopSoil = (props) => {

    const { screenWidth, location, whichWebsite } = props;
    let desktopBanner = "https://wz-excavating-bucket.s3.amazonaws.com/banners/desktop/top-soil.png";
    let mobileBanner = "https://wz-excavating-bucket.s3.amazonaws.com/banners/mobile/top-soil-mobile.png";
    const topSoilUrl = whichWebsite(location, "https://www.wzexcavating.com/services/top-soil", "https://www.wzexcavatingllc.com/services/top-soil");

    return (
        <>
            <SEO 
                title="Top Soil | WZ Trucking & Excavation"
                description="Maximize the health and productivity of your soil with our comprehensive topsoil services. We offer expert solutions tailored to agriculture, landscaping, construction, and environmental conservation."
                keywords="Top Soil, Soil Testing, Soil Analysis, Soil Conditioning, Soil Amendment, Erosion Control, Land Grading, Leveling, Topsoil Supply, WZ Trucking & Excavation, Snohomish, WA, Snohomish County"
                type="website"
                image="https://wz-excavating-bucket.s3.amazonaws.com/screenshots/Top+Soil.png"
                url={topSoilUrl}
            />
            <div id="top-soil-container">
                <Image id="top-soil-banner" src={screenWidth >= 992 ? desktopBanner : mobileBanner} fluid />
                <div id="top-soil">
                    <p className="top-soil-text">
                        Maximize the health and productivity of your soil with our comprehensive topsoil services.
                        We offer expert solutions tailored to agriculture, landscaping, construction, and environmental conservation.
                    </p>
                    <Image className="top-soil-img first" fluid src={"https://wz-excavating-bucket.s3.amazonaws.com/services/soil-testing.jpg"} />
                    <Header className="top-soil-subheader" as="h3">Soil Testing and Analysis</Header>
                    <p className="top-soil-text">
                        Understand your soil’s needs with our detailed soil testing. We assess nutrient content, pH levels, and organic
                        matter to provide customized recommendations for fertilizers and soil amendments.
                    </p>
                    <Header className="top-soil-subheader" as="h3">Soil Conditioning and Amendment</Header>
                    <p className="top-soil-text">
                        Enhance your soil’s fertility and structure with our soil conditioning services. We add organic matter, compost,
                        and soil conditioners to improve water retention, aeration, and overall soil health.
                    </p>
                    <Header className="top-soil-subheader" as="h3">Erosion Control</Header>
                    <p className="top-soil-text">
                        Protect your land from erosion with our effective solutions. Our services include mulching, terracing, and cover
                        crops to maintain soil integrity and prevent nutrient loss.
                    </p> 
                    <Image className="top-soil-img second" fluid src={"https://wz-excavating-bucket.s3.amazonaws.com/services/erosion-control.jpg"} />
                    <Header className="top-soil-subheader" as="h3">Land Grading and Leveling</Header>
                    <p className="top-soil-text">
                        Ensure proper water drainage and create level surfaces for planting with our professional grading and leveling services.
                        Ideal for both construction and landscaping projects.
                    </p>
                    <Header className="top-soil-subheader" as="h3">Quality Topsoil Supply</Header>
                    <p className="top-soil-text">
                        We provide screened, nutrient-rich topsoil for gardens, lawns, and construction sites. Perfect for filling low spots,
                        creating garden beds, or ensuring a fertile layer for planting.
                    </p>
                    <Header className="top-soil-header" as="h1">Why Choose Us?</Header>
                    <List id="top-soil-list">
                        <List.Item className="top-soil-list-item">
                            <List.Icon className="top-soil-list-icon" name="check circle" />
                            <List.Content>
                                <List.Description className="top-soil-list-desc">
                                    <b className="top-soil-bold-text">Expert Soil Analysis:</b> Tailored recommendations for optimal soil health.
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item className="top-soil-list-item">
                            <List.Icon className="top-soil-list-icon" name="check circle" />
                            <List.Content>
                                <List.Description className="top-soil-list-desc">
                                    <b className="top-soil-bold-text">Enhanced Fertility:</b> Improved soil structure and water retention.
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item className="top-soil-list-item">
                            <List.Icon className="top-soil-list-icon" name="check circle" />
                            <List.Content>
                                <List.Description className="top-soil-list-desc">
                                    <b className="top-soil-bold-text">Erosion Prevention:</b> Effective techniques to maintain soil integrity.
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item className="top-soil-list-item">
                            <List.Icon className="top-soil-list-icon" name="check circle" />
                            <List.Content>
                                <List.Description className="top-soil-list-desc">
                                    <b className="top-soil-bold-text">Professional Grading:</b> Perfect surfaces for planting and construction.
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item className="top-soil-list-item">
                            <List.Icon className="top-soil-list-icon" name="check circle" />
                            <List.Content>
                                <List.Description className="top-soil-list-desc">
                                    <b className="top-soil-bold-text">High-Quality Topsoil:</b> Nutrient-rich and ready for use.
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                    <p className="top-soil-text" id="top-soil-last-line">
                        Boost your soil’s potential with our topsoil services. Contact us today to learn more and schedule a consultation!
                    </p>
                    <div id="top-soil-btn-container">
                        <Button className="top-soil-btn" as={Link} to="/gallery">Gallery</Button>
                        <Button className="top-soil-btn" as={Link} to="/quotes">Get A Quote</Button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TopSoil;