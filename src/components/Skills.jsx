"use client";

import React from 'react';
import { useScrollStory } from '../hooks/useScrollStory';
import { Code, Cpu, Globe, Cloud, Bot } from 'lucide-react';

const skillGroups = [
    {
        title: 'Programming Languages',
        icon: '⌘',
        lucideIcon: Code,
        skills: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML / CSS']
    },
    {
        title: 'ML & Data Science',
        icon: '◈',
        lucideIcon: Cpu,
        skills: ['PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'BERT / NLP', 'TF-IDF']
    },
    {
        title: 'Web Development',
        icon: '◇',
        lucideIcon: Globe,
        skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'FastAPI', 'Flask']
    },
    {
        title: 'Cloud & DevOps',
        icon: '△',
        lucideIcon: Cloud,
        skills: ['AWS (EC2, S3)', 'Docker', 'Git / GitHub', 'CI/CD', 'Vercel', 'Render']
    },
    {
        title: 'AI Automation & Agents',
        icon: '✦',
        lucideIcon: Bot,
        skills: ['MCP Runtimes', 'n8n Workflows', 'RAG Pipelines', 'LLM Integrations', 'Agentic Nodes']
    }
];

const SkillGroupCard = ({ group, index }) => {
    const { ref, isInView } = useScrollStory({ threshold: 0.1 });
    const LucideComp = group.lucideIcon;

    return (
        <div
            ref={ref}
            className={`skills-group-card scroll-reveal ${isInView ? 'revealed' : ''}`}
            style={{
                transitionDelay: `${index * 0.08}s`
            }}
        >
            <div className="skills-group-title">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="skill-group-symbol">{group.icon}</span>
                    <LucideComp size={15} />
                    <span>{group.title}</span>
                </div>
                <span className="skill-group-index">0{index + 1}</span>
            </div>

            <div className="skills-tags-wrap">
                {group.skills.map((skill, i) => (
                    <span
                        key={i}
                        className="skill-tag-pill"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const { ref: headerRef } = useScrollStory({ threshold: 0.1 });

    return (
        <section id="skills" className="story-section" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Header */}
            <div className="grid-layout">
                <div ref={headerRef} className="grid-cell span-5 scroll-reveal">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <div className="section-header-flex">
                        <h2 className="section-heading">(capabilities)</h2>
                        <span className="section-chapter-tag">04 // arsenal</span>
                    </div>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="grid-layout">
                <div className="grid-cell span-5" style={{ padding: '3rem 2.5rem' }}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>

                    <div className="skills-grid-container">
                        {skillGroups.map((group, index) => (
                            <SkillGroupCard
                                key={index}
                                group={group}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
export { Skills };
