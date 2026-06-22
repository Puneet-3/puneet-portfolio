import React from 'react';

const Footer = () => {
    return (
        <footer className="grid-layout" style={{ borderBottom: 'none', padding: '0' }}>
            <div className="grid-cell span-5" style={{ padding: '2.5rem', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                <div className="plus-intersection plus-top-left">+</div>
                <div className="plus-intersection plus-top-right">+</div>
                <div className="plus-intersection plus-bottom-left">+</div>
                <div className="plus-intersection plus-bottom-right">+</div>
                <p className="footer-text" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                    &copy; {new Date().getFullYear()} Puneet Panwar. All rights reserved.
                </p>
                <p className="footer-text" style={{ textAlign: 'center', fontSize: '0.75rem', opacity: 0.8 }}>
                    built with next.js, three.js, and custom grid vectors.
                </p>
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    puneet.panwar // ✦
                </div>
            </div>
        </footer>
    );
};

export default Footer;
