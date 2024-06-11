import React, { useState } from "react";
import { Modal, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { galleryThumbnails } from "../../assets";

import "./style.css";


const Gallery = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div id="gallery-container">
                <Header id="gallery-header" as="h1">Gallery</Header>
                <Header id="gallery-subheader" as="h3">Click on an image to view full size</Header>
                <div id="gallery">
                    {galleryThumbnails.map((image, index) => (
                        <div className="gallery-col">
                            <Modal
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                open={open}
                                triggerRef={<Image src={image} />}
                            >
                                <Modal.Content>
                                    <Image src={image} />
                                </Modal.Content>
                            </Modal>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;