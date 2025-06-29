import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`position-fixed top-0 start-0 h-100 bg-dark z-3 ${showSidebar ? 'd-block' : 'd-none'} d-md-block`}
        style={{ width: '240px' }}
      >
        <Sidebar />
      </div>

      {/* Content */}
      <div
        className="flex-grow-1 d-flex flex-column min-vh-100"
        style={{
          marginLeft: showSidebar ? '240px' : '0px',
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <main className="flex-grow-1 p-3 pt-4 mt-2">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
