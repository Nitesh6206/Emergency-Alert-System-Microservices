import React from 'react';
import Modal from './Model'; // Optional: you can disable this if you don't want confirmation
import axios from 'axios';
import CreateTaskModal from './CreateTaskModal';

const Card = ({ title, description, priority, location, time, creator, tags }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleTakeTask = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    const response=axios.post('http://localhost:8085/api/incidents/assign',
  );
    setIsModalOpen(false);
    console.log("Task confirmed:", title);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-gray-400">
          {priority === "HIGH" ? (
            <span className="text-red-500">🔴 HIGH</span>
          ) : (
            <span className="text-green-500">🌱 LOW</span>
          )}
        </span>
      </div>
      <p className="text-gray-400 mb-2">{description}</p>
      <p className="text-gray-400 mb-2">{location}</p>
      <p className="text-gray-400 mb-2">{time}</p>
      <p className="text-gray-500 text-sm">Created by {creator}</p>
      <button
        onClick={handleTakeTask}
        className="mt-2 w-full bg-white text-black py-2 rounded hover:bg-gray-300"
      >
        {tags}
      </button>

      {isModalOpen && (
        <CreateTaskModal
          task={{ title, description, location, time }}
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Card;
