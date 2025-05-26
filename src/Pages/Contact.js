// src/Pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Css/Contact.css';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://your-backend-api.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('Failed to send. Try again.');
      }
    } catch (error) {
      setStatus('Error occurred. Please try again later.');
    }
  };

  return (
    <motion.div
      id="contact" 
      className="contact-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Let’s Start a <span className="highlight">Data-Driven</span> Conversation
        </h2>

        <div className="contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Write the Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="send-button">Send</button>
            {status && <p className="form-status">{status}</p>}
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            
            <h4>Direct Contact Info</h4>
            <p><strong>Email:</strong> <a href="mailto:hello@luthenanalytics.com">hello@luthenanalytics.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919698059591">+91 96980 59591</a></p>

            <iframe
              title="map"
              src="https://www.google.com/maps?q=Coimbatore&output=embed"
              loading="lazy"
              className="map-frame"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        <motion.div
          className="call-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="https://calendly.com/luthenanalytics/strategy-call" target="_blank" rel="noopener noreferrer">
            Book a 30-Min Strategy Call
          </a>
        </motion.div>
      </motion.div>

      <footer className="contact-footer">
        <p>© 2025 Luthen Analytics. All rights reserved.</p>
        <p>AkEditzefx   @akeditzefx@gmail.com</p>
        <a href="/terms">Terms & policy</a>
      </footer>
    </motion.div>
  );
};

export default Contact;
