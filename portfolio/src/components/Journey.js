import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import the leaflet CSS
import './Journey.css';

function Journey() {

    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current !== null) return;

        const map = L.map('map', {
            center: [41.536, 2.438], // Set the initial center coordinates
            zoom: 13, // Set the initial zoom level
            maxBounds: [
                [41.486, 2.388], // Southwest coordinates
                [41.586, 2.488], // Northeast coordinates
            ],
            maxBoundsViscosity: 1.0, // Ensures the user can't pan outside the bounds
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        L.marker([41.536, 2.438]).addTo(map)
            .bindPopup('Tecnocampus, Mataró.')
            .openPopup();

        mapRef.current = map;
    }, []);


    return (
        <section id="journey">
            <h2 className="sticky-title">My Journey</h2>
            <div className="section-container">
                <div className="section-content">
                    <div className="timeline">
                        <div className="timeline-item">
                            <h3>Tecnocampus - UPF | Barcelona</h3>
                            <p>
                                In 2022 I started my double Degree in Computer Science and Videogame Design and
                                Development at Tecnocampus, Mataró which is attatched to UPF in Barcelona.
                                <br></br>
                                I am currently in my 3rd year of the double degree, and I am sincerely enjoying both
                                equally.
                                <br></br>
                                <br></br>
                                I feel that Computer Science gives a solid foundation to understand the logic behind the
                                code, and it's intellectually intense and challenging.
                                <br></br>
                                <br></br>
                                In the other hand, in Videogame Design and Development, I can apply the knowledge of
                                Computer Science to create games, which is something that I love, while treating other
                                important aspects, like the Design itself, the narrative, the art, the sound, the
                                marketing, etc.
                                <br></br>
                                <br></br>
                                It's like being an engineer but also working out your creativity, and walking around
                                with a sketchbook in your pocket.
                            </p>
                            <div id="map-container">

                                <div id="map"></div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Journey;