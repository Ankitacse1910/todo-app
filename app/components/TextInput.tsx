import React from 'react';
import type { TextInputProps } from '~/types/todo';

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  error,
  disabled,
}) => {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`flex-1 px-4 py-2 rounded-lg border dark:bg-gray-700 dark:text-white 
        focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600
        disabled:opacity-50 disabled:cursor-not-allowed
        ${
          error
            ? 'border-red-300 dark:border-red-500'
            : 'border-gray-300 dark:border-gray-600'
        }`}
    />
  );
};

export default TextInput;
