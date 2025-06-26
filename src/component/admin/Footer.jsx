// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-sm-start p-3 mt-auto border-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <span>&copy; {new Date().getFullYear()} <strong className="text-success">SR Web Services</strong>. All rights reserved.</span>
          </div>
          <div className="col-sm-6 text-sm-end">
            <span>
              Designed by <a href="https://htmlcodex.com" className="text-success">HTML Codex</a>, Customized by <span className="text-success">You 😎</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
