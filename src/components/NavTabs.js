import React from 'react';
import '../assets/style/navtab.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills justify-content-center">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About MEDECO
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          MEDECO original thru 4
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Deployed"

          onClick={() => handlePageChange('Deployed')}
          className={currentPage === 'Deployed' ? 'nav-link active' : 'nav-link'}
        >
          Picking Theory
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Skills"

          onClick={() => handlePageChange('Skills')}
          className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          Picking Resources
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Elock"

          onClick={() => handlePageChange('Elock')}
          className={currentPage === 'Elock' ? 'nav-link active' : 'nav-link'}
        >
          MEDECO Electronic Locks
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#types"

          onClick={() => handlePageChange('Types')}
          className={currentPage === 'Types' ? 'nav-link active' : 'nav-link'}
        >
          Medeco Type Identifications
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;