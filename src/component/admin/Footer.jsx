// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-sm-start p-3 mt-auto border-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <span>&copy; {new Date().getFullYear()} <strong className="text-success">SR | Web Consultancy Servicess</strong>. All rights reserved.</span>
          </div>
          <div className="col-sm-6 text-sm-end">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
