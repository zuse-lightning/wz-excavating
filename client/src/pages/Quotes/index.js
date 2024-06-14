import React from "react";
import { Header, List } from "semantic-ui-react";
import QuoteForm from "../../components/QuoteForm";

import "./style.css";

const Quotes = (props) => {
    return (
        <>
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