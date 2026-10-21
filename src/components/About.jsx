"use client";

import React from 'react';
import { useScrollStory, useCountUp } from '../hooks/useScrollStory';
import { GraduationCap, Award, Database, Sparkles } from 'lucide-react';

const About = () => {
    const { ref: headerRef } = useScrollStory({ threshold: 0.1 });
    const { ref: narrativeRef } = useScrollStory({ threshold: 0.15 });
    const { ref: statsRef, isInView: statsInView } = useScrollStory({ threshold: 0.15 });
    const { ref: educationRef } = useScrollStory({ threshold: 0.15 });

    // Animated count-up numbers triggered on scroll into view
    const projectsCount = useCountUp(15, 1400, statsInView, 0, '+');
    const cgpaCount = useCountUp(8.85, 1600, statsInView, 2, '');
    const samplesCount = useCountUp(5, 1200, statsInView, 0, 'k+');

    return (
        <section id="about" className="story-section" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Header row */}
            <div className="grid-layout">
                <div ref={headerRef} className="grid-cell span-5 scroll-reveal">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <div className="section-header-flex">
                        <h2 className="section-heading">(about me)</h2>
                        <span className="section-chapter-tag">01 // identity</span>
                    </div>
                </div>
            </div>

            {/* Content grid */}
            <div className="grid-layout">
                {/* Left Column: Narrative & Stats */}
                <div className="grid-cell about-left-cell scroll-reveal" ref={narrativeRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '1.5rem' }}>
                        <span className="meta-widget-title">narrative.txt</span>
                    </div>

                    <p style={{ marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                        I am a developer bridging the gap between <em className="serif-italic">intelligent machine learning models</em> and fluid, user-friendly frontend interfaces.
                    </p>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                        With an academic foundation in AI/ML at <strong style={{ color: 'var(--text-primary)' }}>VIT Bhopal University</strong>, I specialize in engineering automated workflows, deploying agentic nodes, and building web applications that scale.
                    </p>

                    {/* Animated Stat Cards */}
                    <div
                        ref={statsRef}
                        className="about-stats-grid"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2.5rem' }}
                    >
                        <div className="about-stat-card">
                            <div className="stat-card-icon-wrap">
                                <Award size={16} />
                            </div>
                            <div className="stat-number">{projectsCount}</div>
                            <div className="stat-label">projects shipped</div>
                        </div>

                        <div className="about-stat-card active-highlight">
                            <div className="stat-card-icon-wrap">
                                <Sparkles size={16} />
                            </div>
                            <div className="stat-number highlight-accent">{cgpaCount}</div>
                            <div className="stat-label">cgpa · 8.85 / 10</div>
                        </div>

                        <div className="about-stat-card">
                            <div className="stat-card-icon-wrap">
                                <Database size={16} />
                            </div>
                            <div className="stat-number">{samplesCount}</div>
                            <div className="stat-label">data samples</div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Education */}
                <div className="grid-cell about-right-cell scroll-reveal" ref={educationRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '1.5rem' }}>
                        <span className="meta-widget-title">academic_history.json</span>
                    </div>

                    <div className="academic-flow-track">
                        {/* VIT Bhopal */}
                        <div className="academic-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <GraduationCap size={18} className="academic-icon" />
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800' }}>VIT Bhopal</h3>
                                </div>
                                <span className="academic-cgpa-pill">CGPA: 8.85</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: '1.6' }}>
                                B.Tech., Computer Science (AI &amp; ML)<br />
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>2023 – 2027</span>
                            </p>
                        </div>

                        {/* JNV Fatehabad */}
                        <div className="academic-card" style={{ marginTop: '1.25rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <GraduationCap size={18} className="academic-icon" />
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800' }}>JNV Fatehabad</h3>
                                </div>
                                <span className="academic-badge-pill">CBSE</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: '1.6' }}>
                                Higher Secondary Education (PCM)<br />
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>2015 – 2022</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
export { About };
