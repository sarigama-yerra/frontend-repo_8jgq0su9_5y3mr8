import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prev) => [
      { id: crypto.randomUUID(), text, completed: false, createdAt: Date.now() },
      ...prev,
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((t) => t.completed).length;
    return { total, done, remaining: total - done };
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="mx-auto max-w-xl px-6 py-10">
        <Header />

        <div className="mt-6 rounded-2xl bg-white/70 backdrop-blur shadow-xl ring-1 ring-black/5 p-5">
          <TaskInput onAdd={addTask} />

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">{stats.remaining}</span> remaining •{' '}
              <span className="font-medium text-gray-900">{stats.done}</span> completed
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setFilter('all')}
                className={`rounded-full px-3 py-1 border ${filter === 'all' ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 text-gray-700'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`rounded-full px-3 py-1 border ${filter === 'active' ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 text-gray-700'}`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`rounded-full px-3 py-1 border ${filter === 'completed' ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 text-gray-700'}`}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="mt-4">
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} filter={filter} />
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Your tasks are stored in your browser so they persist across sessions.
        </p>
      </div>
    </div>
  );
}

export default App;
