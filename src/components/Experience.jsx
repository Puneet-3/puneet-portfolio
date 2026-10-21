"use client";

import React, { useState, useEffect } from 'react';
import { useScrollStory } from '../hooks/useScrollStory';
import { Calendar, Award, ExternalLink, X } from 'lucide-react';

const experiences = [
    {
        role: 'Frontend Developer Intern',
        company: 'S3B Global',
        date: 'May 2026 – Aug 2026 (3 mos)',
        current: false,
        certificate: '/Internship-Certificate-Puneet.pdf',
        bullets: [
            <>Built frontend modules for <strong>Kundli Time</strong> (astrology platform) using <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.</>,
            <>Integrated <strong>WordPress REST API</strong> with server-side rendering (SSR) for dynamic blog content.</>,
            <>Ensured UI consistency across components, resolving button sizing, layouts, and responsive bugs.</>,
        ],
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WordPress REST API', 'SSR']
    },
    {
        role: 'Project Intern',
        company: 'AICTE TechSaksham (Microsoft & SAP)',
        date: 'Dec 2024 – Feb 2025 (3 mos)',
        current: false,
        certificate: '/AICTE-TechSaksham-Certificate-Puneet.pdf',
        bullets: [
            <>Improved ML pipeline efficiency by <strong className="highlight-metric">25%</strong> through optimized preprocessing workflows and architecture-level updates.</>,
            <>Processed and annotated <strong className="highlight-metric">5,000+ data samples</strong>, increasing dataset quality by <strong className="highlight-metric">30%</strong> through structured cleaning.</>,
            <>Evaluated model performance using precision, recall, and F1-score, improving evaluation consistency by <strong className="highlight-metric">22%</strong>.</>,
        ],
        tags: ['Python', 'Scikit-Learn', 'Data Curation', 'Model Evaluation', 'F1-Optimization']
    },
];

const Experience = () => {
    const { ref: headerRef } = useScrollStory({ threshold: 0.1 });
    const { ref: leftColRef } = useScrollStory({ threshold: 0.15 });
    const { ref: rightColRef } = useScrollStory({ threshold: 0.15 });
    const [activeCert, setActiveCert] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setActiveCert(null);
            }
        };
        if (activeCert) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeCert]);

    return (
        <section id="experience" className="story-section" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: Header */}
            <div className="grid-layout">
                <div ref={headerRef} className="grid-cell span-5 scroll-reveal">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <div className="section-header-flex">
                        <h2 className="section-heading">(experience)</h2>
                        <span className="section-chapter-tag">02 // trajectory</span>
                    </div>
                </div>
            </div>

            {/* Row 2: Editorial Split Layout */}
            <div className="grid-layout">
                {/* Col 1 & 2: Overview & Impact Metrics */}
                <div className="grid-cell span-2 scroll-reveal" ref={leftColRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '1.5rem' }}>
                        <span className="meta-widget-title">career_trajectory.log</span>
                    </div>

                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Practical engineering experience building <strong style={{ color: 'var(--text-primary)' }}>modern frontend platforms</strong> and optimizing <strong style={{ color: 'var(--text-primary)' }}>production ML pipelines</strong>.
                    </p>

                    <div className="experience-metric-box">
                        <div className="exp-metric-row">
                            <span className="exp-metric-val">25%</span>
                            <span className="exp-metric-lbl">ML pipeline speedup</span>
                        </div>
                        <div className="exp-metric-row">
                            <span className="exp-metric-val">5,000+</span>
                            <span className="exp-metric-lbl">Cleaned data samples</span>
                        </div>
                        <div className="exp-metric-row">
                            <span className="exp-metric-val">22%</span>
                            <span className="exp-metric-lbl">F1 consistency gain</span>
                        </div>
                    </div>
                </div>

                {/* Col 3, 4 & 5: Detailed Roles */}
                <div className="grid-cell span-3 scroll-reveal" ref={rightColRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="experience-cards-column">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-card">
                                <div className="experience-card-header">
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                                            <span className="experience-index-chip">0{index + 1} //</span>
                                            <h3 className="experience-role-title">{exp.role}</h3>
                                            {exp.current && <span className="active-role-beacon">current</span>}
                                        </div>
                                        <h4 className="experience-company-name">{exp.company}</h4>
                                    </div>
                                    <div className="experience-header-actions">
                                        <div className="experience-date-pill">
                                            <Calendar size={12} />
                                            <span>{exp.date}</span>
                                        </div>
                                        {exp.certificate && (
                                            <button
                                                type="button"
                                                onClick={() => setActiveCert({
                                                    title: `${exp.company} — Internship Certificate`,
                                                    url: exp.certificate
                                                })}
                                                className="experience-cert-link"
                                                title="View Internship Certificate"
                                            >
                                                <Award size={13} />
                                                <span>Certificate</span>
                                                <ExternalLink size={11} />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <ul className="experience-bullet-list">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="experience-bullet-item">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                <div className="experience-tag-group">
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} className="exp-tag-pill">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certificate Viewer Modal */}
            {activeCert && (
                <div
                    className="cert-modal-backdrop"
                    onClick={() => setActiveCert(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Certificate Viewer"
                >
                    <div
                        className="cert-modal-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="cert-modal-header">
                            <div className="cert-modal-title">
                                <Award size={16} />
                                <span>{activeCert.title}</span>
                            </div>
                            <div className="cert-modal-actions">
                                <a
                                    href={activeCert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-action-btn"
                                    title="Open directly in new tab"
                                >
                                    <ExternalLink size={13} />
                                    <span>open tab</span>
                                </a>
                                <button
                                    onClick={() => setActiveCert(null)}
                                    className="cert-close-btn"
                                    aria-label="Close Certificate"
                                    title="Close (Esc)"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="cert-modal-body">
                            <iframe
                                src={`${activeCert.url}#toolbar=1&navpanes=0`}
                                title={activeCert.title}
                                className="cert-iframe"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Experience;
export { Experience };
