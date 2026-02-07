import React, { useState } from "react";
import { notificationData } from "../../data/mockData";
import { Bell, ClipboardList, Megaphone, CheckCheck } from "lucide-react";
import BaseHeader from "../../components/BaseHeader";
import Button from "../../components/baseComponents/Button";

export interface notification {
  id: string;
  type: "assignment" | "quiz" | "announcement";
  title: string;
  message: string;
  date: string;
  read: boolean;
}

const TeacherNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState(notificationData);
  const [filter, setFilter] = useState<
    "all" | "unread" | "assignment" | "announcement"
  >("all");

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "all") return true;
    if (filter === "unread") return !n.read;
    return n.type === filter;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return <ClipboardList className="text-orange-500" size={22} />;
      case "announcement":
        return <Megaphone className="text-blue-500" size={22} />;
      default:
        return <Bell className="text-text-muted" size={22} />;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <BaseHeader
          heading="Notififcations"
          text={
            unreadCount > 0
              ? `You have ${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}`
              : "All caught up"
          }
        />

        {unreadCount > 0 && (
          <Button
            onClick={markAllAsRead}
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-primary text-white hover:opacity-90 transition"
            startIcon={<CheckCheck size={18} />}
            text="Mark all as read"
          />
        )}
      </div>

      {/* Filters */}
      <div className="bg-card border border-ui-border rounded-sm p-2 mb-6">
        <div className="flex flex-wrap gap-2">
          {["all", "unread", "assignment", "announcement"].map((status) => (
            <Button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-sm font-medium capitalize transition
                ${
                  filter === status
                    ? "bg-primary text-white"
                    : "bg-ui-hover text-text-muted hover:text-text-main"
                }`}
              text={status}
            />
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-2">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            onClick={() => markAsRead(notification.id)}
            className={`rounded-sm p-4 border cursor-pointer transition
              ${
                notification.read
                  ? "bg-card border-ui-border"
                  : "bg-primary-muted border-primary"
              }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-sm bg-card border border-ui-border">
                {getNotificationIcon(notification.type)}
              </div>

              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="font text-text-main font-semibold">
                    {notification.title}
                  </h3>
                  {!notification.read && (
                    <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  )}
                </div>

                <p className="text-sm text-text-muted mb-2">
                  {notification.message}
                </p>

                <p className="text-xs text-text-muted italic">
                  {new Date(notification.date).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="mx-auto text-text-muted mb-4" size={56} />
          <p className="text-text-muted text-lg">No notifications to show</p>
        </div>
      )}
    </div>
  );
};

export default TeacherNotifications;
