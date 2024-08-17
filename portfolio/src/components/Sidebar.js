// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import Hero from './Hero';
import NavBar from './NavBar';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <Hero />
                <NavBar />
            </div>
        </div>
    );
};

export default Sidebar;
