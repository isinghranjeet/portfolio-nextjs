import { useState, useEffect } from 'react';
import useAOS from '../hooks/useAOS';

const Testimonials = () => {
  useAOS();
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/contact');
        const data = await res.json();
        const dynamicTestimonials = Array.isArray(data)
          ? data.map(item => ({
              id: item._id || `dynamic-${Math.random()}`,
              text: item.message,
              author: item.name,
              role: item.subject || 'Visitor Feedback',
              image: item.imageUrl ? `http://localhost:5000${item.imageUrl}` : item.gravatarUrl || 'https://via.placeholder.com/100'
            }))
          : [];
        setTestimonials([...staticTestimonials, ...dynamicTestimonials]);
      } catch (err) {
        setTestimonials(staticTestimonials);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (!testimonials.length) return;
    const interval = setInterval(() => setActiveIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleImageError = (e) => (e.target.src = 'https://via.placeholder.com/100/007bff/ffffff?text=👤');
  const goToTestimonial = (i) => setActiveIndex(i);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (loading) return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What <span>People Say</span></h2>
        <p>Loading testimonials...</p>
      </div>
    </section>
  );

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What <span>People Say</span></h2>

        <div className="testimonials-wrapper">
          {testimonials.map((t, idx) => (
            <div key={t.id} className={`testimonial-card ${idx === activeIndex ? 'active' : ''}`}>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <img src={t.image} alt={t.author} onError={handleImageError} />
                <div className="author-info">
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}

          {testimonials.length > 1 && <>
            <button className="nav-arrow prev" onClick={goToPrev}>‹</button>
            <button className="nav-arrow next" onClick={goToNext}>›</button>
            <div className="testimonial-nav">
              {testimonials.map((_, i) => (
                <button key={i} className={`testimonial-dot ${i===activeIndex?'active':''}`} onClick={()=>goToTestimonial(i)} />
              ))}
            </div>
          </>}
        </div>
      </div>

      <style jsx>{`
   .testimonials-section {
  background: #f5f5f5; /* slightly warmer off-white */
  padding: 4rem 0;
  color: #333;
  position: relative;
}

.testimonial-card {
  display: none;
  padding: 2rem;
  margin: 1rem auto;
  background: #0d1b2a; /* dark card */
  color: #e0e0e0;
  border-radius: 1rem;
  box-shadow: 0 8px 25px rgba(0,0,0,0.35); /* stronger shadow for depth */
  text-align: center;
  max-width: 700px;
  transition: all 0.4s ease;
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 1.5rem;
  color: #cfd8dc;
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
  border: 2px solid #1f77b4;
  object-fit: cover;
}

.author-info h4 {
  margin: 0;
  color: #ffffff;
}

.author-info p {
  margin: 0;
  color: #b0bec5;
  font-size: 0.9rem;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #1f77b4;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-arrow.prev { left: 1rem; } 
.nav-arrow.next { right: 1rem; }

.testimonial-nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.testimonial-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #90a4ae;
  border: none;
  cursor: pointer;
}

.testimonial-dot.active {
  background: #1f77b4;
}

@media (max-width: 768px) {
  .testimonial-author { flex-direction: column; }
  .nav-arrow { width: 35px; height: 35px; }
}

        .testimonial-card.active { display: block; }
        .testimonial-text { font-style: italic; margin-bottom: 1.5rem; color: #cfd8dc; }
        .testimonial-author { display: flex; align-items: center; justify-content: center; gap: 1rem; }
        .testimonial-author img { width: 70px; height: 70px; border-radius: 50%; border: 2px solid #1f77b4; object-fit: cover; }
        .author-info h4 { margin:0; color:#ffffff; }
        .author-info p { margin:0; color:#b0bec5; font-size:0.9rem; }
        .nav-arrow { position:absolute; top:50%; transform:translateY(-50%); background:#1f77b4;color:white;width:45px;height:45px;border-radius:50%; border:none; font-size:1.5rem; cursor:pointer; }
        .nav-arrow.prev { left:1rem; } 
        .nav-arrow.next { right:1rem; }
        .testimonial-nav { display:flex; justify-content:center; gap:0.5rem; margin-top:1rem; }
        .testimonial-dot { width:12px;height:12px;border-radius:50%;background:#90a4ae; border:none; cursor:pointer; }
        .testimonial-dot.active { background:#1f77b4; }
        @media (max-width:768px) { .testimonial-author { flex-direction:column; } .nav-arrow { width:35px;height:35px; } }
      `}</style>
    </section>
  );
};

export default Testimonials;
