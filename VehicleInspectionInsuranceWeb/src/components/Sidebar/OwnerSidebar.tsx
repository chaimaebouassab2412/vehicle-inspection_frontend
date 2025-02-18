import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaCar,
    FaUpload,
    FaCalendarCheck,
    FaHeadset,
    FaTachometerAlt
} from 'react-icons/fa';

const OwnerSidebar = () => {
    return (
        <div className="sidebar bg-primary text-white h-100 position-fixed">
            <div className="sidebar-header p-3">
                <h3>Vehicle Owner</h3>
            </div>

            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/owner/dashboard" className="nav-link text-white">
                        <FaTachometerAlt className="me-2" /> Dashboard
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/owner/vehicles" className="nav-link text-white">
                        <FaCar className="me-2" /> My Vehicles
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/owner/documents" className="nav-link text-white">
                        <FaUpload className="me-2" /> Scan & Upload Documents
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/owner/reservations" className="nav-link text-white">
                        <FaCalendarCheck className="me-2" /> My Reservations
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/owner/support" className="nav-link text-white">
                        <FaHeadset className="me-2" /> Contact & Support
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default OwnerSidebar; 