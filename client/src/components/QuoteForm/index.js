import React from "react";

import "./style.css";

const QuoteForm = (props) => {

    return (
        <>
            <form id="quote-form">
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
                            <label className="form-checkbox-label" for="top-soil"> Top Soil</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="gravel" value="Gravel" />
                            <label className="form-checkbox-label" for="gravel"> Gravel</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="land-grading" value="Land Grading" />
                            <label className="form-checkbox-label" for="land-grading"> Land Grading</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="excavation" value="Excavation" />
                            <label className="form-checkbox-label" for="excavation"> Excavation</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="drainage" value="Drainage Systems & Trenches" />
                            <label className="form-checkbox-label" for="drainage"> Drainage Systems & Trenches</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="patios" value="Patios, Walks & Retaining Walls" />
                            <label className="form-checkbox-label" for="patios"> Patios, Walks & Retaining Walls</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="lawn-care" value="Lawn Care" />
                            <label className="form-checkbox-label" for="lawn-care"> Lawn Care</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="site-prep" value="Site Prep" />
                            <label className="form-checkbox-label" for="site-prep"> Site Prep</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="driveways" value="Driveways" />
                            <label className="form-checkbox-label" for="driveways"> Driveways</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" name="landscape" value="Landscape Architecture" />
                            <label className="form-checkbox-label" for="landscape"> Architecture</label>
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
                    <button id="quote-submit-btn" type="submit" disabled>Submit</button>
                </div>
            </form>
        </>
    );
}

export default QuoteForm;