import { Trash2 } from 'lucide-react';
import type { TodoItemProps } from '../types/todo';
import Checkbox from '~/components/CustomCheckbox';
import CustomButton from '~/components/CustomButton';

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className={`group flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 
      p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200
      border border-gray-100 dark:border-gray-700/30
     `}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className=''
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
      <CustomButton
        type='button'
        onClick={() => onDelete(todo.id)}
        className='opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 
          rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200
          cursor-pointer disabled:cursor-not-allowed'
        aria-label='Delete todo'
      >
        <Trash2 size={18} />
      </CustomButton>
    </div>
  );
}
