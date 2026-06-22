"use client";

import React, { useState } from 'react';

const LoaderIcon = () => (
    <svg 
        viewBox="0 0 24 24" 
        width="16" 
        height="16" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="animate-spin"
        style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '0.5rem' }}
    >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', text: '' });

        // Simulate API post
        setTimeout(() => {
            setLoading(false);
            setStatus({
                type: 'success',
                text: 'thank you. message received successfully.'
            });
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setStatus({ type: '', text: '' });
            }, 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: Header */}
            <div className="grid-layout">
                <div className="grid-cell span-5">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', textTransform: 'lowercase', letterSpacing: '-1px' }}>
                        (get in touch)
                    </h2>
                </div>
            </div>

            {/* Row 2: Form + Details Grid */}
            <div className="grid-layout">
                {/* Col 1 & 2: Text Description & Social Links (Merged with Left Gutter) */}
                <div className="grid-cell contact-left-cell">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '1.5rem' }}>
                        <span className="meta-widget-title">connections.json</span>
                    </div>

                    <p style={{ marginBottom: '2.5rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                        Have an interesting project, job opportunity, or just want to chat about AI agents, automation pipelines, or Next.js? Drop me a line.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>email /</span>
                            <br />
                            <a href="mailto:puneetpanwar4004@gmail.com" style={{ fontSize: '1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600' }}>
                                puneetpanwar4004@gmail.com
                            </a>
                        </div>
                        <div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>linkedin /</span>
                            <br />
                            <a href="https://linkedin.com/in/puneet-panwar" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600' }}>
                                linkedin.com/in/puneet-panwar
                            </a>
                        </div>
                        <div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>github /</span>
                            <br />
                            <a href="https://github.com/Puneet-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600' }}>
                                github.com/Puneet-3
                            </a>
                        </div>
                    </div>
                </div>

                {/* Col 3, 4 & 5: Form (Merged with Right Gutter) */}
                <div className="grid-cell contact-right-cell">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '2rem' }}>
                        <span className="meta-widget-title">dispatch_center.sh</span>
                    </div>

                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <div className="input-group">
                            <label className="input-label" htmlFor="name">name /</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="text-input"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="input-group">
                            <label className="input-label" htmlFor="email">email /</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="text-input"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label" htmlFor="message">message /</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="4" 
                                required 
                                className="textarea-input"
                                value={formData.message}
                                onChange={handleChange}
                                style={{ resize: 'vertical' }}
                            />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                            <button 
                                type="submit" 
                                className="btn-editorial-submit"
                                disabled={loading}
                            >
                                {loading ? 'sending...' : 'send message'}
                                {loading && <LoaderIcon />}
                            </button>

                            {status.text && (
                                <span 
                                    style={{ 
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.85rem', 
                                        color: status.type === 'success' ? 'var(--text-primary)' : '#ef4444',
                                    }}
                                >
                                    ✦ {status.text}
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                :global(.animate-spin) {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Contact;
export { Contact };
