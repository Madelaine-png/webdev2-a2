
/*
    navbar component
 */

import Link from "next/link";

// Major section: Navbar component
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
  
        <Link
          href="#overview"
          className="text-xl font-bold tracking-tight text-indigo-700"
        >
          New Generation High School
        </Link>

        
        <div className="flex flex-wrap items-center gap-2 sm:gap-5">
          <Link
            href="#overview"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
          >
            Overview
          </Link>

          <Link
            href="#students"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
          >
            Students
          </Link>

          <Link
            href="#add-student"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Add a student
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
