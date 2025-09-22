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
              <a href="https://github.com/isinghranjeet" className="hover:text-purple-400 transition">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ranjeet-kumar-37016128b/" className="hover:text-blue-400 transition">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-sky-400 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-pink-400 transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="hero-image relative" data-aos="fade-left">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl hover:scale-105 transition transform">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGDt02qOvcBMA/profile-displayphoto-shrink_200_200/B56ZUh8ITVHEAk-/0/1740031169550?e=1759968000&v=beta&t=7FLYOg2O8Rm0znnax3i1AWkasXREnEa-N5DRSrsYy9E"
                alt="Ranjeet Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* CSS for Typewriter */}
      <style jsx>{`
        .typewriter {
          display: inline-block;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid #a855f7; /* purple cursor */
          animation: blink 0.7s steps(1) infinite;
          font-family: 'Fira Code', monospace;
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

