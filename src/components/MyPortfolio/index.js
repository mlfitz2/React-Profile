import React from 'react';
import '../Page/style.css';
import './style.css';
import project1 from './pubcrawler.JPG'
import project2 from './happy-place.JPG'
import project3 from './ethyl.JPG'

function MyPortfolio(props) {
    const {pages=[], setCurrentPage}=props;
    return (
        <>
        <section className="bg">
            <div className="content">
                <h1>Here are some cool projects I've made!</h1>
                <h2>Click on a project for more info.</h2>
                
                <div className="projects-area">
                    <div className="project-card">
                        <h3>PubCrawler</h3>
                        <img src={project1} alt="pubcrawler-pic"/>
                    </div>
                    <div className="project-card">
                        <h3>The Happy Place</h3>
                        <img alt="happy-place-pic" src={project2}/>
                    </div>
                    <div className="project-card">
                        <h3>Ethyl</h3>
                        <img alt="ethyl-pic" src={project3}/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default MyPortfolio;