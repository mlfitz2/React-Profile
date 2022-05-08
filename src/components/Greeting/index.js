import React from 'react';
import './style.css';

function Greeting() {
    return (
        <>
        <section id="intro" class="">
            <h1>Hi there!</h1>
            <img id="avatar" class="rounded-circle" src='../../public/avatar.jpg'>
            <h1>I'm Mike.</h1>
        </section>
        </>
    )
}

export default Greeting;