import React from 'react';
import NavTabs from './NavTabs';
import './styles/Header.css';

// Displays top section of the portfolio
function Header({ currentPage, handlePageChange }) {
  return (
    // Header container with the developer's name and the navigation tabs component
    <header className="header">
      <h1>Yega Cho</h1> {/* Developer's name */}
      {/* NavTabs component for navigation, passing current page and page change handler as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
