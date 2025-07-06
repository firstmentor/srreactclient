import React, { useState } from 'react';
import { useForgotAdminPasswordMutation } from '../../features/admin/adminApi';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [forgotPassword, { isLoading }] = useForgotAdminPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error('Please enter your email');

    try {
      const res = await forgotPassword(email).unwrap();
      toast.success(res.message || "Reset link sent to your email");
      setEmail('');
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to send reset link');
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: '500px' }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="mb-4 text-center">🔑 Forgot Password</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Enter your email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
