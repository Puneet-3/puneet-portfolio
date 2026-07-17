import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
    const headingRef = useScrollReveal();
    const contentRef = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="about" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Header row for About section */}
            <div className="grid-layout">
                <div className="grid-cell span-5 scroll-reveal" ref={headingRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <h2 className="section-heading">(about me)</h2>
                </div>
            </div>

            {/* Main content grid for About section */}
            <div className="grid-layout">
                {/* Column 1, 2 & 3: Journey Story */}
                <div className="grid-cell about-left-cell scroll-reveal" ref={contentRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '2rem' }}>
                        <span className="meta-widget-title">narrative.txt</span>
                    </div>

                    <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                        I am a developer bridging the gap between <em>intelligent machine learning models</em> and fluid, user-friendly frontend interfaces.
                    </p>
                    <p style={{ fontSize: '1.05rem' }}>
                        With an academic foundation in AI/ML at <strong>VIT Bhopal University</strong>, I specialize in engineering automated workflows, deploying agentic nodes, and building web applications that scale.
                    </p>
                </div>

                {/* Column 4 & 5: Education History */}
                <div className="grid-cell about-right-cell">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '2rem' }}>
                        <span className="meta-widget-title">academic_history.json</span>
                    </div>

                    {/* Education Item 1 */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>VIT Bhopal</h3>
                            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>CGPA: 8.83</span>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                            B.Tech., Computer Science (AI & ML)<br />
                            2023 – Present
                        </p>
                    </div>

                    {/* Education Item 2 */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>JNV Fatehabad</h3>
                            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>CBSE</span>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                            Higher Secondary Education<br />
                            2015 – 2022
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
