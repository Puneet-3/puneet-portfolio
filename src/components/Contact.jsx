"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { useScrollStory } from '../hooks/useScrollStory';

const LoaderIcon = () => (
    <svg viewBox="0 0 24 24" width={16} height={16} stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
);

const MailSmallIcon = ({ size = 12 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const LinkedInSmallIcon = ({ size = 12 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const GithubSmallIcon = ({ size = 12 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const Toast = ({ type, text, onClose }) => {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExiting(true);
            setTimeout(onClose, 300);
        }, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast-notification ${type} ${exiting ? 'toast-exit' : ''}`}>
            {type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span>{text}</span>
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false);

    const { ref: headerRef } = useScrollStory({ threshold: 0.1 });
    const { ref: leftColRef } = useScrollStory({ threshold: 0.15 });
    const { ref: formColRef } = useScrollStory({ threshold: 0.15 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setToast(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setToast({ type: 'success', text: 'Transmission received — message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setToast({ type: 'error', text: data.error || 'Failed to send transmission.' });
            }
        } catch (err) {
            console.error(err);
            setToast({ type: 'error', text: 'Network dispatch error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="story-section" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Header */}
            <div className="grid-layout">
                <div ref={headerRef} className="grid-cell span-5 scroll-reveal">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <div className="section-header-flex">
                        <h2 className="section-heading">(get in touch)</h2>
                        <span className="section-chapter-tag">05 // dispatch</span>
                    </div>
                </div>
            </div>

            {/* Form + Channels */}
            <div className="grid-layout">
                {/* Left: Channels */}
                <div className="grid-cell contact-left-cell scroll-reveal" ref={leftColRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '1.5rem' }}>
                        <span className="meta-widget-title">connections.json</span>
                    </div>

                    <p style={{ marginBottom: '2rem', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        Have an interesting project, job opportunity, or want to discuss AI agents, automation pipelines, or full-stack architectures? Send a transmission below.
                    </p>

                    <div className="contact-channels-list">
                        <div className="contact-channel-item">
                            <span className="contact-channel-tag"><MailSmallIcon size={12} /> email /</span>
                            <a href="mailto:puneetpanwar4004@gmail.com" className="contact-channel-link">
                                puneetpanwar4004@gmail.com
                            </a>
                        </div>
                        <div className="contact-channel-item">
                            <span className="contact-channel-tag"><LinkedInSmallIcon size={12} /> linkedin /</span>
                            <a href="https://linkedin.com/in/puneet-panwar" target="_blank" rel="noopener noreferrer" className="contact-channel-link">
                                linkedin.com/in/puneet-panwar
                            </a>
                        </div>
                        <div className="contact-channel-item">
                            <span className="contact-channel-tag"><GithubSmallIcon size={12} /> github /</span>
                            <a href="https://github.com/Puneet-3" target="_blank" rel="noopener noreferrer" className="contact-channel-link">
                                github.com/Puneet-3
                            </a>
                        </div>
                    </div>

                    <div className="dispatch-status-box" style={{ marginTop: '2rem' }}>
                        <div className="dispatch-status-header">
                            <span className="status-indicator-beacon" />
                            <span className="dispatch-status-title">System Status // Online</span>
                        </div>
                        <p className="dispatch-status-desc">Typical response latency &lt; 24 hours</p>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="grid-cell contact-right-cell scroll-reveal" ref={formColRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '2rem' }}>
                        <span className="meta-widget-title">dispatch_console.sh</span>
                    </div>

                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="text-input"
                                placeholder=" "
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <label className={`input-label ${formData.name ? 'floated' : ''}`} htmlFor="name">
                                01 // your name
                            </label>
                        </div>

                        <div className="input-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="text-input"
                                placeholder=" "
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label className={`input-label ${formData.email ? 'floated' : ''}`} htmlFor="email">
                                02 // your email address
                            </label>
                        </div>

                        <div className="input-group">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="textarea-input"
                                placeholder=" "
                                value={formData.message}
                                onChange={handleChange}
                                style={{ resize: 'vertical' }}
                            />
                            <label className={`input-label ${formData.message ? 'floated' : ''}`} htmlFor="message">
                                03 // project briefing or message
                            </label>
                        </div>

                        <div style={{ marginTop: '1.5rem' }}>
                            <button
                                type="submit"
                                className="btn-editorial-submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>transmitting <LoaderIcon /></>
                                ) : (
                                    <>
                                        <span>send transmission</span>
                                        <Send size={15} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {toast && (
                <Toast
                    type={toast.type}
                    text={toast.text}
                    onClose={() => setToast(null)}
                />
            )}
        </section>
    );
};

export default Contact;
export { Contact };
