import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/Sidebar/AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <main className="flex-grow-1 p-4" style={{ marginLeft: '250px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout; 