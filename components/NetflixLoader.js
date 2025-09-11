import { useEffect, useState, useRef } from 'react';
import styles from './NetflixLoader.module.css';

const AdvancedNetflixLoader = ({ duration = 3000, onComplete, interactive = true }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Simulate loading progress
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

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  useEffect(() => {
    if (!interactive || !loaderRef.current) return;

    const handleMouseMove = (e) => {
      const rect = loaderRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      loaderRef.current.style.setProperty('--mouse-x', `${x}%`);
      loaderRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    const currentRef = loaderRef.current;
    currentRef.addEventListener('mousemove', handleMouseMove);

    return () => {
      currentRef.removeEventListener('mousemove', handleMouseMove);
    };
  }, [interactive]);

  if (!isVisible) return null;

  return (
    <div 
      ref={loaderRef}
      className={`${styles.loaderContainer} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.floatingShapes}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.floatingShape} style={{
              '--delay': `${i * 0.7}s`,
              '--size': `${20 + (i * 5)}px`,
              '--duration': `${3 + (i * 0.5)}s`,
              '--color': i % 2 === 0 ? '#e50914' : '#b1060f'
            }} />
          ))}
        </div>

        <div className={styles.pulseWaves}>
          <div className={styles.pulseWave}></div>
          <div className={styles.pulseWave} style={{ '--delay': '0.5s' }}></div>
          <div className={styles.pulseWave} style={{ '--delay': '1s' }}></div>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <div className={styles.netflixIcon}>
            <div className={styles.iconBar}></div>
            <div className={styles.iconBar}></div>
            <div className={styles.iconBar}></div>
          </div>

          <div className={styles.logoText}>
            {['R', 'A', 'N', 'J', 'E', 'E', 'T'].map((letter, i) => (
              <span 
                key={i} 
                className={styles.logoLetter}
                style={{ '--delay': `${i * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            >
              <div className={styles.progressGlow}></div>
            </div>
          </div>
          <div className={styles.progressText}>{progress}%</div>
        </div>

        
      </div>

      {/* Particle effects */}
      <div className={styles.particles}>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className={styles.particle}
            style={{
              '--size': `${Math.random() * 5 + 2}px`,
              '--delay': `${i * 0.2}s`,
              '--duration': `${Math.random() * 3 + 2}s`,
              '--distance': `${Math.random() * 100 + 50}px`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedNetflixLoader;
