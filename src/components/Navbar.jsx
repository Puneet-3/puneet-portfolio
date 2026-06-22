"use client";

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, setTheme }) => {
    const [mobileActive, setMobileActive] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSectionId = 'hero';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute('id');
                }
            });
            setActiveSection(currentSectionId);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className="navbar">
            <div className="nav-grid">
                {/* Column 1: Logo */}
                <div className="nav-cell logo-cell">
                    <a href="#" className="logo">
                        puneet.panwar
                    </a>
                </div>

                {/* Column 2: Empty Spacer */}
                <div className="nav-cell spacer-cell-1" />

                {/* Column 3: Navigation Links */}
                <div className="nav-cell links-cell">
                    <nav style={{ width: '100%' }}>
                        <ul className="nav-menu-links">
                            <li>
                                <a
                                    href="#projects"
                                    className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                                >
                                    works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                                >
                                    skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                >
                                    about
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                >
                                    contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Column 4: Theme Toggle */}
                <div className="nav-cell spacer-cell-2" style={{ justifyContent: 'center' }}>
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle-btn"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                    </button>
                </div>

                {/* Column 5: Open to work star badge */}
                <div className="nav-cell badge-cell" style={{ justifyContent: 'flex-end' }}>
                    <div className="open-to-work-badge">
                        <span className="star-icon" style={{ fontSize: '1rem', display: 'inline-block', lineHeight: '1' }}>✦</span>
                        <span>open to work</span>
                    </div>

                    {/* Mobile Hamburger Icon (visible on small viewports) */}
                    <button
                        onClick={() => setMobileActive(!mobileActive)}
                        className="mobile-toggle-btn"
                        aria-label="Toggle Mobile Menu"
                    >
                        {mobileActive ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown Overlay */}
            {mobileActive && (
                <div className="mobile-nav-overlay">
                    <ul className="mobile-menu-links">
                        <li>
                            <a
                                href="#projects"
                                className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                                onClick={() => setMobileActive(false)}
                            >
                                (works)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className={`mobile-nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                                onClick={() => setMobileActive(false)}
                            >
                                (skills)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                onClick={() => setMobileActive(false)}
                            >
                                (about)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={() => setMobileActive(false)}
                            >
                                (contact)
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            <style jsx>{`
                .mobile-toggle-btn {
                    display: none;
                    background: transparent;
                    border: none;
                    color: var(--text-primary);
                    cursor: pointer;
                }

                .mobile-nav-overlay {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: var(--bg-app);
                    border-bottom: 1px solid var(--border-color);
                    padding: 1.5rem 0;
                    z-index: 99;
                    box-shadow: var(--shadow-md);
                    animation: slideDown 0.25s ease-out;
                }

                .mobile-menu-links {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    list-style: none;
                }

                .mobile-nav-link {
                    font-family: var(--font-main);
                    font-size: 0.95rem;
                    text-transform: lowercase;
                    text-decoration: none;
                    color: var(--text-secondary);
                    padding: 0.5rem 2rem;
                    border-radius: 30px;
                    border: 1px solid var(--border-color);
                    background: rgba(255, 255, 255, 0.45);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.01);
                    transition: all var(--transition-medium);
                    display: inline-block;
                    min-width: 160px;
                    text-align: center;
                }

                :global(.dark-mode) .mobile-nav-link {
                    background: rgba(255, 255, 255, 0.03);
                    box-shadow: inset 0 1px 0px rgba(255, 255, 255, 0.05), 0 4px 15px rgba(0, 0, 0, 0.15);
                }

                .mobile-nav-link.active, .mobile-nav-link:hover {
                    color: var(--text-primary);
                    border-color: var(--border-hover);
                    background: rgba(255, 255, 255, 0.85);
                    transform: scale(1.02);
                }

                :global(.dark-mode) .mobile-nav-link.active, :global(.dark-mode) .mobile-nav-link:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: var(--text-primary);
                }

                @keyframes slideDown {
                    from { transform: translateY(-10px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @media (max-width: 992px) {
                    .nav-grid {
                        grid-template-columns: 1fr auto auto !important;
                        padding: 0 1.5rem;
                    }
                    .logo-cell {
                        display: flex !important;
                    }
                    .spacer-cell-1, .links-cell, .spacer-cell-2 {
                        display: none !important;
                    }
                    .badge-cell {
                        display: flex !important;
                        gap: 1.5rem;
                    }
                    .open-to-work-badge {
                        display: flex;
                    }
                    .mobile-toggle-btn {
                        display: block;
                    }
                }

                @media (max-width: 480px) {
                    .open-to-work-badge {
                        display: none; /* Hide badge on extremely small screens */
                    }
                }
            `}</style>
        </header>
    );
};

export default Navbar;
