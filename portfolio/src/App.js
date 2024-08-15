// src/App.js
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import AboutMe from "./components/AboutMe";

import { Helmet } from 'react-helmet';




function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Pau Castellà</title>
                <link rel="icon" href="/images/favicon-16x16.png" />
            </Helmet>
            <div className="sidebar">
                <Hero />
                <NavBar />
            </div>
            <div className="content">
                <section id="about">
                    <AboutMe/>
                </section>
                <section id="projects">
                    <h2>My Projects</h2>
                    <ProjectList/>
                </section>
                {/* Add more content here */}
            </div>
        </div>
    );
}

export default App;