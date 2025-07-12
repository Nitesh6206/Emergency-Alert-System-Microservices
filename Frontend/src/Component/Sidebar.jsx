import React from 'react';
import {
  FaTasks, FaHome, FaExclamationTriangle, FaCalendarAlt,
  FaUsers, FaMapMarkerAlt, FaChartBar, FaCog, FaTimes
} from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <aside
        className={`bg-[#121212] text-white w-64 h-screen flex flex-col fixed top-0 left-0 transition-transform duration-300 border-r border-gray-800 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Header with Close/Open Button */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white text-sm">⚠</span>
            </div>
            <div>
              <div className="font-bold text-sm">Emergency</div>
              <div className="text-xs text-gray-400">Response Center</div>
            </div>
          </div>

          {/* Toggle Button - Visible on all screens */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-all duration-200"
            aria-label="Toggle Sidebar"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Main Navigation */}
          <div>
            <h3 className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Main Navigation</h3>
            <ul className="space-y-1">
              <SidebarItem icon={<FaHome />} label="Dashboard" to="/" toggleSidebar={toggleSidebar} />
              <SidebarItem icon={<FaTasks />} label="My Tasks" badge="3" to="/my-tasks" toggleSidebar={toggleSidebar} />
              <SidebarItem icon={<FaExclamationTriangle />} label="Incidents" badge="2" to="/incidents" toggleSidebar={toggleSidebar} />
              <SidebarItem icon={<FaCalendarAlt />} label="Upcoming Events" to="/upcoming-events" toggleSidebar={toggleSidebar} />
              {/* <SidebarItem icon={<BsPencilSquare />} label="Blog & Updates" to="/blog" toggleSidebar={toggleSidebar} /> */}
            </ul>
          </div>

          {/* Management Section */}
          <div className="mt-8">
            <h3 className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Management</h3>
            <ul className="space-y-1">
              <SidebarItem icon={<FaUsers />} label="Teams" to="/teams" toggleSidebar={toggleSidebar} />
              <SidebarItem icon={<FaMapMarkerAlt />} label="Locations" to="/locations" toggleSidebar={toggleSidebar} />
              <SidebarItem icon={<FaChartBar />} label="Reports" to="/reports" toggleSidebar={toggleSidebar} />
            </ul>
          </div>
        </div>

        {/* Settings */}
        <div className="p-4 border-t border-gray-700">
          <SidebarItem icon={<FaCog />} label="Settings" to="/settings" toggleSidebar={toggleSidebar} />
        </div>
      </aside>
    </>
  );
};

const SidebarItem = ({ icon, label, badge, to, toggleSidebar }) => {
  const handleClick = () => {
    // Automatically close sidebar on mobile
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <li>
      <Link
        to={to}
        onClick={handleClick}
        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 transition-all duration-200 group"
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg">{icon}</span>
          <span className="text-sm group-hover:text-white transition">{label}</span>
        </div>
        {badge && (
          <span className="text-xs bg-gray-700 px-2 py-1 rounded group-hover:bg-gray-600 transition">
            {badge}
          </span>
        )}
      </Link>
    </li>
  );
};

export default Sidebar;
