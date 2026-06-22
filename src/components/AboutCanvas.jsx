"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import avatarImg from '../assets/puneet_glass_head.png';

const AboutCanvas = ({ theme }) => {
    const containerRef = useRef(null);
    const light1Ref = useRef(null);
    const light2Ref = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let width = container.clientWidth;
        let height = container.clientHeight;

        // 1. Scene
        const scene = new THREE.Scene();

        // 2. Camera
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 5.5;

        // 3. Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // 4. Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
        scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0x00f2fe, 1.2);
        dirLight1.position.set(3, 3, 2);
        scene.add(dirLight1);
        light1Ref.current = dirLight1;

        const dirLight2 = new THREE.DirectionalLight(0xec4899, 1.0);
        dirLight2.position.set(-3, -3, 2);
        scene.add(dirLight2);
        light2Ref.current = dirLight2;

        // 5. Load Texture
        const textureLoader = new THREE.TextureLoader();
        const avatarTexture = textureLoader.load(avatarImg.src || avatarImg);
        
        // Create Plane geometry with square aspect ratio (3.6 x 3.6) to fit 1080x1080 origami image
        const planeGeometry = new THREE.PlaneGeometry(3.6, 3.6);
        const planeMaterial = new THREE.MeshStandardMaterial({
            map: avatarTexture,
            transparent: true,
            side: THREE.DoubleSide,
            roughness: 0.65,
            metalness: 0.05
        });
        const characterMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        characterMesh.position.z = 0.5; // Shift forward slightly
        scene.add(characterMesh);

        // Apply theme settings
        updateMaterials(theme);

        // 7. Animation Loop
        const clock = new THREE.Clock();
        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();

            // Smooth automatic character floating & rotation
            characterMesh.rotation.y = Math.sin(elapsedTime * 0.5) * 0.08;
            characterMesh.position.y = Math.sin(elapsedTime * 0.8) * 0.05;

            renderer.render(scene, camera);
        };

        animate();

        // 8. Resize handler
        const handleResize = () => {
            if (!container) return;
            width = container.clientWidth;
            height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
            planeGeometry.dispose();
            planeMaterial.dispose();
            avatarTexture.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    // Watch for theme prop changes
    useEffect(() => {
        updateMaterials(theme);
    }, [theme]);

    const updateMaterials = (currentTheme) => {
        const l1 = light1Ref.current;
        const l2 = light2Ref.current;
        if (!l1 || !l2) return;

        if (currentTheme === 'dark') {
            l1.color.setHex(0x00f2fe);
            l1.intensity = 1.8;
            l2.color.setHex(0xff007f);
            l2.intensity = 1.5;
        } else {
            l1.color.setHex(0x3b82f6);
            l1.intensity = 1.2;
            l2.color.setHex(0xa78bfa);
            l2.intensity = 1.0;
        }
    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div ref={containerRef} id="about-canvas3d" style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default AboutCanvas;
