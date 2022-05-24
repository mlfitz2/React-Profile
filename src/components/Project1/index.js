import React from 'react';
import '../Page/style.css';
import './style.css';
import pubcrawler from './pubcrawler.JPG'

function Project1() {
    return (
        <>
            <section className="bg">
                <div className="content">
                    <h1 className="project-h1">PubCrawler</h1>
                    <p className="project-text">PubCrawler allows users to select a city, or use their current location, to see a map of breweries in the area. Select the ones you like, and the app will display the most efficient route for a pub crawl between them. You can save your favorite routes to local storage and refer back to them next time.</p>
                    <div className="project-display">
                        <img className="project-pic" alt="project-pic" src={pubcrawler}/>
                        <div className="project-links-area">
                            <a className="project-link" href="https://benfok.github.io/pub-crawler" target="_blank" rel="noreferrer">Deployed App</a>
                            <a className="project-link" href="https://github.com/mlfitz2/pub-crawler" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project1; 