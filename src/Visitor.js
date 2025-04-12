import React, { useEffect, useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';

function Visitor() {
  const [visitors, setVisitors] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const visitorsPerPage = 5;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setVisitors(data))
      .catch(err => console.error(err));
  }, []);

  const uniqueDomains = [...new Set(visitors.map(v => v.email.split('@')[1]))];

  const filteredVisitors = visitors
    .filter(visitor =>
      visitor.name.toLowerCase().includes(search.toLowerCase()) &&
      (domainFilter ? visitor.email.endsWith(domainFilter) : true)
    )
    .sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'email') {
        return a.email.localeCompare(b.email);
      }
      return 0;
    });

  const indexOfLast = currentPage * visitorsPerPage;
  const indexOfFirst = indexOfLast - visitorsPerPage;
  const currentVisitors = filteredVisitors.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredVisitors.length / visitorsPerPage);

  // Animation Variants
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
      className="visitor-section"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Visitor Data</h2>

      <input
        type="text"
        placeholder="Search by name..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-sort">
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>

        <select value={domainFilter} onChange={(e) => setDomainFilter(e.target.value)}>
          <option value="">All Domains</option>
          {uniqueDomains.map((domain, idx) => (
            <option key={idx} value={domain}>{domain}</option>
          ))}
        </select>
      </div>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {currentVisitors.map(visitor => (
          <motion.li key={visitor.id} variants={itemVariants}>
            <strong>{visitor.name}</strong><br />
            {visitor.email}
          </motion.li>
        ))}
      </motion.ul>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}

export default Visitor;





