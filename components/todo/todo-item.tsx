'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Todo } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (text: string, description: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  return (
    <div className="group flex items-start space-x-4 p-4 bg-white rounded-lg mb-3 hover:shadow-md transition-shadow">
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
      <Button
        variant="ghost"
        size="icon"
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}