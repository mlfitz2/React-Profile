import React from 'react';
import './style.css';

function ContactMe() {
    return (
        <>
        <section id="contact-me" className="hidden">
            <h3>Let's connect!</h3>
            <ul id="links-area" class="d-flex flex-row flex-wrap justify-content-around align-items-center">
                <li className="contact-item icon d-flex justify-content-center align-items-center text-center m-4"><a href="https://github.com/mlfitz2" target="_blank"><i class="fab fa-github"></i></a></li>
                <li className="contact-item icon d-flex justify-content-center align-items-center text-center m-4"><a href="https://www.linkedin.com/in/michael-fitzpatrick-6a7720119" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li className="contact-item d-flex justify-content-center align-items-center text-center m-4"><a href = "mailto: mlfitz2@gmail.com">Email: MLFitz2@gmail.com</a></li>
                <li className="contact-item phone d-flex justify-content-center align-items-center text-center m-4">Phone: 415.423.4516</li>
                <li className="contact-item d-flex justify-content-center align-items-center text-center m-4"><a href="./assets/Resume - Mike Fitzpatrick.pdf" download>My Resume</a></li>
            </ul>
        </section>
        </>
    )
}

export default ContactMe;