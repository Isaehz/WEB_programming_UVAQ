import { useEffect, useState } from 'react';
import { api } from './services/api';
import AddTaskForm from './components/ui/AddTaskForm';
import TaskList from './components/ui/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    setError(null);
    try {
      const data = await api.get('/tasks');
      setTasks(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    setError(null);
    try {
      await api.post('/tasks', { title: title.trim() });
      setTitle('');
      await loadTasks();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (task) => {
    setError(null);
    try {
      await api.put(`/tasks/${task.id}`, { completed: !task.completed });
      await loadTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    setError(null);
    try {
      await api.delete(`/tasks/${id}`);
      await loadTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Checklist
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Tareas guardadas en PostgreSQL
          </p>
        </header>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
            {error}
          </div>
        )}

        <AddTaskForm
          value={title}
          onChange={setTitle}
          onSubmit={handleSubmit}
          loading={loading}
        />

        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}