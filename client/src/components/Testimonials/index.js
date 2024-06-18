import React from "react";
import { Header, Icon } from "semantic-ui-react";

import "./style.css";

const Testimonials = () => {
    return (
        <div id="testimonials-container">
            <div id="testimonials-header-container">
                <Header id="testimonials-header" as="h1">Hear From Our Valued Customers</Header>
            </div>
            <div id="testimonials">
                <div className="testimonial-col">
                    <Icon className="testimonial-icon" name="quote left" size="big" />
                    <p className="testimonial-text">
                        WZ Trucking & Excavation completely transformed our backyard with a beautiful patio and walkways. 
                        The team was incredibly professional, efficient, and detail-oriented. They worked closely with us to 
                        understand our vision and delivered results that exceeded our expectations. Our outdoor space is now the 
                        envy of the neighborhood! We highly recommend WZ for any landscaping project.
                    </p>
                    <p className="testimonial-text">Sarah T. - Snohomish, WA</p>
                </div>
                <div className="testimonial-col">
                    <Icon className="testimonial-icon" name="quote left" size="big" />
                    <p className="testimonial-text">
                        We hired WZ Trucking & Excavation to handle the site preparation for our new commercial building, and they 
                        did an outstanding job. From grading to drainage systems, their expertise was evident in every phase of the project. 
                        They completed the work on time and within budget, and the quality was top-notch. Their attention to detail and commitment 
                        to excellence make them a trusted partner for any construction needs.
                    </p>
                    <p className="testimonial-text">Mark R. - Everett, WA</p>
                </div>
                <div className="testimonial-col">
                    <Icon className="testimonial-icon" name="quote left" size="big" />
                    <p className="testimonial-text">
                        WZ Trucking & Excavation did an amazing job on our driveway and retaining walls. The team was friendly, professional, and clearly 
                        passionate about their work. They provided great suggestions that improved the functionality and look of our property. The project 
                        was completed efficiently, and the results are stunning. We couldn’t be happier with their services and would definitely work with 
                        them again in the future.
                    </p>
                    <p className="testimonial-text">Lisa M. - Lake Stevens, WA</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;