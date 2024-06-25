import React, { useState } from "react";
import Slider from "react-slick";
import { Header, Icon } from "semantic-ui-react";
import { testimonials } from "../../assets";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

const Testimonials = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div id="testimonials-container">
            <div id="testimonials-header-container">
                <Header id="testimonials-header" as="h1">Hear From Our Valued Customers</Header>
            </div>
            <div id="testimonials">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-col">
                            <Icon className="testimonial-icon" name="quote left" size="big" />
                            <p className="testimonial-text">
                                {testimonial.review}
                            </p>
                            <p className="testimonial-text">{testimonial.name} - {testimonial.location}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;