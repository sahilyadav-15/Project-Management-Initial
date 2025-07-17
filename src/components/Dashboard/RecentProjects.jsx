import React from 'react';
import { MoreVertical, Calendar, Users } from 'lucide-react';

const RecentProjects = () => {
  const recentProjects = [
    {
      id: '1',
      name: 'Website Redesign',
      description: 'Complete overhaul of company website',
      status: 'active',
      progress: 75,
      created_at: '2024-01-15',
      updated_at: '2024-01-20',
      owner_id: '1',
      due_date: '2024-02-15'
    },
    {
      id: '2',
      name: 'Mobile App Development',
      description: 'iOS and Android app development',
      status: 'active',
      progress: 45,
      created_at: '2024-01-10',
      updated_at: '2024-01-18',
      owner_id: '1',
      due_date: '2024-03-01'
    },
    {
      id: '3',
      name: 'Marketing Campaign',
      description: 'Q1 digital marketing campaign',
      status: 'planning',
      progress: 20,
      created_at: '2024-01-12',
      updated_at: '2024-01-19',
      owner_id: '1',
      due_date: '2024-02-28'
    }
  ];

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
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
      </div>

      <div className="space-y-4">
        {recentProjects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Due: {new Date(project.due_date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                3 members
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-1">{project.progress}% complete</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;