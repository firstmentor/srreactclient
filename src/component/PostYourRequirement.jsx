// src/components/admin/PostYourRequirement.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSubmitRequirementMutation } from '../features/job/requirementApi';

function PostYourRequirement() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitRequirement, { isLoading }] = useSubmitRequirementMutation();
  // console.log(submitRequirement)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("❌ All fields are required");
      return;
    }

    try {
      await submitRequirement(form).unwrap();
      toast.success("✅ Requirement submitted!");
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('❌ ' + (error.data?.message || 'Something went wrong'));
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Enter Your Name"
        className="form-control my-2"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="Enter Your Email Address"
        className="form-control my-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone}
        placeholder="+91 0000000000"
        className="form-control my-2"
        onChange={handleChange}
      />
      <textarea
        name="message"
        value={form.message}
        placeholder="Comment"
        className="form-control my-2"
        rows="2"
        onChange={handleChange}
      ></textarea>

      <div className="d-flex justify-content-between mt-3">
        <button type="submit" className="btn TGreen mt-2" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
        <button
          type="reset"
          className="btn TGreen mt-2"
          onClick={() =>
            setForm({ name: '', email: '', phone: '', message: '' })
          }
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default PostYourRequirement;
