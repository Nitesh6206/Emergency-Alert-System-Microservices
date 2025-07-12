import React, { useState } from 'react';
import { 
  FaExclamationTriangle, 
  FaUsers, 
  FaUserShield, 
  FaFire,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
  FaEye,
  FaEdit,
  FaCalendarAlt,
  FaBuilding,
  FaAmbulance,
  FaTruck
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

const IncidentCard = ({ incident, onViewDetails }) => {
  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-600';
      case 'low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getIncidentIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'fire': return FaFire;
      case 'medical': return FaAmbulance;
      case 'accident': return FaTruck;
      case 'building': return FaBuilding;
      default: return FaExclamationTriangle;
    }
  };

  const Icon = getIncidentIcon(incident.type);

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-700 rounded-lg">
            <Icon className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getSeverityColor(incident.severity)}`}>
                {incident.severity}
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                {incident.type}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mt-2">{incident.title}</h3>
          </div>
        </div>
        <button
          onClick={() => onViewDetails(incident)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
        >
          <FaEye className="w-3 h-3" />
          <span>View Details</span>
        </button>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">{incident.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>{incident.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <FaClock className="w-4 h-4" />
          <span>{incident.reportedTime}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <FaPhone className="w-4 h-4" />
          <span>{incident.contactNumber}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <FaUsers className="w-4 h-4" />
          <span>Est. {incident.estimatedAffected} people</span>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">Response Teams:</p>
            <div className="flex flex-wrap gap-2">
              {incident.responseTeams.map((team, index) => (
                <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                  {team}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">ID: #{incident.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const IncidentPage = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: "Fire - Downtown Office Complex",
      description: "Large fire reported at 15-story office building. Multiple units responding.",
      type: "Fire",
      severity: "Critical",
      location: "Downtown",
      reportedTime: "15/01/2024, 20:00:00",
      contactNumber: "+1-555-0123",
      estimatedAffected: 200,
      responseTeams: ["Fire Department Unit 2", "EMS Team A"]
    },
    {
      id: 2,
      title: "Medical Emergency - Shopping Mall",
      description: "Multiple casualties reported at central shopping mall. Immediate medical response required.",
      type: "Medical",
      severity: "High",
      location: "Central Mall",
      reportedTime: "15/01/2024, 19:30:00",
      contactNumber: "+1-555-0124",
      estimatedAffected: 50,
      responseTeams: ["EMS Team B", "Police Unit 3"]
    },
    {
      id: 3,
      title: "Traffic Accident - Highway 101",
      description: "Multi-vehicle accident on Highway 101. Traffic blocked, injuries reported.",
      type: "Accident",
      severity: "Medium",
      location: "Highway 101",
      reportedTime: "15/01/2024, 18:45:00",
      contactNumber: "+1-555-0125",
      estimatedAffected: 15,
      responseTeams: ["Police Unit 1", "EMS Team C"]
    },
    {
      id: 4,
      title: "Building Collapse - Construction Site",
      description: "Partial building collapse at construction site. Search and rescue operation initiated.",
      type: "Building",
      severity: "Critical",
      location: "Industrial District",
      reportedTime: "15/01/2024, 17:20:00",
      contactNumber: "+1-555-0126",
      estimatedAffected: 25,
      responseTeams: ["Fire Department Unit 1", "Rescue Team Alpha"]
    }
  ]);

  const [selectedIncident, setSelectedIncident] = useState(null);

  const handleViewDetails = (incident) => {
    setSelectedIncident(incident);
  };

  const getStatistics = () => {
    const criticalIncidents = incidents.filter(i => i.severity === 'Critical').length;
    const totalAffected = incidents.reduce((sum, incident) => sum + incident.estimatedAffected, 0);
    const responseTeams = new Set();
    incidents.forEach(incident => {
      incident.responseTeams.forEach(team => responseTeams.add(team));
    });
    
    return {
      criticalIncidents,
      totalAffected,
      responseTeams: responseTeams.size
    };
  };

  const stats = getStatistics();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-600 rounded-lg">
              <FaExclamationTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Emergency Response Center</h1>
              <p className="text-gray-400 mt-1">Real-time incident monitoring and response coordination</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <FaEdit className="w-4 h-4" />
              <span>Update Status</span>
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Critical Level"
            value={stats.criticalIncidents}
            subtitle="Critical severity incidents"
            icon={FaExclamationTriangle}
            color="text-red-400"
          />
          <StatCard
            title="People Affected"
            value={stats.totalAffected}
            subtitle="Total people affected"
            icon={FaUsers}
            color="text-orange-400"
          />
          <StatCard
            title="Response Teams"
            value={stats.responseTeams}
            subtitle="Teams currently deployed"
            icon={FaUserShield}
            color="text-blue-400"
          />
          <StatCard
            title="Active Incidents"
            value={incidents.length}
            subtitle="Total active incidents"
            icon={FaCalendarAlt}
            color="text-purple-400"
          />
        </div>

        {/* Incidents List */}
        <div className="space-y-6">
          {incidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Incident Details Modal */}
      {selectedIncident && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Incident Details</h2>
              <button
                onClick={() => setSelectedIncident(null)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{selectedIncident.title}</h3>
                <p className="text-gray-300 mt-2">{selectedIncident.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Location:</p>
                  <p className="text-white">{selectedIncident.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Reported Time:</p>
                  <p className="text-white">{selectedIncident.reportedTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Contact:</p>
                  <p className="text-white">{selectedIncident.contactNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Estimated Affected:</p>
                  <p className="text-white">{selectedIncident.estimatedAffected} people</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Response Teams:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedIncident.responseTeams.map((team, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {team}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 p-4 mt-8">
        <div className="text-center text-gray-400 text-sm">
          Emergency Response System - Last updated: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default IncidentPage;