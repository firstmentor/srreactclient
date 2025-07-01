import React, { useState } from "react";
import { useGetApplicationsQuery } from "../../features/job/jobApi";
import {
  useGetAdminProfileQuery,
  useGetAdminStatsQuery,
} from "../../features/admin/adminApi";
import { useGetAllRequirementsQuery } from '../../features/job/requirementApi';


import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const AdminDashboard = () => {
  const {
    data: applicationData,
    error: applicationError,
    isLoading: applicationLoading,
  } = useGetApplicationsQuery();

  const {
    data: profileData,
    error: profileError,
    isLoading: profileLoading,
  } = useGetAdminProfileQuery();


  const {
    data: statsData,
    error: statsError,
    isLoading: statsLoading,
  } = useGetAdminStatsQuery();
  
  const {
    data: requirementData,
    error: requirementError,
    isLoading: requirementLoading,
  } = useGetAllRequirementsQuery();
  
  const requirements = requirementData?.data || [];

  const admin = profileData?.admin;
  const applications = applicationData?.data || [];

  // 🔍 Search / Sort / Pagination
  const [search, setSearch] = useState('');
  const [sortByDate, setSortByDate] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const filtered = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.email.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = filtered.sort((a, b) =>
    sortByDate === 'asc'
      ? new Date(a.createdAt) - new Date(b.createdAt)
      : new Date(b.createdAt) - new Date(a.createdAt)
  );

  const totalPages = Math.ceil(sorted.length / perPage);
  const paginatedData = sorted.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const exportToPDF = () => {
    const doc = new jsPDF();
    const rows = sorted.map((app, index) => [
      index + 1,
      app.name,
      app.email,
      app.phone,
      app.designation,
      new Date(app.createdAt).toLocaleString(),
    ]);
    autoTable(doc, {
      head: [['#', 'Name', 'Email', 'Phone', 'Designation', 'Applied On']],
      body: rows,
    });
    doc.save('Applications.pdf');
  };

  const exportToExcel = () => {
    const data = sorted.map((app, index) => ({
      '#': index + 1,
      Name: app.name,
      Email: app.email,
      Phone: app.phone,
      Designation: app.designation,
      'Applied On': new Date(app.createdAt).toLocaleString(),
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Applications');
    const buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Applications.xlsx');
  };

  if (applicationLoading || profileLoading || statsLoading)
    return <p>⏳ Loading...</p>;
  if (applicationError || profileError || statsError)
    return <p>❌ Failed to fetch data.</p>;

  return (
    <div className="container-fluid py-3">
      <h2 className="text-brand mb-4">📊 Welcome, {admin?.name}</h2>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">👥 Total Users</h5>
              <p className="fs-4">{statsData?.users}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">💼 Active Jobs</h5>
              <p className="fs-4">{statsData?.jobs}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">📄 Applications</h5>
              <p className="fs-4">{applications.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="d-flex gap-2">
          <button
            className="btn btn-secondary"
            onClick={() => setSortByDate(sortByDate === 'asc' ? 'desc' : 'asc')}
          >
            Sort: {sortByDate === 'asc' ? 'Oldest' : 'Newest'}
          </button>
          <button onClick={exportToExcel} className="btn btn-success">📤 Excel</button>
          <button onClick={exportToPDF} className="btn btn-danger">📄 PDF</button>
        </div>
      </div>

      {/* Applications Table */}
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
                        href={`https://server-y0fc.onrender.com${app.resumeUrl}`}
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
                onClick={() => setCurrentPage(page)}
                className={`btn mx-1 ${currentPage === page ? "btn-success" : "btn-outline-secondary"}`}
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
