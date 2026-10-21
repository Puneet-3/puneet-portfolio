"use client";

import React from 'react';

const Hero3DSkeleton = () => {
    return (
        <div className="about-portrait-container">
            <div className="about-portrait-glow" />
            <div className="about-portrait-card-float-wrap">
                <div 
                    className="about-portrait-card"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div 
                        className="about-portrait-image-wrapper"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--bg-card)',
                            position: 'relative',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <div 
                            style={{
                                width: '55%',
                                height: '55%',
                                borderRadius: '50%',
                                border: '2px dashed var(--timeline-line)',
                                opacity: 0.5,
                                animation: 'spin 10s linear infinite'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero3DSkeleton;
