import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { testimonials } from "../../assets";

import "./style.css";

const Testimonials = () => {
    return (
        <div id="testimonials-container">
            <div id="testimonials-header-container">
                <Header id="testimonials-header" as="h1">Hear From Our Valued Customers</Header>
            </div>
            <div id="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-col">
                        <Icon className="testimonial-icon" name="quote left" size="big" />
                        <p className="testimonial-text">
                            {testimonial.review}
                        </p>
                        <p className="testimonial-text">{testimonial.name} - {testimonial.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;