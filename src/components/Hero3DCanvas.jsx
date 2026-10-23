import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch {
        return false;
      }
    };

    if (!checkWebGL() || prefersReducedMotion) {
      setHasWebGL(false);
      setIsLoaded(true);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let renderer, scene, camera, mesh;

    try {
      const width = container.clientWidth || 450;
      const height = container.clientHeight || 450;

      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 6.2;

      // Renderer with alpha & antialias
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;

      container.appendChild(renderer.domElement);

      // Geometry: Architectural Satin Torus Knot
      const geometry = new THREE.TorusKnotGeometry(1.4, 0.4, 128, 32, 2, 3);

      // Material: Brushed Platinum / Satin Chrome with high physical response
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#E8E6DF'),
        metalness: 0.88,
        roughness: 0.22,
        clearcoat: 0.75,
        clearcoatRoughness: 0.15,
        reflectivity: 0.9,
      });

      mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(0.01, 0.01, 0.01); // Start small for entrance animation
      scene.add(mesh);

      // Lighting Setup
      // 1. Ambient warm soft light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
      scene.add(ambientLight);

      // 2. Main Studio Key Light (Top right)
      const keyLight = new THREE.DirectionalLight(0xfff7e8, 3.2);
      keyLight.position.set(4, 5, 4);
      scene.add(keyLight);

      // 3. Fill Light (Cool graphite from left)
      const fillLight = new THREE.DirectionalLight(0xdde5f0, 1.8);
      fillLight.position.set(-4, -2, 3);
      scene.add(fillLight);

      // 4. Subtle Electric Lime Rim Light (Back edge accent)
      const limeRimLight = new THREE.PointLight(0xC7FF4D, 3.8, 12);
      limeRimLight.position.set(-2, 3, -2);
      scene.add(limeRimLight);

      // Mouse tracking state
      let targetRotationX = 0;
      let targetRotationY = 0;
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationY = mouseX * 0.55;
        targetRotationX = mouseY * 0.45;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      // Entrance animation variables
      let scale = 0.01;
      let clock = new THREE.Clock();

      // Render Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Smooth scale entrance
        if (scale < 1.0) {
          scale += (1.0 - scale) * 0.06;
          mesh.scale.set(scale, scale, scale);
        }

        // Base continuous organic rotation
        mesh.rotation.x += 0.0035;
        mesh.rotation.y += 0.005;

        // Gentle interactive mouse interpolation
        mesh.rotation.y += (targetRotationY - (mesh.rotation.y % (Math.PI * 2))) * 0.035;
        mesh.rotation.x += (targetRotationX - (mesh.rotation.x % (Math.PI * 2))) * 0.035;

        // Subtle floating breathing motion on Y
        mesh.position.y = Math.sin(elapsedTime * 1.2) * 0.08;

        renderer.render(scene, camera);
      };

      animate();
      setIsLoaded(true);

      // Handle Resize
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);

        if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    } catch {
      setHasWebGL(false);
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="hero-3d-stage" aria-label="Interactive 3D Satin Platinum Sculpture">
      {/* 3D Canvas Mount Point */}
      <div 
        ref={mountRef} 
        className={`hero-canvas-mount ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* Graceful Fallback if WebGL is unavailable or reduced motion is requested */}
      {!hasWebGL && (
        <div className="hero-3d-fallback" aria-hidden="true">
          <div className="sculptural-torus-fallback">
            <div className="fallback-inner-ring"></div>
            <div className="fallback-accent-glow"></div>
          </div>
        </div>
      )}

      {/* Subtle Studio Pedestal Reflection Ring */}
      <div className="sculpture-reflection-shadow" aria-hidden="true"></div>
    </div>
  );
}
