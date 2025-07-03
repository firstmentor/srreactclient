import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useApplyJobMutation } from '../features/job/jobApi';

function CVForm() {
  const [applyJob, { isLoading }] = useApplyJobMutation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
  });

  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== 'application/pdf') {
      toast.error('❌ Please upload PDF file only!');
      e.target.value = '';
      return;
    }
    setResume(file);
    setErrors((prev) => ({ ...prev, resume: '' }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let message = '';
    if (!value.trim()) message = 'This field is required';
    else if (name === 'email' && !emailRegex.test(value)) message = 'Invalid email format';
    else if (name === 'phone' && !phoneRegex.test(value)) message = 'Phone must be 10 digits and start with 6-9';
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, designation } = formData;

    let validationErrors = {};
    if (!name.trim()) validationErrors.name = 'Name is required';
    if (!emailRegex.test(email)) validationErrors.email = 'Invalid email format';
    if (!phoneRegex.test(phone)) validationErrors.phone = 'Invalid phone number';
    if (!designation.trim()) validationErrors.designation = 'Designation is required';
    if (!resume) validationErrors.resume = 'Resume (PDF) is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('❌ Please fix validation errors');
      return;
    }

    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('phone', phone);
    form.append('designation', designation);
    form.append('resume', resume);

    try {
      await applyJob(form).unwrap();
      toast.success('✅ Application submitted successfully!');
      setFormData({ name: '', email: '', phone: '', designation: '' });
      setResume(null);
      setErrors({});
      e.target.reset();
    } catch (err) {
      toast.error('❌ Submission failed!');
      console.error(err);
    }
  };

  return (
    <div className="container py-5 mt-5">
      <div className="card p-4 shadow-sm border-0">
        <h3 className="mb-4 text-center">📝 UPLOAD YOUR CV</h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                name="name"
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="col-md-6">
              <input
                name="email"
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="col-md-6">
              <input
                name="phone"
                type="text"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="col-md-6">
              <input
                name="designation"
                type="text"
                className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
            </div>

            <div className="col-md-12">
              <label className="form-label">Upload Resume (PDF only)</label>
              <input
                name="resume"
                type="file"
                accept=".pdf"
                className={`form-control ${errors.resume ? 'is-invalid' : ''}`}
                onChange={handleFileChange}
              />
              {errors.resume && <div className="invalid-feedback">{errors.resume}</div>}
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary px-5" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CVForm;
