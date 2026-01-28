import React from 'react';
import { studentProfile } from '../../data/mockData';
import { User, Mail, Calendar, Hash } from 'lucide-react';

const StudentProfile: React.FC = () => {
    const infoItems = [
        { label: 'Full Name', value: studentProfile.name, icon: User },
        { label: 'Roll Number', value: studentProfile.rollNo, icon: Hash },
        { label: 'Student ID', value: studentProfile.studentId, icon: Hash },
        { label: 'Class', value: studentProfile.class, icon: null },
        { label: 'Section', value: studentProfile.section, icon: null },
        { label: 'Academic Year', value: studentProfile.academicYear, icon: Calendar },
        { label: 'Email', value: studentProfile.email, icon: Mail },
        { label: 'Date of Birth', value: studentProfile.dateOfBirth, icon: Calendar },
        { label: 'Gender', value: studentProfile.gender, icon: null },
        { label: 'Blood Group', value: studentProfile.bloodGroup, icon: null }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold text-text-main mb-6">Student Profile</h2>

            <div className="bg-card rounded-sm shadow-sm border border-ui-border">
                <div className="bg-linear-to-r from-primary to-primary/90 rounded-t-lg p-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-card rounded-full p-3">
                            <User className="h-12 w-12 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">{studentProfile.name}</h3>
                            <p className="text-white">Class {studentProfile.class}-{studentProfile.section} • Roll No: {studentProfile.rollNo}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {infoItems.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1">
                                    {item.icon && <item.icon className="h-5 w-5 text-text-muted" />}
                                    {!item.icon && <div className="h-5 w-5" />}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-text-muted">{item.label}</p>
                                    <p className="text-base font-semibold text-text-main mt-1">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile