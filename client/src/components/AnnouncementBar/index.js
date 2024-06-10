import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const AnnouncementBar = () => {
    return (
        <div id="announcement-container">
            <div className="announce-col">
                <Header id="announce-address" as="h4">Can <i>you</i> dig it? Cause WE can!</Header>
            </div>
            <div className="announce-col">
                <Header id="announce-phone-number" as="h4">203-738-8106</Header>
            </div>
        </div>
    );
};

export default AnnouncementBar;