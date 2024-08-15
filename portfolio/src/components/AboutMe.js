// src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>
                I’m Pau, "Katsu" is a nickname i got on all my accounts when i was little, and i've been keeping it since then.
            </p>
            <p>
                I'm a Computer Science and Game Development student with a strong focus on algorithms and software engineering.
                I’m dedicated to mastering complex coding challenges and preparing for advanced technical interviews.
            </p>
            <p>
               My primary project, <a href="#projects">kMusicPlayer</a>, is a music player built in C using Raylib, where I’m exploring the integration of graphical music representations.
            </p>
            <p>
                Outside of coding, I’m a pianist and practice calisthenics to maintain balance and discipline.
            </p>
            <p>
                I’m actively building my portfolio and seeking opportunities to apply my skills in real-world projects. Connect with me on GitHub, LinkedIn, or itch.io.
            </p>
        </section>
    );
}

export default AboutMe;