import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete, filter }) {
  const filtered = tasks.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  if (filtered.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
        No tasks to show.
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />)
      )}
    </ul>
  );
}

export default TaskList;
