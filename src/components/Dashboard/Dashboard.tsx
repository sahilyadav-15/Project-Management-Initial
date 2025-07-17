import React from 'react';
import { FolderOpen, CheckCircle, Clock, Users } from 'lucide-react';
import StatsCard from './StatsCard';
import RecentProjects from './RecentProjects';
import TasksOverview from './TasksOverview';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Projects',
      value: 12,
      icon: FolderOpen,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      trend: { value: 12, direction: 'up' as const }
    },
    {
      title: 'Completed Tasks',
      value: 89,
      icon: CheckCircle,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      trend: { value: 8, direction: 'up' as const }
    },
    {
      title: 'In Progress',
      value: 24,
      icon: Clock,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      trend: { value: 3, direction: 'down' as const }
    },
    {
      title: 'Team Members',
      value: 8,
      icon: Users,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      trend: { value: 2, direction: 'up' as const }
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentProjects />
        <TasksOverview />
      </div>
    </div>
  );
};

export default Dashboard;