import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Task from './Pages/Task';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import IncidentPage from './Pages/Incedent';
import EventPage from './Pages/Event';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';

function App() {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Check if the current route is login or signup
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {/* Only show Header and Sidebar if not on login/signup page */}
      {!isAuthPage && (
        <>
          <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      )}

      {/* Content wrapper */}
      <div className={`${!isAuthPage ? 'ml-0 lg:ml-64 ' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-tasks" element={<Task />} />
          <Route path="/incidents" element={<IncidentPage />} />
          <Route path="/upcoming-events" element={<EventPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
