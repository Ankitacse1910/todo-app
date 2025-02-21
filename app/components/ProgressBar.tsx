import type { ProgressBarProps } from "../types/todo";

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2 text-sm text-gray-600 dark:text-gray-300">
        <span>{`${completed}/${total} Completed`}</span>
        <span>{`${percentage}%`}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-2 bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
} 