import { useState, useRef } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (file) => {
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
    setFormStatus({ type: '', message: '' });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleImageChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleImageChange(file);
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  // ✅ File ko base64 mein convert karne ka function
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      let profileImageBase64 = null;
      
      // ✅ Agar image hai to base64 mein convert karo
      if (profileImage) {
        profileImageBase64 = await convertToBase64(profileImage);
      }

      // ✅ JSON data bhejo, FormData nahi
      const response = await fetch('https://porthfolio-backend-1.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          profileImageBase64: profileImageBase64  // ✅ Base64 image data
        })
      });

      // ✅ Better error handling
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setFormStatus({ type: 'success', message: '✅ Your message has been sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setProfileImage(null);
        setPreviewImage(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setFormStatus({ type: 'error', message: data.message || '❌ Failed to send message.' });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setFormStatus({ 
        type: 'error', 
        message: `❌ Error: ${error.message}. Please try again.` 
      });
    } finally {
      setIsSubmitting(false);
      document.querySelector('.form-status')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setPreviewImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
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

              {/* Enhanced Image Upload Section */}
              <div className="image-upload-section">
                <label className="image-upload-label">
                  Profile Image (Optional)
                </label>
                
                <div 
                  className={`upload-area ${isDragging ? 'dragging' : ''} ${previewImage ? 'has-image' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={handleClickUpload}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileInputChange} 
                    accept="image/*" 
                    style={{ display: 'none' }} 
                  />
                  
                  {!previewImage ? (
                    <div className="upload-placeholder">
                      <div className="upload-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </div>
                      <div className="upload-text">
                        <p className="primary-text">Click to upload or drag and drop</p>
                        <p className="secondary-text">SVG, PNG, JPG or GIF (max. 5MB)</p>
                      </div>
                    </div>
                  ) : (
                    <div className="image-preview-container">
                      <div className="preview-image">
                        <img src={previewImage} alt="Preview" />
                        <div className="image-overlay">
                          <button type="button" className="change-btn" onClick={(e) => { e.stopPropagation(); handleClickUpload(); }}>
                            <i className="fas fa-sync-alt"></i>
                          </button>
                          <button type="button" className="remove-btn" onClick={(e) => { e.stopPropagation(); removeImage(); }}>
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                      <div className="image-info">
                        <span className="file-name">{profileImage?.name}</span>
                        <span className="file-size">
                          {(profileImage?.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  <i className={`fas ${formStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                  {formStatus.message}
                </div>
              )}

              <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-content { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 3rem; 
          margin-top: 2rem; 
        }
        .contact-details div { 
          margin-bottom: 0.75rem; 
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        input, textarea { 
          width: 100%; 
          padding: 0.75rem 1rem; 
          border: 1px solid #ddd; 
          border-radius: 0.5rem; 
          font-size: 1rem; 
          margin-bottom: 1rem; 
          box-sizing: border-box;
          transition: all 0.3s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }
        
        .btn { 
          background: #007bff; 
          color: white; 
          padding: 0.75rem 1.5rem; 
          border: none; 
          border-radius: 0.5rem; 
          cursor: pointer;
          width: 100%;
          font-size: 1rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .btn:hover:not(:disabled) {
          background: #0056b3;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
        }
        .btn:disabled {
          background: #6c757d;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        .form-status { 
          padding: 1rem; 
          border-radius: 0.5rem; 
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
        }
        .form-status.success { 
          background-color: #d1fae5; 
          color: #065f46; 
          border: 1px solid #a7f3d0; 
        }
        .form-status.error { 
          background-color: #fee2e2; 
          color: #991b1b; 
          border: 1px solid #fecaca; 
        }
        
        .image-upload-section {
          margin-bottom: 1.5rem;
        }
        .image-upload-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
          font-size: 0.875rem;
        }
        
        .upload-area {
          border: 2px dashed #d1d5db;
          border-radius: 0.75rem;
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #fafafa;
        }
        .upload-area:hover {
          border-color: #007bff;
          background: #f0f8ff;
        }
        .upload-area.dragging {
          border-color: #007bff;
          background: #e6f3ff;
          transform: scale(1.02);
        }
        .upload-area.has-image {
          padding: 1rem;
          border-style: solid;
          border-color: #10b981;
        }
        
        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .upload-icon {
          font-size: 2.5rem;
          color: #9ca3af;
        }
        .upload-area:hover .upload-icon {
          color: #007bff;
        }
        .primary-text {
          font-weight: 600;
          color: #374151;
          margin: 0;
        }
        .secondary-text {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
        }
        
        .image-preview-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .preview-image {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .preview-image img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 0.5rem;
          border: 3px solid #10b981;
        }
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .preview-image:hover .image-overlay {
          opacity: 1;
        }
        .change-btn, .remove-btn {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #374151;
        }
        .change-btn:hover {
          background: #007bff;
          color: white;
          transform: scale(1.1);
        }
        .remove-btn:hover {
          background: #ef4444;
          color: white;
          transform: scale(1.1);
        }
        
        .image-info {
          text-align: center;
        }
        .file-name {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.25rem;
        }
        .file-size {
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        @media (max-width: 768px) { 
          .contact-content { 
            grid-template-columns: 1fr; 
          }
          .upload-area {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;