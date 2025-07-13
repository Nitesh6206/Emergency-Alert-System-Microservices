// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Component/Card';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    time: '',
    priority: 'LOW',
    tags: [],
    creator: '',
  });

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8085/api/incidents');
      setIncidents(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8085/api/incidents', form);
      setIsModalOpen(false);
      setForm({
        title: '',
        description: '',
        location: '',
        time: '',
        priority: 'LOW',
        tags: [],
        creator: '',
      });
      fetchData();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Response Dashboard</h1>
          <p className="text-gray-400 text-sm">Here are the current emergency tasks.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          ➕ Report New Incident
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card label="My Tasks" count={incidents.length} icon="👤" subtitle="Tasks assigned to you" tags="Create Task" />
        <Card label="High Priority" count={incidents.filter(i => i.priority === 'HIGH').length} icon="⚠️" subtitle="Urgent tasks" tags="Create Task" />
        <Card label="Response Time" count="12m" icon="⏱️" subtitle="Avg response time" tags="Create Task" />
        <Card label="Open Tasks" count={incidents.length} icon="📋" subtitle="Tasks available" tags="Create Task" />
      </div>

      <h2 className="text-xl font-bold mb-4">Emergency Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {incidents.map((incident) => (
          <Card
            key={incident.id}
            title={incident.title}
            description={incident.description}
            location={incident.location}
            time="Est. 2 hours"
            creator="System"
            priority={incident.priority || 'LOW'}
            tags={['Incident']}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 w-full max-w-lg rounded-lg p-6 shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Create New Task</h2>
            <form onSubmit={handleCreateTask} className="space-y-4">
              <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" required />
              <textarea name="description" placeholder="Description" value={form.description} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" required />
              <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" required />
              <input type="text" name="time" placeholder="Estimated Time" value={form.time} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
              <select name="priority" value={form.priority} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600">
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
              <input type="text" name="creator" placeholder="Created By" value={form.creator} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
