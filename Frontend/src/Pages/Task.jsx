import React, { useState } from 'react';
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

const TaskCard = ({ title, description, status, estimatedTime, priority, icon: Icon, onStartTask }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-600';
      case 'medium': return 'bg-yellow-600';
      case 'low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'pending': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-700 rounded-lg">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(priority)} text-white mt-1`}>
              {priority.toUpperCase()}
            </div>
          </div>
        </div>
        <div className={`text-sm font-medium ${getStatusColor(status)}`}>
          {status.replace('-', ' ').toUpperCase()}
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <FaClock className="w-4 h-4" />
            <span>Est. {estimatedTime}</span>
          </div>
        </div>
        
        {status === 'pending' && (
          <button
            onClick={onStartTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <FaPlay className="w-3 h-3" />
            <span>Start Task</span>
          </button>
        )}
        
        {status === 'completed' && (
          <div className="flex items-center space-x-1 text-green-400">
            <FaCheckCircle className="w-4 h-4" />
            <span className="text-sm">Completed</span>
          </div>
        )}
      </div>
    </div>
  );
};

const TaskPage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Flood Coordination",
      description: "Coordinate emergency response efforts for flood-affected areas in the northeast district",
      status: "in-progress",
      estimatedTime: "4 hours",
      priority: "high",
      icon: FaExclamationTriangle
    },
    {
      id: 2,
      title: "Equipment Maintenance",
      description: "Perform routine maintenance and inspection of emergency response equipment",
      status: "pending",
      estimatedTime: "2 hours",
      priority: "medium",
      icon: FaCog
    },
    {
      id: 3,
      title: "Team Deployment",
      description: "Deploy rescue teams to designated emergency zones and coordinate field operations",
      status: "completed",
      estimatedTime: "6 hours",
      priority: "high",
      icon: FaUsers
    },
    {
      id: 4,
      title: "Status Report",
      description: "Generate comprehensive status report for all ongoing emergency operations",
      status: "pending",
      estimatedTime: "1 hour",
      priority: "medium",
      icon: FaFileAlt
    },
    {
      id: 5,
      title: "Location Survey",
      description: "Conduct detailed survey of affected locations and assess damage levels",
      status: "in-progress",
      estimatedTime: "3 hours",
      priority: "high",
      icon: FaMapMarkerAlt
    },
    {
      id: 6,
      title: "Resource Planning",
      description: "Plan and allocate emergency resources for upcoming operations this week",
      status: "pending",
      estimatedTime: "2.5 hours",
      priority: "low",
      icon: FaCalendarAlt
    }
  ]);

  const handleStartTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: 'in-progress' } : task
    ));
  };

  const getTaskCounts = () => {
    const counts = tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {});
    return counts;
  };

  const taskCounts = getTaskCounts();

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
      <div className="bg-gray-800 border-b border-gray-700 p-4">
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
      </div>

      {/* Task Cards */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              estimatedTime={task.estimatedTime}
              priority={task.priority}
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

export default TaskPage;