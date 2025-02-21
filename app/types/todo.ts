export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export type FilterType = 'all' | 'pending' | 'completed';

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string | number) => void;
  onDelete: (id: string | number) => void;
}

export interface AddTodoProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  error?: string;
}

export interface FilterProps {
  filters: string[];
  selected: string;
  onChange: (filter: FilterType) => void;
}

export interface ProgressBarProps {
  completed: number;
  total: number;
} 

export interface CustomButtonProps {
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  key?: string;
}

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}