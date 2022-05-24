import React from 'react';
import '../Page/style.css';
import './style.css';

function Project1() {
    return (
        <>
            <section className="bg">
                <div className="content">
                    <h3>PubCrawler</h3>
                    <p>PubCrawler allows users to select a city, or use their current location, to see a map of breweries in the area. Select the ones you like, and the app will display the most efficient route for a pub crawl between them. You can save your favorite routes to local storage and refer back to them next time.</p>
                    <div>
                        <img className="project-demo-pic" alt="project-pic" src="assets/pubcrawler.JPG"/>
                        <div>
                            <a href="https://benfok.github.io/pub-crawler" target="_blank" rel="noreferrer">Deployed App</a>
                            <a href="https://github.com/mlfitz2/pub-crawler" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project1; 