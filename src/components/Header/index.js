import React from 'react';
import './style.css';

function Header() {
    return (
        <>
        <nav id="navbar" className="navbar">
            <h2 className="nav-btn" id="about-me-btn">About Me</h2>
            <h2 className="nav-btn" id="portfolio-btn">My Portfolio</h2>
            <h2 className="nav-btn" id="contact-me-btn">Contact Me</h2>
        </nav>
        </>
    )
}

export default Header;