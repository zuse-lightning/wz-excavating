import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Certifications = () => {
    return (
        <div id="certifications-container">
            <div id="certifications">
                <div className="cert-col">
                    <Image className="cert-img" src="https://wz-excavating-bucket.s3.amazonaws.com/proxy/cert-proxy.png" />
                </div>
                <div className="cert-col">
                    <Image className="cert-img" src="https://wz-excavating-bucket.s3.amazonaws.com/proxy/cert-proxy.png" />
                </div>
                <div className="cert-col">
                    <Image className="cert-img" src="https://wz-excavating-bucket.s3.amazonaws.com/proxy/cert-proxy.png" />
                </div>
                <div className="cert-col">
                    <Image className="cert-img" src="https://wz-excavating-bucket.s3.amazonaws.com/proxy/cert-proxy.png" />
                </div>
                <div className="cert-col">
                    <Image className="cert-img" src="https://wz-excavating-bucket.s3.amazonaws.com/proxy/cert-proxy.png" />
                </div>
                <div className="cert-col">
                    <Image className="cert-img" src="https://wz-excavating-bucket.s3.amazonaws.com/proxy/cert-proxy.png" />
                </div>
            </div>
        </div>
    );
};

export default Certifications;