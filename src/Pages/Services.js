// src/Pages/Services.js
import React from 'react';
import '../Css/Services.css';
import { motion } from 'framer-motion';

const serviceData = [
  {
    title: "Data Analytics & BI",
    front: "Visual dashboards and insights.",
    back: "Track performance in real-time with enterprise-grade BI tools."
  },
  {
    title: "Predictive Modeling",
    front: "Future insights, today.",
    back: "Unlock churn, demand, and revenue forecasting with ML models."
  },
  {
    title: "Data Engineering",
    front: "Built for scale.",
    back: "Automated pipelines and secure data architecture tailored to you."
  },
  {
    title: "Business Consulting",
    front: "Strategy that performs.",
    back: "Revenue-optimized growth with domain-specific analytics."
  },
  {
    title: "Full-Stack Partnership",
    front: "End-to-end intelligence.",
    back: "From architecture to execution — partner with us long-term for smart scale."
  }
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  return (
    <motion.div
      className="services-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>Explore Our <span className="highlight">Expertise</span></h1>
        <p>Discover how we deliver intelligence at every layer of your data journey.</p>
      </motion.div>

      <div className="cube-grid">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            className="cube-card"
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="cube-inner">
              <div className="cube-face cube-front">
                <h3>{service.title}</h3>
                <p>{service.front}</p>
              </div>
              <div className="cube-face cube-back">
                {service.back}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
