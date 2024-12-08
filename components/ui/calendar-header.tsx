'use client';

import { format, addDays, subDays } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface CalendarHeaderProps {
  onDateChange: (date: Date) => void;
}

export function CalendarHeader({ onDateChange }: CalendarHeaderProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevDay = () => {
    const newDate = subDays(selectedDate, 1);
    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  const handleNextDay = () => {
    const newDate = addDays(selectedDate, 1);
    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(subDays(selectedDate, 3), i);
    return {
      date,
      dayNumber: format(date, 'd'),
      isSelected: format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'),
    };
  });

  return (
    <div className="p-4 bg-white rounded-t-3xl">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevDay} className="p-2">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="text-2xl font-bold">
          {format(selectedDate, 'EEEE')}
        </div>
        <button onClick={handleNextDay} className="p-2">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-between px-2">
        {days.map(({ date, dayNumber, isSelected }) => (
          <button
            key={date.toString()}
            onClick={() => {
              setSelectedDate(date);
              onDateChange(date);
            }}
            className={`w-8 h-8 flex items-center justify-center rounded-lg ${
              isSelected
                ? 'bg-black text-white'
                : 'text-gray-400 hover:bg-gray-100'
            }`}
          >
            {dayNumber}
          </button>
        ))}
      </div>
    </div>
  );
}