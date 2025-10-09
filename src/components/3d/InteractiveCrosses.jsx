import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function InteractiveCrosses() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const crossesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00ffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Create cross/plus geometry - THICKER AND WIDER
    const createCross = () => {
      const group = new THREE.Group();
      
      // Thicker and wider plus shape
      const geometry = new THREE.BoxGeometry(1.2, 5, 1.2); // Increased from 0.5 to 1.2
      
      // Material with random color from your palette
      const colors = [0x00FFFF, 0xFFFFD3, 0x00CED1, 0xFFD700, 0xFF00FF]; // Added magenta
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const material = new THREE.MeshStandardMaterial({ 
        color: color,
        metalness: 0.7,
        roughness: 0.2,
        emissive: color,
        emissiveIntensity: 0.4
      });
      
      const vertical = new THREE.Mesh(geometry, material);
      const horizontal = new THREE.Mesh(geometry, material);
      horizontal.rotation.z = Math.PI / 2;
      
      group.add(vertical);
      group.add(horizontal);
      
      return group;
    };

    // Create multiple crosses
    const crosses = [];
    const numCrosses = 25; // Increased number
    
    for (let i = 0; i < numCrosses; i++) {
      const cross = createCross();
      
      // Spread them out in 3D space - full range of movement
      cross.position.x = (Math.random() - 0.5) * 50;
      cross.position.y = (Math.random() - 0.5) * 25;
      cross.position.z = (Math.random() - 0.5) * 25;
      
      cross.userData = {
        originalX: cross.position.x,
        originalY: cross.position.y,
        originalZ: cross.position.z,
        velocity: { x: 0, y: 0, z: 0 }, // Add velocity for smooth movement
        rotationSpeed: {
          x: Math.random() * 0.03 - 0.015,
          y: Math.random() * 0.03 - 0.015,
          z: Math.random() * 0.03 - 0.015,
        },
        hoverScale: 1,
        originalColor: null,
      };
      
      scene.add(cross);
      crosses.push(cross);
    }
    crossesRef.current = crosses;
    
    // Store original colors after creation
    crosses.forEach(cross => {
      cross.userData.originalColor = cross.children[0].material.color.clone();
    });

    // Mouse move handler - relative to container
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / height) * 2 + 1;
    };

    // Handle window resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      crosses.forEach((cross) => {
        // Faster continuous rotation
        cross.rotation.x += cross.userData.rotationSpeed.x;
        cross.rotation.y += cross.userData.rotationSpeed.y;
        cross.rotation.z += cross.userData.rotationSpeed.z;

        // More responsive mouse interaction
        const mouseX = mouseRef.current.x * 25;
        const mouseY = mouseRef.current.y * 12;
        
        const dx = cross.position.x - mouseX;
        const dy = cross.position.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Larger interaction radius and stronger force
        const interactionRadius = 20;
        
        if (distance < interactionRadius) {
          // Much stronger push away from mouse
          const force = (interactionRadius - distance) / interactionRadius;
          
          // Apply velocity-based movement for smoother motion
          cross.userData.velocity.x += dx * force * 0.5;
          cross.userData.velocity.y += dy * force * 0.5;
          cross.userData.velocity.z += (Math.random() - 0.5) * force * 0.3; // Random Z movement
          
          // Scale up more dramatically when near mouse
          cross.userData.hoverScale = 1 + force * 1.2;
          
          // Dramatic color change on hover
          const hoverColor = new THREE.Color(0xff00ff); // Bright magenta
          cross.children.forEach(mesh => {
            mesh.material.color.lerp(hoverColor, force * 0.8);
            mesh.material.emissiveIntensity = 0.6 + force * 0.4;
          });
          
          // Increase rotation speed on hover
          cross.userData.rotationSpeed.x += (Math.random() - 0.5) * 0.02;
          cross.userData.rotationSpeed.y += (Math.random() - 0.5) * 0.02;
          cross.userData.rotationSpeed.z += (Math.random() - 0.5) * 0.02;
        } else {
          // Return to normal scale
          cross.userData.hoverScale += (1 - cross.userData.hoverScale) * 0.08;
          
          // Return to original color
          cross.children.forEach(mesh => {
            mesh.material.color.lerp(cross.userData.originalColor, 0.05);
            mesh.material.emissiveIntensity += (0.4 - mesh.material.emissiveIntensity) * 0.05;
          });
        }
        
        // Apply velocity with damping
        cross.position.x += cross.userData.velocity.x;
        cross.position.y += cross.userData.velocity.y;
        cross.position.z += cross.userData.velocity.z;
        
        // Damping - slow down over time
        cross.userData.velocity.x *= 0.92;
        cross.userData.velocity.y *= 0.92;
        cross.userData.velocity.z *= 0.92;
        
        // Boundaries - keep crosses within the box with bounce
        const boundX = 25;
        const boundY = 12;
        const boundZ = 12;
        
        if (Math.abs(cross.position.x) > boundX) {
          cross.position.x = Math.sign(cross.position.x) * boundX;
          cross.userData.velocity.x *= -0.5; // Bounce back
        }
        if (Math.abs(cross.position.y) > boundY) {
          cross.position.y = Math.sign(cross.position.y) * boundY;
          cross.userData.velocity.y *= -0.5;
        }
        if (Math.abs(cross.position.z) > boundZ) {
          cross.position.z = Math.sign(cross.position.z) * boundZ;
          cross.userData.velocity.z *= -0.5;
        }
        
        // Gentle pull back to original position when far away
        if (distance > interactionRadius) {
          cross.userData.velocity.x += (cross.userData.originalX - cross.position.x) * 0.002;
          cross.userData.velocity.y += (cross.userData.originalY - cross.position.y) * 0.002;
          cross.userData.velocity.z += (cross.userData.originalZ - cross.position.z) * 0.002;
        }
        
        // Apply scale with smooth transition
        cross.scale.set(
          cross.userData.hoverScale,
          cross.userData.hoverScale,
          cross.userData.hoverScale
        );
      });

      renderer.render(scene, camera);
    };

    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-black/80 via-cyan-900/20 to-black/80 border-2 border-cyan-400/30"
      style={{ 
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
      }}
    />
  );
}
