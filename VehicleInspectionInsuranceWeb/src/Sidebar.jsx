import { faFaceLaughWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Car, Layout, Users, FileText, Settings, Clock, AlertCircle } from 'lucide-react';

const menuItems = [
    { section: null, items: [{ to: "/portal/dashboard", icon: <Layout className="w-5 h-5" />, label: "Dashboard" }] },
    {
        section: "Vehicle Management", items: [
            { to: "/portal/car-list", icon: <Car className="w-5 h-5" />, label: "Vehicle List" },
            { to: "/vehicles/maintenance", icon: <Settings className="w-5 h-5" />, label: "Maintenance" },
            { to: "/vehicles/reports", icon: <FileText className="w-5 h-5" />, label: "Reports" }
        ]
    },
    {
        section: "Administration", items: [
            { to: "/portal/user-list", icon: <Users className="w-5 h-5" />, label: "Users" },
            { to: "/logs", icon: <Clock className="w-5 h-5" />, label: "History" },
            { to: "/alerts", icon: <AlertCircle className="w-5 h-5" />, label: "Alerts" }
        ]
    }
];

function Sidebar({ theme }) {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsCollapsed(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ul className={`p-2 box-content navbar-nav sidebar sidebar-dark accordion transition-all duration-300
            ${theme === "dark" ? "bg-[#2d2d2d]" : "bg-gradient-primary"}`}>

            {/* Sidebar Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-center py-4"
                onClick={() => navigate('/')} style={{ cursor: "pointer" }}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faFaceLaughWink} size={"2x"} />
                </div>
                {!isCollapsed && <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>}
            </a>

            <hr className="sidebar-divider border-gray-600" />

            {/* Menu Items */}
            <div>
                {menuItems.map(({ section, items }, index) => (
                    <div key={index} >
                        {!isCollapsed && section && <h6 className="px-4 text-[16px] font-bold text-gray-100 uppercase tracking-wider">{section}</h6>}
                        {items.map(({ to, icon, label }, idx) => (
                            <li key={idx} className="nav-item mt-2">
                                <Link className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-black/20 rounded-lg transition-colors" to={to}>
                                    {icon} {!isCollapsed && <span className="w-auto font-medium">{label}</span>}
                                </Link>
                            </li>
                        ))}
                    </div>
                ))}
            </div>
        </ul>
    );
}

export default Sidebar;
