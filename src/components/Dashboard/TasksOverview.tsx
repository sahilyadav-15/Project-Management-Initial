import React from 'react';
import { CheckCircle, Clock, AlertCircle, Circle } from 'lucide-react';
import { Task } from '../../types';

const TasksOverview: React.FC = () => {
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Design homepage mockup',
      status: 'completed',
      priority: 'high',
      project_id: '1',
      created_by: '1',
      created_at: '2024-01-15',
      updated_at: '2024-01-20',
      due_date: '2024-01-22'
    },
    {
      id: '2',
      title: 'Implement user authentication',
      status: 'in-progress',
      priority: 'urgent',
      project_id: '2',
      created_by: '1',
      created_at: '2024-01-16',
      updated_at: '2024-01-20',
      due_date: '2024-01-25'
    },
    {
      id: '3',
      title: 'Create marketing content',
      status: 'todo',
      priority: 'medium',
      project_id: '3',
      created_by: '1',
      created_at: '2024-01-17',
      updated_at: '2024-01-20',
      due_date: '2024-01-30'
    },
    {
      id: '4',
      title: 'Review and test features',
      status: 'review',
      priority: 'low',
      project_id: '1',
      created_by: '1',
      created_at: '2024-01-18',
      updated_at: '2024-01-20',
      due_date: '2024-02-01'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-500" />;
      case 'review': return <AlertCircle className="w-5 h-5 text-orange-500" />;
      default: return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'border-l-red-500';
      case 'high': return 'border-l-orange-500';
      case 'medium': return 'border-l-yellow-500';
      default: return 'border-l-green-500';
    }
  };

  const statusCounts = {
    todo: tasks.filter(t => t.status === 'todo').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    review: tasks.filter(t => t.status === 'review').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Tasks Overview</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{statusCounts.todo}</p>
          <p className="text-sm text-gray-600">To Do</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-orange-600">{statusCounts.inProgress}</p>
          <p className="text-sm text-gray-600">In Progress</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-yellow-600">{statusCounts.review}</p>
          <p className="text-sm text-gray-600">Review</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-green-600">{statusCounts.completed}</p>
          <p className="text-sm text-gray-600">Completed</p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-gray-900 mb-3">Recent Tasks</h3>
        {tasks.map((task) => (
          <div key={task.id} className={`border-l-4 ${getPriorityColor(task.priority)} bg-gray-50 p-3 rounded-r-lg`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getStatusIcon(task.status)}
                <div>
                  <p className="font-medium text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-600">Due: {new Date(task.due_date!).toLocaleDateString()}</p>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-white rounded-full text-gray-600">
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksOverview;