import React from 'react';
import { Link } from 'react-router-dom';
import clientLogo from '/src/assets/images/client-logo.png';
import '../index.css';

function Header() {
  // 👇 Menu बंद करने वाला function
  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-collapse.show');
    if (navbarToggler) {
      // Collapse menu manually
      const collapse = new bootstrap.Collapse(navbarToggler, {
        toggle: true,
      });
    }
  };

  return (
    <>
      <nav className="navbar mt-0 navbar-expand-lg fixed-top sticky" id="navbar">
        <div className="container-fluid custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={clientLogo} height="80" alt="" className="custom-shadow" />
          </Link>
          <div>
            <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation">
              <i className="mdi mdi-menu"></i>
            </button>
          </div>

          <div className="collapse navbar-collapse TGreen" id="navbarCollapse">
            <ul className="navbar-nav mx-auto navbar-center text-center">
              <li className="nav-item custom-pl-lg">
                <Link to="/" className="nav-link" onClick={handleNavLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={handleNavLinkClick}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/client" className="nav-link" onClick={handleNavLinkClick}>Clients</Link>
              </li>
              <li className="nav-item">
                <Link to="/candidate" className="nav-link" onClick={handleNavLinkClick}>Candidates</Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link" onClick={handleNavLinkClick}>Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
