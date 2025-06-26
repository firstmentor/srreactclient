// AdminLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true); // 👈

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`${showSidebar ? 'd-block' : 'd-none'} d-md-block`} style={{marginTop:"-22px"}}>
        <Sidebar />
      </div>

      {/* Content */}
      <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{marginTop:"-66px"}}>
        <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <main className="flex-grow-1 p-3">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
