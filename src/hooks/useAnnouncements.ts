import { useCallback } from "react";
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

  const fetchAnnouncements = useCallback(
    async (): Promise<Announcement[]> => {
      return announcementsData; // no need for drama delay
    },
    []
  );

  return useLoader(fetchAnnouncements, []);
};