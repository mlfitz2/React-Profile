import React from 'react';
import '../Page/style.css';
import './style.css';

function Project2() {
    return (
        <>
            <section className="bg">
                <div className="content">
                    <h3>The Happy Place</h3>
                    <p>The Happy Place is for users who are tired of the toxicity of mainstream social networks. This app is a place to reflect on what we're grateful for, and can be shared publicly or kept private like a journal. Inspiring quotes also help to brighten your day!</p>
                    <div>
                        <img alt="pic-of-project" src="assets/happy-place.JPG"/>
                        <div>
                            <a href="https://the-happy-place-app.herokuapp.com/" target="_blank">Deployed App</a>
                            <a href="https://github.com/mlfitz2/The-Happy-Place" target="_blank">GitHub</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Project2;