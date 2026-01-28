import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { AttendanceStatus } from '../../src/types/index.ts';

interface CalendarProps {
  currentMonth: Date;
  onMonthChange: (date: Date) => void;
  attendanceMap: Record<string, AttendanceStatus>;
}


export interface AttendanceRecord {
  date: string;
  status: AttendanceStatus;
}

const AttendanceCalendar = ({
  currentMonth,
  onMonthChange,
  attendanceMap,
}: CalendarProps) => {
  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const getFirstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const formatDate = (day: number) => {
    const y = currentMonth.getFullYear();
    const m = String(currentMonth.getMonth() + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const getStatusColor = (date: string) => {
    const status = attendanceMap[date];
    if (status === 'present')
      return 'bg-linear-to-br from-emerald-400 to-teal-500';
    if (status === 'absent')
      return 'bg-linear-to-br from-rose-400 to-red-500';
    return 'bg-slate-600 border border-slate-500';
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay });

  const monthName = currentMonth.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-card border border-ui-border rounded-none p-6 w-full">
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold text-text-main">
          {monthName}
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() =>
              onMonthChange(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() - 1
                )
              )
            }
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              onMonthChange(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1
                )
              )
            }
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div
            key={d}
            className="text-center text-sm text-text-muted"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {emptyDays.map((_, i) => (
          <div key={i} />
        ))}

        {days.map((day) => {
          const date = formatDate(day);
          return (
            <div
              key={day}
              className={`aspect-square rounded-lg flex items-center justify-center font-semibold text-button ${getStatusColor(
                date
              )}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendanceCalendar;