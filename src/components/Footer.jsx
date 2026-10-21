"use client";

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollStory } from '../hooks/useScrollStory';

const GithubIcon = ({ size = 18 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const MailIcon = ({ size = 18 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const Footer = () => {
    const { ref: footerRef } = useScrollStory({ threshold: 0.1 });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="grid-layout" style={{ borderBottom: 'none', padding: '0' }}>
            <div
                ref={footerRef}
                className="grid-cell span-5 scroll-reveal"
                style={{ padding: '3.5rem 2.5rem', alignItems: 'center', justifyContent: 'center' }}
            >
                <div className="plus-intersection plus-top-left">+</div>
                <div className="plus-intersection plus-top-right">+</div>
                <div className="plus-intersection plus-bottom-left">+</div>
                <div className="plus-intersection plus-bottom-right">+</div>

                <div className="footer-content">
                    <div className="footer-social-links">
                        <a href="https://github.com/Puneet-3" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                            <GithubIcon size={18} />
                        </a>
                        <a href="https://linkedin.com/in/puneet-panwar" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                            <LinkedInIcon size={18} />
                        </a>
                        <a href="mailto:puneetpanwar4004@gmail.com" className="footer-social-link" aria-label="Email">
                            <MailIcon size={18} />
                        </a>
                    </div>

                    <div className="footer-text">
                        <p>&copy; {new Date().getFullYear()} Puneet Panwar. All rights reserved.</p>
                        <p style={{ opacity: 0.7, marginTop: '0.25rem' }}>built with next.js, three.js, and custom grid vectors.</p>
                    </div>

                    <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
export { Footer };
