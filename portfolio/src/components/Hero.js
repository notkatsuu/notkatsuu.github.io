// src/components/Hero.js
import React from 'react';
import './Hero.css';
import SocialsPanel from './SocialsPanel';

function Hero() {
    return (
        <section id="home" className="hero">
            <h1 className="hero-title">Pau Castellà</h1>
            <h2 className="hero-subtitle">Computer Science & GameDev Student</h2>
            <p className="hero-subtitle">I like building Software and Games.</p>
            <SocialsPanel />
        </section>
    );
}

export default Hero;