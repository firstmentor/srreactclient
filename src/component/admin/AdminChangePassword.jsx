import React, { useState } from 'react';
import { useChangeAdminPasswordMutation } from '../../features/admin/adminApi';
import { toast } from 'react-toastify';

function AdminChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const [changePassword, { isLoading }] = useChangeAdminPasswordMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = formData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      return toast.error('❌ All fields are required');
    }

    if (newPassword !== confirmPassword) {
      return toast.error('❌ New & Confirm password do not match');
    }

    try {
      const res = await changePassword({ currentPassword, newPassword }).unwrap();
      toast.success('✅ Password changed successfully');
      setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      toast.error(err?.data?.message || '❌ Failed to change password');
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="mb-4 text-center">🔐 Change Admin Password</h4>
          <form onSubmit={handleSubmit}>
            {/* Current Password */}
            <div className="mb-3 position-relative">
              <label className="form-label">Current Password</label>
              <input
                type={showPassword.current ? 'text' : 'password'}
                className="form-control"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleVisibility('current')}
              >
                <i className={`fa ${showPassword.current ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </span>
            </div>

            {/* New Password */}
            <div className="mb-3 position-relative">
              <label className="form-label">New Password</label>
              <input
                type={showPassword.new ? 'text' : 'password'}
                className="form-control"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleVisibility('new')}
              >
                <i className={`fa ${showPassword.new ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </span>
            </div>

            {/* Confirm Password */}
            <div className="mb-3 position-relative">
              <label className="form-label">Confirm New Password</label>
              <input
                type={showPassword.confirm ? 'text' : 'password'}
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleVisibility('confirm')}
              >
                <i className={`fa ${showPassword.confirm ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </span>
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
              {isLoading ? 'Changing...' : 'Change Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminChangePassword;
