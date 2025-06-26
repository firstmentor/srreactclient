// Navbar.jsx
import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand navbar-light px-4 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
      
      {/* Mobile Toggle Button */}
      <button
        className="btn btn-outline-success d-md-none me-2"
        onClick={toggleSidebar}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Search Box */}
      <form className="d-none d-md-flex me-auto">
        <input className="form-control me-2" type="search" placeholder="Search..." />
      </form>

      {/* Right Side */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-success" href="#" role="button" data-bs-toggle="dropdown">
            <i className="fas fa-user-circle me-1"></i> Admin
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
