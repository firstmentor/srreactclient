import React, { useState } from 'react';
import { useAdminLoginMutation } from '../../features/admin/adminApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [adminLogin, { isLoading }] = useAdminLoginMutation();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(form.email)) newErrors.email = 'Invalid email';

    if (!form.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('❌ Please fix the errors');
      return;
    }

    try {
      await adminLogin(form).unwrap();
      toast.success('✅ Login Successful');
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error('❌ Invalid Credentials');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
  <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
    <h3 className="text-center mb-4">🔐 Admin Login</h3>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Enter admin email"
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Enter password"
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>

      {/* ✅ Forgot Password Link */}
      <div className="mb-3 text-end">
        <a href="/admin/forgot-password" className="text-primary" style={{ fontSize: '14px' }}>
          Forgot Password?
        </a>
      </div>

      <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
        {isLoading ? '🔄 Logging in...' : '🔓 Login'}
      </button>
    </form>
  </div>
</div>

  
  );
}

export default AdminLogin;
