import React from 'react';
import AboutPortrait from './AboutPortrait';

const Hero = () => {
    return (
        <section id="hero" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: The Massive Editorial Header */}
            <div className="grid-layout">
                <div className="grid-cell span-5" style={{ justifyContent: 'center', alignItems: 'center', padding: '5rem 2.5rem', borderRight: 'none' }}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <h1 className="hero-large-title" style={{ textAlign: 'center', width: '100%' }}>
                        Puneet<span className="serif-italic">Panwar</span>
                    </h1>
                </div>
            </div>

            {/* Row 2: Content Breakdown */}
            <div className="grid-layout">
                {/* Col 1 & 2: Profile Pitch (Merged with Left Gutter) */}
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
                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
                        <a href="#projects" className="btn-editorial">
                            view projects
                        </a>
                        <a href="#contact" className="btn-editorial" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-app)' }}>
                            connect
                        </a>
                    </div>
                </div>

                {/* Col 3: Interactive Geometric Sketch Portrait Card */}
                <div className="grid-cell" style={{ padding: '2rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <AboutPortrait />
                </div>

                {/* Col 4 & 5: Bio / Education / Location Metadata (Merged with Right Gutter) */}
                <div className="grid-cell span-2 hero-side-cell">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    {/* <div className="meta-widget" style={{ marginBottom: '2.5rem' }}>
                        <span className="meta-widget-title">origin.info</span>
                        <span className="meta-widget-value">Based in Bangalore, India</span>
                    </div> */}

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

            <style jsx>{`
                .btn-editorial {
                    padding: 0.7rem 1.5rem;
                    border: 1px solid var(--text-primary);
                    background: transparent;
                    color: var(--text-primary);
                    font-size: 0.85rem;
                    text-transform: lowercase;
                    text-decoration: none;
                    font-weight: 700;
                    letter-spacing: -0.2px;
                    transition: background-color var(--transition-fast), color var(--transition-fast);
                    border-radius: 4px;
                }
                .btn-editorial:hover {
                    background-color: var(--text-primary);
                    color: var(--bg-app);
                }
            `}</style>
        </section>
    );
};

export default Hero;
export { Hero };
