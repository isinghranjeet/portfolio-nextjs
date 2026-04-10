import { useEffect, useState } from 'react';
import useAOS from '../hooks/useAOS';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  useAOS();
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <section
      id="home"
      className={`hero min-h-screen flex items-center ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
          : 'bg-gradient-to-br from-white via-gray-100 to-gray-300 text-gray-900'
      } relative overflow-hidden transition-colors duration-500`}
    >
      <div className="container mx-auto px-6 lg:px-16 z-10">
        <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Side (Text) */}
          <div className="hero-text max-w-2xl" data-aos="fade-right">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Ranjeet Singh
              </span>
            </h1>

            {/* Typewriter Role */}
            <div className="typewriter mt-4 text-xl font-semibold h-10 text-purple-400">
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer',
                    'React Enthusiast',
                    'UI/UX Designer',
                    'Web Creator',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-300 dark:text-gray-600">
              A passionate{' '}
              <span className="font-semibold text-white dark:text-black">
                Frontend Developer
              </span>{' '}
              with expertise in creating interactive, responsive, and user-friendly web
              applications. I transform ideas into seamless digital experiences.
            </p>

            {/* Buttons */}
            <div className="hero-btns mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition transform hover:scale-105 shadow-lg"
              >
                🚀 View My Work
              </a>
              <a
                href="#contact"
                className="btn px-6 py-3 rounded-xl border border-gray-400 hover:border-purple-500 hover:text-purple-400 transition"
              >
                📩 Contact Me
              </a>
              <a
                href="/RanjeetKumarResume.pdf"
                download
                className="btn px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-800 text-white transition"
              >
                📄 Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="social-icons mt-8 flex gap-5 text-2xl">
              <a
                href="https://github.com/isinghranjeet"
                className="hover:text-purple-400 transition hover:scale-110"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ranjeet-kumar-37016128b/"
                className="hover:text-blue-400 transition hover:scale-110"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-sky-400 transition hover:scale-110">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-pink-400 transition hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Right Side (Clean Image Design) */}
          <div className="hero-image" data-aos="fade-left">
            <div className="profile-photo-container">
              <div className="profile-photo-wrapper">
                <img
                  src="profile-picture1.jpg"
                  alt="Ranjeet Singh"
                  className="profile-photo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                  }}
                />
                <div className="photo-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* CSS for Typewriter and Photo */}
      <style jsx>{`
        .typewriter {
          display: inline-block;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid #a855f7;
          animation: blink 0.7s steps(1) infinite;
          font-family: 'Fira Code', monospace;
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        /* Clean Photo Design */
        .profile-photo-container {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .profile-photo-container {
            width: 340px;
            height: 340px;
          }
        }

        @media (min-width: 1024px) {
          .profile-photo-container {
            width: 380px;
            height: 380px;
          }
        }

        .profile-photo-wrapper {
          position: relative;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #8b5cf6;
          box-shadow: 
            0 0 0 8px rgba(139, 92, 246, 0.1),
            0 20px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (min-width: 640px) {
          .profile-photo-wrapper {
            width: 320px;
            height: 320px;
          }
        }

        @media (min-width: 1024px) {
          .profile-photo-wrapper {
            width: 360px;
            height: 360px;
          }
        }

        .profile-photo-wrapper:hover {
          transform: scale(1.05);
          box-shadow: 
            0 0 0 12px rgba(139, 92, 246, 0.15),
            0 30px 60px rgba(0, 0, 0, 0.4);
          border-color: #a855f7;
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .profile-photo-wrapper:hover .profile-photo {
          transform: scale(1.1);
        }

        .photo-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            #8b5cf6,
            #ec4899,
            #8b5cf6
          );
          opacity: 0;
          z-index: -1;
          filter: blur(15px);
          transition: opacity 0.4s ease;
          animation: glow-rotate 4s linear infinite;
        }

        .profile-photo-wrapper:hover .photo-glow {
          opacity: 0.5;
        }

        @keyframes glow-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Simple fade-in animation for image */
        @keyframes photo-appear {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .profile-photo-container {
          animation: photo-appear 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;