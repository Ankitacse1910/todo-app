import type { AddTodoProps } from '../types/todo';
import TextInput from '~/components/TextInput';
import CustomButton from '~/components/CustomButton';

export function AddTodo({ value, onChange, onSubmit, error }: AddTodoProps) {
  const isInputEmpty = !value.trim();

  return (
    <div className='relative pb-6'>
      <form onSubmit={onSubmit} className='flex gap-2'>
        <TextInput
          value={value}
          onChange={onChange}
          placeholder='Add a new todo...'
          error={error}
        />
        <CustomButton
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
        </CustomButton>
      </form>
      {error && (
        <p className='absolute bottom-0 left-1 text-sm text-red-500 dark:text-red-400'>
          {error}
        </p>
      )}
    </div>
  );
}
