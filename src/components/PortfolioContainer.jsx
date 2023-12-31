// Import necessary React hooks and components
import { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';

// Define the PortfolioContainer functional component
export default function PortfolioContainer() {
  // Use useState to manage the current page state
  const [currentPage, setCurrentPage] = useState('Home');

  // Function to render the page based on the current page state
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  // Function to handle page change, updates the currentPage state
  const handlePageChange = (page) => setCurrentPage(page);

  // Render the Header, main content based on current page, and the Footer
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <Footer />
    </div>
  );
}
