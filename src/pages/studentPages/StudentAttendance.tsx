import { useEffect, useState } from 'react';
import AttendanceCalendar from '../../components/AttendanceCalendar';
import { attendanceData } from '../../data/mockData';
import type { AttendanceStatus } from '../../types/index';
import { TrendingUp, Check, X } from 'lucide-react';
import RangeBar from '../../components/RangeBar';

interface AttendanceRecord {
  date: string;
  status: AttendanceStatus;
}

interface Stats {
  overall: number;
  totalDays: number;
  presentCount: number;
  absentCount: number;
  noRecordCount: number;
}

const StudentAttendance: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [attendanceMap, setAttendanceMap] = useState<
    Record<string, AttendanceStatus>
  >({});

  const [stats, setStats] = useState<Stats>({
    overall: 0,
    totalDays: 0,
    presentCount: 0,
    absentCount: 0,
    noRecordCount: 0,
  });

  useEffect(() => {
    const map: Record<string, AttendanceStatus> = {};
    attendanceData.forEach((r) => {
      map[r.date] = r.status;
    });
    setAttendanceMap(map);
    calculateStats(attendanceData);
  }, [currentMonth]);

  const calculateStats = (records: AttendanceRecord[]) => {
    const totalDays = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();

    const presentCount = records.filter(
      (r) => r.status === 'present'
    ).length;

    const absentCount = records.filter(
      (r) => r.status === 'absent'
    ).length;

    const noRecordCount = totalDays - presentCount - absentCount;

    const overall =
      totalDays > 0
        ? Math.round((presentCount / totalDays) * 100)
        : 0;

    setStats({
      overall,
      totalDays,
      presentCount,
      absentCount,
      noRecordCount,
    });
  };

  return (
    <div className="bg-page">
      <div className="max-w-7xl mx-auto">

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-text-main">Attendance</h1>
          <p className="text-text-muted mt-1">
            View your attendance records
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Stats */}
          <div className="space-y-6">

            <div className="bg-card border border-ui-border rounded-sm p-8">
              <div className="flex justify-between mb-4">
                <span className="text-text-muted text-sm uppercase">
                  Overall
                </span>
                <TrendingUp className="w-5 h-5 text-text-muted" />
              </div>

              <div className="text-5xl font-bold text-text-main mb-2">
                {stats.overall}%
              </div>

              <RangeBar percent={stats.overall} text="Attendance Rate" />
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-card border border-ui-border rounded-sm p-6">
                <Check className="w-6 h-6 text-primary mb-3" />
                <div className="text-3xl font-bold text-text-main">
                  {stats.presentCount}
                </div>
                <p className="text-text-muted text-xs mt-2 uppercase">
                  Present Days
                </p>
              </div>

              <div className="bg-card border border-ui-border rounded-sm p-6">
                <X className="w-6 h-6 text-danger mb-3" />
                <div className="text-3xl font-bold text-text-main">
                  {stats.absentCount}
                </div>
                <p className="text-text-muted text-xs mt-2 uppercase">
                  Absent Days
                </p>
              </div>

              <div className="bg-card border border-ui-border rounded-sm p-6 col-span-2">
                <div className="text-3xl font-bold text-text-main">
                  {stats.noRecordCount}
                </div>
                <p className="text-text-muted text-xs mt-2 uppercase">
                  No Record Days
                </p>
              </div>

            </div>
          </div>


          {/* Calendar */}
          <div className="lg:col-span-2">
            <AttendanceCalendar
              currentMonth={currentMonth}
              onMonthChange={setCurrentMonth}
              attendanceMap={attendanceMap}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAttendance;