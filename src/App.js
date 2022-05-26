import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';

function App() {
  const [pages] = useState([
    {
      name: 'greeting'
    },
    {
      name: 'about me'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'project1'
    },
    {
      name: 'project2'
    },
    {
      name: 'project3'
    }
  ])
  const [ currentPage, setCurrentPage ] = useState(pages[0]);

  React.useEffect(() => {
    const navbar = document.getElementById('navbar');
    const btns = navbar.getElementsByClassName('nav-btn');
    for (let index = 0; index < btns.length; index++) {
      const element = btns[index];
      element.addEventListener('click', function() {
        const current = document.getElementsByClassName('active');
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        console.log('current ==', current);
        this.className += " active";
      })
    }
    console.log('navbar ==', navbar);
  }, []);

  return (
    <div className="App">
      <div className="row app-body">
        <Header 
          pages={pages}
          setCurrentPage={setCurrentPage}
        ></Header>
        <Page
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage = {currentPage}
        >
        </Page>
      </div>
    </div>
  );
}

export default App;
