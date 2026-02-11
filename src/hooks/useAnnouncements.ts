import { announcementsData } from "../data/mockData";
import { useLoader } from "./helpers/useLoader";
import type { LucideProps } from "lucide-react";

// announcement.ts
export interface Announcement {
  id: number;
  title: string;
  message: string;
  date: Date;
  read: boolean;
  icon?: React.FC<LucideProps>;
  category?: "info" | "warning" | "success" | "alert";
}

export const useAnnouncements = () => {
  const fetchAnnouncements = async (): Promise<Announcement[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(announcementsData), 300); // simulate API
    });
  };

  return useLoader(fetchAnnouncements);
};
