import { useState } from 'react';
import useAOS from '../hooks/useAOS';

const Projects = () => {
  useAOS();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      links: {
        view: "#",
        demo: "#"
      }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["Vue.js", "Firebase", "CSS3", "Chart.js"],
      category: "web",
      links: {
        view: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      description: "Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      category: "mobile",
      links: {
        view: "#",
        demo: "#"
      }
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media performance with real-time metrics and data visualization.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["React", "D3.js", "REST API", "Material UI"],
      category: "web",
      links: {
        view: "https://school-taupe-eight.vercel.app/",
        demo: "https://school-taupe-eight.vercel.app/"
      }
    },
    {
      id: 5,
      title: "Travel Booking Platform",
      description: "Comprehensive travel booking system with flight, hotel, and car rental search and reservation capabilities.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      links: {
        view: "#",
        demo: "#"
      }
    },
    {
      id: 6,
      title: "Food Delivery App",
      description: "Mobile application for food ordering and delivery with real-time tracking and multiple payment options.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Payment Gateway"],
      category: "mobile",
      links: {
        view: "#",
        demo: "#"
      }
    },
    {
      id: 7,
      title: "Crypto Tracker Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and market analysis.",
      image: "https://images.unsplash.com/photo-1620336655055-bd87ca8f1370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Vue.js", "WebSocket", "CoinGecko API", "Chart.js"],
      category: "web",
      links: {
        view: "#",
        demo: "#"
      }
    },
    {
      id: 8,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient records, appointment scheduling, and telemedicine consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Angular", "Spring Boot", "MySQL", "WebRTC"],
      category: "web",
      links: {
        view: "#",
        demo: "#"
      }
    },
    {
      id: 9,
      title: "Real Estate Listing Platform",
      description: "Modern property listing platform with advanced search filters, virtual tours, and agent connection features.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      category: "design",
      links: {
        view: "#",
        demo: "#"
      }
    },
    {
      id: 10,
      title: "AI-Powered Chatbot",
      description: "Intelligent chatbot system with natural language processing for customer support and engagement.",
      image: "https://images.unsplash.com/photo-1579762715459-5a068c289fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      technologies: ["Python", "TensorFlow", "React", "WebSocket"],
      category: "web",
      links: {
        view: "#",

      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        
        <div className="projects-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('web')}
          >
            Web Apps
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('design')}
          >
            UI/UX
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card" 
              data-category={project.category}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.links.view}><i className="fas fa-eye"></i></a>
                    <a href={project.links.demo}><i className="fas fa-external-link-alt"></i></a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <a href={project.links.demo} className="btn">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;