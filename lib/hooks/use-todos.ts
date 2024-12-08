import { useTodoStore } from '@/lib/store';
import { format } from 'date-fns';

export function useTodos(selectedDate: Date) {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodoStore();

  const filteredTodos = todos.filter(
    (todo) => todo.date === format(selectedDate, 'yyyy-MM-dd')
  );

  const handleAddTodo = (text: string, description: string) => {
    addTodo(text, description, format(selectedDate, 'yyyy-MM-dd'));
  };

  return {
    todos: filteredTodos,
    addTodo: handleAddTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
  };
}