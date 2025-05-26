import React from 'react';
import '../Css/Navbar.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src="/Assets/luthen-logo.png" alt="Luthen Logo" className="logo-img" />
      </Link>
      <nav className="nav-links">
        {/* Home is a normal link to root */}
        <a href="/">Home</a>
        
        {/* Scroll to #services section */}
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          offset={-70}  // adjust offset if you have fixed header height
          className="nav-scroll-link"
          style={{ cursor: 'pointer' }}
          spy={true}    // optional: to add active class while scrolling
          activeClass="active"
        >
          Services
        </ScrollLink>

        {/* Scroll to #about section */}
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-scroll-link"
          style={{ cursor: 'pointer' }}
          spy={true}
          activeClass="active"
        >
          About Us
        </ScrollLink>

        {/* Scroll to #contact section */}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-scroll-link"
          style={{ cursor: 'pointer' }}
          spy={true}
          activeClass="active"
        >
          Contact Us
        </ScrollLink>
      </nav>
    </header>
  );
};

export default Navbar;
