// src/Pages/Industries.js
import React, { useEffect } from 'react';
import '../Css/Industries.css';
import { motion } from 'framer-motion';

import {
  FaShoppingBag,
  FaHeartbeat,
  FaGraduationCap,
  FaIndustry,
  FaChartLine,
  FaCity,
} from 'react-icons/fa';

const industries = [
  { icon: <FaShoppingBag />, label: 'Retail & E-Commerce' },
  { icon: <FaHeartbeat />, label: 'Healthcare & Life Sciences' },
  { icon: <FaGraduationCap />, label: 'Education & EdTech' },
  { icon: <FaIndustry />, label: 'Manufacturing & Supply Chain' },
  { icon: <FaChartLine />, label: 'Finance & FinTech' },
  { icon: <FaCity />, label: 'Real Estate & Infrastructure' },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const Industries = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.cube-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rotateX = (y / height - 0.5) * 20;
        const rotateY = (x / width - 0.5) * -20;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      });
    });
  }, []);

  return (
    <motion.div
      className="industries-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="industries-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Intelligence That Fits Every Industry</h2>

        <div className="industries-grid">
          {industries.map((item, index) => (
            <motion.div
              className="cube-card"
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="industry-icon">{item.icon}</div>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="industries-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="demo-button">Request a Demo</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Industries;
