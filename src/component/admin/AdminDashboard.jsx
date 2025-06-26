// pages/admin/Dashboard.jsx
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container-fluid mt-4">
      <h2 className="text-brand mb-4">📊 Admin Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Total Users</h5>
              <p className="card-text fs-4">120</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Active Jobs</h5>
              <p className="card-text fs-4">45</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Applications</h5>
              <p className="card-text fs-4">300</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
