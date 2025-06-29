import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import {
  useGetApplicationsQuery,
  useUpdateApplicationStatusMutation,
  useDeleteApplicationMutation,
} from '../../features/job/jobApi';

function AdminrResume() {
  const { data, error, isLoading, refetch } = useGetApplicationsQuery();
  const [updateStatus] = useUpdateApplicationStatusMutation();
  const [deleteApplication] = useDeleteApplicationMutation();

  const applications = data?.data || [];
  const [statusMap, setStatusMap] = useState({});
  const [commentMap, setCommentMap] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  // ✅ Filtered and searched data
  const filteredData = applications.filter(app => {
    const matchSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.phone.includes(searchTerm);
    const matchStatus = statusFilter ? app.status === statusFilter : true;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filteredData.length / perPage);
  const paginatedData = filteredData.slice((currentPage - 1) * perPage, currentPage * perPage);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleExportExcel = () => {
    const rows = filteredData.map(app => ({
      Name: app.name,
      Email: app.email,
      Phone: app.phone,
      Designation: app.designation,
      Resume: `https://srwebconsultancy.in${app.resumeUrl}`,
      Status: app.status || '',
      Comment: app.comment || '',
      Date: new Date(app.createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applications");
    XLSX.writeFile(workbook, "applications.xlsx");
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Applications Report", 14, 15);
    const tableData = filteredData.map((app, i) => [
      i + 1,
      app.name,
      app.email,
      app.phone,
      app.designation,
      `https://srwebconsultancy.in${app.resumeUrl}`,
      app.status || '',
      app.comment || '',
      new Date(app.createdAt).toLocaleString()
    ]);
    doc.autoTable({
      head: [["#", "Name", "Email", "Phone", "Designation", "Resume", "Status", "Comment", "Applied On"]],
      body: tableData,
      startY: 20,
      styles: { fontSize: 7 },
    });
    doc.save("applications.pdf");
  };

  const handleUpdate = async (id) => {
    const status = statusMap[id];
    const comment = commentMap[id];
    if (!status) return toast.error("❌ Select status");

    try {
      await updateStatus({ id, status, comment }).unwrap();
      toast.success("✅ Status updated");
      refetch();
    } catch (err) {
      toast.error("❌ Failed to update");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this application?')) {
      try {
        await deleteApplication(id).unwrap();
        toast.success("🗑️ Application deleted");
        refetch();
      } catch (err) {
        toast.error("❌ Failed to delete");
      }
    }
  };

  if (isLoading) return <p>⏳ Loading...</p>;
  if (error) return <p>❌ Failed to load data</p>;

  return (
    <div className="container-fluid py-3">
      <h2 className="text-brand mb-4">📊 Resume Applications</h2>

      {/* Search & Filter */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search by name, email, phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select w-auto"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button className="btn btn-success" onClick={handleExportExcel}>
          📥 Export Excel
        </button>
        <button className="btn btn-danger" onClick={handleExportPDF}>
          📄 Export PDF
        </button>
      </div>

      {/* Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
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
                  <th>Status</th>
                  <th>Comment</th>
                  <th>Action</th>
                  <th>Applied On</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="text-center">No applications found</td>
                  </tr>
                ) : (
                  paginatedData.map((app, index) => (
                    <tr key={app._id}>
                      <td>{(currentPage - 1) * perPage + index + 1}</td>
                      <td>{app.name}</td>
                      <td>{app.email}</td>
                      <td>{app.phone}</td>
                      <td>{app.designation}</td>
                      <td>
                        <a
                          href={`https://srwebconsultancy.in${app.resumeUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-primary"
                        >
                          View
                        </a>
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          value={statusMap[app._id] || app.status || ''}
                          onChange={(e) =>
                            setStatusMap({ ...statusMap, [app._id]: e.target.value })
                          }
                        >
                          <option value="">Select</option>
                          <option value="Pending">Pending</option>
                          <option value="Reviewed">Reviewed</option>
                          <option value="Selected">Selected</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Comment"
                          value={commentMap[app._id] || app.comment || ''}
                          onChange={(e) =>
                            setCommentMap({ ...commentMap, [app._id]: e.target.value })
                          }
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => handleUpdate(app._id)}
                          className="btn btn-sm btn-success mb-1"
                        >
                          Update
                        </button>
                        <br />
                        <button
                          onClick={() => handleDelete(app._id)}
                          className="btn btn-sm btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                      <td>{new Date(app.createdAt).toLocaleString()}</td>
                    </tr>
                  ))
                )}
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
}

export default AdminrResume;
