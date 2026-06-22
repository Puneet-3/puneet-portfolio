"use client";

import React from 'react';

const Experience = () => {
    return (
        <section id="experience" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: Header */}
            <div className="grid-layout">
                <div className="grid-cell span-5">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', textTransform: 'lowercase', letterSpacing: '-1px' }}>
                        (experience)
                    </h2>
                </div>
            </div>

            {/* Row 2: Timeline Content */}
            <div className="grid-layout">
                {/* Col 1-5: Combined Timeline Column (Merged with Gutters) */}
                <div className="grid-cell span-5">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>

                    {/* S3B Global */}
                    <div className="experience-block">
                        <div className="experience-role-row">
                            <div>
                                <h3 className="experience-role">Frontend Developer Intern</h3>
                                <h4 className="experience-company">S3B Global</h4>
                            </div>
                            <span className="experience-date">May 2026 – Present</span>
                        </div>
                        <ul className="experience-bullets">
                            <li>Building frontend modules for <strong>Kundli Time</strong> (astrology platform) using <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.</li>
                            <li>Integrating <strong>WordPress REST API</strong> with server-side rendering (SSR) for dynamic blog content.</li>
                            <li>Ensuring UI consistency across components, resolving button sizing, layouts, and responsive bugs.</li>
                        </ul>
                    </div>

                    {/* AICTE TechSaksham */}
                    <div className="experience-block">
                        <div className="experience-role-row">
                            <div>
                                <h3 className="experience-role">Project Intern</h3>
                                <h4 className="experience-company">AICTE TechSaksham (Microsoft & SAP)</h4>
                            </div>
                            <span className="experience-date">Dec 2024 – Feb 2025</span>
                        </div>
                        <ul className="experience-bullets">
                            <li>Improved ML pipeline efficiency by <strong>25%</strong> through optimized preprocessing workflows and architecture-level updates.</li>
                            <li>Processed and annotated <strong>5,000+ data samples</strong>, increasing dataset quality by <strong>30%</strong> through structured cleaning.</li>
                            <li>Evaluated model performance using precision, recall, and F1-score, improving evaluation consistency by <strong>22%</strong>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
