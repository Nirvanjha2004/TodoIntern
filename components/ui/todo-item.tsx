'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@/lib/store";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (text: string, description: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg mb-3">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={onToggle}
        className="mt-1"
      />
      <div className="flex-1">
        <h3
          className={cn(
            "text-lg font-semibold",
            todo.completed && "line-through text-gray-400"
          )}
        >
          {todo.text}
        </h3>
        <p
          className={cn(
            "text-sm text-gray-600",
            todo.completed && "line-through text-gray-400"
          )}
        >
          {todo.description}
        </p>
      </div>
    </div>
  );
}