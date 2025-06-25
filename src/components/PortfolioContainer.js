import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Deployed from './pages/Deployed';
import Elock from './pages/Elock';
import Types from './pages/Types';
import Keyways from './pages/keykeyways';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    if (currentPage === 'Deployed') {
        return <Deployed />;
    }
    if (currentPage === 'Elock') {
      return <Elock />;
  }
  if (currentPage === 'Types') {
    return <Types />;
}
  if (currentPage === 'Keyways') {
    return <Keyways />;
}
if (currentPage === 'Contact') {
    return <Contact />;
}
  }
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}