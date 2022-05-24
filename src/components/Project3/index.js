import React from 'react';
import '../Page/style.css';
import './style.css';
import ethyl from './ethyl.JPG'

function Project3() {
    return (
        <>
            <section className="bg">
                <div className="content">
                    <h1 className="project-h1">The Happy Place</h1>
                    <p className="project-text">The Happy Place is for users who are tired of the toxicity of mainstream social networks. This app is a place to reflect on what we're grateful for, and can be shared publicly or kept private like a journal. Inspiring quotes also help to brighten your day!</p>
                    <div className="project-display">
                        <img className="project-pic" alt="pic-of-project" src={ethyl}/>
                        <div className="project-links-area">
                            <a className="project-link" href="https://the-happy-place-app.herokuapp.com/" target="_blank" rel="noreferrer">Deployed App</a>
                            <a className="project-link" href="https://github.com/mlfitz2/The-Happy-Place" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project3;