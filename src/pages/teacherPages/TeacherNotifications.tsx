import type React from "react"
import BaseHeader from "../../components/BaseHeader"
import { useState } from "react";

export interface notification {
    id: string;
    type: 'assignment' | 'quiz' | 'announcement';
    title: string;
    message: string;
    date: string;
    read: boolean;
}


const TeacherNotifications: React.FC = () => {

    // const [notifications, setNotifications] = useState(notificationData);
    // const [filter, setFilter] = useState<
    //     'all' | 'unread' | 'assignment' | 'announcement'
    // >('all');

    // const filteredNotifications = notifications.filter(n => {
    //     if (filter === 'all') return true;
    //     if (filter === 'unread') return !n.read;
    //     return n.type === filter;
    // });

    // const unreadCount = notifications.filter(n => !n.read).length;

    // const markAsRead = (id: string) => {
    //     setNotifications(prev =>
    //         prev.map(n => (n.id === id ? { ...n, read: true } : n))
    //     );
    // };

    // const markAllAsRead = () => {
    //     setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    // };
    const unreadCount = 0;

    return (
        <div>
            <BaseHeader
                heading="Notififcations"
                text={unreadCount > 0
                    ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
                    : 'All caught up'}
            />
        </div>
    )
}

export default TeacherNotifications