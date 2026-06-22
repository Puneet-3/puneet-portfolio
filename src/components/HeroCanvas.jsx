"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Helper function to dynamically draw detailed vector card textures on HTML Canvas
const createCardTexture = (title, accentColor, iconType, isDark) => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 340;
    const ctx = canvas.getContext('2d');

    // Tweak accent colors for light mode to ensure high readability
    let accent = accentColor;
    if (!isDark) {
        if (accentColor === '#00f2fe') accent = '#0891b2'; // Rich teal
        else if (accentColor === '#3b82f6') accent = '#1d4ed8'; // Rich royal blue
        else if (accentColor === '#ec4899') accent = '#c026d3'; // Rich magenta/pink
    }

    // 1. Draw rounded container backdrop with glassmorphic styling
    ctx.clearRect(0, 0, 512, 340);
    
    if (isDark) {
        ctx.fillStyle = 'rgba(15, 17, 28, 0.88)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.12)';
    }
    
    const drawRoundedRect = (x, y, w, h, r) => {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    };

    drawRoundedRect(5, 5, 502, 330, 28);
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.stroke();

    // 2. Draw Title with Gradient Accent
    const grad = ctx.createLinearGradient(0, 0, 512, 0);
    grad.addColorStop(0, accent);
    if (isDark) {
        grad.addColorStop(1, '#ffffff');
        ctx.fillStyle = grad;
    } else {
        grad.addColorStop(1, '#0f172a');
        ctx.fillStyle = grad;
    }
    ctx.font = 'bold 36px "Outfit", "Inter", sans-serif';
    ctx.fillText(title, 40, 75);

    // 3. Draw Detailed Vector elements
    ctx.strokeStyle = accent;
    ctx.fillStyle = accent;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    if (iconType === 'ai') {
        // AI & Neural Network nodes
        const nodes = [
            {x: 256, y: 195, r: 16},
            {x: 170, y: 150, r: 11},
            {x: 170, y: 240, r: 11},
            {x: 342, y: 150, r: 11},
            {x: 342, y: 240, r: 11},
            {x: 95, y: 195, r: 9},
            {x: 417, y: 195, r: 9}
        ];
        
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[1].x, nodes[1].y);
        ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[2].x, nodes[2].y);
        ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[3].x, nodes[3].y);
        ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[4].x, nodes[4].y);
        ctx.moveTo(nodes[1].x, nodes[1].y); ctx.lineTo(nodes[5].x, nodes[5].y);
        ctx.moveTo(nodes[2].x, nodes[2].y); ctx.lineTo(nodes[5].x, nodes[5].y);
        ctx.moveTo(nodes[3].x, nodes[3].y); ctx.lineTo(nodes[6].x, nodes[6].y);
        ctx.moveTo(nodes[4].x, nodes[4].y); ctx.lineTo(nodes[6].x, nodes[6].y);
        ctx.stroke();

        nodes.forEach((n) => {
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fillStyle = accent;
            ctx.fill();
            ctx.strokeStyle = isDark ? '#ffffff' : '#0f172a';
            ctx.lineWidth = 2.5;
            ctx.stroke();
        });
    } else if (iconType === 'ui') {
        // Frontend Brackets and Wireframe Grid
        ctx.font = 'bold 75px "Outfit", monospace';
        ctx.fillStyle = accent;
        ctx.textAlign = 'center';
        ctx.fillText('</>', 256, 215);
        ctx.textAlign = 'left';

        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.15)';
        ctx.strokeRect(100, 110, 312, 170);
        ctx.strokeRect(120, 130, 80, 45); 
        ctx.strokeRect(220, 130, 170, 130); 
    } else if (iconType === 'automation') {
        // Automation linked boxes
        const block1 = {x: 100, y: 175, w: 85, h: 55};
        const block2 = {x: 220, y: 135, w: 85, h: 55};
        const block3 = {x: 340, y: 175, w: 85, h: 55};

        ctx.strokeStyle = accent;
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.03)';
        
        [block1, block2, block3].forEach(b => {
            drawRoundedRect(b.x, b.y, b.w, b.h, 8);
            ctx.fill();
            ctx.stroke();
        });

        ctx.beginPath();
        ctx.moveTo(block1.x + block1.w, block1.y + block1.h/2);
        ctx.lineTo(block2.x, block2.y + block2.h/2);
        ctx.moveTo(block2.x + block2.w, block2.y + block2.h/2);
        ctx.lineTo(block3.x, block3.y + block3.h/2);
        ctx.stroke();

        ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
        ctx.font = 'bold 13px "Outfit", sans-serif';
        ctx.fillText('Trigger', block1.x + 18, block1.y + 32);
        ctx.fillText('Agent Node', block2.x + 8, block2.y + 32);
        ctx.fillText('Publish', block3.x + 18, block3.y + 32);
    }

    return new THREE.CanvasTexture(canvas);
};

