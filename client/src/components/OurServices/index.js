import React, { useState, useEffect, useRef } from "react";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { serviceSlidesMobile } from "../../assets";

import "./style.css";

const OurServices = (props) => {

    const { screenWidth } = props;
    

    return (
        <div id="our-services-container">
            <div id="our-services">
                {serviceSlidesMobile.map((service, index) => (
                    <div className="service-col" key={index}>
                        <div className="service-card">
                            <Image className="service-img" fluid src={service} />
                            <Button fluid className="service-btn">Learn More</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;