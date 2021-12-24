import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Recipes from './components/Recipes/Recipes'
import Services from './components/OurServices/OurServices'
import Contact from './components/Contact/Contact';
import Order from './components/Order/Order';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />   
                <Route path="/about" element={<About />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/order" element={<Order />} />
            </Routes>
        </Router>
    )
}