import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import OwnerLayout from '../layouts/OwnerLayout';

// Admin Components
import AdminDashboard from '../pages/admin/Dashboard';
import UserManagement from '../pages/admin/UserManagement';
import ScannedDocuments from '../pages/admin/ScannedDocuments';
import Reservations from '../pages/admin/Reservations';
import Notifications from '../pages/admin/Notifications';

// Owner Components
import OwnerDashboard from '../pages/owner/Dashboard';
import MyVehicles from '../pages/owner/MyVehicles';
import DocumentUpload from '../pages/owner/DocumentUpload';
import MyReservations from '../pages/owner/MyReservations';
import Support from '../pages/owner/Support';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="documents" element={<ScannedDocuments />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

      {/* Vehicle Owner Routes */}
      <Route path="/owner" element={<OwnerLayout />}>
        <Route path="dashboard" element={<OwnerDashboard />} />
        <Route path="vehicles" element={<MyVehicles />} />
        <Route path="documents" element={<DocumentUpload />} />
        <Route path="reservations" element={<MyReservations />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes; 