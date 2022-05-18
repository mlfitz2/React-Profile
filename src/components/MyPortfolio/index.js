import React from 'react';
import './style.css';

function MyPortfolio() {
    return (
        <>
        <section id="my-portfolio" class="hidden">
            <h3>Here are some cool projects I've made!</h3>
            <p class="about-me">Click on a project for more info.</p>
            
            <div class="portfolio-display d-flex flex-row justify-content-around">
                <div class="project-card" id="pubcrawler">
                    <h4 class="p-3 m-0 rounded-top d-flex justify-content-center align-items-center">PubCrawler</h4>
                    <img id="pubcrawler-pic" class="portfolio-pic" alt="pic" src="assets/pubcrawler.JPG"/>
                </div>
                <div class="project-card" id="happy-place">
                    <h4 class="p-3 m-0 rounded-top d-flex justify-content-center align-items-center">The Happy Place</h4>
                    <img id="happy-place-pic" class="portfolio-pic" alt="pic" src="assets/happy-place.JPG"/>
                </div>
                <div class="project-card" id="note-taker">
                    <h4 class="p-3 m-0 rounded-top d-flex justify-content-center align-items-center">Note Taker</h4>
                    <img id="note-taker-pic" class="portfolio-pic" alt="pic" src="assets/note-taker.JPG"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default MyPortfolio;