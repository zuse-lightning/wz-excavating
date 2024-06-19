import React from "react";
import { Button, Header, Image, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Landscape = (props) => {
    return (
        <>
            <div id="landscape-container">
                <Image id="landscape-banner" src={"https://wz-excavating-bucket.s3.amazonaws.com/banners/desktop/landscape.png"} fluid />
                <div id="site-prep">
                    <Header className="landscape-subheader" as="h3">Landscape Planning and Design</Header>
                    <p className="landscape-text">
                        Landscape architecture is a multidisciplinary field that combines art and science to create functional, 
                        aesthetically pleasing, and sustainable outdoor spaces. Our landscape planning and design services provide 
                        comprehensive solutions that transform ordinary environments into beautiful, innovative landscapes that 
                        enhance the quality of life and respect the natural environment. We work with both private and public 
                        sector clients to design spaces that are not only visually stunning but also functional and environmentally 
                        responsible.
                    </p>
                    <div id="landscape-content-container">
                        <div className="landscape-content-col">
                            <Header className="landscape-subheader" as="h3">Key Services:</Header>
                            <List bulleted className="landscape-list">
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Site Analysis and Planning:</b> Our landscape architects conduct thorough site assessments to understand the unique characteristics of your property, including topography, soil conditions, climate, and existing vegetation. This analysis forms the foundation for creating a design that maximizes the site's potential while addressing any challenges or constraints.
                                </List.Item>
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Custom Design Solutions:</b> We develop detailed design plans that integrate natural elements with built structures, creating harmonious and sustainable landscapes. Our designs include features such as gardens, water features, recreational areas, and green infrastructure, tailored to the specific needs and desires of our clients.
                                </List.Item>
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Sustainable Practices:</b> We prioritize sustainable design practices that promote ecological balance and resource conservation. This includes the use of native plants, rainwater harvesting systems, and permeable surfaces that reduce runoff and enhance groundwater recharge.
                                </List.Item>
                            </List>
                        </div>
                        <div className="landscape-content-col">
                            <Image className="landscape-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/landscape-planning.jpg"} />
                        </div>
                        <div className="landscape-content-col">
                            <Header className="landscape-subheader" as="h3">Urban and Public Spaces</Header>
                            <p className="landscape-text">
                                Landscape architecture plays a crucial role in the planning and development of urban and public spaces, 
                                creating environments that promote social interaction, well-being, and environmental stewardship. Our 
                                urban and public space design services focus on enhancing the functionality, accessibility, and beauty 
                                of parks, plazas, streetscapes, and other public areas, fostering a sense of community and improving the 
                                quality of life for residents and visitors.
                            </p>
                        </div>
                        <div className="landscape-content-col">
                            <Image className="landscape-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/parks-and-rec.jpg"} />
                        </div>
                        <div className="landscape-content-col">
                            <Header className="landscape-subheader" as="h3">Key Services:</Header>
                            <List bulleted className="landscape-list">
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Park and Recreation Design:</b> We design parks and recreational facilities that provide opportunities for leisure, sports, and community gatherings. Our designs incorporate a variety of elements such as playgrounds, sports fields, walking trails, and picnic areas, creating inviting spaces that cater to diverse user needs.
                                </List.Item>
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Streetscape and Placemaking:</b> Our streetscape designs aim to improve the aesthetic and functional quality of urban streets, enhancing pedestrian and vehicular experiences. We focus on elements such as street furniture, lighting, landscaping, and public art to create vibrant, attractive streetscapes that encourage active transportation and social interaction.
                                </List.Item>
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Sustainable Urban Development:</b> We integrate green infrastructure and sustainable design principles into urban planning to address challenges such as stormwater management, heat island effect, and biodiversity loss. This includes designing green roofs, urban forests, and rain gardens that contribute to a healthier, more resilient urban environment.
                                </List.Item>
                            </List>
                        </div>
                        <div className="landscape-content-col">
                            <Header className="landscape-subheader" as="h3">Residential Landscape Architecture</Header>
                            <p className="landscape-text">
                                Creating a beautiful and functional outdoor space for your home enhances your quality of life and increases the 
                                value of your property. Our residential landscape architecture services offer personalized design solutions that 
                                reflect your lifestyle, aesthetic preferences, and the unique characteristics of your property. We work closely 
                                with homeowners to create outdoor spaces that provide comfort, privacy, and beauty.
                            </p>
                        </div>
                        <div className="landscape-content-col">
                            <Header className="landscape-subheader" as="h3">Key Services:</Header>
                            <List bulleted className="landscape-list">
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Personalized Design:</b> We collaborate with homeowners to design landscapes that meet their specific needs and desires, from creating serene garden retreats to developing outdoor entertainment areas. Our designs incorporate elements such as patios, decks, water features, and lighting to create cohesive and inviting spaces.
                                </List.Item>
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Ecological Landscaping:</b> We focus on sustainable landscaping practices that promote biodiversity and reduce environmental impact. This includes the use of native plants, organic gardening methods, and water-efficient irrigation systems that create healthy, low-maintenance landscapes.
                                </List.Item>
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Functional and Aesthetic Integration:</b> Our designs seamlessly integrate with the architectural style of your home and the natural surroundings, enhancing the overall aesthetic appeal and functionality of your property. We consider factors such as views, sunlight, and wind patterns to create outdoor spaces that are comfortable and enjoyable throughout the year.
                                </List.Item>
                            </List>
                        </div>
                        <div className="landscape-content-col">
                            <Image className="landscape-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/ecological-landscaping.webp"} />
                        </div>
                        <div className="landscape-content-col">
                            <Header className="landscape-subheader" as="h3">Environmental and Restoration Projects</Header>
                            <p className="landscape-text">
                                Landscape architecture is integral to environmental conservation and restoration efforts, helping to restore natural 
                                habitats, protect water quality, and enhance ecosystem resilience. Our environmental and restoration services focus 
                                on the rehabilitation and enhancement of degraded landscapes, ensuring the preservation and restoration of natural 
                                systems for future generations.
                            </p>
                        </div>
                        <div className="landscape-content-col">
                            <Image className="landscape-content-img" size="massive" src={"https://wz-excavating-bucket.s3.amazonaws.com/services/habitat-restoration.jpg"} />
                        </div>
                        <div className="landscape-content-col">
                            <Header className="landscape-subheader" as="h3">Key Services:</Header>
                            <List bulleted className="landscape-list">
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Habitat Restoration:</b> We design and implement projects that restore native habitats and biodiversity, such as wetland restoration, reforestation, and riverbank stabilization. Our work helps to reestablish ecological functions and create habitats that support wildlife and plant species.
                                </List.Item>
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Water Resource Management:</b> We provide solutions for managing water resources sustainably, including stormwater management, erosion control, and watershed restoration. Our designs incorporate natural systems such as wetlands, riparian buffers, and rain gardens to improve water quality and reduce flooding risks.
                                </List.Item>
                                <List.Item className="landscape-list-item">
                                    <b className="landscape-bold-text">Environmental Impact Assessments:</b> We conduct comprehensive assessments to evaluate the potential impacts of development projects on the natural environment. Our recommendations help to minimize adverse effects and ensure compliance with environmental regulations, supporting sustainable development practices.
                                </List.Item>
                            </List>
                        </div>
                    </div>
                    <p className="landscape-text" id="landscape-last-line">
                        Our comprehensive site preparation services ensure that your project starts with a solid and stable foundation,
                        ready for successful construction. Contact us today to discuss your site preparation needs and get your project
                        off to the best possible start!
                    </p>
                    <div id="landscape-btn-container">
                        <Button className="landscape-btn" as={Link} to="/gallery">Gallery</Button>
                        <Button className="landscape-btn" as={Link} to="/quotes">Get A Quote</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landscape;