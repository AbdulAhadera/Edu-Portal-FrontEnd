import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { attendanceData } from '../../src/data/mockData.ts';
import type { AttendanceStatus } from '../../src/data/mockData.ts';


interface CalendarProps {
    currentMonth: Date;
    onMonthChange: (date: Date) => void;
    onDateClick?: (dateString: string) => void;
}

export default function AttendanceCalendar({
    currentMonth,
    onMonthChange,
    onDateClick,
}: CalendarProps) {
    const [attendanceMap, setAttendanceMap] = useState<Record<string, AttendanceStatus>>({});

    useEffect(() => {

        const map: Record<string, AttendanceStatus> = {};
        attendanceData.forEach((record) => {
            map[record.date] = record.status;
            console.log(record.date, record.status);
        });
        setAttendanceMap(map);

    }, []);

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const formatDate = (day: number) => {
        const year = currentMonth.getFullYear();
        const month = String(currentMonth.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        return `${year}-${month}-${dayStr}`;
    };

    const getStatusColor = (dateString: string) => {
        const status = attendanceMap[dateString];
        if (status === 'present') return 'bg-gradient-to-br from-emerald-400 to-teal-500';
        if (status === 'absent') return 'bg-gradient-to-br from-rose-400 to-red-500';
        return 'bg-slate-600 border border-slate-500';
    };

    const handlePrevMonth = () => {
        onMonthChange(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        onMonthChange(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

    const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

    return (
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">{monthName}</h2>
                <div className="flex gap-3">
                    <button
                        onClick={handlePrevMonth}
                        className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-300 hover:text-white"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNextMonth}
                        className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-300 hover:text-white"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-sm font-semibold text-slate-400 py-2">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {emptyDays.map((_, index) => (
                    <div key={`empty-${index}`} className="aspect-square" />
                ))}

                {days.map((day) => {
                    const dateString = formatDate(day);
                    const status = attendanceMap[dateString];
                    const statusColor = getStatusColor(dateString);

                    return (
                        <button
                            key={day}
                            onClick={() => onDateClick?.(dateString)}
                            className={`aspect-square rounded-lg ${statusColor} flex items-center justify-center font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105 shadow-md cursor-pointer`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}