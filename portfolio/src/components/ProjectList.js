// src/components/ProjectList.js
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const projects = [
    {
        name: 'kMusicPlayer',
        about: 'My most loved and time consuming project so far: \n\n A visual music player built with C and Raylib. It provides a simple visual interface for playing your favorite music tracks.\n\n' +
            'The target of this project is developing a software to be able to enjoy music also in a visual way.\n\n' +
            'It uses multithreading for efficient music loading and tinyfiledialogs for directory selection. ',
        categories: ['Software'],
        languages: ['raylib', 'C'],
        image: '/images/KMusicPlayer.gif',
        link: 'https://github.com/notkatsuu/kMusicPlayer'
    },
    {
        name: 'kMazer',
        about: 'Fourth and last Delivery of 2D Videogame Design subject using plain C and RayLib \n\n The goal of this project was to develop a playable maze game using procedural generation. The game features a random maze generator with configurable parameters, allowing players to navigate from point A to point B. \n\n' +
            'Additional elements such as player movement, camera systems, map editor mode, collectible items, and more were implemented to enhance gameplay. \n\n This project was supervised by professor Ray itself, so it was an honor creating it.',
        categories: ['Software', 'University', 'Game'],
        languages: ['raylib', 'C', 'Git'],
        image: '/images/kMazer.png',
        link: 'https://github.com/notkatsuu/kMazer'
    },
    {
        name: 'Bombs Away',
        about: 'This game was Developed when i was a 2nd year, in a Weekend Gamejam, called "La Gameja" in the Navideja tre(2+1) Edition. \n\n As it was developed in a Weekend, and it was a very good experience to learn how to group in teams. \n\n The theme of that Edition was: No risk, no reward! \n So it is a Party Game where there is a bomb and an invisible timer, the one that has the bomb when it explodes loses. Only leaving the winner alive. \n We ended up getting the 3rd place!',
        categories: ['Game', 'University'],
        languages: ['C#', 'Unity', 'Git'],
        image: '/images/BombsAway.png',
        link: 'https://notkatsuu.itch.io/bombs-away'
    },
    {
        name: 'Sticky',
        about: 'This game was developed for the 2D Development Subject with Professor Ray. \n\n An oldie but goodie platform game, written in C# and made with Unity. \n\n' + 'Sticky is a 2d platform game made by four college students as a project for our 2d game development subject. We went beyond and did more than we were asked to in order to learn as much as we could and to deliver something beautiful and taken care of.',
        categories: ['Game', 'University'],
        languages: ['C#', 'Unity'],
        image: '/images/sticky.png',
        link: 'https://notkatsuu.itch.io/sticky'
    },
    {
        name: 'Sneaky',
        about: 'This game was developed for the 2D Development Subject with Professor Ray. \n\n This game was a practical task on how to use correctly the Command Pattern using the context of a Stealth Game. \n\n Players embark on a thrilling journey through carefully crafted levels, where they must outsmart vigilant enemies and navigate strategically to complete objectives. ',
        categories: ['Game', 'University'],
        languages: ['C#', 'Unity'],
        image: '/images/Sneaky.png',
        link: 'https://notkatsuu.itch.io/sneaky'
    },
    {
        name: 'AutoCarRent',
        about: 'This is a RESTful API for a car rental management system and connected to a MySQL database. \n\n It was Developed on the Software Laboratory 1 subject, and was graded a 9.6/10. \n\n It was my first contact with SpringBoot or any kind of API development and my first time using a MySQL database too. \n\n It was a very entertaining project and i enjoyed a lot the proccess of learning and developing it.',
        categories: ['Software', 'Web', 'University'],
        languages: ['Java', 'SpringBoot', 'Git', 'SQL', 'MySQL'],
        image: '/images/Spring.png',
        link: 'https://notkatsuu.itch.io/sneaky'
    }

    // Add more projects here
];

const categories = ['Web', 'Game', 'Software', 'University']; // Add more categories here
const languages = ['JavaScript', 'C#', 'HTML', 'CSS', 'Unity', 'raylib', 'C', 'Git', 'Java', 'SpringBoot', 'SQL', 'MySQL']; // Add more languages here

function ProjectList() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (value !== "" && !selectedCategories.includes(value)) {
            setSelectedCategories([...selectedCategories, value]);
        }
    };

    const handleLanguageChange = (e) => {
        const value = e.target.value;
        if (value !== "" && !selectedLanguages.includes(value)) {
            setSelectedLanguages([...selectedLanguages, value]);
        }
    };

    const filteredProjects = projects.filter(project => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.some(category => project.categories.includes(category));
        const languageMatch = selectedLanguages.length === 0 || selectedLanguages.every(lang => project.languages.includes(lang));
        return categoryMatch && languageMatch;
    });

    const removeCategory = (category) => {
        setSelectedCategories(selectedCategories.filter((c) => c !== category));
    };

    const removeLanguage = (language) => {
        setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
    };

    const availableCategories = categories.filter(category => !selectedCategories.includes(category));
    const availableLanguages = languages.filter(language => !selectedLanguages.includes(language));

    return (
        <div>

            <div className="filter-container">
                <div className="select-wrapper">
                    <select onChange={handleCategoryChange} className="filter" value="">
                        <option value="" disabled>Filter by Category</option>
                        {availableCategories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter-bubbles">
                    {selectedCategories.map((category, index) => (
                        <div key={index} className="filter-bubble" onClick={() => removeCategory(category)}>
                            {category}
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-container">
                <div className="select-wrapper">
                    <select onChange={handleLanguageChange} className="filter" value="">
                        <option value="" disabled>Filter by Technology</option>
                        {availableLanguages.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter-bubbles">
                    {selectedLanguages.map((language, index) => (
                        <div key={index} className="filter-bubble" onClick={() => removeLanguage(language)}>
                            {language}
                        </div>
                    ))}
                </div>
            </div>

            <div className="project-list">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;