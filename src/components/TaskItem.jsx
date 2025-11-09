import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 px-3 py-2 shadow-sm">
      <button
        onClick={() => onToggle(task.id)}
        className="text-gray-500 hover:text-blue-600"
        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {task.completed ? (
          <CheckCircle2 className="w-5 h-5 text-blue-600" />
        ) : (
          <Circle className="w-5 h-5" />
        )}
      </button>
      <span className={`flex-1 text-sm text-gray-800 ${task.completed ? 'line-through text-gray-400' : ''}`}>
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="opacity-70 hover:opacity-100 text-red-500"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  );
}

export default TaskItem;
