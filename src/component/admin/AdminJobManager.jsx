import React, { useState } from "react";
import {
  useGetAllJobsQuery,
  useDeleteJobMutation,
  useUpdateJobMutation,
  useAddJobMutation,
} from "../../features/job/jobOpeningsApi";
import { Modal, Button, Form, Table } from "react-bootstrap";

const AdminJobManager = () => {
  const { data, isLoading, error } = useGetAllJobsQuery();
  const jobs = data?.data || [];

  const [addJob] = useAddJobMutation();
  const [deleteJob] = useDeleteJobMutation();
  const [updateJob] = useUpdateJobMutation();

  // States
  const [form, setForm] = useState({ designation: "", experience: "", location: "" });
  const [editId, setEditId] = useState(null);
  const [show, setShow] = useState(false);

  // Handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.designation || !form.experience || !form.location) return alert("All fields required!");

    try {
      if (editId) {
        await updateJob({ id: editId, data: form });
        alert("✅ Job Updated!");
      } else {
        await addJob(form);
        alert("✅ Job Added!");
      }
      setForm({ designation: "", experience: "", location: "" });
      setEditId(null);
      setShow(false);
    } catch (err) {
      alert("❌ Operation failed");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this job?")) {
      await deleteJob(id);
    }
  };

  const openEditModal = (job) => {
    setForm({
      designation: job.designation,
      experience: job.experience,
      location: job.location,
    });
    setEditId(job._id);
    setShow(true);
  };

  if (isLoading) return <p>⏳ Loading...</p>;
  if (error) return <p>❌ Failed to fetch jobs</p>;

  return (
    <div className="container my-4">
      <h3>🧑‍💼 Manage Job Openings</h3>
      <Button className="mb-3" variant="primary" onClick={() => setShow(true)}>
        ➕ Add Job
      </Button>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={job._id}>
              <td>{index + 1}</td>
              <td>{job.designation}</td>
              <td>{job.experience}</td>
              <td>{job.location}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => openEditModal(job)}
                  className="me-2"
                >
                  ✏️ Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(job._id)}>
                  ❌ Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add / Edit Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{editId ? "✏️ Edit Job" : "➕ Add Job"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={form.designation}
                onChange={handleChange}
                placeholder="e.g. React Developer"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="e.g. 1-2 Years"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Noida"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {
              setShow(false);
              setForm({ designation: "", experience: "", location: "" });
              setEditId(null);
            }}>
              Cancel
            </Button>
            <Button type="submit" variant="success">
              {editId ? "Update Job" : "Add Job"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminJobManager;
