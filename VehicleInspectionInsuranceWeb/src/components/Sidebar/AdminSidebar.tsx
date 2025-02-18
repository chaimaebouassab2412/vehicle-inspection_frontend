import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaUsers,
    FaFileAlt,
    FaCalendarAlt,
    FaBell,
    FaTachometerAlt,
    FaUserCog
} from 'react-icons/fa';

const AdminSidebar = () => {
    return (
        <div className="sidebar bg-primary text-white h-100 position-fixed">
            <div className="sidebar-header p-3">
                <h3>ADMIN</h3>
            </div>

            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/admin/dashboard" className="nav-link text-white">
                        <FaTachometerAlt className="me-2" /> Dashboard
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/admin/vehicle-owners" className="nav-link text-white">
                        <FaUsers className="me-2" /> Vehicle Owners
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/admin/reservations" className="nav-link text-white">
                        <FaCalendarAlt className="me-2" /> Reservations
                        <span className="badge bg-danger ms-2">3</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/admin/notifications" className="nav-link text-white">
                        <FaBell className="me-2" /> Notifications
                        <span className="badge bg-danger ms-2">5</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar; 