import React, { useState, useEffect, useRef } from "react";
import { Image } from "semantic-ui-react";
import { serviceSlides, serviceSlidesMobile } from "../../assets";

import "./style.css";

const HomeSlideShow = (props) => {

    const { screenWidth } = props;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    let banners;
    if (screenWidth >= 992) {
        banners = serviceSlides;
    } else {
        banners = serviceSlidesMobile;
    };

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        };
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => prevIndex === banners.length - 1 ? 0 : prevIndex + 1)
        }, 5000);
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="home-slideshow">
            <div
                className="home-slideshow-slider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {banners.map((banner, index) => (
                    <div className="home-slide" key={index}>
                        <Image draggable="false" fluid src={banner} />
                    </div>
                ))}
            </div>
            <div className="home-slideshow-dots">
                {banners.map((_, idx) => (
                    <div
                        key={idx}
                        className={`home-slideshow-dot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    >
                    </div>
                ))}
            </div>
        </div>
    );

};

export default HomeSlideShow;