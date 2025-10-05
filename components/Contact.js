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















// import { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const testBackendConnection = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/health');
//       const data = await response.json();
//       return { success: true, data };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     try {
//       // Test connection first
//       const connectionTest = await testBackendConnection();
      
//       if (!connectionTest.success) {
//         throw new Error(`
//           ❌ Cannot connect to backend server!
          
//           Please make sure:
//           1. Backend is running on port 5000
//           2. Run: cd portfolio-backend && npm run dev
//           3. Then test: http://localhost:5000/api/health
//         `);
//       }

//       console.log('✅ Backend connected:', connectionTest.data);

//       const response = await fetch('http://localhost:5000/api/contact/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (data.success) {
//         setSubmitStatus({
//           type: 'success',
//           message: '🎉 ' + data.message
//         });
//         setFormData({ name: '', email: '', subject: '', message: '' });
//       } else {
//         throw new Error(data.message || 'Failed to send message');
//       }
//     } catch (error) {
//       setSubmitStatus({
//         type: 'error',
//         message: error.message
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="section contact">
//       <div className="container">
//         <h2 className="section-title">
//           Get In <span>Touch</span>
//         </h2>
        
//         <div className="contact-content">
//           <div className="contact-info">
//             <h3>Let's Connect</h3>
//             <p>
//               I'm always interested in new opportunities, whether it's a 
//               freelance project, collaboration, or full-time position.
//             </p>
            
//             <div className="contact-details">
//               <div className="contact-item">
//                 <strong>Backend Status:</strong>
//                 <span>
//                   <button 
//                     type="button" 
//                     onClick={async () => {
//                       const test = await testBackendConnection();
//                       if (test.success) {
//                         alert('✅ Backend is connected!');
//                       } else {
//                         alert('❌ Backend connection failed');
//                       }
//                     }}
//                     style={{
//                       marginLeft: '10px', 
//                       padding: '5px 10px', 
//                       background: '#007bff', 
//                       color: 'white', 
//                       border: 'none', 
//                       borderRadius: '4px', 
//                       cursor: 'pointer'
//                     }}
//                   >
//                     Test Connection
//                   </button>
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="contact-form">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
              
//               <div className="form-group">
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 ></textarea>
//               </div>

//               {submitStatus.message && (
//                 <div className={`status-message ${submitStatus.type}`} style={{whiteSpace: 'pre-line'}}>
//                   {submitStatus.message}
//                 </div>
//               )}

//               <button 
//                 type="submit" 
//                 className="btn btn-primary"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? '📤 Sending...' : '📨 Send Message'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .contact-content {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 3rem;
//           margin-top: 2rem;
//         }

//         .form-group {
//           margin-bottom: 1.5rem;
//         }

//         input, textarea {
//           width: 100%;
//           padding: 0.75rem 1rem;
//           border: 1px solid #ddd;
//           border-radius: 0.5rem;
//           font-size: 1rem;
//         }

//         .status-message {
//           padding: 0.75rem 1rem;
//           border-radius: 0.5rem;
//           margin-bottom: 1rem;
//           font-weight: 500;
//         }

//         .status-message.success {
//           background-color: #d1fae5;
//           color: #065f46;
//           border: 1px solid #a7f3d0;
//         }

//         .status-message.error {
//           background-color: #fee2e2;
//           color: #991b1b;
//           border: 1px solid #fecaca;
//         }

//         @media (max-width: 768px) {
//           .contact-content {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Contact;