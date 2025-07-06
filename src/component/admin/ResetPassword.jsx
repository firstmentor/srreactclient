import React, { useState } from 'react';
import { useResetAdminPasswordMutation } from '../../features/admin/adminApi';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate(); // ✅ Redirect ke liye

  const [newPassword, setNewPassword] = useState('');
  const [resetPassword, { isLoading }] = useResetAdminPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPassword) return toast.error("Enter new password");

    try {
      const res = await resetPassword({ token, newPassword }).unwrap();
      toast.success(res.message || 'Password updated successfully');
      setNewPassword('');

      // ✅ Redirect after success (1-2 sec delay)
      setTimeout(() => {
        navigate('/login'); // 👈 Login page par bhejna
      }, 1500);

    } catch (err) {
      toast.error(err?.data?.message || 'Failed to reset password');
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: '500px' }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="mb-4 text-center">🔒 Reset Password</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100" disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
