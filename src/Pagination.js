import React from 'react';
import './App.css'; 

function Pagination({ currentPage, totalPages, setCurrentPage, disabled }) {
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
        disabled={currentPage === 1 || disabled}
      >
        Prev
      </button>
      <span>Page {currentPage} of {totalPages || 1}</span>
      <button
        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages || disabled}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;