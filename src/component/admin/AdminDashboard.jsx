import React, { useState } from 'react';
import { useGetApplicationsQuery } from '../../features/job/jobApi';

const AdminDashboard = () => {
  const { data, error, isLoading } = useGetApplicationsQuery();
  console.log(data)

  const applications = data?.data || [];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(applications.length / perPage);

  const paginatedData = applications.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  if (isLoading) return <p>⏳ Loading applications...</p>;
  if (error) return <p>❌ Failed to fetch applications.</p>;

  return (
    <div className="container-fluid py-3">
      <h2 className="text-brand mb-4">📊 Admin Dashboard</h2>

      {/* Cards */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Total Users</h5>
              <p className="card-text fs-4">120</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Active Jobs</h5>
              <p className="card-text fs-4">45</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Applications</h5>
              <p className="card-text fs-4">{applications.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="card-title">📥 Applications List</h5>
          <div className="table-responsive">
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Designation</th>
                  <th>Resume</th>
                  <th>Applied On</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((app, index) => (
                  <tr key={app._id}>
                    <td>{(currentPage - 1) * perPage + index + 1}</td>
                    <td>{app.name}</td>
                    <td>{app.email}</td>
                    <td>{app.phone}</td>
                    <td>{app.designation}</td>
                    <td>
                      <a
                        href={`http://localhost:4000${app.resumeUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                      >
                        View PDF
                      </a>
                    </td>
                    <td>{new Date(app.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`btn mx-1 ${
                  currentPage === page ? 'btn-success' : 'btn-outline-secondary'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
