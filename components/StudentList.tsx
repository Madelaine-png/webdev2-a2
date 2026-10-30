
/*
 * File: StudentList.tsx
 * Author: Sanjana Dhaka
 * Date: October 30, 2026
 *
 * This component displays a collection of students.
 * It receives an array of Student objects and a remove callback through props.
 * It checks whether the student array is empty and displays a message if necessary.
 * Otherwise, it uses map to create one StudentCard for each student.
 * The output is a responsive grid containing all student cards.
 */

// Major section: Imports
import type { Student } from "@/data/students";
import StudentCard from "./StudentCard";

// Major section: Props interface
interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

// Major section: Student list component
const StudentList = ({ students, onRemove }: StudentListProps) => {
  // Major section: Empty student list message
  if (students.length === 0) {
    return (
      <p className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-600">
        No students to show.
      </p>
    );
  }

  // Major section: Display student cards
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default StudentList;
