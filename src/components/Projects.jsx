"use client";

import React, { useState } from 'react';
import { useScrollStory } from '../hooks/useScrollStory';

const GithubIcon = ({ size = 15 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const ExternalLinkIcon = ({ size = 15 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
);

const projectData = [
    {
        id: 8,
        title: 'PayFlow Digital Wallet',
        category: 'web',
        badge: 'featured',
        desc: 'A practice wallet with simulated deposits, peer-to-peer transfers, and transaction history. PostgreSQL transactions, ordered row locks, and idempotency keys keep balance updates and payment retries consistent.',
        tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
        codeLink: 'https://github.com/Puneet-3/PayFlow',
        demoLink: 'https://payflow-git-deploy-vercel-preview-puneet-s-projects46.vercel.app/',
        demoLabel: 'wallet preview'
    },
    {
        id: 1,
        title: 'MedAI Healthcare Platform',
        category: 'web',
        badge: 'featured',
        desc: 'An experimental healthcare platform with role-based workspaces, private medical reports, symptom prediction, pediatric X-ray screening, and authenticated text consultations. Built for learning and demonstration.',
        tags: ['Next.js 16', 'FastAPI', 'PyTorch', 'Prisma', 'Supabase', 'Socket.IO'],
        codeLink: 'https://github.com/Puneet-3/MedAI-Platform',
        demoLink: 'https://v0-med-ai-p.vercel.app/'
    },
    {
        id: 2,
        title: 'Real-Time Posture Detection',
        category: 'ml',
        badge: 'computer vision',
        desc: 'A real-time posture detection system using MediaPipe and OpenCV that alerts users when bad sitting posture is detected via webcam to prevent back/neck pain.',
        tags: ['MediaPipe', 'OpenCV', 'Python', 'Computer Vision'],
        codeLink: 'https://github.com/Puneet-3/Real_Time_Posture_Detection_System',
        demoLink: null
    },
    {
        id: 3,
        title: 'Human Pose Estimation',
        category: 'ml',
        badge: 'ml & cv',
        desc: 'Real-time human pose estimation and joint tracking using Python and Machine Learning models (MediaPipe/OpenCV) for analyzing body orientation.',
        tags: ['MediaPipe', 'OpenCV', 'Python', 'ML', 'SciKit-Learn'],
        codeLink: 'https://github.com/Puneet-3/human-pose-estimation-using-machine-learning',
        demoLink: null
    },
    {
        id: 4,
        title: 'Fake News Detection',
        category: 'ml',
        badge: 'nlp',
        desc: 'A hybrid BERT + TF-IDF ensemble model designed to detect and flag fake news on large-scale text data. Deployed via Docker with a Flask REST API.',
        tags: ['BERT', 'TF-IDF', 'Python', 'Flask', 'Docker', 'NLP'],
        codeLink: 'https://github.com/Puneet-3/Fake_News_Detection_BERT',
        demoLink: null
    },
    {
        id: 5,
        title: 'Paper Trading Platform',
        category: 'web',
        badge: 'full-stack',
        desc: 'A full-stack trading simulator with private accounts, sample stock quotes, simulated orders, portfolio tracking, and virtual deposits. Uses virtual funds for an educational trading experience.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
        codeLink: 'https://github.com/Puneet-3/stock-trading-platform',
        demoLink: 'https://stock-trading-platform-seven.vercel.app/'
    },
    {
        id: 6,
        title: 'Nintendo Switch Chatbox',
        category: 'web',
        badge: 'interactive',
        desc: 'A rule-based chatbot with a pixel-perfect Nintendo Switch-inspired CSS UI. Powered by a FastAPI backend and NLTK regex pattern matching.',
        tags: ['FastAPI', 'NLTK', 'HTML5', 'CSS3', 'JavaScript', 'Python'],
        codeLink: 'https://github.com/Puneet-3/nintendo-switch-chatbox',
        demoLink: null
    },
    {
        id: 7,
        title: 'Spotify Player UI',
        category: 'web',
        badge: 'frontend',
        desc: 'A responsive Spotify-inspired web player interface built with HTML, CSS, and JavaScript.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        codeLink: 'https://github.com/Puneet-3/spotify_clone',
        demoLink: null
    },
    {
        id: 9,
        title: 'Voice Cart Shopping Assistant',
        category: 'web',
        badge: 'voice & nlp',
        desc: 'A voice-driven shopping cart and warehouse inventory interface with natural-language commands, quantity parsing, multilingual vocabulary, and contextual product suggestions.',
        tags: ['JavaScript', 'Express', 'Web Speech API', 'NLP'],
        codeLink: 'https://github.com/Puneet-3/voice-shopping-assistant',
        demoLink: null
    },
    {
        id: 10,
        title: 'Sarkari Scam Detector',
        category: 'ml',
        badge: 'nlp',
        desc: 'A Flask dashboard that flags suspicious government-scheme messages in Hindi, Hinglish, and English, with single-message checks, CSV processing, and privacy-preserving analytics. Predictions are model estimates.',
        tags: ['Python', 'Flask', 'NLP', 'Scikit-learn'],
        codeLink: 'https://github.com/Puneet-3/sarkari-scam-detector',
        demoLink: 'https://sarkari-scam-detector-el04es4nd-puneet-s-projects46.vercel.app/',
        demoLabel: 'preview (sign-in required)'
    },
    {
        id: 11,
        title: 'Eco-Loop Building Agents',
        category: 'ml',
        badge: 'ai agents',
        desc: 'A building-energy simulation prototype that connects EnergyPlus to a local Qwen model through MCP. The agent adjusts HVAC setpoints using sensor feedback and thermal-comfort calculations, with a dashboard for comparing simulation runs.',
        tags: ['Python', 'EnergyPlus', 'Ollama', 'MCP', 'React'],
        codeLink: 'https://github.com/Puneet-3/eco-loop-building-agents',
        demoLink: null
    }
];

const ProjectCard = ({ project, index }) => {
    const { ref, isInView } = useScrollStory({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`project-card scroll-reveal ${isInView ? 'revealed' : ''}`}
            style={{
                transitionDelay: `${(index % 3) * 0.08}s`
            }}
        >
            <div className="project-card-header">
                <span className="project-category">{project.badge}</span>
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="project-tags">
                {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="project-link-row">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label={`View ${project.title} on GitHub`}>
                    <GithubIcon size={14} /> <span>github</span>
                </a>
                {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link-btn demo-btn" aria-label={`Open ${project.title}: ${project.demoLabel || 'live demo'}`}>
                        <ExternalLinkIcon size={14} /> <span>{project.demoLabel || 'live demo'}</span>
                    </a>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const { ref: headerRef } = useScrollStory({ threshold: 0.1 });

    const filteredProjects = projectData.filter(
        project => filter === 'all' || project.category === filter
    );

    return (
        <section id="projects" className="story-section" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Header row + Filter buttons */}
            <div className="grid-layout">
                <div className="grid-cell project-title-cell scroll-reveal" ref={headerRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="section-header-flex">
                        <h2 className="section-heading">(selected works)</h2>
                        <span className="section-chapter-tag">03 // artifacts</span>
                    </div>
                </div>

                <div className="grid-cell project-filter-cell" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.25rem' }}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    {[
                        { key: 'all', label: '(all)' },
                        { key: 'web', label: '(web apps)' },
                        { key: 'ml', label: '(ml & ai)' },
                    ].map(f => (
                        <button
                            key={f.key}
                            className={`filter-btn ${filter === f.key ? 'active' : ''}`}
                            aria-pressed={filter === f.key}
                            onClick={() => setFilter(f.key)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid of Project Cards */}
            <div className="grid-layout">
                <div className="grid-cell span-5" style={{ padding: '3rem 2.5rem' }}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>

                    <div className="projects-editorial-grid" key={filter}>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
export { Projects };
