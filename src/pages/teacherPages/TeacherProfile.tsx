import React from 'react';
import { Mail, Phone, MapPin, GraduationCap, Clock, Award, ShieldCheck, Activity } from 'lucide-react';
import Button from '../../components/baseComponents/Button.tsx';

const TeacherProfile = () => {
  const teacher = {
    name: "Dr. Farhan Ali",
    role: "Senior Physics Faculty",
    id: "EMP-9920",
    email: "farhan.ali@school.edu",
    phone: "+92 312 0009876",
    office: "Block C, Room 12",
    experience: "15 Years",
    stats: [
      { label: "Classes", value: "12" },
      { label: "Students", value: "450+" },
      { label: "Rating", value: "4.9" }
    ],
    activities: [
      { event: "Submitted Grade 10 results", time: "2 hours ago" },
      { event: "Updated Physics Syllabus", time: "Yesterday" },
      { event: "Marked Attendance (12-B)", time: "2 days ago" }
    ]
  };

  return (
    <div className="min-h-screen bg-page p-4 md:p-10 text-text-main transition-none">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 items-stretch">
        
        {/* LEFT COLUMN */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
          {/* Main Info Box */}
          <div className="flex-1 bg-card border border-ui-border rounded-sm p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-none">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-primary-muted rounded-sm flex items-center justify-center text-3xl font-bold text-primary border border-ui-border">
                {teacher.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary p-1 rounded-sm border-2 border-card">
                <ShieldCheck size={14} className="text-white" />
              </div>
            </div>
            
            <h2 className="text-xl font-bold tracking-tight">{teacher.name}</h2>
            <p className="text-primary font-medium text-xs mb-6 uppercase tracking-widest">{teacher.role}</p>
            
            <div className="w-full space-y-4 pt-6 border-t border-ui-border">
              <div className="flex items-center gap-4 text-text-muted text-sm">
                <Mail size={16} className="text-primary" />
                <span className="font-normal">{teacher.email}</span>
              </div>
              <div className="flex items-center gap-4 text-text-muted text-sm">
                <Phone size={16} className="text-primary" />
                <span className="font-normal">{teacher.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-text-muted text-sm">
                <MapPin size={16} className="text-primary" />
                <span className="font-normal">{teacher.office}</span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2">
            {teacher.stats.map((stat, i) => (
              <div key={i} className="bg-card border border-ui-border rounded-sm py-4 text-center shadow-sm hover:shadow-md transition-none">
                <div className="text-lg font-bold text-text-main">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-text-muted font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          
          {/* Top Section: Academic Profile */}
          <div className="flex-1 bg-card border border-ui-border rounded-sm shadow-sm hover:shadow-md transition-none flex flex-col">
            <div className="px-6 py-4 border-b border-ui-border flex justify-between items-center bg-ui-hover/20">
              <h3 className="text-sm font-normal text-text-main flex items-center gap-2">
                <GraduationCap size={16} className="text-primary" /> Academic Profile
              </h3>
              <Button text="Edit Profile" className="bg-primary text-white text-[10px] px-3 py-1 uppercase tracking-tighter rounded-sm" />
            </div>
            
            <div className="p-8 flex-1 flex flex-col justify-center">
               <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest">About Educator</h4>
                    <p className="text-sm leading-relaxed text-text-muted font-normal">
                       With over {teacher.experience} of experience, Dr. Farhan specializes in quantum mechanics and advanced pedagogy. 
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest text-right">Reference</h4>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-mono bg-page px-2 py-1 rounded-sm border border-ui-border">
                        {teacher.id}
                      </span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Bottom Section: Activity & Note */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-ui-border rounded-sm p-6 shadow-sm hover:shadow-md transition-none">
              <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                <Activity size={14} className="text-primary" /> Recent Log
              </h3>
              <div className="space-y-4">
                {teacher.activities.map((act, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-ui-border pl-4 relative">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-sm bg-primary" />
                    <span className="text-xs font-medium">{act.event}</span>
                    <span className="text-[10px] text-text-muted font-normal">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-muted border border-primary/20 rounded-sm p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-none">
              <div>
                <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Clock size={14} /> Teacher's Note
                </h3>
                <p className="text-sm text-text-main italic font-medium">
                  "Ensure all lab equipment is sanitized before the next session."
                </p>
              </div>
              <Button 
                text="Post New Update" 
                className="mt-6 w-full bg-primary text-white text-xs py-2 rounded-sm" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;