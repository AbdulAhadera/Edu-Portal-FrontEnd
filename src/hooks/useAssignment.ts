import { useCallback } from "react";
import { studentAssignments } from "../data/mockData";
import { useLoader } from "./helpers/useLoader";
import type { AssignmentData } from "../types";

export const useAssignments = () => {
  const fetchAssignments = useCallback(async (): Promise<AssignmentData[]> => {
    // Future API call example:
    // const res = await fetch("/api/assignments").then(r => r.json());
    return studentAssignments; // for now, mock data
  }, []);

  return useLoader(fetchAssignments, []);
};