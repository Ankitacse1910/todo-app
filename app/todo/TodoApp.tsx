import { useEffect, useState } from 'react';
import { AddTodo } from '../containers/AddTodo';
import { Filter } from '../containers/Filter';
import { TodoItem } from '../containers/TodoItem';
import { ProgressBar } from '../components/ProgressBar';
import type { Todo, FilterType } from '../types/todo';

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [loading, setLoading] = useState(true);
  const [newTodoText, setNewTodoText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      fetch('https://dummyjson.com/todos?limit=10')
        .then(res => res.json())
        .then(data => {
          const formattedTodos = data.todos.map((todo: { todo: any; completed: any; }) => ({
            id: Date.now() + Math.floor(Math.random() * 1000),
            todo: todo.todo,
            completed: todo.completed,
          }));
          setTodos(formattedTodos);
          localStorage.setItem('todos', JSON.stringify(formattedTodos));
        })
        .catch(() => setTodos([]));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, loading]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = newTodoText.trim();
    if (!trimmedText) return;
    if (
      todos.some(todo => todo.todo.toLowerCase() === trimmedText.toLowerCase())
    ) {
      setErrorMessage('This todo already exists');
      return;
    }
    const newTodo = {
      id: Date.now(),
      todo: trimmedText,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
    setNewTodoText('');
  };

  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'pending'
      ? !todo.completed
      : filter === 'completed'
      ? todo.completed
      : true
  );

  return (
    <main
      className='min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4'
    >
      <div className='max-w-2xl mx-auto space-y-8'>
        <div
          className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl 
          shadow-xl border border-white/20 dark:border-gray-700/30 p-8'
        >
          <h1
            className='text-4xl font-bold text-center mb-8 bg-gradient-to-r 
            from-green-600 to-blue-600 bg-clip-text text-transparent'
          >
            Check List
          </h1>
          <ProgressBar
            completed={todos.filter(todo => todo.completed).length}
            total={todos.length}
          />
          <AddTodo
            value={newTodoText}
            onChange={e => {
              setNewTodoText(e.target.value);
              if (errorMessage) setErrorMessage('');
            }}
            onSubmit={handleAddTodo}
            error={errorMessage}
          />
        </div>

        <div
          className='bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl 
          shadow-lg border border-white/20 dark:border-gray-700/30 p-6'
        >
          <Filter
            filters={['all', 'pending', 'completed']}
            selected={filter}
            onChange={setFilter}
          />

          {loading ? (
            <div className='flex items-center justify-center py-12'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-green-500'></div>
            </div>
          ) : (
            <div className='space-y-4 mt-6'>
              {filteredTodos.length === 0 ? (
                <div className='text-center py-12'>
                  <div className='text-gray-400 dark:text-gray-500 text-lg'>
                    {filter === 'all'
                      ? 'No todos yet. Add your first todo!'
                      : `No ${filter} todos`}
                  </div>
                </div>
              ) : (
                <div className='divide-y divide-gray-100 dark:divide-gray-700'>
                  {filteredTodos.map(todo => (
                    <div key={todo.id} className='py-2 first:pt-0 last:pb-0'>
                      <TodoItem
                        todo={todo}
                        onToggle={() => handleToggle(todo.id)}
                        onDelete={() => handleDelete(todo.id)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
