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
                    <input type="text" className="form-input" id="name-input" name="name" />
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="email-label" htmlFor="email">Email:</label>
                </div>
                <div className="quote-form-col">
                    <input type="email" className="form-input" id="email-input" name="email" />
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="phone-label" htmlFor="email">Phone:</label>
                </div>
                <div className="quote-form-col">
                    <input type="text" className="form-input" id="phone-input" name="phone" />
                </div>
                <div className="quote-form-col">
                    <label className="form-label" id="message-label" htmlFor="message">Message:</label>
                </div>
                <div className="quote-form-col">
                    <textarea className="form-input" id="message-input" name="message"></textarea>
                </div>
                <div className="quote-form-col">
                    <button id="quote-submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default QuoteForm;