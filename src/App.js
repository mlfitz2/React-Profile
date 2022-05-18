import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';

function App() {
  const [pages] = useState([
    {
      name: 'about me'
    },
    {
      name: 'greeting'
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
  const [ currentPage, setCurrentPage ] = useState(pages[1]);
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Page
          currentPage = {currentPage}
        >
        </Page>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
