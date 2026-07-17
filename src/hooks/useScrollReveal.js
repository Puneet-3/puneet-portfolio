"use client";

import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Attaches an IntersectionObserver to the referenced element.
 * Adds a 'revealed' CSS class when the element enters the viewport.
 *
 * @param {object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.15
 * @param {string} options.rootMargin - Root margin, default '0px 0px -60px 0px'
 * @returns {React.RefObject} ref to attach to the target element
 */
export default function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.unobserve(el); // Only animate once
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}
