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
  const [ currentPage, setCurrentPage ] = useState(pages[4]);
  return (
    <div className="App">
      <div className="row app-body">
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
