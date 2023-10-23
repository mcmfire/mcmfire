import React from "react";
import "./options.scss";

const Options = () => {
    return (
        <nav className="options">
            <ul>
                <li>
                    <a href="#" className="section-link" title="Profile" role="navigation">PROFILE</a>
                </li>
                <li>
                    <a href="#" className="section-link" title="Services" role="navigation">SERVICES</a>
                </li>
                <li>
                    <a href="#" className="section-link" title="Projects" role="navigation">PROJECTS</a>
                </li>
            </ul>
        </nav>
    );
};

export default Options;