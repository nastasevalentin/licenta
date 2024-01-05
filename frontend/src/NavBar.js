import React from 'react';
import './NavBar.css';
import './AboutUs.js';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/models">Models</a></li>
                <li><a href="/about-us">About Us</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;