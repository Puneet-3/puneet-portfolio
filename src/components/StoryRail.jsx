"use client";

import React, { useState, useEffect } from 'react';

const CHAPTERS = [
    { id: 'hero', number: '00', title: 'prologue' },
    { id: 'about', number: '01', title: 'identity' },
    { id: 'experience', number: '02', title: 'trajectory' },
    { id: 'projects', number: '03', title: 'works' },
    { id: 'skills', number: '04', title: 'stack' },
    { id: 'contact', number: '05', title: 'dispatch' },
];

export default function StoryRail({ scrollProgress }) {
    const [activeChapter, setActiveChapter] = useState('hero');
    const [hoveredChapter, setHoveredChapter] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + window.innerHeight * 0.35;

            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');
                if (scrollPos >= top && scrollPos < top + height) {
                    setActiveChapter(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToChapter = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className="story-rail" aria-label="Story Chapters Navigation">
            <div className="story-rail-track">
                {/* Visual connecting laser line */}
                <div className="story-rail-line" />
                <div
                    className="story-rail-line-progress"
                    style={{ height: `${Math.min(Math.max(scrollProgress, 0), 100)}%` }}
                />

                {CHAPTERS.map((ch) => {
                    const isActive = activeChapter === ch.id;
                    const isHovered = hoveredChapter === ch.id;

                    return (
                        <div
                            key={ch.id}
                            className={`story-rail-node ${isActive ? 'active' : ''}`}
                            onClick={() => scrollToChapter(ch.id)}
                            onMouseEnter={() => setHoveredChapter(ch.id)}
                            onMouseLeave={() => setHoveredChapter(null)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Jump to chapter ${ch.number} ${ch.title}`}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    scrollToChapter(ch.id);
                                }
                            }}
                        >
                            {/* Label capsule (opens to the left) */}
                            <div className={`story-rail-label ${isActive || isHovered ? 'visible' : ''}`}>
                                <span className="story-rail-num">{ch.number}</span>
                                <span className="story-rail-name">{ch.title}</span>
                            </div>

                            {/* Pip dot */}
                            <div className="story-rail-pip">
                                <span className="story-rail-pip-inner" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Depth meter */}
            <div className="story-rail-depth">
                <span className="story-rail-pct">{Math.round(scrollProgress)}%</span>
                <span className="story-rail-depth-tag">archive</span>
            </div>
        </aside>
    );
}
