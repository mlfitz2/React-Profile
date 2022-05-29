import React from 'react';
import '../Page/style.css';
import '../Project1/style.css'
import ethyl from './ethyl.JPG'

function Project3() {
    return (
        <>
            <section className="bg">
                <div className="content">
                    <h1 className="project-h1">Ethyl</h1>
                    <p className="project-text">Ethyl is your personal assistant, here to help you keep track of your life. Use Ethyl to create and save lists, categorize them however you like, and share them with your friends!</p>
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