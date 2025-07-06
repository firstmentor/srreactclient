import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminLogoutMutation } from '../../features/admin/adminApi';
import { toast } from 'react-toastify';

const LogoutButton = () => {
  const [logout] = useAdminLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout().unwrap(); // RTK mutation
      toast.success('✅ Logged out successfully');
      navigate('/login');
    } catch (err) {
      toast.error('❌ Logout failed');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="nav-link text-white fw-semibold bg-transparent border-0 w-100 text-start"
    >
      <i className="fas fa-sign-out-alt me-2"></i> Logout
    </button>
  );
};

export default LogoutButton;
