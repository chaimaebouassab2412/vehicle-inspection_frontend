import { faFaceLaughWink, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate(); // Use navigate for programmatic navigation

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                onClick={() => navigate('/')} // Redirect to home page
                style={{ cursor: "pointer" }}
            >
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faFaceLaughWink} size={"2x"} />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }} />
                    <span>Dashboard</span>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Users</span>
                </Link>
            </li>

        </ul>
    );
}

export default Sidebar;
