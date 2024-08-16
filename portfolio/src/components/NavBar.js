// NavBar.js
import React, { useEffect } from 'react';
import './NavBar.css';

function NavBar() {
    useEffect(() => {
        const links = document.querySelectorAll('nav a');
        links.forEach((link, index) => {
            link.style.animationDelay = `${index * 0.2}s`; // Delay the start of animation for each link
        });
    }, []);

    return (
        <nav>
            <a href="#about">About Me</a>
            <a href="#journey">Journey</a>
            <a href="#projects">Projects</a>
        </nav>
    );
}

export default NavBar;