import React from 'react';
import { Calendar, Users, MoreVertical } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'on-hold': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
          <p className="text-gray-600 mb-3">{project.description}</p>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {project.due_date ? new Date(project.due_date).toLocaleDateString() : 'No due date'}
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2" />
          3 members
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;