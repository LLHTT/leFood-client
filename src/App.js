import React from 'react'
import './style/App.css'
import Home from './Pages/Home'
import Nav from './components/Nav'
import About from './Pages/About'
import Recipes from './Pages/Recipes'
import Services from './Pages/OurServices'
import Contact from './Pages/Contact'
import Order from './Pages/Order'

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