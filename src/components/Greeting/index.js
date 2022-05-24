import React from 'react';
import '../Page/style.css';
import './style.css';
import avatar from './avatar.jpg';

function Greeting() {
    return (
        <>
        <section className="bg">
            <div className="content">
                <h1 className ="greeting-text">Hi there!</h1>
                <img id="avatar" className="rounded-circle avatar" alt="avatar" src={avatar}/>
                <h1 className ="greeting-text">I'm Mike.</h1>
            </div>
        </section>
        </>
    )
}

export default Greeting;