import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
       <HashRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </HashRouter>
    </div>
  );
}

export default App;
