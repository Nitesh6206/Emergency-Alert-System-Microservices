import React, { useEffect, useState } from 'react';
import { 
  FaExclamationTriangle, 
  FaEdit,
} from 'react-icons/fa';
import Card from '../Component/Card';
import axios from 'axios';


const IncidentPage = () => {
  const [incidents, setIncidents] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({
      title: '',
      description: '',
      location: '',
      time: '',
      priority: 'LOW',
      tags: [],
    });

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/incidents');
        setIncidents(response.data);
      } catch (error) {
        console.error('Error fetching incidents:', error);
      }
    };
    fetchIncidents();
  }, []);

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
         <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          ➕ Report New Incident
        </button>

      {incidents.length > 0 ? (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incidents.map((incident) => (
              <Card
                key={incident.id}
                title={incident.title}
                description={incident.description}
                location={incident.location}
                time={incident.time}
                priority={incident.severity}
                tags="Create Task"
                creator={incident.creator}
                status={incident.status}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6">
          <p className="text-gray-400">No incidents reported.</p>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 p-4 mt-8">
        <div className="text-center text-gray-400 text-sm">
          Emergency Response System - Last updated: {new Date().toLocaleString()}
        </div>
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

export default IncidentPage;