import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Stormbreaker19 from './components/products/Stormbreaker19';
import Stormbreaker21 from './components/products/Stormbreaker21';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
       <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/stormbreaker19" element={<Stormbreaker19 />} />
            <Route path="/stormbreaker21" element={<Stormbreaker21 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </HashRouter>
    </div>
  );
}

export default App;
