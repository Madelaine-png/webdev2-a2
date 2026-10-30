
/*
 * File: StudentCard.tsx
 * Author: Sanjana Dhaka
 * Date: October 30, 2026
 *
 * This component displays information about one student.
 * It receives a student object and a remove callback through its props.
 * It uses local state to show or hide the student's average and Honour Roll status.
 * The Remove button sends the student's ID to the parent component.
 * The output is an individual student card with action buttons.
 */

"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

// Major section: Props interface
interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

// Major section: Student card component
const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  // Major section: Details visibility state
  const [showDetails, setShowDetails] = useState(false);

  // Major section: Toggle student details
  const handleToggleDetails = () => {
    setShowDetails((current) => !current);
  };

  // Major section: Display student information
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">
        {student.firstName} {student.lastName}
      </h3>

      <p className="mt-1 text-sm text-slate-600">
        Grade {student.grade}
      </p>

      {/* Major section: Additional student details */}
      {showDetails && (
        <div className="mt-4 border-t border-slate-200 pt-3">
          <p className="text-sm text-slate-700">
            Average: {student.average}%
          </p>

          {student.average >= 80 && (
            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
              Honour roll
            </span>
          )}
        </div>
      )}

      {/* Major section: Student actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleToggleDetails}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        <button
          type="button"
          onClick={() => onRemove(student.id)}
          className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
