import React, { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Message sent:', data);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      });
  };

  return (
    <motion.div
      className="page contact"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page-title">Contact Us</h1>
      <p className="page-description">
        We'd love to hear from you! Fill out the form and we’ll get back to you.
      </p>

      <div className="contact-grid" >
        <form className="contact-form" onSubmit={handleSubmit} >
          <input
            type="text"
            name="name" 
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}  style={{ width: '95%' }}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"  style={{ width: '95%' }}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Your Message"  style={{ width: '95%' }}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">Send Message</button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                🎉 Message Sent Successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <div className="contact-side-boxes">
          <motion.div
            className="developer-info"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>👨‍💻 Developer Info</h2>
            <p><strong>Name:</strong> Riddhi Varma</p>
            <p><strong>Role:</strong> Developer and Designer</p>
            <p>
          <strong>About the Project:</strong> I created this entire website independently using React.js. It includes dynamic components, API integrations, form handling, and interactive UI.
        </p>
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>📞 Contact Info</h2>
            <p><strong>Email:</strong> riddhivarma.dev@example.com</p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/riddhivarma" target="_blank" rel="noopener noreferrer">
                github.com/riddhivarma
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a href="https://www.linkedin.com/in/riddhi-varma5105" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/riddhi-varma5105
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;











