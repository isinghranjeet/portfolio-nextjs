import { useState, useEffect } from 'react';
import useAOS from '../hooks/useAOS';

const Testimonials = () => {
  useAOS();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
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
      id: 3,
      text: "I mentored Ranjeet during his third year project on web development. He showed remarkable growth throughout the project, implementing complex features with minimal guidance. His portfolio projects reflect his passion for creating user-friendly interfaces.",
      author: "Dr. Namrata Vij",
      role: " Project Mentor (Java)",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFNADpqwuNAdw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728395726028?e=1760572800&v=beta&t=3n-xoTpRRfa0wrzGpVOsywC-YEDQCqfN0nJfI9fs0L0"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">What <span>People Say</span></h2>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial ${index === activeIndex ? 'active' : ''}`}
            >
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;