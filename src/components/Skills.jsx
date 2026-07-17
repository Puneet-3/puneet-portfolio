"use client";

import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const skillGroups = [
    {
        title: 'Programming Languages',
        icon: '⌘',
        skills: ['Java', 'Python', 'C++', 'JavaScript', 'SQL', 'HTML / CSS']
    },
    {
        title: 'ML & Data Science',
        icon: '◈',
        skills: ['Scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'BERT / NLP', 'TF-IDF']
    },
    {
        title: 'Web Development',
        icon: '◇',
        skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Flask']
    },
    {
        title: 'Cloud & DevOps',
        icon: '△',
        skills: ['AWS (EC2, S3)', 'Docker', 'Git / GitHub', 'CI/CD']
    },
    {
        title: 'AI Automation & Agents',
        icon: '✦',
        skills: ['MCP Runtimes', 'n8n Workflows', 'RAG Pipelines', 'LLM Integrations']
    }
];

const Skills = () => {
    const headingRef = useScrollReveal();
    const gridRef = useScrollReveal({ threshold: 0.05 });

    return (
        <section id="skills" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: Header */}
            <div className="grid-layout">
                <div className="grid-cell span-5 scroll-reveal" ref={headingRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <h2 className="section-heading">(capabilities)</h2>
                </div>
            </div>

            {/* Row 2: Glassmorphic Skill Cards */}
            <div className="grid-layout">
                <div className="grid-cell span-5 scroll-reveal" ref={gridRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>

                    <div className="skills-grid-container">
                        {skillGroups.map((group, index) => (
                            <div key={index} className="skills-group-card">
                                <div className="skills-group-title">
                                    <span style={{ marginRight: '0.5rem', fontSize: '0.85rem' }}>{group.icon}</span>
                                    {group.title}
                                </div>
                                <div className="skills-tags-wrap">
                                    {group.skills.map((skill, i) => (
                                        <span key={i} className="skill-tag-pill">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
export { Skills };
