import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Task from './Pages/MyTask';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import IncidentPage from './Pages/Incedent';
import EventPage from './Pages/Event';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';
import TaskPage from './Pages/TaskPage';
import MyTasks from './Pages/MyTask';

function App() {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {/* Header and Sidebar */}
      {!isAuthPage && (
        <>
          <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      )}

      {/* Page Content */}
      <div className={`transition-all duration-300 ${!isAuthPage && isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Routes>
          <Route path="/" element={<IncidentPage />} />
          <Route path="/my-tasks" element={<MyTasks />} />
          <Route path="/incidents" element={<IncidentPage />} />
          <Route path="/available-tasks" element={<TaskPage />} />
          <Route path="/upcoming-events" element={<EventPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
