import React from 'react';
import '../Page/style.css';
import './style.css';
import project1 from './pubcrawler.JPG'
import project2 from './happy-place.JPG'

function MyPortfolio(props) {
    const {pages=[], setCurrentPage}=props;
    return (
        <>
        <section>
            <h3>Here are some cool projects I've made!</h3>
            <p>Click on a project for more info.</p>
            
            <div>
                <div>
                    <h4>PubCrawler</h4>
                      <span onClick={()=>setCurrentPage(pages[4])}><img src={project1} alt="pubcrawler-pic"/></span>
                </div>
                <div>
                    <h4>The Happy Place</h4>
                    <img alt="happy-place-pic" src={project2}/>
                </div>
                <div>
                    <h4>Note Taker</h4>
                    <img id="note-taker-pic" className="portfolio-pic" alt="pic" src="assets/note-taker.JPG"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default MyPortfolio;