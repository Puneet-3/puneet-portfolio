"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import AboutPortrait from './AboutPortrait';

const ROLES = [
    'AI/ML Engineer',
    'Frontend Developer',
    'AI Automation Specialist',
    'Full-Stack Builder',
];

const Hero = () => {
    const [roleText, setRoleText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect
    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        let timeout;

        if (!isDeleting) {
            // Typing forward
            if (roleText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setRoleText(currentRole.slice(0, roleText.length + 1));
                }, 70);
            } else {
                // Pause at full word
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            // Deleting
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

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: The Massive Editorial Header */}
            <div className="grid-layout">
                <div className="grid-cell span-5" style={{ justifyContent: 'center', alignItems: 'center', padding: '5rem 2.5rem 3rem', borderRight: 'none' }}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
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
                    <div className="meta-widget" style={{ marginBottom: '2rem' }}>
                        <span className="meta-widget-title">focus.md</span>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: '800' }}>AI/ML & Frontend</h2>
                    </div>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                        Seasoned developer with <em>strengths</em> in NLP, machine learning workflows, and interactive modern interfaces. Passionate about orchestrating workflow agent nodes and deploying models that scale.
                    </p>
                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn-editorial-filled">
                            <span>view projects</span>
                        </a>
                        <a href="#contact" className="btn-editorial">
                            <span>connect</span>
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <div className="scroll-indicator" onClick={scrollToProjects}>
                        <span className="scroll-indicator-text">scroll</span>
                        <ChevronDown size={16} className="scroll-indicator-chevron" />
                    </div>
                </div>

                {/* Col 3: Interactive Portrait Card */}
                <div className="grid-cell" style={{ padding: '2rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <AboutPortrait />
                </div>

                {/* Col 4 & 5: Bio / Education / Location Metadata */}
                <div className="grid-cell span-2 hero-side-cell">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '2.5rem' }}>
                        <span className="meta-widget-title">education.edu</span>
                        <span className="meta-widget-value">
                            VIT Bhopal Final Year<br />
                            B.Tech. CS (AI & ML)
                        </span>
                    </div>

                    <div className="meta-widget">
                        <span className="meta-widget-title">specialty.json</span>
                        <span className="meta-widget-value">
                            Transformers, RAG Systems, Next.js, and Python Backends
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
export { Hero };
