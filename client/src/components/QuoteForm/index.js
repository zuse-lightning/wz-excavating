import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const QuoteForm = (props) => {

    const QUOTE_ENDPOINT = "https://www.formbackend.com/f/9a3b5607d502b76d";
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const quoteForm = document.getElementById("quote-form");
        const formData = new FormData(quoteForm);

        const response = await fetch(QUOTE_ENDPOINT, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            },
            body: formData
        }).then(response => {
            if (!response.ok) {
                throw new Error("Form response was not ok");
            }
            setSubmitted(true);
        }).catch(error => {
            e.target.submit();
        });
    };

    if (submitted) {
        navigate("/");
    }

    return (
        <>
            <form
                action={QUOTE_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST" 
                id="quote-form"
            >
                <div className="quote-form-col">
                    <label className="form-label" id="name-label" htmlFor="name">Name:</label>
                </div>
                <div className="quote-form-col">
                    <input type="text" className="form-input" id="name-input" name="name" required />
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="company-name-label" htmlFor="company-name">Company:</label>
                </div>
                <div className="quote-form-col">
                    <input type="text" className="form-input" id="name-input" name="company-name" />
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="address-label" htmlFor="address">Address:</label>
                </div>
                <div className="quote-form-col">
                    <input type="text" className="form-input" id="address-input" name="address" required />
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="email-label" htmlFor="email">Email:</label>
                </div>
                <div className="quote-form-col">
                    <input type="email" className="form-input" id="email-input" name="email" required />
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="phone-label" htmlFor="phone">Phone:</label>
                </div>
                <div className="quote-form-col">
                    <input type="text" className="form-input" id="phone-input" name="phone" />
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="service-label" htmlFor="service">Service:</label>
                </div>
                <div className="quote-form-col">
                    <div className="form-input checkbox-list">
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="top-soil" value="Top Soil" />
                            <label className="form-checkbox-label" htmlFor="top-soil"> Top Soil</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="gravel" value="Gravel" />
                            <label className="form-checkbox-label" htmlFor="gravel"> Gravel</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="land-grading" value="Land Grading" />
                            <label className="form-checkbox-label" htmlFor="land-grading"> Land Grading</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="excavation" value="Excavation" />
                            <label className="form-checkbox-label" htmlFor="excavation"> Excavation</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="drainage" value="Drainage Systems & Trenches" />
                            <label className="form-checkbox-label" htmlFor="drainage"> Drainage Systems & Trenches</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="patios" value="Patios, Walks & Retaining Walls" />
                            <label className="form-checkbox-label" htmlFor="patios"> Patios, Walks & Retaining Walls</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="lawn-care" value="Lawn Care" />
                            <label className="form-checkbox-label" htmlFor="lawn-care"> Lawn Care</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="site-prep" value="Site Prep" />
                            <label className="form-checkbox-label" htmlFor="site-prep"> Site Prep</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="driveways" value="Driveways" />
                            <label className="form-checkbox-label" htmlFor="driveways"> Driveways</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="landscape" value="Landscape Architecture" />
                            <label className="form-checkbox-label" htmlFor="landscape"> Architecture</label>
                        </div>
                    </div>
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="message-label" htmlFor="message">Project:</label>
                </div>
                <div className="quote-form-col">
                    <textarea className="form-input" id="message-input" name="message" required></textarea>
                </div>
                <div className="quote-form-col">
                    <button id="quote-submit-btn" type="submit">Submit</button>
                </div>
                <div style={{ textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute" }} aria-hidden="true">
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>
            </form>
        </>
    );
}

export default QuoteForm;