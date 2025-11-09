import { CheckSquare } from 'lucide-react';

function Header() {
  return (
    <header className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow">
        <CheckSquare className="w-6 h-6" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
        <p className="text-sm text-gray-500">Stay organized and get things done</p>
      </div>
    </header>
  );
}

export default Header;
