import React from 'react';
import '../Page/style.css';
import './style.css';
import resume from './Resume - Mike Fitzpatrick.pdf';

function ContactMe() {
    return (
        <>
        <section className="bg">
            <div className="content">
                <h1 className="contact-h1">Let's connect!</h1>
                <ul className="contact-area">
                    <li className="contact-item contact-icon"><a href="https://github.com/mlfitz2" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></li>
                    <li className="contact-item contact-icon"><a href="https://www.linkedin.com/in/michael-fitzpatrick-6a7720119" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a></li>
                    <li className="contact-item"><a href = "mailto: mlfitz2@gmail.com">Email: MLFitz2@gmail.com</a></li>
                    <li className="contact-item">Phone: 415.423.4516</li>
                    <li className="contact-item"><a href={resume} download>My Resume</a></li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default ContactMe;