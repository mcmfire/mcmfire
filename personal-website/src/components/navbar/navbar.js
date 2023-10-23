import React from "react";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/" className="navbar-logo">
                <img src="../../assets/icons/avatar.svg" alt="navbar-avatar"/>
            </a>
            <a href="../../assets/docs/Masakyan_Marc-Chester_CV.pdf" download="Masakyan_Marc-Chester_CV.pdf">
                Download CV {<img src="../../assets/icons/file_download.svg" alt="file-download"/>}
            </a>
        </div>
    );
};

export default Navbar;