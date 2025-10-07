import { useState } from 'react';
import useAOS from '../hooks/useAOS';

const ContactForm = () => {
  useAOS();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setFormStatus({ type: 'error', message: 'Please select an image file' });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFormStatus({ type: 'error', message: 'Image size should be less than 5MB' });
      return;
    }
    setProfileImage(file);
    const reader = new FileReader();
    reader.onload = () => setPreviewImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('subject', formData.subject);
      submitData.append('message', formData.message);
      if (profileImage) submitData.append('profileImage', profileImage);

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        body: submitData
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus({ type: 'success', message: '✅ Your message has been sent!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setProfileImage(null);
        setPreviewImage(null);
        const fileInput = document.getElementById('profileImage');
        if (fileInput) fileInput.value = '';
      } else {
        setFormStatus({ type: 'error', message: data.message || '❌ Failed to send message.' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: '❌ Server error. Try again later.' });
    } finally {
      setIsSubmitting(false);
      document.querySelector('.form-status')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setPreviewImage(null);
    const fileInput = document.getElementById('profileImage');
    if (fileInput) fileInput.value = '';
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Let's Talk About Your Project</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <div className="contact-details">
              <div><i className="fas fa-map-marker-alt"></i> <span>New Delhi, India</span></div>
              <div><i className="fas fa-envelope"></i> <span>rsinghranjeet7428@gmail.com</span></div>
              <div><i className="fas fa-phone"></i> <span>+91 9315058665</span></div>
            </div>
          </div>

          <div className="contact-form" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} />
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} disabled={isSubmitting} />
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required disabled={isSubmitting}></textarea>

              {/* Image Upload */}
              <input type="file" id="profileImage" onChange={handleImageChange} accept="image/*" />
              {previewImage && (
                <div className="image-preview">
                  <img src={previewImage} alt="Preview" />
                  <button type="button" onClick={removeImage}>×</button>
                </div>
              )}

              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}

              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem; }
        .contact-details div { margin-bottom: 0.75rem; }
        input, textarea { width: 100%; padding: 0.75rem 1rem; border: 1px solid #ddd; border-radius: 0.5rem; font-size: 1rem; margin-bottom: 1rem; }
        .btn { background: #007bff; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer; }
        .form-status.success { background-color: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
        .form-status.error { background-color: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
        .image-preview { margin: 1rem 0; position: relative; display: inline-block; }
        .image-preview img { width: 80px; height: 80px; object-fit: cover; border-radius: 50%; }
        .image-preview button { position: absolute; top: -5px; right: -5px; background: #ff4757; color: #fff; border: none; border-radius: 50%; width: 22px; height: 22px; cursor: pointer; }
        @media (max-width: 768px) { .contact-content { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
};

export default ContactForm;
