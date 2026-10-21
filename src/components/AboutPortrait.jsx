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
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 12;
        const rotateY = ((x - centerX) / centerX) * 12;

        setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
    };

    const handleMouseLeave = () => {
        setTransformStyle('rotateX(0deg) rotateY(0deg) scale(1)');
    };

    return (
        <div className="about-portrait-container">
            {/* Glowing backdrop */}
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
                            width={420}
                            height={420}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
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
