import React, { useState } from 'react';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaEye,
  FaEdit,
  FaBullhorn,
  FaUserFriends,
  FaRegCalendarCheck,
  FaRegCalendarPlus,
} from 'react-icons/fa';

const StatCard = ({ title, value, subtitle, icon: Icon, color = "text-blue-400" }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Icon className={`w-5 h-5 ${color}`} />
            <h3 className="text-gray-300 text-sm font-medium">{title}</h3>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{value}</div>
          <div className="text-gray-400 text-sm">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event, onViewDetails }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{event.name}</h3>
          <p className="text-gray-300 mt-1">{event.description}</p>
        </div>
        <button
          onClick={() => onViewDetails(event)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
        >
          <FaEye className="w-3 h-3" />
          <span>View Details</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaClock className="w-4 h-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaUsers className="w-4 h-4" />
          <span>{event.participants} participants</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaBullhorn className="w-4 h-4" />
          <span>{event.organizer}</span>
        </div>
      </div>
    </div>
  );
};

const EventPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Disaster Preparedness Drill",
      description: "Annual city-wide emergency drill involving all departments.",
      date: "15/07/2025, 10:00 AM",
      location: "City Hall Grounds",
      participants: 300,
      organizer: "Emergency Dept",
    },
    {
      id: 2,
      name: "Fire Safety Workshop",
      description: "Training event for building fire safety and evacuation procedures.",
      date: "20/07/2025, 2:00 PM",
      location: "Tech Park Auditorium",
      participants: 120,
      organizer: "Fire Dept",
    },
    {
      id: 3,
      name: "Medical Camp",
      description: "Free health checkup and awareness program.",
      date: "25/07/2025, 9:00 AM",
      location: "Community Center",
      participants: 200,
      organizer: "Health Services",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <FaCalendarAlt className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Upcoming Events</h1>
              <p className="text-gray-400 mt-1">Community preparedness and engagement</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <FaEdit className="w-4 h-4" />
              <span>Create Event</span>
            </button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Events"
            value={events.length}
            subtitle="Scheduled community events"
            icon={FaRegCalendarCheck}
            color="text-purple-400"
          />
          <StatCard
            title="Total Participants"
            value={events.reduce((sum, e) => sum + e.participants, 0)}
            subtitle="Across all events"
            icon={FaUserFriends}
            color="text-orange-400"
          />
          <StatCard
            title="Organizers"
            value={new Set(events.map(e => e.organizer)).size}
            subtitle="Departments involved"
            icon={FaBullhorn}
            color="text-blue-400"
          />
          <StatCard
            title="Next Event"
            value={events[0]?.date || "N/A"}
            subtitle={events[0]?.name || "No event scheduled"}
            icon={FaRegCalendarPlus}
            color="text-green-400"
          />
        </div>

        {/* Event List */}
        <div className="space-y-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onViewDetails={handleViewDetails} />
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Event Details</h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{selectedEvent.name}</h3>
                <p className="text-gray-300 mt-2">{selectedEvent.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-white text-sm">
                <div>
                  <p className="text-gray-400">Date & Time:</p>
                  <p>{selectedEvent.date}</p>
                </div>
                <div>
                  <p className="text-gray-400">Location:</p>
                  <p>{selectedEvent.location}</p>
                </div>
                <div>
                  <p className="text-gray-400">Participants:</p>
                  <p>{selectedEvent.participants}</p>
                </div>
                <div>
                  <p className="text-gray-400">Organizer:</p>
                  <p>{selectedEvent.organizer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 p-4 mt-8">
        <div className="text-center text-gray-400 text-sm">
          Events Dashboard — Last updated: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
