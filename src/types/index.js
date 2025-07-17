// User interface
export const createUser = (id, email, full_name, avatar_url, created_at) => ({
  id,
  email,
  full_name,
  avatar_url,
  created_at
});

// Project interface
export const createProject = (id, name, description, status, created_at, updated_at, owner_id, due_date, progress) => ({
  id,
  name,
  description,
  status, // 'planning' | 'active' | 'on-hold' | 'completed'
  created_at,
  updated_at,
  owner_id,
  due_date,
  progress
});

// Task interface
export const createTask = (id, title, description, status, priority, project_id, assigned_to, created_by, created_at, updated_at, due_date) => ({
  id,
  title,
  description,
  status, // 'todo' | 'in-progress' | 'review' | 'completed'
  priority, // 'low' | 'medium' | 'high' | 'urgent'
  project_id,
  assigned_to,
  created_by,
  created_at,
  updated_at,
  due_date
});

// ProjectWithTasks interface
export const createProjectWithTasks = (project, tasks) => ({
  ...project,
  tasks
});