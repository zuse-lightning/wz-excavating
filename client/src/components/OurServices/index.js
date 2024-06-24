import React from "react";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { serviceSlidesMobile } from "../../assets";

import "./style.css";

const OurServices = (props) => {
    
    const services = [
        { img: serviceSlidesMobile[0], path: "/services/top-soil" },
        { img: serviceSlidesMobile[1], path: "/services/gravel" },
        { img: serviceSlidesMobile[2], path: "/services/land-grading" },
        { img: serviceSlidesMobile[3], path: "/services/excavation" },
        { img: serviceSlidesMobile[4], path: "/services/drainage" },
        { img: serviceSlidesMobile[5], path: "/services/patios" },
        { img: serviceSlidesMobile[6], path: "/services/lawn-care" },
        { img: serviceSlidesMobile[7], path: "/services/site-prep" },
        { img: serviceSlidesMobile[8], path: "/services/driveways" },
        { img: serviceSlidesMobile[9], path: "/services/landscape" }
    ];

    return (
        <div id="our-services-container">
            <div id="our-services">
                {services.map((service, index) => (
                    <div className="service-col" key={index}>
                        <div className="service-card">
                            <Image className="service-img" fluid src={service.img} />
                            <Button as={Link} to={service.path} fluid className="service-btn">Learn More</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;