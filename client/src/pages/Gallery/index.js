import React, { useEffect, useState } from "react";
import { Image, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { PhotoAlbum } from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import { Fullscreen } from "yet-another-react-lightbox/plugins";
import { galleryThumbnails } from "../../assets";

import "./style.css";
import "yet-another-react-lightbox/styles.css";

const Gallery = (props) => {

    const [index, setIndex] = useState(-1);

    return (
        <>
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