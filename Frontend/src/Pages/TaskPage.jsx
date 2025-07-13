import React, { useEffect, useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import Card from '../Component/Card';
import { FaExclamationTriangle, FaCog, FaUsers, FaMapMarkerAlt, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

const TaskPage = () => {

  useEffect(() => {
    const fetchTasksDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasksDetails();
  
  }, []);
  
  const [tasks, setTasks] = useState({});

  const handleStartTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: 'in-progress' } : task
    ));
  };

  // const getTaskCounts = () => {
  //   const counts = tasks.reduce((acc, task) => {
  //     acc[task.status] = (acc[task.status] || 0) + 1;
  //     return acc;
  //   }, {});
  //   return counts;
  // };

  // const taskCounts = getTaskCounts();

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

      {/* Stats Bar */}
      {/* <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{taskCounts['in-progress'] || 0}</div>
            <div className="text-sm text-gray-400">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">{taskCounts['pending'] || 0}</div>
            <div className="text-sm text-gray-400">Pending</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{taskCounts['completed'] || 0}</div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
        </div>
      </div> */}

      {/* Task Cards using unified Card component */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks && typeof tasks === 'object' && Object.values(tasks).map((task) => (
            <Card
              key={task.id}
              title={task.title}
              description={task.description}
              location={task.location}
              time={task.estimatedTime}
              creator={task.creator}
             
              tags='Take Task'
              status={task.status.replace('-', ' ').toUpperCase()}
              showTakeTaskButton={task.status === 'pending'}
              onTakeTaskClick={() => handleStartTask(task.id)}
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

export default TaskPage;