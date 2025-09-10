import { useState } from 'react';
import useAOS from '../hooks/useAOS';

const Contact = () => {
  useAOS();
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake form submission (frontend only)
    const random = Math.random();

    if (random < 0.8) {
      setFormStatus('success');
      e.target.reset();
    } else {
      setFormStatus('error');
    }

    // Scroll to form status message
    document.querySelector('.form-status').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Let's Talk About Your Project</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect. I'm currently available for
              freelance work and full-time opportunities.
            </p>
            <div className="contact-details">
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <span>New Delhi, India</span>
              </div>
              <div>
                <i className="fas fa-envelope"></i>
                <span>rsinghranjeet7428@gmail.com</span>
              </div>
              <div>
                <i className="fas fa-phone"></i>
                <span>+91 9315058665</span>
              </div>
            </div>
          </div>
          <div className="contact-form" data-aos="fade-left">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
              <div
                className={`form-status ${
                  formStatus === 'success' ? 'success' : ''
                } ${formStatus === 'error' ? 'error' : ''}`}
              >
                {formStatus === 'success' &&
                  'Thank you! Your message has been sent successfully.'}
                {formStatus === 'error' &&
                  'Sorry, there was an error sending your message. Please try again.'}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
