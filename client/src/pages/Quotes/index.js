import React from "react";
import { Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import QuoteForm from "../../components/QuoteForm";

import "./style.css";

const Quotes = (props) => {
    return (
        <>
            <div id="quote-container">
                <div id="quote">
                    <div className="quote-col">
                        <Header className="quote-header" id="quote-header1" as="h1">Contact Information</Header>
                        <div id="quote-info">
                            <p><Icon id="phone-icon" name="phone" /> (425) 334-4040</p>
                            <p><Icon id="mail-icon" name="mail" /> <a id="mail-link" href="mailto:tyler@wzexcavting.com">tyler@wzexcavting.com</a></p>
                            <p><Icon id="location-icon" name="map marker alternate" /> 1323 Ave D #1129, Snohomish, WA 98290</p>
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