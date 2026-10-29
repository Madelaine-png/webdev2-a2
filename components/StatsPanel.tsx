
/*
    StatsPanel component
 */

// Major section: Props interface
interface StatsPanelProps {
  totalStudents: number;
  honourRollCount: number;
  graduatingCount: number;
}

// Major section: Statistics panel
const StatsPanel = ({
  totalStudents,
  honourRollCount,
  graduatingCount,
}: StatsPanelProps) => {
  const stats = [
    {
      label: "Total Students",
      value: totalStudents,
      description: "Students in the school",
    },
    {
      label: "Honour Roll",
      value: honourRollCount,
      description: "Average of 80 or higher",
    },
    {
      label: "Graduating",
      value: graduatingCount,
      description: "Grade 12 students",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          {/* Statistic value */}
          <p className="text-sm font-medium text-slate-500">
            {stat.label}
          </p>

          <p className="mt-3 text-4xl font-bold tracking-tight text-indigo-700">
            {stat.value}
          </p>

          {/* Statistic description */}
          <p className="mt-2 text-sm text-slate-500">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsPanel;
