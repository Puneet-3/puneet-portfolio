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
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);

    // Scroll progress listener
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
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Load theme in useEffect to prevent SSR hydration mismatches
    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

        // System Clock Logic
        const updateClock = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour12: true });
            const dateStr = now.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
            setCurrentTime(timeStr);
            setCurrentDate(dateStr);
        };
        updateClock();
        const timer = setInterval(updateClock, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const body = document.body;
        if (!body) return;
        if (theme === 'dark') {
            body.className = 'dark-mode';
        } else {
            body.className = 'light-mode';
        }
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    return (
        <div className="app-container">
            {/* Scrolling progress indicator */}
            <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

            {/* Liquid glass background blobs */}
            <div className="glass-blobs-wrapper">
                <div className="glass-blob blob-1"></div>
                <div className="glass-blob blob-2"></div>
                <div className="glass-blob blob-3"></div>
                <div className="glass-blob blob-4"></div>
            </div>

            <div className="zine-canvas">
                <div className="canvas-content">
                    {/* Floating pill navigation bar */}
                    <Navbar theme={theme} setTheme={setTheme} />

                    {/* Main Content Sections */}
                    <main>
                        <Hero theme={theme} currentTime={currentTime} currentDate={currentDate} />
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
