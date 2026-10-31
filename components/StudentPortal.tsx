/*
 * File: StudentPortal.tsx
 * Author: Madelaine Smith
 * Date: October 30, 2026
 *
 * This component draws the stats panel, student, and add a student input section.
 * It owns the student data as well as the search data and handles all
 * changes to the student list
 */

"use client";
import { useState } from "react";

import {Student} from "@/data/students";
import {startingStudents} from "@/data/students";
import AddStudent from "@/components/AddStudent";
import SearchBox from "./SearchBox";
import StatsPanel from "@/components/StatsPanel";
import StudentList from "@/components/StudentList";

const StudentPortal = () => {
    const [students, setStudents] = useState<Student[]>(startingStudents);
    const [search, setSearch] = useState("");
    const [honourRollCount, setHonourRollCount] = useState(4);
    const [graduatingCount, setGraduatingCount] = useState(2);

    //Handle new search being entered
    const handleSearch = (newSearch: string) => {
        setSearch(newSearch);
    }

    //Handle add button being clicked
    const handleAdd = (firstName: string, lastName: string, grade: number, average: number) => {
        const newStudent = {id: Date.now(), firstName: firstName, lastName: lastName, grade: grade, average: average};
        setStudents([...students, newStudent]);
        if(average >= 80) {
            setHonourRollCount(honourRollCount+1);
        }
        if(grade === 12) {
            setGraduatingCount(graduatingCount+1);
        }
    }

    //Handle remove button being clicked
    const handleRemove = (id: number, grade: number, average: number) => {
        setStudents(students.filter((student) => student.id !== id));
        if(average >= 80) {
            setHonourRollCount(honourRollCount-1);
        }
        if(grade === 12) {
            setGraduatingCount(graduatingCount-1);
        }
    };

    //Handle clear all button being clicked
    const handleClear = () => {
        setStudents([]);
        setHonourRollCount(0);
        setGraduatingCount(0);
    };

    return(
        <div>
            <StatsPanel totalStudents={students.length} honourRollCount={Number(honourRollCount)} graduatingCount={graduatingCount}/>
            <SearchBox onSearch={handleSearch}/>
            <StudentList students={students} search={search} onRemove={handleRemove}/>

            <h2 className=" pt-8 font-semibold">
                Add New Student
            </h2>
            <AddStudent onAdd={handleAdd}/>

            <button
                onClick={handleClear}
                className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700">
                Clear All
            </button>
        </div>
    )
}

export default StudentPortal;