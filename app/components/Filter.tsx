import type { FilterProps } from "../types/todo";

export function Filter({ filters, selected, onChange }: FilterProps) {
  return (
    <div className="flex justify-center gap-2 p-1 bg-gray-100/50 dark:bg-gray-700/50 
      rounded-lg backdrop-blur-sm">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter as 'all' | 'pending' | 'completed')}
          className={`px-4 py-2 rounded-lg capitalize transition-all duration-200 cursor-pointer
            ${selected === filter
              ? 'bg-white dark:bg-gray-800 text-green-600 dark:text-green-500 shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
} 