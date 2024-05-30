import React from "react";
import { Header, Icon } from "semantic-ui-react";

import "./style.css";

const Testimonials = () => {
    return (
        <div id="testimonials-container">
            <Header as="h1">Hear From Our Valued Customers</Header>
            <div id="testimonials">
                <div className="testimonial-col">
                    <Icon name="quote left" size="big" />
                    <p>Thank you for the amazing service! I was able to find the perfect gift for my friend's birthday.</p>
                    <p>- John Doe</p>
                </div>
                <div className="testimonial-col">
                    <Icon name="quote left" size="big" />
                    <p>My husband and I love the products that we purchased. We will definitely be back!</p>
                    <p>- Jane Doe</p>
                </div>
                <div className="testimonial-col">
                    <Icon name="quote left" size="big" />
                    <p>Their excavating service was straight-up GANGSTA, brother! They didn't even mind that I spent the whole survey passed out on my lounger from eating a wheel barrow full of chicken wings!</p>
                    <p>- Guy Fieri</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;