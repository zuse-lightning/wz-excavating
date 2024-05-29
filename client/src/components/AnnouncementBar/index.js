import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const AnnouncementBar = () => {
    return (
        <div id="announcement-container">
            <div className="announce-col">
                <Header id="announce-phone-number" as="h4"><Icon id="announce-phone-icon" name="phone" />Call: 203-738-8106</Header>
            </div>
            <div className="announce-col">
                <Header id="announce-address" as="h4"><Icon id="announce-map-icon" name="map pin" />1323 Ave D Unit 1129, Snohomish, WA, 98291</Header>
            </div>
        </div>
    );
};

export default AnnouncementBar;