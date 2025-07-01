import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetAdminDashboardQuery } from '../../features/admin/adminApi';

const AdminPrivateRoute = ({ children }) => {
  const { data, error, isLoading } = useGetAdminDashboardQuery();

  if (isLoading) return <p>⏳ Checking admin auth...</p>;
  if (error) return <Navigate to="/login" />;

  return children;
};

export default AdminPrivateRoute;
