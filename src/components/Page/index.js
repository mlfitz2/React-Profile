//import: about, portfolio, contactme
// function Page({ currentPage }) {
//     const renderPage = () => {
//         switch (currentPage.name) {
//             case 'about me':
//                 return <AboutMe />
//             case 'portfolio':
//                 return <MyPortfolio />;
//             case 'contact':
//                 return <ContactMe />;
//             case 'greeting':
//                 return <Greeting />;
//             default:
//                 return <Greeting />
//         };
//     };
// };

import React from 'react';
import './style.css';

function Greeting() {
    return (
        <>
        <section id="intro" class="">
            <h1>Hi there!</h1>
            {/* <img id="avatar" class="rounded-circle" src='../../public/avatar.jpg'> */}
            <h1>I'm Mike.</h1>
        </section>
        </>
    )
}

export default Greeting;