import useAOS from '../hooks/useAOS';

const Experience = () => {
  useAOS();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Skills & <span>Projects</span></h2>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-date">2024</div>
              <h3 className="timeline-title">Academic Projects</h3>
              <p className="timeline-desc">Developed a full-stack e-commerce website using MERN stack with features like user authentication, product filtering, and payment integration. Optimized performance by implementing lazy loading and reducing initial load time by 40%.</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-date">2023 - 2024</div>
              <h3 className="timeline-title">Technical Skills</h3>
              <p className="timeline-desc">
                <strong>Frontend:</strong> React.js, JavaScript, HTML5, CSS3, Bootstrap<br />
                <strong>Backend:</strong> Node.js, Express.js, MongoDB<br />
                <strong>Tools:</strong> Git, VS Code, Postman, Figma
              </p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-date">2023</div>
              <h3 className="timeline-title">Internship Experience</h3>
              <p className="timeline-desc">Web Development Intern at TechSolutions - Collaborated with senior developers to build responsive UI components, fixed bugs in existing applications, and participated in daily stand-up meetings following Agile methodology.</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-date">2020 - 2024</div>
              <h3 className="timeline-title">Education</h3>
              <p className="timeline-desc">Bachelor of Technology in Computer Science<br />
              XYZ Institute of Technology - CGPA: 8.8/10<br />
              Relevant Courses: Data Structures, Algorithms, Web Technologies, Database Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;