import { useState, useMemo, useCallback } from 'react';
import useAOS from '../hooks/useAOS';

const Projects = () => {
  useAOS();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Tech stack icons mapping - keeping it simple and clean
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
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      featured: true,
      links: {
        view: "#",
        demo: "#",
        github: "#"
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
        view: "#",
        demo: "#",
        github: "#"
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
        demo: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media performance with real-time metrics and data visualization.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["React", "D3.js", "REST API", "Material UI"],
      category: "web",
      featured: true,
      links: {
        view: "https://school-taupe-eight.vercel.app/",
        demo: "https://school-taupe-eight.vercel.app/",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Travel Booking Platform",
      description: "Comprehensive travel booking system with flight, hotel, and car rental search and reservation capabilities.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      featured: false,
      links: {
        view: "#",
        demo: "#",
        github: "#"
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
        view: "#",
        demo: "#",
        github: "#"
      }
    },
    {
      id: 7,
      title: "Crypto Tracker Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and market analysis.",
      image: "https://images.unsplash.com/photo-1620336655055-bd87ca8f1370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
        view: "#",
        demo: "#",
        github: "#"
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
      featured: false,
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

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My <span>Projects</span></h2>
        
        {/* Simple Search Bar */}
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
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        {/* Filter Buttons - Enhanced with counts */}
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

        {/* Projects Grid - Enhanced with tech icons */}
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
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.links.view} title="View Details">
                      <i className="fas fa-eye"></i>
                    </a>
                    <a href={project.links.demo} title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    {project.links.github && (
                      <a href={project.links.github} title="Source Code">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* Enhanced Tech Stack with Icons */}
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag" title={tech}>
                      <i className={techIcons[tech] || 'fas fa-code'}></i>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={project.links.demo} className="btn">
                    <i className="fas fa-external-link-alt"></i>
                    View Project
                  </a>
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
        <div className="project-modal">
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}></div>
          <div className="modal-content" data-aos="zoom-in">
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
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
                  <a href={selectedProject.links.demo} className="btn">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                  <a href={selectedProject.links.view} className="btn btn-outline">
                    <i className="fas fa-eye"></i>
                    View Details
                  </a>
                  {selectedProject.links.github && (
                    <a href={selectedProject.links.github} className="btn btn-outline">
                      <i className="fab fa-github"></i>
                      Source Code
                    </a>
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