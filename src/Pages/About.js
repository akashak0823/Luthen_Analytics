// src/Pages/About.js
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';
import { FaBullseye, FaRocket, FaLightbulb } from 'react-icons/fa';
import { BsCardText } from 'react-icons/bs';
import '../Css/About.css';

const cardData = [
  {
    icon: <FaBullseye className="industry-icon" />,
    title: 'Mission',
    text: `Deliver high-impact data intelligence solutions\nthat drive growth, efficiency, and decision-making.`,
  },
  {
    icon: <BsCardText className="industry-icon" />,
    title: `Founder’s Note`,
    text: `“I believe the future of business lies in how well we\nread the data today. Luthen is my answer to that future.” ~ Fayaz`,
  },
  {
    icon: <FaLightbulb className="industry-icon" />,
    title: 'Vision',
    text: `To become India’s top business analytics partner.`,
  },
  {
    icon: <FaRocket className="industry-icon" />,
    title: 'Competitive Edge',
    text: `Accurate AI models\nFull data ownership\nScalable & minimal-disruption implementation`,
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const About = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.2,
        });
      }
    });
  }, []);

  return (
    <motion.section
      id="about"  
      className="about-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>
          Behind the Data, There’s <span className="highlight">Vision.</span>
        </h2>

        <div className="about-grid">
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              className="cube-card"
              ref={(el) => (cardRefs.current[i] = el)}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {card.icon}
              <div className="card-title">{card.title}</div>
              <div className="card-text">
                {card.text.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
