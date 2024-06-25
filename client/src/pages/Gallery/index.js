import React, { useState } from "react";
import { Header } from "semantic-ui-react";
import { PhotoAlbum } from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import { Fullscreen } from "yet-another-react-lightbox/plugins";
import { galleryThumbnails } from "../../assets";
import SEO from "../../components/SEO";

import "./style.css";
import "yet-another-react-lightbox/styles.css";

const Gallery = (props) => {

    const { location, whichWebsite } = props;
    const [index, setIndex] = useState(-1);
    const galleryUrl = whichWebsite(location, "https://www.wzexcavating.com/gallery", "https://www.wzexcavatingllc.com/gallery");

    return (
        <>
            <SEO 
                title="Gallery | WZ Trucking & Excavation"
                description="WZ Excavating is a family-owned and operated business located in Snohomish County. We have been serving the area for over 20 years. We specialize in residential and commercial excavation, septic system installation, and site work. Our team is dedicated to providing the highest quality service and customer satisfaction."
                keywords="Gallery, WZ Trucking & Excavation, Snohomish, WA, Snohomish County, Top Soil, Gravel, Land Grading, Excavation, Drainage Systems & Trenches, Patio, Walks and Retaining Walls, Lawn Care, Site Preparation, Driveways, Landscape Architecture"
                type="website"
                image="https://wz-excavating-bucket.s3.amazonaws.com/screenshots/Gallery.png"
                url={galleryUrl}
            />
            <div id="gallery-container">
                <Header id="gallery-header" as="h1">Gallery</Header>
                <Header id="gallery-subheader" as="h3">Click on an image to view full size</Header>
                <PhotoAlbum
                    layout="masonry"
                    photos={galleryThumbnails}
                    targetRowHeight={400}
                    onClick={({ index: current }) => setIndex(current)}
                />
                <Lightbox
                    plugins={[Fullscreen]}
                    index={index}
                    open={index >= 0}
                    slides={galleryThumbnails}
                    close={() => setIndex(-1)}
                />
            </div>
        </>
    );
};

export default Gallery;