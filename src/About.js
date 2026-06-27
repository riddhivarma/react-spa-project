import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

function About() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="page about"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page-title">About This Project</h1>
      <p className="page-description">
        This React Single Page Application (SPA) was created to demonstrate routing, component usage, animations, and API handling in a modern frontend environment.
      </p>

      <motion.ul
        className="about-list"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={itemVariants}>📌 React Router for seamless navigation</motion.li>
        <motion.li variants={itemVariants}>📌 API integration using `fetch`</motion.li>
        <motion.li variants={itemVariants}>📌 Sorting, filtering, and pagination on real-time data</motion.li>
        <motion.li variants={itemVariants}>📌 Clean CSS styling without external UI libraries</motion.li>
        <motion.li variants={itemVariants}>📌 Fully modular and extensible structure</motion.li>
      </motion.ul>
    </motion.div>
  );
}

export default About;


