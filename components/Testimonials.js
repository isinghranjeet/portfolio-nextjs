import { useState, useEffect } from 'react';
import useAOS from '../hooks/useAOS';

const Testimonials = () => {
  useAOS();
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ✅ 5 Static testimonials
  const staticTestimonials = [
    {
      id: 1,
      text: "Ranjeet was an exceptional student in my web development course. His projects consistently demonstrated creativity, technical skill, and attention to detail. He has a strong foundation in frontend technologies and learns quickly.",
      author: "Dr. Parminder Kaur",
      role: "Professor, Computer Science Department",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE08Z7G0RX4Eg/profile-displayphoto-scale_200_200/B56ZjstLEKHcAY-/0/1756317923482?e=1759968000&v=beta&t=PNL02VW75unsQ4zU7VMLDxDHJpTBhfPuaCET2ke07Hw"
    },
    {
      id: 2,
      text: "During our college hackathon, Ranjeet contributed significantly to our team's project. His problem-solving abilities and clean code practices helped us secure second place. He's a dedicated team player with strong technical skills.",
      author: "Rohit Sharma",
      role: "Teammate, Hackathon Project",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHbSzmLdG9F2Q/profile-displayphoto-scale_200_200/B56ZioCTFCG0AY-/0/1755165832979?e=1759968000&v=beta&t=Xi8N3Wg4NSsfsWtJ7vyZY6myfB6lg5RxX247SnQVmhw"
    },
    {
      id: 3,
      text: "I mentored Ranjeet during his third year project on web development. He showed remarkable growth throughout the project, implementing complex features with minimal guidance. His portfolio projects reflect his passion for creating user-friendly interfaces.",
      author: "Rajinder Kaur",
      role: "Developer & Project Mentor",
      image: "https://media.licdn.com/dms/image/v2/D5603AQExFDhhMwX21w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729781519140?e=1759968000&v=beta&t=pPtDEC038wEuiexs3rhU4tRbSbIfcF9rqbfphs6eXXI"
    },
    {
      id: 4,
      text: "As a fellow coding bootcamp participant, I witnessed Ranjeet's dedication to mastering web technologies. He consistently helped others understand complex concepts and built impressive projects that showcased both technical skills and design sense.",
      author: "Narinder Kaur",
      role: "Fellow Bootcamp Participant",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEFpIGrVjXuGA/profile-displayphoto-shrink_200_200/B56ZSZHrxpHoAY-/0/1737735717828?e=1759968000&v=beta&t=nzsCnen5tPXhFuD8Lw3OeNWV6qNTuWauzJFtrwSnEKA"
    },
    {
      id: 5,
      text: "I mentored Ranjeet during his third year project on Java development. He consistently demonstrated excellent problem-solving skills and a strong understanding of programming concepts. His projects are well-structured and reflect his dedication to learning.",
      author: "Dr. Namrata Vij",
      role: "Project Mentor (Java)",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFNADpqwuNAdw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728395726028?e=1760572800&v=beta&t=3n-xoTpRRfa0wrzGpVOsywC-YEDQCqfN0nJfI9fs0L0"
    }
  ];

  // ✅ BETTER IMAGE ERROR HANDLER
  const handleImageError = (e, testimonialId, originalSrc) => {
    console.log(`❌ Image failed for testimonial ${testimonialId}, using fallback`);
    
    // Use a reliable SVG placeholder
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDA3YmZmIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+8J+RqDwvdGV4dD4KPC9zdmc+';
    
    // Prevent infinite loop
    e.target.onerror = null;
  };

  // ✅ GET CORRECT IMAGE URL - UPDATED VERSION
  const getImageUrl = (item) => {
    console.log('🖼️ Processing image for:', item.name, item);

    // ✅ OPTION 1: If user uploaded actual photo - Use the UPLOADED image
    if (item.profileImage && item.profileImage.filename) {
      const uploadedImageUrl = `https://porthfolio-backend-1.onrender.com/uploads/${item.profileImage.filename}`;
      console.log('📍 Using UPLOADED PROFILE IMAGE:', uploadedImageUrl);
      return uploadedImageUrl;
    }

    // ✅ OPTION 2: Use Gravatar (if available)
    if (item.imageUrl && item.imageUrl.includes('gravatar.com')) {
      console.log('📍 Using GRAVATAR URL:', item.imageUrl);
      return item.imageUrl;
    }

    // ✅ OPTION 3: Fallback to default avatar
    console.log('👤 Using DEFAULT AVATAR for:', item.name);
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDA3YmZmIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+8J+RqDwvdGV4dD4KPC9zdmc+';
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError('');
        
        const API_URL = 'https://porthfolio-backend-1.onrender.com/api/contact';
        console.log('🔄 Fetching testimonials from:', API_URL);
        
        const response = await fetch(API_URL);
        console.log('📡 Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ API Response received:', data);
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received from API');
        }
        
        console.log(`📊 Found ${data.length} dynamic testimonials`);
        
        // ✅ PROCESS DYNAMIC TESTIMONIALS WITH CORRECT IMAGE URL
        const dynamicTestimonials = data.map((item, index) => {
          console.log(`🔍 Processing item ${index + 1}:`, {
            id: item._id,
            name: item.name,
            hasUploadedPhoto: !!(item.profileImage && item.profileImage.filename),
            profileImageFilename: item.profileImage?.filename,
            hasGravatar: !!(item.imageUrl && item.imageUrl.includes('gravatar.com'))
          });

          return {
            id: item._id || `dynamic-${Date.now()}-${index}`,
            text: item.message || 'No message provided',
            author: item.name || 'Anonymous',
            role: item.subject || 'Visitor Feedback',
            image: getImageUrl(item) // Use the correct image URL
          };
        });
        
        const allTestimonials = [...staticTestimonials, ...dynamicTestimonials];
        console.log('🎯 Final testimonials array:', allTestimonials);
        
        setTestimonials(allTestimonials);
        
      } catch (err) {
        console.error('❌ Error fetching testimonials:', err);
        setError(err.message);
        // Fallback to static testimonials only
        setTestimonials(staticTestimonials);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (!testimonials.length) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => setActiveIndex(index);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What <span>People Say</span></h2>
          <div className="loading-state">
            <p>Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What <span>People Say</span></h2>
          <div className="error-state">
            <p>Error loading testimonials: {error}</p>
          
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What <span>People Say</span></h2>
        
        <div className="testimonials-stats">
        
        </div>

        <div className="testimonials-wrapper">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            >
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  onError={(e) => handleImageError(e, testimonial.id, testimonial.image)}
                  loading="lazy"
                  crossOrigin="anonymous"
                />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}

          {testimonials.length > 1 && (
            <>
              <button className="nav-arrow prev" onClick={goToPrev} aria-label="Previous testimonial">
                ‹
              </button>
              <button className="nav-arrow next" onClick={goToNext} aria-label="Next testimonial">
                ›
              </button>
              
              <div className="testimonial-nav">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: #f5f5f5;
          padding: 4rem 0;
          color: #333;
          position: relative;
          min-height: 500px;
        }

        .testimonials-stats {
          text-align: center;
          margin-bottom: 2rem;
          color: #666;
          font-size: 0.9rem;
        }

        .loading-state, .error-state {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 0.5rem;
          margin: 2rem 0;
        }

        .error-state {
          background: #fee;
          border: 1px solid #fcc;
        }

        .testimonial-card {
          display: none;
          padding: 2.5rem;
          margin: 1rem auto;
          background: #0d1b2a;
          color: #e0e0e0;
          border-radius: 1rem;
          box-shadow: 0 8px 25px rgba(0,0,0,0.35);
          text-align: center;
          max-width: 700px;
          transition: all 0.4s ease;
          border-left: 4px solid #1f77b4;
        }

        .testimonial-card.active {
          display: block;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .testimonial-text {
          font-style: italic;
          margin-bottom: 1.5rem;
          color: #cfd8dc;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .testimonial-author img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 3px solid #1f77b4;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .testimonial-author img:hover {
          transform: scale(1.05);
        }

        .author-info h4 {
          margin: 0;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .author-info p {
          margin: 0.25rem 0 0 0;
          color: #b0bec5;
          font-size: 0.9rem;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #1f77b4;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-arrow:hover {
          background: #1565c0;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 4px 12px rgba(31, 119, 180, 0.3);
        }

        .nav-arrow.prev {
          left: 1rem;
        }

        .nav-arrow.next {
          right: 1rem;
        }

        .testimonial-nav {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .testimonial-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #90a4ae;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .testimonial-dot.active {
          background: #1f77b4;
          transform: scale(1.2);
        }

        .testimonial-dot:hover {
          background: #1f77b4;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .testimonial-author {
            flex-direction: column;
            text-align: center;
          }
          
          .nav-arrow {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
          
          .nav-arrow.prev {
            left: 0.5rem;
          }
          
          .nav-arrow.next {
            right: 0.5rem;
          }
          
          .testimonial-card {
            padding: 1.5rem;
            margin: 0.5rem;
          }
          
          .testimonials-section {
            padding: 2rem 0;
          }
        }

        @media (max-width: 480px) {
          .testimonial-author img {
            width: 60px;
            height: 60px;
          }
          
          .testimonial-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;