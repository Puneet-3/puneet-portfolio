"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Organic Distorted Sculpture Component
function DistortedSculpture({ isDark, isMobile }) {
    const meshRef = useRef(null);

    // Mouse-position-driven rotation with smooth lerp damping
    useFrame((state) => {
        if (!meshRef.current) return;

        // Calculate damped rotation targets based on normalized mouse coords (-1 to 1)
        const targetX = (state.pointer.y * Math.PI) / 6;
        const targetY = (state.pointer.x * Math.PI) / 4;

        meshRef.current.rotation.x = THREE.MathUtils.lerp(
            meshRef.current.rotation.x,
            targetX,
            0.05
        );
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            targetY,
            0.05
        );
    });

    // Monochrome theme palette:
    // Dark mode: Bright metallic silver/white (#f4f4f5)
    // Light mode: Deep graphite/black metallic (#18181b)
    const meshColor = isDark ? "#f4f4f5" : "#18181b";
    const roughnessVal = isDark ? 0.18 : 0.22;
    const metalnessVal = isDark ? 0.85 : 0.75;

    // Viewport responsive complexity tuning
    const detail = isMobile ? 3 : 5;
    const distortAmount = isMobile ? 0.25 : 0.4;
    const distortSpeed = isMobile ? 1.5 : 2.5;

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
        >
            <mesh ref={meshRef} scale={isMobile ? 1.4 : 1.65}>
                <icosahedronGeometry args={[1, detail]} />
                <MeshDistortMaterial
                    color={meshColor}
                    roughness={roughnessVal}
                    metalness={metalnessVal}
                    distort={distortAmount}
                    speed={distortSpeed}
                />
            </mesh>
        </Float>
    );
}

const Hero3D = ({ theme }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Detect viewport width for mobile performance optimization (< 640px)
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Detect light/dark theme state
        const updateTheme = () => {
            if (theme) {
                setIsDark(theme === 'dark');
            } else if (typeof document !== 'undefined') {
                setIsDark(document.body.classList.contains('dark-mode'));
            }
        };
        updateTheme();

        // Listen for class changes on document.body (e.g. Navbar theme toggle)
        let observer;
        if (typeof document !== 'undefined') {
            observer = new MutationObserver(() => {
                setIsDark(document.body.classList.contains('dark-mode'));
            });
            observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
            if (observer) observer.disconnect();
        };
    }, [theme]);

    return (
        <div className="about-portrait-container">
            {/* Glowing neon backdrop matching site styling */}
            <div className="about-portrait-glow" />

            {/* Floating wrap animation container matching original portrait aspect ratio */}
            <div className="about-portrait-card-float-wrap">
                <div className="about-portrait-card">
                    <div
                        className="about-portrait-image-wrapper"
                        style={{
                            background: 'transparent',
                            boxShadow: 'none',
                            position: 'relative'
                        }}
                    >
                        <Canvas
                            camera={{ position: [0, 0, 4.5], fov: 45 }}
                            gl={{ antialias: true, alpha: true }}
                            dpr={isMobile ? [1, 1.5] : [1, 2]}
                            style={{ width: '100%', height: '100%' }}
                        >
                            {/* Ambient & Directional Lighting matching theme */}
                            <ambientLight intensity={isDark ? 0.7 : 0.9} />
                            <directionalLight
                                position={[5, 5, 5]}
                                intensity={isDark ? 1.8 : 1.4}
                                color="#ffffff"
                            />
                            <directionalLight
                                position={[-5, -5, -2]}
                                intensity={isDark ? 0.9 : 0.6}
                                color={isDark ? "#a1a1aa" : "#52525b"}
                            />
                            <pointLight
                                position={[0, 0, 3]}
                                intensity={isDark ? 1.2 : 0.6}
                                color={isDark ? "#ffffff" : "#18181b"}
                            />

                            <DistortedSculpture isDark={isDark} isMobile={isMobile} />
                        </Canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero3D;
