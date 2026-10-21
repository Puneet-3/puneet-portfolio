"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    const [theme, setTheme] = useState('dark');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Subtle scroll progress listener for the top indicator
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(progress);
            } else {
                setScrollProgress(0);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Load saved theme or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

        // Dismiss loading screen quickly & cleanly
        const timer = setTimeout(() => setIsLoading(false), 900);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const body = document.body;
        if (!body) return;
        body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    return (
        <div className="app-container">
            {/* Loading Screen */}
            <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
                <div className="loading-logo">puneet.panwar</div>
                <div className="loading-bar-track">
                    <div className="loading-bar-fill" />
                </div>
            </div>

            {/* Minimalist Top Scroll Progress Bar */}
            <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

            {/* Ambient Background Glows */}
            <div className="glass-blobs-wrapper">
                <div className="glass-blob blob-1"></div>
                <div className="glass-blob blob-2"></div>
                <div className="glass-blob blob-3"></div>
                <div className="glass-blob blob-4"></div>
            </div>

            <div className="zine-canvas">
                <div className="canvas-content">
                    {/* Header Navbar */}
                    <Navbar theme={theme} setTheme={setTheme} />

                    {/* Main Sections */}
                    <main>
                        <Hero theme={theme} />
                        <About theme={theme} />
                        <Experience />
                        <Projects />
                        <Skills />
                        <Contact />
                    </main>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </div>
    );
}
