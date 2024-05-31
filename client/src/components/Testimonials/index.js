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
                    <p className="testimonial-text">Thank you for the amazing service! I was able to find the perfect gift for my friend's birthday.</p>
                    <p className="testimonial-text">- John Doe</p>
                </div>
                <div className="testimonial-col">
                    <Icon className="testimonial-icon" name="quote left" size="big" />
                    <p className="testimonial-text">My husband and I love the products that we purchased. We will definitely be back!</p>
                    <p className="testimonial-text">- Jane Doe</p>
                </div>
                <div className="testimonial-col">
                    <Icon className="testimonial-icon" name="quote left" size="big" />
                    <p className="testimonial-text">Their excavating service was straight-up GANGSTA, brother! They didn't even mind that I spent the whole survey passed out on my lounger from eating a wheel barrow full of chicken wings!</p>
                    <p className="testimonial-text">- Guy Fieri</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;