import { useState, useMemo, useCallback } from 'react';
import useAOS from '../hooks/useAOS';

const Projects = () => {
  useAOS();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Tech stack icons mapping
  const techIcons = {
    // Frontend
    'React': 'fab fa-react',
    'Vue.js': 'fab fa-vuejs',
    'Angular': 'fab fa-angular',
    'Next.js': 'fas fa-bolt',
    'React Native': 'fab fa-react',
    
    // Backend
    'Node.js': 'fab fa-node-js',
    'Spring Boot': 'fas fa-leaf',
    'Python': 'fab fa-python',
    
    // Databases
    'MongoDB': 'fas fa-database',
    'Firebase': 'fas fa-fire',
    'MySQL': 'fas fa-database',
    
    // APIs & Services
    'REST API': 'fas fa-cloud',
    'WebSocket': 'fas fa-plug',
    'CoinGecko API': 'fas fa-chart-line',
    'Google Maps API': 'fas fa-map-marker-alt',
    'WebRTC': 'fas fa-video',
    
    // Payment
    'Stripe': 'fab fa-stripe',
    'Payment Gateway': 'fas fa-credit-card',
    
    // UI & Styling
    'CSS3': 'fab fa-css3-alt',
    'Material UI': 'fas fa-palette',
    
    // State Management & Tools
    'Redux': 'fas fa-code-branch',
    'Chart.js': 'fas fa-chart-bar',
    'D3.js': 'fas fa-chart-area',
    
    // Mobile
    'Flutter': 'fas fa-mobile-alt',
    'TensorFlow': 'fas fa-brain'
  };

  const projects = [
    {
      id: 1,
      title: "Examination Management System",
      description: "A comprehensive online examination platform with real-time monitoring and automated evaluation.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      featured: false,
      links: {
        view: "https://online-exam-app-neon.vercel.app",
        demo: "https://online-exam-app-neon.vercel.app",
        github: "https://github.com/isinghranjeet/online-exam-app"
      }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["Vue.js", "Firebase", "CSS3", "Chart.js"],
      category: "web",
      featured: false,
      links: {
        view: "https://scintillating-pie-157e81.netlify.app/",
        demo: "https://scintillating-pie-157e81.netlify.app/",
        github: "https://github.com/isinghranjeet/Task-Manager"
      }
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      description: "Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      category: "mobile",
      featured: true,
      links: {
        view: "#",
        demo: "https://fitness-demo.vercel.app/",
        github: "https://github.com/example/fitness-tracker"
      }
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media performance with real-time metrics and data visualization.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["React", "D3.js", "REST API", "Material UI"],
      category: "web",
      featured: false,
      links: {
        view: "https://school-taupe-eight.vercel.app/",
        demo: "https://school-taupe-eight.vercel.app/",
        github: "https://github.com/example/social-dashboard"
      }
    },
    {
      id: 5,
      title: "Travel Booking Platform",
      description: "Comprehensive travel booking system with flight, hotel, and car rental search and reservation capabilities.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      featured: true,
      links: {
        view: "#",
        demo: "",
        github: ""
      }
    },
    {
      id: 6,
      title: "Food Delivery App",
      description: "Mobile application for food ordering and delivery with real-time tracking and multiple payment options.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Payment Gateway"],
      category: "mobile",
      featured: false,
      links: {
        view: "https://lively-faloodeh-f07528.netlify.app/",
        demo: "https://lively-faloodeh-f07528.netlify.app/",
        github: "https://github.com/isinghranjeet/Food-Dilivery-App"
      }
    },
    {
      id: 7,
      title: "Crypto Tracker Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and market analysis.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      technologies: ["Vue.js", "WebSocket", "CoinGecko API", "Chart.js"],
      category: "web",
      featured: true,
      links: {
        view: "#",
        demo: "#",
        github: "#"
      }
    },
    {
      id: 8,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient records, appointment scheduling, and telemedicine consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Angular", "Spring Boot", "MySQL", "WebRTC"],
      category: "web",
      featured: false,
      links: {
        view: "https://effulgent-pithivier-cbc3f0.netlify.app/",
        demo: "https://effulgent-pithivier-cbc3f0.netlify.app/",
        github: "https://github.com/isinghranjeet/Patient-Management-System"
      }
    },
    {
      id: 9,
      title: "Real Estate Listing Platform",
      description: "Modern property listing platform with advanced search filters, virtual tours, and agent connection features.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      category: "design",
      featured: true,
      links: {
        view: "#",
        demo: "#",
        github: "#"
      }
    },
    {
      id: 10,
      title: "AI-Powered Chatbot",
      description: "Intelligent chatbot system with natural language processing for customer support and engagement.",
      image: "https://images.unsplash.com/photo-1579762715459-5a068c289fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      technologies: ["Python", "TensorFlow", "React", "WebSocket"],
      category: "web",
      featured: true,
      links: {
        view: "#",
        demo: "#",
        github: "#"
      }
    }
  ];

  const filteredProjects = useMemo(() => {
    let filtered = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    return filtered;
  }, [activeFilter, searchTerm]);

  const projectStats = useMemo(() => ({
    total: projects.length,
    web: projects.filter(p => p.category === 'web').length,
    mobile: projects.filter(p => p.category === 'mobile').length,
    design: projects.filter(p => p.category === 'design').length,
    featured: projects.filter(p => p.featured).length
  }), []);

  // Function to check if link is valid
  const isValidLink = (link) => {
    return link && link !== "#" && link.trim() !== "";
  };

  // Function to handle link clicks
  const handleLinkClick = (link, event) => {
    if (!isValidLink(link)) {
      event.preventDefault();
      console.log("No link available for this project");
    }
  };

  // Function to handle project card click for modal
  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My <span>Projects</span></h2>
        
        {/* Search Bar */}
        <div className="projects-search" data-aos="fade-up">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter" data-aos="fade-up">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('all')}
          >
            All <span className="filter-count">({projectStats.total})</span>
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('web')}
          >
            Web Apps <span className="filter-count">({projectStats.web})</span>
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile <span className="filter-count">({projectStats.mobile})</span>
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`} 
            onClick={() => setActiveFilter('design')}
          >
            UI/UX <span className="filter-count">({projectStats.design})</span>
          </button>
        </div>

        {/* Results Info */}
        {searchTerm && (
          <div className="results-info" data-aos="fade-up">
            <p>
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} 
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              data-category={project.category}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              {project.featured && (
                <div className="featured-badge">
                  <i className="fas fa-star"></i> Featured
                </div>
              )}
              
              <div className="project-img">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <button 
                      className="project-link-btn"
                      onClick={() => handleProjectClick(project)}
                      title="View Details"
                      aria-label="View project details"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <a 
                      href={isValidLink(project.links.demo) ? project.links.demo : "#"} 
                      onClick={(e) => handleLinkClick(project.links.demo, e)}
                      className={!isValidLink(project.links.demo) ? "disabled-link" : ""}
                      title={isValidLink(project.links.demo) ? "Live Demo" : "No demo available"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    {project.links.github && (
                      <a 
                        href={isValidLink(project.links.github) ? project.links.github : "#"} 
                        onClick={(e) => handleLinkClick(project.links.github, e)}
                        className={!isValidLink(project.links.github) ? "disabled-link" : ""}
                        title={isValidLink(project.links.github) ? "Source Code" : "Code not available"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* Tech Stack */}
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag" title={tech}>
                      <i className={techIcons[tech] || 'fas fa-code'}></i>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <button 
                    className={`btn ${!isValidLink(project.links.demo) ? "btn-disabled" : ""}`}
                    onClick={() => {
                      if (isValidLink(project.links.demo)) {
                        window.open(project.links.demo, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    disabled={!isValidLink(project.links.demo)}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    {isValidLink(project.links.demo) ? "View Project" : "Coming Soon"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="no-projects" data-aos="fade-up">
            <i className="fas fa-search"></i>
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button 
              className="btn"
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal active">
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}></div>
          <div className="modal-content" data-aos="zoom-in">
            <button 
              className="modal-close" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                
                <div className="modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        <i className={techIcons[tech] || 'fas fa-code'}></i>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <button 
                    onClick={() => {
                      if (isValidLink(selectedProject.links.demo)) {
                        window.open(selectedProject.links.demo, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className={`btn ${!isValidLink(selectedProject.links.demo) ? "btn-disabled" : ""}`}
                    disabled={!isValidLink(selectedProject.links.demo)}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    {isValidLink(selectedProject.links.demo) ? "Live Demo" : "Demo Coming Soon"}
                  </button>
                 
                  {selectedProject.links.github && (
                    <button 
                      onClick={() => {
                        if (isValidLink(selectedProject.links.github)) {
                          window.open(selectedProject.links.github, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      className={`btn btn-outline ${!isValidLink(selectedProject.links.github) ? "btn-disabled" : ""}`}
                      disabled={!isValidLink(selectedProject.links.github)}
                    >
                      <i className="fab fa-github"></i>
                      {isValidLink(selectedProject.links.github) ? "Source Code" : "Code Private"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;