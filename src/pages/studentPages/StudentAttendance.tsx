import { useEffect, useState } from 'react';
import AttendanceCalendar from '../../components/AttendanceCalendar';
import { TrendingUp, Calendar as CalendarIcon, Check, X } from 'lucide-react';

type AttendanceStatus = 'present' | 'absent' | undefined;

interface AttendanceRecord {
    date: string;
    status: AttendanceStatus;
}

interface Stats {
    overall: number;
    present: number;
    absent: number;
    rate: number;
    totalDays: number;
    presentCount: number;
    absentCount: number;
}

// Hardcoded attendance records in JSON format
const ATTENDANCE_RECORDS: AttendanceRecord[] = [
    { date: '2026-01-01', status: 'present' },
    { date: '2026-01-02', status: 'present' },
    { date: '2026-01-03', status: 'absent' },
    { date: '2026-01-05', status: 'present' },
    { date: '2026-01-06', status: 'present' },
    { date: '2026-01-07', status: 'absent' },
    { date: '2026-01-08', status: 'present' },
    { date: '2026-01-09', status: 'present' },
    { date: '2026-01-10', status: 'present' },
    { date: '2026-01-12', status: 'absent' },
    { date: '2026-01-13', status: 'present' },
    { date: '2026-01-14', status: 'present' },
    { date: '2026-01-15', status: 'present' },
    { date: '2026-01-16', status: 'present' },
    { date: '2026-01-17', status: 'absent' },
    { date: '2026-01-19', status: 'present' },
    { date: '2026-01-20', status: 'present' },
    { date: '2026-01-21', status: 'present' },
    { date: '2026-01-22', status: 'present' },
    { date: '2026-01-23', status: 'absent' },
    { date: '2026-01-24', status: 'absent' },
    { date: '2026-01-26', status: 'present' },
    { date: '2026-01-27', status: 'present' },
    { date: '2026-01-28', status: 'present' },
    { date: '2026-01-29', status: 'present' },
    { date: '2026-01-30', status: 'present' },
];

function StudentAttendance() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [attendanceData, setAttendanceData] = useState<Record<string, AttendanceStatus>>({});
    const [stats, setStats] = useState<Stats>({
        overall: 0,
        present: 0,
        absent: 0,
        rate: 0,
        totalDays: 0,
        presentCount: 0,
        absentCount: 0,
    });

    useEffect(() => {
        loadAttendanceData();
    }, []);

    const loadAttendanceData = () => {
        const dataMap: Record<string, AttendanceStatus> = {};
        ATTENDANCE_RECORDS.forEach((record) => {
            dataMap[record.date] = record.status;
        });

        setAttendanceData(dataMap);
        calculateStats(ATTENDANCE_RECORDS);
    };

    const calculateStats = (records: AttendanceRecord[]) => {
        const totalDays = records.length;
        const presentDays = records.filter((r) => r.status === 'present').length;
        const absentDays = records.filter((r) => r.status === 'absent').length;

        const presentPercent = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
        const absentPercent = totalDays > 0 ? Math.round((absentDays / totalDays) * 100) : 0;

        setStats({
            overall: presentPercent,
            present: presentPercent,
            absent: absentPercent,
            rate: presentPercent,
            totalDays,
            presentCount: presentDays,
            absentCount: absentDays,
        });
    };

    const handleDateClick = (dateString: string) => {
        const currentStatus = attendanceData[dateString];
        let newStatus: AttendanceStatus;

        if (!currentStatus || currentStatus === undefined) {
            newStatus = 'present';
        } else if (currentStatus === 'present') {
            newStatus = 'absent';
        } else {
            newStatus = undefined;
        }

        const updatedData = { ...attendanceData };
        updatedData[dateString] = newStatus;
        setAttendanceData(updatedData);

        // Recalculate stats with updated data
        const updatedRecords = ATTENDANCE_RECORDS.map((r) =>
            r.date === dateString ? { ...r, status: newStatus } : r
        ).filter((r) => r.status !== undefined);

        calculateStats(updatedRecords);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                            <CalendarIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">Student Attendance Tracker</h1>
                            <p className="text-slate-400 text-sm mt-1">Monitor your presence and performance</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="group bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 border border-emerald-400/20">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-emerald-100 font-semibold text-sm uppercase tracking-wider">Overall</span>
                                <TrendingUp className="w-5 h-5 text-emerald-200" />
                            </div>
                            <div className="text-5xl font-bold text-white mb-2">{stats.overall}%</div>
                            <div className="w-full bg-emerald-900/40 rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-emerald-300 to-teal-200 h-full rounded-full transition-all duration-500"
                                    style={{ width: `${stats.overall}%` }}
                                />
                            </div>
                            <p className="text-emerald-100 text-sm mt-4">Attendance score</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-blue-400/20">
                                <Check className="w-6 h-6 text-blue-100 mb-3" />
                                <div className="text-3xl font-bold text-white">{stats.presentCount}</div>
                                <p className="text-blue-100 text-xs mt-2 uppercase tracking-wider">Present Days</p>
                            </div>

                            <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-xl p-6 shadow-lg hover:shadow-red-500/20 transition-all duration-300 border border-red-400/20">
                                <X className="w-6 h-6 text-red-100 mb-3" />
                                <div className="text-3xl font-bold text-white">{stats.absentCount}</div>
                                <p className="text-red-100 text-xs mt-2 uppercase tracking-wider">Absent Days</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <AttendanceCalendar
                            currentMonth={currentMonth}
                            onMonthChange={setCurrentMonth}
                            onDateClick={handleDateClick}
                        />
                    </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-slate-300 font-semibold text-sm uppercase tracking-widest mb-4">Legend</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg"></div>
                            <span className="text-slate-300">Present</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-rose-400 to-red-500 shadow-lg"></div>
                            <span className="text-slate-300">Absent</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-lg bg-slate-600 border border-slate-500"></div>
                            <span className="text-slate-300">No Record</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentAttendance;