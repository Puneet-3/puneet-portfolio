"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const LoaderIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
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

    const headingRef = useScrollReveal();
    const formRef = useScrollReveal({ threshold: 0.1 });

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
                setToast({ type: 'success', text: 'Message sent successfully — thank you!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setToast({ type: 'error', text: data.error || 'Failed to send message.' });
            }
        } catch (err) {
            console.error(err);
            setToast({ type: 'error', text: 'An error occurred. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" style={{ borderBottom: 'none', padding: '0' }}>
            {/* Row 1: Header */}
            <div className="grid-layout">
                <div className="grid-cell span-5 scroll-reveal" ref={headingRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>
                    <div className="plus-intersection plus-top-right">+</div>
                    <div className="plus-intersection plus-bottom-right">+</div>
                    <h2 className="section-heading">(get in touch)</h2>
                </div>
            </div>

            {/* Row 2: Form + Details Grid */}
            <div className="grid-layout">
                {/* Col 1 & 2: Text Description & Social Links */}
                <div className="grid-cell contact-left-cell scroll-reveal" ref={formRef}>
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '1.5rem' }}>
                        <span className="meta-widget-title">connections.json</span>
                    </div>

                    <p style={{ marginBottom: '2.5rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                        Have an interesting project, job opportunity, or just want to chat about AI agents, automation pipelines, or Next.js? Drop me a line.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>email /</span>
                            <br />
                            <a href="mailto:puneetpanwar4004@gmail.com" style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid transparent', transition: 'border-color 0.2s' }} onMouseOver={e => e.target.style.borderBottomColor = 'var(--text-primary)'} onMouseOut={e => e.target.style.borderBottomColor = 'transparent'}>
                                puneetpanwar4004@gmail.com
                            </a>
                        </div>
                        <div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>linkedin /</span>
                            <br />
                            <a href="https://linkedin.com/in/puneet-panwar" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid transparent', transition: 'border-color 0.2s' }} onMouseOver={e => e.target.style.borderBottomColor = 'var(--text-primary)'} onMouseOut={e => e.target.style.borderBottomColor = 'transparent'}>
                                linkedin.com/in/puneet-panwar
                            </a>
                        </div>
                        <div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>github /</span>
                            <br />
                            <a href="https://github.com/Puneet-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid transparent', transition: 'border-color 0.2s' }} onMouseOver={e => e.target.style.borderBottomColor = 'var(--text-primary)'} onMouseOut={e => e.target.style.borderBottomColor = 'transparent'}>
                                github.com/Puneet-3
                            </a>
                        </div>
                    </div>
                </div>

                {/* Col 3, 4 & 5: Form */}
                <div className="grid-cell contact-right-cell">
                    <div className="plus-intersection plus-top-left">+</div>
                    <div className="plus-intersection plus-bottom-left">+</div>

                    <div className="meta-widget" style={{ marginBottom: '2rem' }}>
                        <span className="meta-widget-title">dispatch_center.sh</span>
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
                            <label className={`input-label ${formData.name ? 'floated' : ''}`} htmlFor="name">name /</label>
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
                            <label className={`input-label ${formData.email ? 'floated' : ''}`} htmlFor="email">email /</label>
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
                            <label className={`input-label ${formData.message ? 'floated' : ''}`} htmlFor="message">message /</label>
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <button
                                type="submit"
                                className="btn-editorial-submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>sending <LoaderIcon /></>
                                ) : (
                                    'send message →'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Toast notification */}
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
