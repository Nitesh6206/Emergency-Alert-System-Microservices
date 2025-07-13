import React, { useEffect, useState } from 'react';
import { 
  FaClock, 
  FaExclamationTriangle, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaCog, 
  FaFileAlt, 
  FaCalendarAlt, 
  FaCheckCircle,
  FaPlay,
  FaTasks
} from 'react-icons/fa';
import Card from '../Component/Card';
import axios from 'axios';


const MyTasks = () => {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    const fetchTasksDetails = async () => {
      let userId='1';
      try {
        const response = await axios.get(`http://localhost:8080/api/tasks/user/${userId}`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasksDetails();
  
  }, []);


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Emergency Response Tasks</h1>
            <p className="text-gray-400 mt-1">Manage and track all emergency response operations</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 px-3 py-1 rounded-full text-sm flex items-center space-x-2">
              <FaTasks className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">Total Tasks: </span>
              <span className="text-white font-medium">{tasks.length}</span>
            </div>
          </div>
        </div>
      </div>


      {/* Task Cards */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks && typeof tasks === 'object' && Object.values(tasks).map((task) => (
            <Card
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              estimatedTime={task.estimatedTime}
              priority={task.priority}
              tags="mark as done"
              icon={task.icon}
              onStartTask={() => handleStartTask(task.id)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 p-4 mt-8">
        <div className="text-center text-gray-400 text-sm">
          Emergency Response System - Last updated: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default MyTasks;