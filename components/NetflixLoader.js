import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import styles from './NetflixLoader.module.css';

const AdvancedNetflixLoader = ({ duration = 3000, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showName, setShowName] = useState(true);

  const loaderRef = useRef(null);
  const threeContainerRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Initialize Three.js scene with floating cubes and particles
  const initThreeScene = () => {
    if (!threeContainerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    threeContainerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xe50914, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Floating cubes
    const cubes = [];
    const cubeColors = [0xe50914, 0xff4500, 0xff6347, 0xffffff];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 0.5 + 0.3;
      const geometry = new THREE.BoxGeometry(size, size, size);
      const material = new THREE.MeshPhongMaterial({
        color: cubeColors[Math.floor(Math.random() * cubeColors.length)],
        transparent: true,
        opacity: 0.7,
        shininess: 100
      });

      const cube = new THREE.Mesh(geometry, material);
      const radius = 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      cube.position.x = radius * Math.sin(phi) * Math.cos(theta);
      cube.position.y = radius * Math.sin(phi) * Math.sin(theta);
      cube.position.z = radius * Math.cos(phi);

      cube.userData = {
        rotationSpeed: new THREE.Vector3(
          Math.random() * 0.02 - 0.01,
          Math.random() * 0.02 - 0.01,
          Math.random() * 0.02 - 0.01
        ),
        originalPosition: cube.position.clone(),
        timeOffset: Math.random() * Math.PI * 2
      };

      scene.add(cube);
      cubes.push(cube);
    }

    // Particles
    const particleCount = 500;
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      particlePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i3 + 2] = radius * Math.cos(phi);
    }

    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xe50914,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Animate
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      cubes.forEach(cube => {
        const data = cube.userData;
        const pulse = Math.sin(time + data.timeOffset) * 0.3;
        cube.position.x = data.originalPosition.x + pulse;
        cube.position.y = data.originalPosition.y + pulse;
        cube.position.z = data.originalPosition.z + pulse;
        cube.rotation.x += data.rotationSpeed.x;
        cube.rotation.y += data.rotationSpeed.y;
        cube.rotation.z += data.rotationSpeed.z;
      });

      particleSystem.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (rendererRef.current) rendererRef.current.dispose();
    };
  };

  // Handle progress and name/welcome sequence
  useEffect(() => {
    initThreeScene();

    // Show "RANJEET" for 2.5 seconds, then hide
    const nameTimeout = setTimeout(() => {
      setShowName(false);
      setShowWelcome(true);
    }, 2500);

    // Progress simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete && onComplete();
          }, 600);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => {
      clearTimeout(nameTimeout);
      clearInterval(interval);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={styles.loaderContainer} ref={loaderRef}>
      <div ref={threeContainerRef} className={styles.threeContainer} />

      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <div className={styles.logoText}>
            {showName && "RANJEET".split("").map((letter, i) => (
              <span key={i} className={styles.logoLetter} style={{ '--delay': `${i * 0.1}s` }}>
                {letter}
              </span>
            ))}

            {showWelcome && (
              <div className={styles.welcomeText}>Welcome to my portfolio</div>
            )}
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }}>
              <div className={styles.progressGlow}></div>
            </div>
          </div>
          <div className={styles.progressText}>{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedNetflixLoader;
