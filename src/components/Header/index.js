import React from 'react';
import './style.css';

function Header(props) {
    const {pages=[], setCurrentPage}=props;
    return (
        <>
        <nav id="navbar" className="navbar">
            <h2 className="nav-btn" id="about-me-btn" onClick={()=>setCurrentPage(pages[1])}><span>About Me</span></h2>
            <h2 className="nav-btn" id="portfolio-btn"><span onClick={()=>setCurrentPage(pages[2])}>My Portfolio</span></h2>
            <h2 className="nav-btn" id="contact-me-btn"><span onClick={()=>setCurrentPage(pages[3])}>Contact Me</span></h2>
        </nav>
        </>
    )
}

export default Header;