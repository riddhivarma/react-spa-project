import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="page home"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page-title">Welcome to Our React SPA</h1>
      <p className="page-description">
        This is a single-page application built with React. Explore the navigation links to interact with different components like the counter, calculator, and live visitor API.
      </p>

      <motion.div
        className="features"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="feature-card" variants={cardVariants}>
          <h3>⚙️ Functional Components</h3>
          <p>We use both functional and class-based components in this project.</p>
        </motion.div>

        <motion.div className="feature-card" variants={cardVariants}>
          <h3>📊 API Integration</h3>
          <p>See live visitor data fetched using an API and enhanced with filters and pagination.</p>
        </motion.div>

        <motion.div className="feature-card" variants={cardVariants}>
          <h3>🎨 CSS Styling</h3>
          <p>All pages are styled for clarity, user-friendliness, and modern UI aesthetics.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;




