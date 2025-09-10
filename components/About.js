import { useEffect } from 'react';
import useAOS from '../hooks/useAOS';

const About = () => {
  useAOS();

  useEffect(() => {
    // Animate skills when in viewport
    const skillsSection = document.querySelector('.about-skills');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const animateSkills = () => {
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
      const width = skill.getAttribute('data-width');
      skill.style.width = width;
    });
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h3>I create products that make people happy</h3>
            <p>Hello! I'm Ranjeet Singh, a passionate web developer with expertise in frontend technologies. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
            <p>My goal is to always build products that provide pixel-perfect, performant experiences while following best practices and writing clean, maintainable code.</p>
            <p>I'm constantly learning new technologies and techniques to stay at the forefront of web development. When I'm not coding, you can find me exploring new places, reading tech blogs, or contributing to open source projects.</p>
            
            <div className="about-stats">
              <div className="stat-box" data-aos="fade-up" data-aos-delay="100">
                <i className="fas fa-project-diagram"></i>
                <h4>25+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-users"></i>
                <h4>100+</h4>
                <p>geekforgeek question</p>
              </div>
              <div className="stat-box" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-award"></i>
                <h4>6+</h4>
                <p>Awards Received</p>
              </div>
              <div className="stat-box" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-code"></i>
                <h4>50+</h4>
                <p>LeetCode Question</p>
              </div>
            </div>
          </div>
          <div className="about-skills" data-aos="fade-left">
            <div className="skill">
              <div className="skill-name">
                <span>HTML/CSS</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="95%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="90%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <span>React/Next.js</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="85%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <span>Node.js</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="80%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <span>UI/UX Design</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="75%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">
                <span>Git/GitHub</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;