import React from "react";

const Header = ({ isOpen, toggleSidebar }) => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-slate-900/95 to-gray-900/95 border-b border-gray-800/50">
      <div className="mx-auto px-6 py-4 max-w-screen-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl ml-10 font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Emergency Alert System
            </span>
          </a>

          {/* Toggle Sidebar Button */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-200"
            aria-label="Toggle Sidebar"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
