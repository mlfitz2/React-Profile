import React from 'react';
import '../Page/style.css';
import './style.css';

function ContactMe() {
    return (
        <>
        <section className="bg">
            <div className="content">
                <h3>Let's connect!</h3>
                <ul>
                    <li><a href="https://github.com/mlfitz2" target="_blank"><i class="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/michael-fitzpatrick-6a7720119" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href = "mailto: mlfitz2@gmail.com">Email: MLFitz2@gmail.com</a></li>
                    <li>Phone: 415.423.4516</li>
                    <li><a href="./assets/Resume - Mike Fitzpatrick.pdf" download>My Resume</a></li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default ContactMe;