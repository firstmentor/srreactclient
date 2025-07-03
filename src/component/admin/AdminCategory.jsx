import React, { useState } from 'react';
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from '../../features/category/categoryApi';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AdminCategory() {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [formData, setFormData] = useState({ title: '', image: null });
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setFormData({ title: '', image: null });
    setEditingId(null);
  };

  const handleShow = () => setShowModal(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || (!editingId && !formData.image)) {
      return toast.error('All fields are required');
    }

    const fd = new FormData();
    fd.append('title', formData.title);
    if (formData.image) fd.append('image', formData.image);

    try {
      if (editingId) {
        await updateCategory({ id: editingId, formData: fd }).unwrap();
        toast.success('Category updated');
      } else {
        await createCategory(fd).unwrap();
        toast.success('Category created');
      }
      handleClose();
    } catch {
      toast.error('Action failed');
    }
  };

  const handleEdit = (cat) => {
    setFormData({ title: cat.title, image: null });
    setEditingId(cat._id);
    handleShow();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this category?')) {
      try {
        await deleteCategory(id).unwrap();
        toast.success('Deleted');
      } catch {
        toast.error('Delete failed');
      }
    }
  };

  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1,
      width: '60px',
    },
    {
      name: 'Image',
      cell: (row) => (
        <img
          src={row.image?.url}
          alt={row.title}
          style={{ width: '70px', height: '50px', objectFit: 'cover' }}
        />
      ),
    },
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Jobs Count',
      selector: (row) => row.jobsCount || 0,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <>
          <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(row)}>
            <i className="bi bi-pencil"></i> Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row._id)}>
            <i className="bi bi-x-circle"></i> Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>📂 Manage Categories</h4>
        <button className="btn btn-primary" onClick={handleShow}>
          + Add Category
        </button>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={categories?.data || []}
        pagination
        responsive
        striped
        highlightOnHover
        noDataComponent="No categories found"
      />

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingId ? 'Edit' : 'Add'} Category</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Modal.Body>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editingId ? 'Update' : 'Add'}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default AdminCategory;
