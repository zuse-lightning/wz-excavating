import React from "react";
import { Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const ContactForm = (props) => {

    return (
        <>
            <form id="contact-form">
                <div className="contact-form-col">
                    <label className="form-label" id="name-label" htmlFor="name">Name:</label>
                </div>
                <div className="contact-form-col">
                    <input type="text" className="form-input" id="name-input" name="name" />
                </div>
                <div className="contact-form-col">
                    <label className="form-label" id="email-label" htmlFor="email">Email:</label>
                </div>
                <div className="contact-form-col">
                    <input type="email" className="form-input" id="email-input" name="email" />
                </div>
                <div className="contact-form-col">
                    <label className="form-label" id="phone-label" htmlFor="email">Phone:</label>
                </div>
                <div className="contact-form-col">
                    <input type="text" className="form-input" id="phone-input" name="phone" />
                </div>
                <div className="contact-form-col">
                    <label className="form-label" id="message-label" htmlFor="message">Message:</label>
                </div>
                <div className="contact-form-col">
                    <textarea className="form-input" id="message-input" name="message"></textarea>
                </div>
                <div className="contact-form-col">
                    <button id="contact-submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;