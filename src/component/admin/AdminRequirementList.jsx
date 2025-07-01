import React, { useState } from 'react';
import {
  useGetAllRequirementsQuery,
  useDeleteRequirementMutation,
} from '../../features/job/requirementApi';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // ✅ Correct import

const AdminRequirementList = () => {
  const { data, isLoading, error } = useGetAllRequirementsQuery();
  const [deleteRequirement] = useDeleteRequirementMutation();

  const requirements = data?.data || [];

  const [search, setSearch] = useState('');
  const [sortByDate, setSortByDate] = useState('desc');

  // 🔍 Filter
  const filtered = requirements.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search)
  );

  // ↕️ Sort
  const sorted = filtered.sort((a, b) =>
    sortByDate === 'asc'
      ? new Date(a.createdAt) - new Date(b.createdAt)
      : new Date(b.createdAt) - new Date(a.createdAt)
  );

  // ❌ Delete handler
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this requirement?')) {
      try {
        await deleteRequirement(id).unwrap();
        alert('✅ Requirement deleted successfully!');
      } catch (err) {
        alert('❌ Failed to delete requirement');
      }
    }
  };

  // 📤 Excel export
  const exportToExcel = () => {
    const exportData = sorted.map((item, index) => ({
      '#': index + 1,
      Name: item.name,
      Email: item.email,
      Phone: item.phone,
      Message: item.message,
      'Submitted On': new Date(item.createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Requirements');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'Requirements.xlsx');
  };

  // 📄 PDF export
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableRows = [];

    sorted.forEach((item, index) => {
      tableRows.push([
        index + 1,
        item.name,
        item.email,
        item.phone,
        item.message,
        new Date(item.createdAt).toLocaleString(),
      ]);
    });

    autoTable(doc, {
      head: [['#', 'Name', 'Email', 'Phone', 'Message', 'Submitted On']],
      body: tableRows,
    });

    doc.save('Requirements.pdf');
  };

  if (isLoading) return <p>⏳ Loading Requirements...</p>;
  if (error) return <p>❌ Failed to load requirements.</p>;

  return (
    <div className="container my-4">
      <h3 className="mb-4">📋 All Requirements</h3>

      {/* Search, Sort, Export */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name, email, phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="d-flex gap-2">
          <button
            onClick={() => setSortByDate(sortByDate === 'asc' ? 'desc' : 'asc')}
            className="btn btn-secondary"
          >
            Sort: {sortByDate === 'asc' ? 'Oldest' : 'Newest'}
          </button>
          <button onClick={exportToExcel} className="btn btn-success">
            📤 Excel
          </button>
          <button onClick={exportToPDF} className="btn btn-danger">
            📄 PDF
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        {sorted.map((item, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={item._id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                  <br />
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${item.phone}`}>{item.phone}</a>
                  <br />
                  <strong>Message:</strong> {item.message}
                  <br />
                  <strong>Submitted:</strong>{' '}
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  ❌ Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Count */}
      <p className="text-muted">Total: {sorted.length} requirements found</p>
    </div>
  );
};

export default AdminRequirementList;
