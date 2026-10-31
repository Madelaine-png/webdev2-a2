
/*
 * File: students.ts
 * Author: Sanjana Dhaka
 * Date: October 30, 2026
 *
 * This file defines the Student interface used throughout the application.
 * It describes each student's ID, first name, last name, grade, and average.
 * It also provides the initial student records displayed when the application starts.
 * Other components import this interface and student data to display and manage students.
 */

// Major section: Student interface
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// Major section: Initial student data
export const startingStudents: Student[] = [
  { id: 1, firstName: "Zara", lastName: "Ahmed", grade: 12, average: 92 },
  { id: 2, firstName: "Liam", lastName: "Chen", grade: 11, average: 85 },
  { id: 3, firstName: "Maya", lastName: "Singh", grade: 10, average: 78 },
  { id: 4, firstName: "Noah", lastName: "Brown", grade: 9, average: 74 },
  { id: 5, firstName: "Ava", lastName: "Patel", grade: 12, average: 88 },
  { id: 6, firstName: "Ethan", lastName: "Wilson", grade: 11, average: 76 },
  { id: 7, firstName: "Sofia", lastName: "Garcia", grade: 10, average: 81 },
  { id: 8, firstName: "Lucas", lastName: "Martin", grade: 9, average: 69 },
];
