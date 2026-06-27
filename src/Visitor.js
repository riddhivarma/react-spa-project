import React, { useEffect, useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Pagination from './Pagination'; 

function Visitor() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 1. New error state added
  const [error, setError] = useState(null); 
  
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(''); 
  
  const [sortOption, setSortOption] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const visitorsPerPage = 5;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error state on new fetch attempts
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        // Explicitly check if the response is valid
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setVisitors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        // 2. Set the user-friendly error message if the fetch fails
        setError("Failed to load visitor data. Please check your connection and try again.");
        setLoading(false);
      });
  }, []);

  const uniqueDomains = [...new Set(visitors.map(v => v.email?.split('@')[1]).filter(Boolean))];

  const filteredVisitors = visitors
    .filter(visitor =>
      visitor.name.toLowerCase().includes(debouncedSearch.toLowerCase()) && 
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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); 
        }}
      />

      <div className="filter-sort">
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>

        <select value={domainFilter} onChange={(e) => {
          setDomainFilter(e.target.value);
          setCurrentPage(1); 
        }} >
          <option value="">All Domains</option>
          {uniqueDomains.map((domain, idx) => (
            <option key={idx} value={domain}>{domain}</option>
          ))}
        </select>
      </div>

      {/* 3. Updated Conditional Rendering Logic */}
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Fetching dynamic visitor data...</p>
        </div>
      ) : error ? (
        // Render the error message if the error state is populated
        <div className="error-box">
          <p>⚠️ {error}</p>
        </div>
      ) : (
        <motion.ul variants={listVariants} initial="hidden" animate="visible">
          {currentVisitors.length > 0 ? (
            currentVisitors.map(visitor => (
              <motion.li key={visitor.id} variants={itemVariants}>
                <strong>{visitor.name}</strong><br />
                {visitor.email}
              </motion.li>
            ))
          ) : (
            <p>No visitors match your criteria.</p>
          )}
        </motion.ul>
      )}

      {/* Hide pagination completely if there is an error */}
      {!error && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          setCurrentPage={setCurrentPage} 
          disabled={loading} 
        />
      )}

    </motion.div>
  );
}

export default Visitor;