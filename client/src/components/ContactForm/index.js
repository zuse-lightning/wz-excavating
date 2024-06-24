import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./style.css";

const ContactForm = (props) => {
    
    const CONTACT_ENDPOINT = "https://www.formbackend.com/f/462653898b84bbd0";
    const [submitted, setSubmitted] = useState(false);
    const { register } = useForm();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const contactForm = document.getElementById("contact-form");       
        const formData = new FormData(contactForm);

        const response = await fetch(CONTACT_ENDPOINT, {
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
                action={CONTACT_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST" 
                id="contact-form"
            >
                <div className="contact-form-col">
                    <label className="form-label" id="name-label" htmlFor="name">Name:</label>
                </div>
                <div className="contact-form-col">
                    <input type="text" className="form-input" id="name-input" name="name" required />
                </div>
                <div className="contact-form-col">
                    <label className="form-label" id="email-label" htmlFor="email">Email:</label>
                </div>
                <div className="contact-form-col">
                    <input type="email" className="form-input" id="email-input" name="email" required />
                </div>
                <div className="contact-form-col">
                    <label className="form-label" id="phone-label" htmlFor="phone">Phone:</label>
                </div>
                <div className="contact-form-col">
                    <input type="text" className="form-input" id="phone-input" name="phone" />
                </div>
                <div className="contact-form-col">
                    <label className="form-label" id="message-label" htmlFor="message">Message:</label>
                </div>
                <div className="contact-form-col">
                    <textarea className="form-input" id="message-input" name="message" required></textarea>
                </div>
                <div className="contact-form-col">
                    <button id="contact-submit-btn" type="submit">Submit</button>
                </div>
                <div style={{ textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute" }} aria-hidden="true">
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>
            </form>
        </>
    );
}

export default ContactForm;