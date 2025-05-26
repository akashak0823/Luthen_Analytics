import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './Pages/Services';
import Home from './Pages/Home';
import Industries from './Pages/Industries';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from "../src/components/Navbar";
function App() {
  return (
    <BrowserRouter>
      {/* Background image placed outside main content */}
      <div className="background-image-layer"></div>
      <Navbar/>

      {/* Main app content */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Industries" element={<Industries />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
