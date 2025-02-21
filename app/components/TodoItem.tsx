import { Trash2 } from 'lucide-react';
import type { TodoItemProps } from '../types/todo';

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className={`group flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 
      p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200
      border border-gray-100 dark:border-gray-700/30
     `}
    >
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 rounded-md border-2 border-gray-300 dark:border-gray-600 
          checked:bg-green-500 checked:border-green-500 checked:hover:bg-green-600
          transition-colors duration-200 cursor-pointer 
          hover:border-green-500
          focus:ring-0 focus:ring-offset-0
          checked:[&:not(:focus)]:ring-0
          appearance-none
          disabled:cursor-not-allowed
          checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')]
          checked:bg-no-repeat checked:bg-center"
      />
      <span
        className={`flex-1 text-gray-800 dark:text-gray-200 text-lg transition-colors duration-200
          ${
            todo.completed
              ? 'line-through text-gray-400 dark:text-gray-500'
              : ''
          }`}
      >
        {todo.todo}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className='opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 
          rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200
          cursor-pointer disabled:cursor-not-allowed'
        aria-label='Delete todo'
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
