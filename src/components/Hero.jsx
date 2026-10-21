"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowDownRight } from 'lucide-react';
import AboutPortrait from './AboutPortrait';

const ROLES = [
    'AI/ML Engineer',
    'Frontend Developer',
    'AI Automation Specialist',
    'Full-Stack Builder',
];

const Hero = ({ theme }) => {
    const [roleText, setRoleText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect
    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        let timeout;

        if (!isDeleting) {
            if (roleText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setRoleText(currentRole.slice(0, roleText.length + 1));
                }, 70);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (roleText.length > 0) {
                timeout = setTimeout(() => {
                    setRoleText(roleText.slice(0, -1));
                }, 40);
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [roleText, isDeleting, roleIndex]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: The Massive Editorial Header */}
            <div className="grid-layout">
                <div
                    className="grid-cell span-5 hero-title-cell"
                    style={{ justifyContent: 'center', alignItems: 'center', padding: '3.5rem 2.5rem 2rem', borderRight: 'none' }}
                >
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>

                    <div className="hero-chapter-badge">
                        <span>00 // prologue</span>
                    </div>

                    <h1 className="hero-large-title" style={{ textAlign: 'center', width: '100%' }}>
                        Puneet<span className="serif-italic">Panwar</span>
                    </h1>

                    <div className="hero-role-text" style={{ textAlign: 'center' }}>
                        {roleText}<span className="typing-cursor" />
                    </div>
                </div>
            </div>

            {/* Row 2: Content Breakdown */}
            <div className="grid-layout">
                {/* Col 1 & 2: Profile Pitch */}
                <div className="grid-cell span-2 hero-side-cell">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '1.5rem' }}>
                        <span className="meta-widget-title">focus.md</span>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '-0.3px' }}>AI/ML &amp; Frontend</h2>
                    </div>

                    <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                        Seasoned developer with <em className="serif-italic">strengths</em> in NLP, machine learning workflows, and interactive modern interfaces. Passionate about orchestrating workflow agent nodes and deploying models that scale.
                    </p>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn-editorial-filled">
                            <span>view projects</span>
                            <ArrowDownRight size={15} />
                        </a>
                        <a href="#contact" className="btn-editorial">
                            <span>connect</span>
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <div className="scroll-indicator" onClick={scrollToAbout} role="button" tabIndex={0}>
                        <span className="scroll-indicator-text">scroll to explore</span>
                        <div className="scroll-indicator-beacon">
                            <ChevronDown size={16} className="scroll-indicator-chevron" />
                        </div>
                    </div>
                </div>

                {/* Col 3: Interactive Portrait Card with Puneet's Photo */}
                <div className="grid-cell hero-portrait-cell" style={{ padding: '1.5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <AboutPortrait />
                </div>

                {/* Col 4 & 5: Bio / Education / Location Metadata */}
                <div className="grid-cell span-2 hero-side-cell">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '1.75rem' }}>
                        <span className="meta-widget-title">education.edu</span>
                        <span className="meta-widget-value">
                            VIT Bhopal Final Year<br />
                            B.Tech. CS (AI &amp; ML)
                        </span>
                    </div>

                    <div className="meta-widget" style={{ marginBottom: '1.75rem' }}>
                        <span className="meta-widget-title">specialty.json</span>
                        <span className="meta-widget-value">
                            Transformers, RAG Systems, Next.js, and Python Backends
                        </span>
                    </div>

                    <div className="meta-widget">
                        <span className="meta-widget-title">status.log</span>
                        <span className="meta-widget-value" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <span className="status-indicator-beacon" />
                            <span>available for hire · remote / hybrid</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
export { Hero };
