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
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                        </div>
                        <div className="form-checkbox-option">
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                            <input className="form-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="form-checkbox-label" for="vehicle1"> I have a bike</label>
                        </div>
                    </div>
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="message-label" htmlFor="message">Message:</label>
                </div>
                <div className="quote-form-col">
                    <textarea className="form-input" id="message-input" name="message" required></textarea>
                </div>
                <div className="quote-form-col">
                    <button id="quote-submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default QuoteForm;