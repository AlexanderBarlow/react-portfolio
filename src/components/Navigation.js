import React from 'react';
import '../styles/Navbar.css'

function Navigation(currentPage) {
    return (
        <nav className='navbar'>
            <a href='/'>About Me</a>
            <a href='/'>Portfolio</a>
            <a href='/'>Contact Me</a>
            <a href='/'>Resume</a>
        </nav>
    );
}

export default Navigation;