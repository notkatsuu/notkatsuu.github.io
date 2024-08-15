// src/components/ProjectCard.js
import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ name, about, image, link, languages, categories }) {
    const [isOpen, setIsOpen] = useState(false);

    const aboutLines = about.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    const handleCardClick = () => {
        window.open(link, '_blank');
    };

    return (
        <div>
            <div className="project-card" onClick={handleCardClick}>
                <div className="project-image-languages">
                    <img src={image} alt={name} className="project-image"/>
                    <div className="project-languages">
                        {languages.map((language, index) => (
                            <div key={index} className="language-bubble">
                                {language}
                            </div>
                        ))}
                    </div>
                    <div className="project-categories">
                        {categories && categories.map((category, index) => (
                            <div key={index} className="category-bubble">
                                {category}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="project-info">
                    <h3>{name}</h3>
                    <p>{aboutLines}</p> {/* Display the project description */}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;