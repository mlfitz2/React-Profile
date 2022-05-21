import React from 'react';
import './style.css';
import avatar from './avatar.jpg';

function Greeting() {
    return (
        <>
        <section id="intro">
            <h1>Hi there!</h1>
            <img id="avatar" className="rounded-circle" alt="avatar" src={avatar}/>
            <h1>I'm Mike.</h1>
        </section>
        </>
    )
}

export default Greeting;