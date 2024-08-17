// src/components/Content.js
import React from 'react';
import './Content.css';
import AboutMe from './AboutMe';
import Journey from './Journey';
import ProjectList from './ProjectList';

const Content = () => {
    return (
        <div className="content">
            <section id="about">
                <h2 className="sticky-title">About Me</h2>
                <AboutMe />
            </section>
            <section id="journey">
                <Journey />
            </section>
            <section id="projects">
                <h2 className="sticky-title">My Projects</h2>
                <ProjectList />
            </section>
        </div>
    );
};

export default Content;
