// src/App.js
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import AboutMe from "./components/AboutMe";
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();



function App() {
    return (
        <div className="App">
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