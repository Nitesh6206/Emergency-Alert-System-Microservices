import React, { useState } from 'react';
import axios from 'axios';

const CreateTaskModal = ({ onClose, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('OPEN');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8085/api/tasks', {
        title,
        description,
        status,
        location,
      });
      onTaskCreated(); // refresh the task list or close modal
      onClose();
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-white">Create New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <select
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="OPEN">OPEN</option>
            <option value="ASSIGNED">ASSIGNED</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
          <input
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="bg-gray-700 text-white py-2 px-4 rounded">Cancel</button>
            <button type="submit" className="bg-white text-black py-2 px-4 rounded">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
