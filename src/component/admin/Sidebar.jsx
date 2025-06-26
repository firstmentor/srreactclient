import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div
      style={{ backgroundColor: '#007b5e', width: '240px' }}
      className="text-white min-vh-100 p-3 shadow-lg position-relative"
    >
      <h4 className="text-center mb-4 fw-bold">🌱 SR Admin</h4>

      <ul className="nav flex-column">

        {/* Dashboard */}
        <li className="nav-item mb-2">
          <Link to="/admin/dashboard" className="nav-link text-white fw-semibold">
            <i className="fas fa-tachometer-alt me-2"></i> Dashboard
          </Link>
        </li>

        {/* Categories */}
        <li className="nav-item mb-2">
          <button
            onClick={() => toggleDropdown('categories')}
            className="nav-link text-white fw-semibold d-flex justify-content-between align-items-center bg-transparent border-0 w-100 text-start"
          >
            <span><i className="fas fa-layer-group me-2"></i> Categories</span>
            <i className={`fas fa-chevron-${openMenu === 'categories' ? 'up' : 'down'}`}></i>
          </button>
          {openMenu === 'categories' && (
            <ul className="list-unstyled ps-3 overflow-hidden animate__animated animate__fadeIn" style={{ whiteSpace: 'nowrap' }}>
              <li><Link to="/admin/categories/add" className="nav-link text-white small ps-4 py-1">➕ Add Category</Link></li>
              <li><Link to="/admin/categories" className="nav-link text-white small ps-4 py-1">📋 Display Categories</Link></li>
            </ul>
          )}
        </li>

        {/* Current Openings */}
        <li className="nav-item mb-2">
          <button
            onClick={() => toggleDropdown('openings')}
            className="nav-link text-white fw-semibold d-flex justify-content-between align-items-center bg-transparent border-0 w-100 text-start"
          >
            <span><i className="fas fa-briefcase me-2"></i> Current Openings</span>
            <i className={`fas fa-chevron-${openMenu === 'openings' ? 'up' : 'down'}`}></i>
          </button>
          {openMenu === 'openings' && (
            <ul className="list-unstyled ps-3 overflow-hidden animate__animated animate__fadeIn" style={{ whiteSpace: 'nowrap' }}>
              <li><Link to="/admin/jobs/add" className="nav-link text-white small ps-4 py-1">➕ Add Job</Link></li>
              <li><Link to="/admin/jobs" className="nav-link text-white small ps-4 py-1">📋 Display Jobs</Link></li>
            </ul>
          )}
        </li>

        {/* Post Requirement */}
        <li className="nav-item mb-2">
          <Link to="/admin/requirement" className="nav-link text-white fw-semibold">
            <i className="fas fa-file-signature me-2"></i> Post Requirement
          </Link>
        </li>

        {/* Post Resume */}
        <li className="nav-item mb-2">
          <Link to="/admin/resume" className="nav-link text-white fw-semibold">
            <i className="fas fa-file-upload me-2"></i> Post Resume
          </Link>
        </li>

        {/* Contact */}
        <li className="nav-item mb-2">
          <Link to="/admin/contact" className="nav-link text-white fw-semibold">
            <i className="fas fa-envelope me-2"></i> Contact
          </Link>
        </li>

        {/* Logout */}
        <li className="nav-item mt-3 border-top pt-3">
          <Link to="/logout" className="nav-link text-white fw-semibold">
            <i className="fas fa-sign-out-alt me-2"></i> Logout
          </Link>
        </li>
      </ul>

      {/* Optional Footer (you can show © year here if needed) */}
      <div className="text-center text-white-50 small mt-4">
        © {new Date().getFullYear()} SR Web
      </div>
    </div>
  );
};

export default Sidebar;
