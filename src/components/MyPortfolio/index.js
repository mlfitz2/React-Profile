import React from 'react';
import '../Page/style.css';
import './style.css';
import project1 from './pubcrawler.JPG'
import project2 from './happy-place.JPG'
import project3 from './ethyl.JPG'

function MyPortfolio(props) {
    const { pages = [], setCurrentPage } = props;
    return (
        <>
            <section className="bg">
                <div className="content">
                    <h1 className="portfolio-h1">Here are some cool projects I've made!</h1>
                    <h2 className="portfolio-h2">Click on a project for more info.</h2>

                    <div className="projects-area">
                        <div className="project-card" onClick={() => setCurrentPage(pages[4])}>
                            <h3 className="project-title">PubCrawler</h3>
                            <img className="project-preview" src={project1} alt="pubcrawler-pic" />
                        </div>
                        <div className="project-card" onClick={() => setCurrentPage(pages[5])}>
                            <h3 className="project-title">The Happy Place</h3>
                            <img className="project-preview" alt="happy-place-pic" src={project2} />
                        </div>
                        <div className="project-card" onClick={() => setCurrentPage(pages[6])}>
                            <h3 className="project-title">Ethyl</h3>
                            <img className="project-preview" alt="ethyl-pic" src={project3} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyPortfolio;