import { courses } from "../data/mockData";
import { useLoader } from "./helpers/useLoader";
import type { CourseMaterial, CourseCardData } from "../types";

export const useResources = () => {
  const fetchResources = async (): Promise<(CourseMaterial & { courseId: number })[]> => {
  
    return courses.flatMap((course: CourseCardData) =>
      course.courseMaterial?.map((mat) => ({ ...mat, courseId: course.id })) ?? []
    );
  };

  return useLoader(fetchResources, []);
};