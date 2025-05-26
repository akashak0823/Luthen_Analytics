// src/Pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import '../Css/Home.css';

import Services from './Services';
import Industries from './Industries';
import About from './About';
import Contact from './Contact';

import { FaLightbulb, FaChartPie, FaServer, FaHandsHelping, FaCogs } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

const Home = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <div className="background-image-layer" />
      <div className="background-overlay" />

      <section className="hero-section">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2>
            Empowering with Intelligence:{' '}
            <span className="highlight typing-effect">Smarter Data, Smarter Decisions</span>
          </h2>
          <p>
            Luthen Analytics leverages AI and analytics to reveal deep insights and unlock growth for businesses.
          </p>
          <div className="cta-buttons">
            <button className="btn outline" onClick={scrollToServices}>Explore Services</button>
            <button className="btn filled">Get a Free Consultation</button>
          </div>
        </motion.div>
      </section>

      <section className="features-section">
        {[...Array(2)].map((_, i) => (
          <motion.div
            className="glass-card"
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            {i === 0 ? (
              <>
                <h3><FaLightbulb /> Why Luthen?</h3>
                <p>Proven ROI, industry-specific expertise, real-time insights.</p>
                <div className="testimonial">
                  “Helped us grow significantly in just 3 months” <br />– Retail Client
                </div>
              </>
            ) : (
              <>
                <h3><FaChartPie /> Key Features</h3>
                <ul>
                  <li><FaCogs /> Data-to-Decision Framework</li>
                  <li><FaChartPie /> Domain-Specific Models</li>
                  <li><FaServer /> Enterprise-Level Analytics</li>
                  <li><FaHandsHelping /> Subscription-Based Scalability</li>
                </ul>
                <button className="btn filled small">Book a Strategy Call</button>
              </>
            )}
          </motion.div>
        ))}
      </section>

      {/* Scroll target for Services section */}
      <motion.div
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Industries />
        <About />
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
