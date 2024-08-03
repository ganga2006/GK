// src/App.js
import React from 'react';
import NavigationBar from './components/navbar/Navbar.jsx';
import './App.css';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Compare from './components/CompareAll.jsx';
import AboutUs from './components/AboutUs.jsx';
import Home from './components/Home.jsx';
import PreBook from './components/PreBook.jsx';
import Contact from './components/Contact.jsx';



function App() {
    return (
        <div className="App">
            
            <Router>
                <NavigationBar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/prebook" element={<PreBook />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>

            </Router>
             
            <Footer />
        </div>
    );
}

export default App;
