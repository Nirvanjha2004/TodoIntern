'use client';

import { TodoItem } from '@/components/todo/todo-item';
import { useTodoStore } from '@/lib/store';
import { format } from 'date-fns';

interface TodoListProps {
  selectedDate: Date;
}

export function TodoList({ selectedDate }: TodoListProps) {
  const { todos, toggleTodo, deleteTodo, editTodo } = useTodoStore();

  const filteredTodos = todos.filter(
    (todo) => todo.date === format(selectedDate, 'yyyy-MM-dd')
  );

  if (filteredTodos.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        No todos for this day. Add one to get started!
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => toggleTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          onEdit={(text, description) => editTodo(todo.id, text, description)}
        />
      ))}
    </div>
  );
}