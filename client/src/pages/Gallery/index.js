import React, { useEffect, useState } from "react";
import { Image, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Lightbox } from "yet-another-react-lightbox";
import { galleryThumbnails } from "../../assets";

import "yet-another-react-lightbox/styles.css";
import "./style.css";


const Gallery = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div id="gallery-container">
                <Header id="gallery-header" as="h1">Gallery</Header>
                <Header id="gallery-subheader" as="h3">Click on an image to view full size</Header>
                <Button onClick={() => setOpen(true)}>Open Lightbox</Button>
                <Lightbox open={open} slides={galleryThumbnails} close={() => setOpen(false)} />
            </div>
        </>
    );
};

export default Gallery;