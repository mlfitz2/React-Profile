import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
<div>
  <Header></Header>
  <Page></Page>
  <Footer></Footer>
  </div>
    </div>
  );
}

export default App;
