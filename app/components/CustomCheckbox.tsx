import React from 'react';
import type { CheckboxProps } from '~/types/todo';

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  className,
}) => {
  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
      className={`h-5 w-5 rounded-md border-2 border-gray-300 dark:border-gray-600 
        checked:bg-green-500 checked:border-green-500 checked:hover:bg-green-600
        transition-colors duration-200 cursor-pointer 
        hover:border-green-500
        focus:ring-0 focus:ring-offset-0
        checked:[&:not(:focus)]:ring-0
        appearance-none
        disabled:cursor-not-allowed
        checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')]
        checked:bg-no-repeat checked:bg-center ${className}`}
    />
  );
};

export default Checkbox;
