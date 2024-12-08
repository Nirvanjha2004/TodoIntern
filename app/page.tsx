'use client';

import { CalendarHeader } from '@/components/ui/calendar-header';
import { TodoList } from '@/components/todo/todo-list';
import { AddTodoDialog } from '@/components/todo/add-todo-dialog';
import { useTodoStore } from '@/lib/store';
import { format } from 'date-fns';
import { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { addTodo } = useTodoStore();

  const handleAddTodo = (text: string, description: string) => {
    addTodo(text, description, format(selectedDate, 'yyyy-MM-dd'));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <CalendarHeader onDateChange={setSelectedDate} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Today</h2>
        <TodoList selectedDate={selectedDate} />
      </div>
      <AddTodoDialog onAdd={handleAddTodo} />
      <Toaster />
    </div>
  );
}