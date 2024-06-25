import React from "react";
import { Icon, Header } from "semantic-ui-react";
import ContactForm from "../../components/ContactForm";
import SEO from "../../components/SEO";

import "./style.css";

const Contact = (props) => {

    const { location, whichWebsite } = props;
    const contactUrl = whichWebsite(location, "https://www.wzexcavating.com/contact", "https://www.wzexcavatingllc.com/contact");

    return (
        <>
            <SEO 
                title="Contact | WZ Trucking & Excavation"
                description="Please contact us to schedule an appointment or phone call. We are happy to answer any questions you may have about our services. We look forward to hearing from you!"
                keywords="Contact, WZ Trucking & Excavation, Snohomish, WA, Snohomish County, Top Soil, Gravel, Land Grading, Excavation, Drainage Systems & Trenches, Patio, Walks and Retaining Walls, Lawn Care, Site Preparation, Driveways, Landscape Architecture"
                type="website"
                image="https://wz-excavating-bucket.s3.amazonaws.com/screenshots/Contact.png"
                url={contactUrl}
            />
            <div id="contact-container">
                <div id="contact">
                    <div className="contact-col">
                        <Header className="contact-header" id="contact-header1" as="h1">Contact Information</Header>
                        <div id="contact-info">
                            <p><Icon id="phone-icon" name="phone" /> <a id="phone-link" href="tel:+12037388106">(203) 738-8106</a></p>
                            <p><Icon id="mail-icon" name="mail" /> <a id="mail-link" href="mailto:tyler@wzexcavting.com">tyler@wzexcavting.com</a></p>
                            <p><Icon id="location-icon" name="map marker alternate" />17217 157th Ave SE, Snohomish, WA 98290</p>
                        </div>
                    </div>
                    <div className="contact-col">
                        <Header className="contact-header" as="h1">Contact Us Online</Header>
                        <ContactForm />
                    </div>
                    <div className="contact-col">
                        <iframe
                            title="Google Map"
                            id="wz-location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641.100196172911!2d-122.02070020486387!3d47.84020271550439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa776417e2e99%3A0xdc19ec0ec06d56ab!2s17217%20157th%20Ave%20SE%2C%20Snohomish%2C%20WA%2098290!5e0!3m2!1sen!2sus!4v1718908820249!5m2!1sen!2sus"
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