import { useEffect } from 'react';
import useAOS from '../hooks/useAOS';

const Hero = () => {
  useAOS();

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-right">
            <h1>Hi, I'm <span>Ranjeet Singh</span></h1>
            <p>A passionate Frontend Developer with expertise in creating interactive, responsive, and user-friendly web applications. I transform ideas into seamless digital experiences.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQGDt02qOvcBMA/profile-displayphoto-shrink_200_200/B56ZUh8ITVHEAk-/0/1740031169550?e=1759968000&v=beta&t=7FLYOg2O8Rm0znnax3i1AWkasXREnEa-N5DRSrsYy9E" alt="Ranjeet Singh" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;