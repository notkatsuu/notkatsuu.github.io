// src/components/SocialsPanel.js
import React from 'react';
import './SocialsPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faItchIo, faDiscord} from '@fortawesome/free-brands-svg-icons';

function SocialsPanel() {
    return (
        <div className="socials-panel">
            <a href="https://github.com/notkatsuu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com/exekatsu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com/in/notkatsuu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://notkatsuu.itch.io/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faItchIo} />
            </a>
            <a href="https://discord.com/users/285409843349553152" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
            </a>

        </div>
    );
}

export default SocialsPanel;