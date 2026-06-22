"use client";

import React from 'react';

const Skills = () => {
    const skillGroups = [
        {
            title: 'programming languages',
            skills: ['Java', 'Python', 'C++', 'JavaScript', 'SQL', 'HTML / CSS']
        },
        {
            title: 'ml & data science',
            skills: ['Scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'BERT / NLP', 'TF-IDF']
        },
        {
            title: 'web development',
            skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Flask']
        },
        {
            title: 'cloud & devops',
            skills: ['AWS (EC2, S3)', 'Docker', 'Git / GitHub', 'CI/CD']
        },
        {
            title: 'ai automation & agents',
            skills: ['MCP Runtimes', 'n8n Workflows', 'RAG Pipelines', 'LLM Integrations']
        }
    ];

    return (
        <section id="skills" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: Header */}
            <div className="grid-layout">
                <div className="grid-cell span-5">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', textTransform: 'lowercase', letterSpacing: '-1px' }}>
                        (capabilities)
                    </h2>
                </div>
            </div>

            {/* Row 2: Editorial Skills List */}
            <div className="grid-layout">
                {/* Col 1-5: Editorial Skills List (Merged with Gutters) */}
                <div className="grid-cell span-5">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>

                    <div style={{ width: '100%' }}>
                        {skillGroups.map((group, index) => (
                            <div key={index} className="skills-editorial-grid">
                                <h3 className="skills-category-title" style={{ textTransform: 'lowercase' }}>
                                    {group.title}
                                </h3>
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
