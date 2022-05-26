// import: about, portfolio, contactme
import React from 'react';
import Greeting from '../Greeting';
import AboutMe from '../AboutMe';
import MyPortfolio from '../MyPortfolio';
import ContactMe from '../ContactMe';
import Project1 from '../Project1';
import Project2 from '../Project2';
import Project3 from '../Project3';
import PageContent from '../PageContent';

function Page({ currentPage, pages, setCurrentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'greeting':
                return <Greeting />;
            case 'about me':
                return <AboutMe />
            case 'portfolio':
                return <MyPortfolio pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />;
            case 'contact':
                return <ContactMe />;
            case 'project1':
                return <Project1 />;
            case 'project2':
                return <Project2 />;
            case 'project3':
                return <Project3 />;
            default:
                return <Greeting />
        };
    };
    return(
        <div>
            <PageContent>
                {renderPage()};
            </PageContent>
        </div>
    )
};

export default Page;