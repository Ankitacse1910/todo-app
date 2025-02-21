import { useState } from 'react';
import type { AddTodoProps } from '../types/todo';

export function AddTodo({ value, onChange, onSubmit, error }: AddTodoProps) {
  const isInputEmpty = !value.trim();

  return (
    <div className='relative pb-6'>
      <form onSubmit={onSubmit} className='flex gap-2'>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Add a new todo...'
          className={`flex-1 px-4 py-2 rounded-lg border dark:bg-gray-700 dark:text-white 
            focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600
            disabled:opacity-50 disabled:cursor-not-allowed
            ${
              error
                ? 'border-red-300 dark:border-red-500'
                : 'border-gray-300 dark:border-gray-600'
            }`}
        />
        <button
          type='submit'
          disabled={isInputEmpty}
          className={`px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 
            focus:ring-green-500 focus:ring-offset-2 relative
            ${
              isInputEmpty
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                : 'bg-green-500 text-white hover:bg-green-600 cursor-pointer'
            }`}
        >
          Add
        </button>
      </form>
      {error && (
        <p className='absolute bottom-0 left-1 text-sm text-red-500 dark:text-red-400'>
          {error}
        </p>
      )}
    </div>
  );
}
