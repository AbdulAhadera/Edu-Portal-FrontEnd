// date.ts

/** Format date into "Jan 01, 2XXX" */
export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};


/** Format time into "00:00 PM" */
export const formatTime = (date: string | Date): string => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
};


/** Check if a Date/Time is past (deadline check) */
export const isPast = (date: string | Date): boolean => {
  return new Date(date).getTime() < new Date().getTime();
};


/** Check if a date is today */
export const isToday = (date: string | Date): boolean => {
  const d = new Date(date);
  const now = new Date();
  return d.getDate() === now.getDate() &&
         d.getMonth() === now.getMonth() &&
         d.getFullYear() === now.getFullYear();
};


/** Convert date to ISO string for inputs (yyyy-mm-dd) format */
export const toISODate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toISOString();
};