import { useState } from 'react';
import { Plus } from 'lucide-react';

function TaskInput({ onAdd }) {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <form onSubmit={submit} className="flex items-center gap-2">
      <input
        className="flex-1 rounded-md border border-gray-200 bg-white/70 backdrop-blur px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 active:scale-[.98]"
        aria-label="Add task"
      >
        <Plus className="w-4 h-4" />
        Add
      </button>
    </form>
  );
}

export default TaskInput;
