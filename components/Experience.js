import useAOS from "../hooks/useAOS";
import { FaGraduationCap, FaCode, FaProjectDiagram, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  useAOS();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">
          Skills & <span>Projects</span>
        </h2>

        <div className="timeline">
          {/* Education Section */}
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-date">2023 - 2027</div>
              <div className="timeline-header">
                <FaGraduationCap className="timeline-icon" />
                <h3 className="timeline-title">Education</h3>
              </div>
              <p className="timeline-desc">
                Studying <strong>Computer Science & Engineering</strong> at
                <strong> Chandigarh University</strong> — a journey where I
                learned to think like a developer, not just a student.
                From solving <strong>DSA problems</strong> to building
                <strong> real-world MERN stack projects</strong>, I've focused
                on writing clean, efficient, and meaningful code that makes a
                difference.
              </p>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-date">2023 - 2027</div>
              <div className="timeline-header">
                <FaCode className="timeline-icon" />
                <h3 className="timeline-title">Technical Skills</h3>
              </div>
              <p className="timeline-desc">
                <strong>Languages:</strong> JavaScript, C++
                <br />
                <strong>Frontend:</strong> React.js, HTML5, CSS3, Bootstrap
                <br />
                <strong>Backend:</strong> Node.js, Express.js, MongoDB
                <br />
                <strong>Tools & Platforms:</strong> Git, VS Code, Postman, Figma
                <br />
                <strong>Core Skills:</strong> Data Structures & Algorithms (DSA),
                Problem Solving
              </p>
            </div>
          </div>

          {/* Academic Projects Section */}
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-date">2024</div>
              <div className="timeline-header">
                <FaProjectDiagram className="timeline-icon" />
                <h3 className="timeline-title">Academic Projects</h3>
              </div>
              <p className="timeline-desc">
                Designed and developed a
                <strong> full-stack e-commerce platform</strong> using the
                <strong> MERN stack</strong> with
                <strong> secure JWT authentication</strong>,
                <strong> advanced product filtering</strong>, and
                <strong> Stripe payment integration</strong>. Implemented
                <strong> lazy loading</strong> and
                <strong> optimized state management</strong> to ensure
                <strong> high performance</strong> and
                <strong> smooth user interactions</strong>.
              </p>
            </div>
          </div>

          {/* Internship Section */}
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-date">2025</div>
              <div className="timeline-header">
                <FaBriefcase className="timeline-icon" />
                <h3 className="timeline-title">Internship Experience</h3>
              </div>
              <p className="timeline-desc">
                Web Development Intern at <strong>Suvidha POS</strong> – Worked on
                <strong> developing and optimizing backend APIs</strong>,
                performing <strong> SQL database operations</strong>, and
                assisting in <strong> project documentation</strong>. Actively
                collaborated with <strong> senior developers</strong> and
                demonstrated strong <strong> problem-solving</strong> and
                <strong> learning skills</strong> throughout the internship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;