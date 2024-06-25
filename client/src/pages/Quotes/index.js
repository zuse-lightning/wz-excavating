import React from "react";
import { Header, List } from "semantic-ui-react";
import QuoteForm from "../../components/QuoteForm";
import SEO from "../../components/SEO";

import "./style.css";

const Quotes = (props) => {

    const { location, whichWebsite } = props;
    const quoteUrl = whichWebsite(location, "https://www.wzexcavating.com/quotes", "https://www.wzexcavatingllc.com/quotes");

    return (
        <>
            <SEO 
                title="Quotes | WZ Trucking & Excavation"
                description="Get a free quote on any of our listed services, and feel free to mix and match based on your particular needs. We are more than happy to accomodate in order to give you the best possible service."
                keywords="Quotes, WZ Trucking & Excavation, Snohomish, WA, Snohomish County, Top Soil, Gravel, Land Grading, Excavation, Drainage Systems & Trenches, Patio, Walks and Retaining Walls, Lawn Care, Site Preparation, Driveways, Landscape Architecture"
                type="website"
                image="https://wz-excavating-bucket.s3.amazonaws.com/screenshots/Quote.png"
                url={quoteUrl}
            />
            <div id="quote-container">
                <div id="quote">
                    <div className="quote-col">
                        <div id="quote-info">
                            <p className="quote-text">
                                Get a free quote on any of our listed services, and feel free to mix and match based on your particular needs.
                                We are more than happy to accomodate in order to give you the best possible service.
                            </p>
                            <br />
                            <p className="quote-text">
                                If you have any questions or concerns, please feel free to reach out to us at <a id="phone-link" href="tel:+12037388106">(203) 738-8106</a> or fill out the
                                quote form on this page.
                            </p>
                            <br />
                            <p className="quote-text">
                                Some of our most popular services include:
                            </p>
                            <List bulleted id="quote-list">
                                <List.Item>Top Soil</List.Item>
                                <List.Item>Gravel</List.Item>
                                <List.Item>Land Grading</List.Item>
                                <List.Item>Excavation</List.Item>
                                <List.Item>Patios, Walks & Retaining Walls</List.Item>
                            </List>
                        </div>
                    </div>
                    <div className="quote-col">
                        <Header className="quote-header" as="h1">Get A Free Quote Today!</Header>
                        <QuoteForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quotes;