const cardData = [
    { colorHexDark: 0xff007f, colorHexLight: 0x4f46e5, offsetAngle: 0 },
    { colorHexDark: 0x9945ff, colorHexLight: 0x0891b2, offsetAngle: (2 * Math.PI) / 3 },
    { colorHexDark: 0x00f2fe, colorHexLight: 0x7c3aed, offsetAngle: (4 * Math.PI) / 3 }
];

const HeroCanvas = ({ theme }) => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);
    const coreMaterialRef = useRef(null);
    const coreLightRef = useRef(null);
    const orbitMaterialRef = useRef(null);
    const particleMaterialRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let width = container.clientWidth;
        let height = container.clientHeight;

        const isDark = theme === 'dark';

        // 1. Scene
        const scene = new THREE.Scene();

        // 2. Camera
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 6.2;

        // 3. Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // 4. Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
        scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0x00f2fe, 1.5);
        dirLight1.position.set(5, 5, 4);
        scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0xec4899, 1.2);
        dirLight2.position.set(-5, -5, 4);
        scene.add(dirLight2);

        // 5. Parent Group for the entire Orbiting System
        const orbitalSystem = new THREE.Group();
        scene.add(orbitalSystem);

        // 6. Central AI Core (Futuristic Torus Knot Wireframe)
        const coreGeometry = new THREE.TorusKnotGeometry(0.32, 0.09, 100, 16);
        const coreMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            emissive: isDark ? 0xff007f : 0x3b82f6,
            emissiveIntensity: 1.8,
            transparent: true,
            opacity: isDark ? 0.85 : 0.9,
            roughness: 0.15,
            metalness: 0.1,
            transmission: 0.8,
            ior: 1.5,
            thickness: 0.3,
            wireframe: true
        });
        const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
        orbitalSystem.add(coreMesh);
        coreMaterialRef.current = coreMaterial;

        // Core light source
        const coreLight = new THREE.PointLight(isDark ? 0xff007f : 0x3b82f6, isDark ? 4.5 : 3.5, 12);
        coreLight.position.set(0, 0, 0);
        coreMesh.add(coreLight);
        coreLightRef.current = coreLight;

        // 7. Concentric Orbit Path Lines
        const orbitPoints = [];
        for (let j = 0; j <= 64; j++) {
            const theta = (j / 64) * Math.PI * 2;
            orbitPoints.push(new THREE.Vector3(Math.cos(theta) * 2.3, 0, Math.sin(theta) * 2.3));
        }
        const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
        const orbitMaterial = new THREE.LineBasicMaterial({
            color: isDark ? 0x9945ff : 0x2563eb,
            transparent: true,
            opacity: isDark ? 0.25 : 0.35
        });
        orbitMaterialRef.current = orbitMaterial;

        // Add 3 tilted orbit guide lines
        const o1 = new THREE.LineLoop(orbitGeometry, orbitMaterial);
        o1.rotation.x = Math.PI / 6;
        o1.rotation.y = Math.PI / 12;
        orbitalSystem.add(o1);

        const o2 = new THREE.LineLoop(orbitGeometry, orbitMaterial);
        o2.rotation.x = -Math.PI / 6;
        o2.rotation.y = -Math.PI / 12;
        orbitalSystem.add(o2);

        // 8. Add three 3D orbiting crystals (Octahedron Geometry)
        const cardGeometry = new THREE.OctahedronGeometry(0.38, 0);
        const cards = [];

        cardData.forEach((data) => {
            const activeColor = isDark ? data.colorHexDark : data.colorHexLight;
            const cardMaterial = new THREE.MeshPhysicalMaterial({
                color: activeColor,
                emissive: activeColor,
                emissiveIntensity: isDark ? 1.2 : 0.25,
                roughness: 0.1,
                metalness: 0.1,
                transmission: 0.85,
                transparent: true,
                opacity: 0.9,
                ior: 1.5,
                thickness: 0.5,
                clearcoat: 1.0
            });

            const cardMesh = new THREE.Mesh(cardGeometry, cardMaterial);
            orbitalSystem.add(cardMesh);

            cards.push({
                mesh: cardMesh,
                offsetAngle: data.offsetAngle,
                material: cardMaterial
            });
        });
        cardsRef.current = cards;

        // 9. Floating Orbiting Particles (Data packets)
        const particleGeometry = new THREE.SphereGeometry(0.045, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: isDark ? 0x00f2fe : 0x2563eb,
            transparent: true,
            opacity: 0.75
        });
        particleMaterialRef.current = particleMaterial;

        const particles = [];
        for (let i = 0; i < 24; i++) {
            const pMesh = new THREE.Mesh(particleGeometry, particleMaterial);
            orbitalSystem.add(pMesh);
            
            particles.push({
                mesh: pMesh,
                speed: 0.008 + Math.random() * 0.012,
                angle: Math.random() * Math.PI * 2,
                radius: 1.2 + Math.random() * 1.6,
                yOffset: (Math.random() - 0.5) * 1.5
            });
        }
        // 10. Animation Loop
        const clock = new THREE.Clock();
        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();

            // Core pulsing & floating
            coreMesh.position.y = Math.sin(elapsedTime * 1.5) * 0.12;
            coreMesh.rotation.y = elapsedTime * 0.5;
            coreMaterial.emissiveIntensity = 1.4 + Math.sin(elapsedTime * 3) * 0.4;

            // Animate 3D crystals along tilted orbital paths and rotate them
            cards.forEach((card, index) => {
                const angle = elapsedTime * 0.28 + card.offsetAngle;
                const radius = 2.45;

                // Circular motion with slight wave
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                const y = Math.sin(angle * 2.0) * 0.4;

                card.mesh.position.set(x, y, z);

                // Spin crystals on their axes for dynamic lighting reflections
                card.mesh.rotation.x = elapsedTime * 0.6 + index;
                card.mesh.rotation.y = elapsedTime * 0.5;
                card.mesh.rotation.z = elapsedTime * 0.3;
            });

            // Animate orbiting particle data packets
            particles.forEach((p) => {
                p.angle += p.speed;
                p.mesh.position.x = Math.cos(p.angle) * p.radius;
                p.mesh.position.z = Math.sin(p.angle) * p.radius;
                p.mesh.position.y = p.yOffset + Math.sin(elapsedTime * 0.7 + p.radius) * 0.18;
            });

            // Auto revolve parent orbital system slowly
            orbitalSystem.rotation.y = elapsedTime * 0.08;
            orbitalSystem.rotation.x = Math.sin(elapsedTime * 0.4) * 0.06;

            renderer.render(scene, camera);
        };

        animate();

        // 11. Resize handler
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
            coreGeometry.dispose();
            coreMaterial.dispose();
            orbitGeometry.dispose();
            orbitMaterial.dispose();
            cardGeometry.dispose();
            particleGeometry.dispose();
            particleMaterial.dispose();
            
            cards.forEach((card) => {
                if (card.texture) card.texture.dispose();
                card.material.dispose();
            });

            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    // Watch for theme prop changes and update colors
    useEffect(() => {
        const cards = cardsRef.current;
        if (!cards || cards.length === 0) return;

        const isDark = theme === 'dark';

        // 1. Update orbiting crystals colors
        cards.forEach((card, index) => {
            const data = cardData[index];
            const activeColor = isDark ? data.colorHexDark : data.colorHexLight;
            card.material.color.setHex(activeColor);
            card.material.emissive.setHex(activeColor);
            card.material.emissiveIntensity = isDark ? 1.2 : 0.25;
            card.material.needsUpdate = true;
        });

        // 2. Dynamic core & line color adjustments for optimal readability
        const coreMat = coreMaterialRef.current;
        const coreLgt = coreLightRef.current;
        const orbitMat = orbitMaterialRef.current;
        const partMat = particleMaterialRef.current;

        if (coreMat && coreLgt && orbitMat && partMat) {
            if (isDark) {
                coreMat.emissive.setHex(0xff007f);
                coreMat.opacity = 0.8;
                coreLgt.color.setHex(0xff007f);
                coreLgt.intensity = 4.5;
                orbitMat.color.setHex(0x9945ff);
                orbitMat.opacity = 0.25;
                partMat.color.setHex(0x00f2fe);
            } else {
                coreMat.emissive.setHex(0x3b82f6); // Rich blue emissive core
                coreMat.opacity = 0.95;
                coreLgt.color.setHex(0x3b82f6);
                coreLgt.intensity = 3.5;
                orbitMat.color.setHex(0x2563eb); // Rich blue orbit lines
                orbitMat.opacity = 0.45; // Enhanced contrast in light mode
                partMat.color.setHex(0x2563eb); // Rich blue data packets
            }
            coreMat.needsUpdate = true;
            orbitMat.needsUpdate = true;
            partMat.needsUpdate = true;
        }
    }, [theme]);

    return (
        <div className="hero-canvas-container">
            <div ref={containerRef} id="canvas3d" style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default HeroCanvas;
