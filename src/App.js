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
    }
  ])
  const [ currentPage, setCurrentPage ] = useState(pages[0]);
  return (
    <div className="App">
      <div className="row">
        <Header 
          pages={pages}
          setCurrentPage={setCurrentPage}
        ></Header>
        <Page
          currentPage = {currentPage}
        >
        </Page>
      </div>
    </div>
  );
}

export default App;
