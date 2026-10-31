/*
 * File: AddStudent.tsx
 * Author: Madelaine Smith
 * Date: October 30, 2026
 *
 * This component has 4 inputs that accept info
 * for a new students first and last name, as well as
 * their grade and grade average, when the button is clicked
 * those props are sent to the student portal to be handled
 */

"use client";
import { useState } from "react";

//student props to be passed up
interface AddStudentProps {
    onAdd: (
        firstName: string,
        lastName: string,
        grade: number,
        average: number
    ) => void;
}

const AddStudent = ({ onAdd }: AddStudentProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState("9");
    const [average, setAverage] = useState("70");

    //Handle add button being clicked
    const handleClick = () => {
        if(firstName ==="" || lastName ==="") {
            return;
        }
        onAdd(firstName, lastName, Number(grade), Number(average));
        setFirstName("");
        setLastName("")
        setGrade("9");
        setAverage("70");
    }

    //Handle first name input being changed
    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }

    //Handle last name input being changed
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    //Handle grade input being changed
    const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrade(event.target.value);
    }

    //Handle average input being changed
    const handleAverageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAverage(event.target.value);
    }

    return(
        <div id="add-student" className="flex gap-4 my-2">
            <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
                className="flex-1 rounded-lg border bg-white border-slate-300 px-4 py-2
                text-slate-900 focus:border-indigo-600 focus:outline-none"
            />
            <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
                className="flex-1 rounded-lg border bg-white border-slate-300 px-4 py-2
                text-slate-900 focus:border-indigo-600 focus:outline-none"
            />
            <input
                type="number"
                value={grade}
                onChange={handleGradeChange}
                className="w-20 rounded-lg border bg-white border-slate-300 px-4 py-2
                text-slate-900 focus:border-indigo-600 focus:outline-none"
            />
            <input
                type="number"
                value={average}
                onChange={handleAverageChange}
                className="w-20 rounded-lg border bg-white border-slate-300 px-4 py-2
                text-slate-900 focus:border-indigo-600 focus:outline-none"
            />

            <button
                onClick={handleClick}
                className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700">
                Add
            </button>
        </div>
    )
}

export default AddStudent;