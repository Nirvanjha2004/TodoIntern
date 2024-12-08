import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Todo {
  id: string;
  text: string;
  description: string;
  completed: boolean;
  date: string;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string, description: string, date: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string, description: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text, description, date) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Math.random().toString(36).substring(2),
              text,
              description,
              completed: false,
              date,
            },
          ],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      editTodo: (id, text, description) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text, description } : todo
          ),
        })),
    }),
    {
      name: 'todo-storage',
    }
  )
);