"use client";

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element enters the viewport
 * and track scroll-driven storytelling state.
 *
 * @param {object} options
 * @param {number} options.threshold - Visibility threshold (0 - 1)
 * @param {string} options.rootMargin - Margin around the root
 * @param {boolean} options.once - Whether to trigger only once or toggle
 * @param {boolean} options.trackProgress - Whether to track scroll progress % through the element
 */
export function useScrollStory({
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    once = true,
    trackProgress = false
} = {}) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Check prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsInView(true);
            el.classList.add('story-in-view', 'revealed');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    el.classList.add('story-in-view', 'revealed');
                    if (once) {
                        observer.unobserve(el);
                    }
                } else if (!once) {
                    setIsInView(false);
                    el.classList.remove('story-in-view', 'revealed');
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);

        // Optional scroll progress tracker
        let handleScroll;
        if (trackProgress) {
            handleScroll = () => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                // Calculate percentage from element top entering to element bottom leaving
                const totalDist = rect.height + windowHeight;
                const currentDist = windowHeight - rect.top;
                const pct = Math.min(Math.max(currentDist / totalDist, 0), 1);
                setProgress(pct);
                el.style.setProperty('--section-progress', pct.toFixed(3));
            };
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
        }

        return () => {
            observer.disconnect();
            if (handleScroll) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [threshold, rootMargin, once, trackProgress]);

    return { ref, isInView, progress };
}

/**
 * Animated numeric counter hook (e.g. 0 -> 15, 0.00 -> 8.85, 0 -> 5000)
 * Triggers when startTrigger is true.
 *
 * @param {number} endValue - The target number
 * @param {number} duration - Animation duration in ms (default: 1600ms)
 * @param {boolean} startTrigger - Boolean flag to start counting
 * @param {number} decimals - Number of decimal places
 * @param {string} suffix - Optional suffix like '+' or 'k+'
 */
export function useCountUp(endValue, duration = 1600, startTrigger = false, decimals = 0, suffix = '') {
    const [displayValue, setDisplayValue] = useState(
        decimals > 0 ? (0).toFixed(decimals) + suffix : '0' + suffix
    );

    useEffect(() => {
        if (!startTrigger) return;

        // Respect reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setDisplayValue(
                decimals > 0 ? endValue.toFixed(decimals) + suffix : endValue.toString() + suffix
            );
            return;
        }

        let startTimestamp = null;
        let animationFrameId;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic: 1 - (1 - progress)^3
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = easeOutProgress * endValue;

            if (decimals > 0) {
                setDisplayValue(currentValue.toFixed(decimals) + suffix);
            } else {
                setDisplayValue(Math.floor(currentValue) + suffix);
            }

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            } else {
                setDisplayValue(
                    decimals > 0 ? endValue.toFixed(decimals) + suffix : endValue.toString() + suffix
                );
            }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [endValue, duration, startTrigger, decimals, suffix]);

    return displayValue;
}

export default useScrollStory;
