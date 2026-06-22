"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import portraitImg from '../assets/puneet_sketch.jpg';

const AboutPortrait = () => {
    const cardRef = useRef(null);
    const [transformStyle, setTransformStyle] = useState('');

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // mouse x position relative to card
        const y = e.clientY - rect.top;  // mouse y position relative to card

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation angles relative to center coordinates
        // Limit max rotation to 12 degrees to maintain a sleek, premium experience
        const rotateX = ((centerY - y) / centerY) * 12;
        const rotateY = ((x - centerX) / centerX) * 12;

        setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
    };

    const handleMouseLeave = () => {
        // Smooth transition back to neutral state on mouse leave
        setTransformStyle('rotateX(0deg) rotateY(0deg) scale(1)');
    };

    return (
        <div className="about-portrait-container">
            {/* Glowing neon backdrop for dark mode */}
            <div className="about-portrait-glow" />
            
            {/* Floating wrap animation element */}
            <div className="about-portrait-card-float-wrap">
                <div 
                    ref={cardRef}
                    className="about-portrait-card"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ transform: transformStyle }}
                >
                    <div className="about-portrait-image-wrapper">
                        <Image 
                            src={portraitImg}
                            alt="Puneet Panwar - Geometric Portrait"
                            className="about-portrait-image"
                            placeholder="blur"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPortrait;
