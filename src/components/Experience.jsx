"use client";

import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const experiences = [
    {
        role: 'Frontend Developer Intern',
        company: 'S3B Global',
        date: 'May 2026 – Present',
        current: true,
        bullets: [
            <>Building frontend modules for <strong>Kundli Time</strong> (astrology platform) using <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.</>,
            <>Integrating <strong>WordPress REST API</strong> with server-side rendering (SSR) for dynamic blog content.</>,
            <>Ensuring UI consistency across components, resolving button sizing, layouts, and responsive bugs.</>,
        ],
    },
    {
        role: 'Project Intern',
        company: 'AICTE TechSaksham (Microsoft & SAP)',
        date: 'Dec 2024 – Feb 2025',
        current: false,
        bullets: [
            <>Improved ML pipeline efficiency by <strong>25%</strong> through optimized preprocessing workflows and architecture-level updates.</>,
            <>Processed and annotated <strong>5,000+ data samples</strong>, increasing dataset quality by <strong>30%</strong> through structured cleaning.</>,
            <>Evaluated model performance using precision, recall, and F1-score, improving evaluation consistency by <strong>22%</strong>.</>,
        ],
    },
];

const Experience = () => {
    const headingRef = useScrollReveal();
    const timelineRef = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="experience" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: Header */}
            <div className="grid-layout">
                <div className="grid-cell span-5 scroll-reveal" ref={headingRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <h2 className="section-heading">(experience)</h2>
                </div>
            </div>

            {/* Row 2: Timeline Content */}
            <div className="grid-layout">
                <div className="grid-cell span-5 scroll-reveal" ref={timelineRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>

                    <div className="timeline-container">
                        <div className="timeline-line" />

                        {experiences.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <div className={`timeline-dot ${exp.current ? 'current' : ''}`} />
                                <div className="experience-block">
                                    <div className="experience-role-row">
                                        <div>
                                            <h3 className="experience-role">{exp.role}</h3>
                                            <h4 className="experience-company">{exp.company}</h4>
                                        </div>
                                        <span className="experience-date">{exp.date}</span>
                                    </div>
                                    <ul className="experience-bullets">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
