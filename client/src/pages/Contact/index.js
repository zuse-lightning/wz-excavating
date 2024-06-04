import React from "react";
import { Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Contact = (props) => {
    return (
        <>
            <div id="contact-container">
                <div id="contact">
                    <div className="contact-col">
                        <Header as="h1">Contact Us</Header>
                        <p>Have a question or need a quote? Contact us today!</p>
                        <p><Icon name="phone" /> (425) 334-4040</p>
                        <p><Icon name="mail" /><a href="mailto:tyler@wzexcavting.com">tyler@wzexcavting.com</a></p>
                    </div>
                    <div className="contact-col">
                        <Header as="h1">Contact Us Online</Header>
                        <div id="contact-form">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-input" id="name-input" name="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-input" id="email-input" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Phone</label>
                                    <input type="text" className="form-input" id="phone-input" name="phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-input" id="message-input" name="message"></textarea>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="contact-col">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.4218473076103!2d-122.10027402264797!3d47.928223265711466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa9a2eaca780d%3A0xd7565576af106584!2s1323%20Ave%20D%20%231129%2C%20Snohomish%2C%20WA%2098290!5e0!3m2!1sen!2sus!4v1717519186719!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Contact;