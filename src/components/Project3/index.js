import React from 'react';
import '../Page/style.css';
import './style.css';

function Project3() {
    return (
        <>
            <section class="project-page hidden" id="happy-place-page">
                <h3>The Happy Place</h3>
                <p>The Happy Place is for users who are tired of the toxicity of mainstream social networks. This app is a place to reflect on what we're grateful for, and can be shared publicly or kept private like a journal. Inspiring quotes also help to brighten your day!</p>
                <div class="project-demo-area">
                    <img class="project-demo-pic" alt="pic-of-project" src="assets/happy-place.JPG"/>
                    <div class="project-links-area d-flex flex-column justify-content-around">
                        <a class="project-link p-3 m-2 d-flex justify-content-center align-items-center" href="https://the-happy-place-app.herokuapp.com/" target="_blank">Deployed App</a>
                        <a class="project-link p-3 m-2 d-flex justify-content-center align-items-center" href="https://github.com/mlfitz2/The-Happy-Place" target="_blank">GitHub</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project3;