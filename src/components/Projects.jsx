"use client";

import React, { useState } from 'react';

const GithubIcon = ({ size = 18, className = "" }) => (
    <svg 
        viewBox="0 0 24 24" 
        width={size} 
        height={size} 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`lucide lucide-github ${className}`}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const ExternalLinkIcon = ({ size = 18 }) => (
    <svg 
        viewBox="0 0 24 24" 
        width={size} 
        height={size} 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="lucide lucide-external-link"
    >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
);

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projectData = [
        {
            id: 1,
            title: 'Fake News Detection',
            category: 'ml',
            badge: 'ml & ai pipelines',
            desc: 'A hybrid BERT + TF-IDF ensemble model designed to detect and flag fake news on large-scale text data. Deployed via Docker with a Flask REST API.',
            tags: ['BERT', 'TF-IDF', 'Python', 'Flask', 'Docker'],
            codeLink: 'https://github.com/Puneet-3',
            demoLink: '#'
        },
        {
            id: 2,
            title: 'Zerodha Trading Clone',
            category: 'web',
            badge: 'full-stack applications',
            desc: 'A responsive full-stack trading application simulating stock orders, portfolio tracking, and real-time market data API consumption.',
            tags: ['React.js', 'Node.js', 'Express', 'REST API', 'AWS EC2'],
            codeLink: 'https://github.com/Puneet-3',
            demoLink: '#'
        },
        {
            id: 3,
            title: 'Spotify Clone',
            category: 'web',
            badge: 'frontend interfaces',
            desc: 'Lightweight replication of the Spotify player UI. Optimized using Web Audio API buffer management for latency-free music playback.',
            tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Web Audio API'],
            codeLink: 'https://github.com/Puneet-3',
            demoLink: '#'
        }
    ];

    const filteredProjects = projectData.filter(
        project => filter === 'all' || project.category === filter
    );

    return (
        <section id="projects" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: Header + Filter tabs */}
            <div className="grid-layout">
                {/* Col 1 & 2: Title (Merged with Left Gutter) */}
                <div className="grid-cell project-title-cell">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', textTransform: 'lowercase', letterSpacing: '-1px' }}>
                        (selected works)
                    </h2>
                </div>

                {/* Col 3, 4 & 5: Sleek Lowercase Filter Tabs (Merged with Right Gutter) */}
                <div className="grid-cell project-filter-cell" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    
                    <button 
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        (all)
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                        onClick={() => setFilter('web')}
                    >
                        (web apps)
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'ml' ? 'active' : ''}`}
                        onClick={() => setFilter('ml')}
                    >
                        (ml & ai)
                    </button>
                </div>
            </div>

            {/* Row 2: Grid of Project Cards */}
            <div className="grid-layout">
                {/* Col 1-5: Grid of Project Cards (Merged with Gutters) */}
                <div className="grid-cell span-5">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>

                    <div className="projects-editorial-grid">
                        {filteredProjects.map(project => (
                            <div key={project.id} className="project-card">
                                <div className="project-card-header">
                                    <span className="project-category">{project.badge}</span>
                                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>0{project.id}/</span>
                                </div>
                                
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                
                                <div className="project-link-row">
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        <GithubIcon size={15} /> github
                                    </a>
                                    <a href={project.demoLink} className="project-link-btn">
                                        <ExternalLinkIcon size={15} /> demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .filter-btn {
                    background: transparent;
                    border: none;
                    font-family: var(--font-main);
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-transform: lowercase;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: color var(--transition-fast);
                    padding: 0.25rem 0.5rem;
                    position: relative;
                }
                .filter-btn.active, .filter-btn:hover {
                    color: var(--text-primary);
                }
                .filter-btn.active::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0.5rem;
                    right: 0.5rem;
                    height: 1.5px;
                    background-color: var(--text-primary);
                }
                
                .projects-editorial-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 2rem;
                    width: 100%;
                }

                @media (max-width: 576px) {
                    .projects-editorial-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
export { Projects };
