import React from 'react'

    const Modal = ({ task, onClose, onConfirm }) => {
      if (!task) return null;
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-96">
            <div className="flex justify-end">
              <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
            </div>
            <h2 className="text-lg font-bold mb-4">Confirm Task Assignment</h2>
            <p className="text-gray-400 mb-2">Are you sure you want to take on this emergency task?</p>
            <h3 className="text-white mb-2">{task.title}</h3>
            <p className="text-gray-400 mb-2">{task.description}</p>
            <div className="flex mb-2">
              <span className="text-gray-400 mr-2">Location:</span>
              <span className="text-white">{task.location}</span>
            </div>
            <div className="flex mb-4">
              <span className="text-gray-400 mr-2">Estimated Time:</span>
              <span className="text-white">{task.time}</span>
            </div>
            <div className="flex justify-end space-x-4">
              <button onClick={onClose} className="bg-gray-700 text-white py-2 px-4 rounded">Cancel</button>
              <button onClick={onConfirm} className="bg-white text-black py-2 px-4 rounded">Confirm Assignment</button>
            </div>
          </div>
        </div>
      );
    };

export default Modal;
