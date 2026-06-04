import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FrequencyCharts from "../charts/frequencyCharts";
import HeatMap from "../charts/HeatMap"
import MonthlyChart from "../charts/MonthlyCharts";
import WeekHoursCharts from "../charts/WeekHoursCharts";
import PeakCodingHours from "../charts/PeakCodingHours";
import ProjectLeaderboard from "../charts/ProjectLeaderboard";
import ActiveProjects from "../charts/ActiveProjects";
import LanguageDistribution from "@/charts/LanguageDistribution";
function Dashboard() {

  const demoData = [
    {
      id: 1,
      name: "Total Repositories",
      value: "17",
    },
    {
      id: 2,
      name: "Total Contribution",
      value: "124",
    },
    {
      id: 3,
      name: "Total Hours",
      value: "50h",
    },
    {
      id: 4,
      name: "Current Streak",
      value: "18 Days",
    },
  ];

  return (
    <div className="bg-slate-800 h-full flex text-gray-200 ml-70 ">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div className="mt-12 p-8">
          <div className="flex justify-between ">
            {demoData.map((data) => (
              <div className="bg-slate-900 border border-slate-950 rounded-xl p-6 flex flex-col justify-start w-60 h-30 gap-3 hover:scale-102 duration-300 transform transition order-first ">
                <div>
                  <p className="text-md text-gray-400">{data.name}</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold">{data.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" mt-12 grid grid-col h-auto grid-cols-[2fr_1fr] gap-8">
            <div>
              <HeatMap />
            </div>
            <div>
              <FrequencyCharts />
            </div>
          </div>
          <div className=" mt-12 grid grid-col h-auto grid-cols-[1fr_2fr] gap-12">
            <div>
              <MonthlyChart />
            </div>
            <div>
              <WeekHoursCharts />
            </div>
          </div>
          <div className=" mt-12 grid grid-col h-auto grid-cols-2 gap-12">
            <div>
              <PeakCodingHours />
            </div>
            <div>
              <ProjectLeaderboard />
            </div>
          </div>
          <div className=" mt-12 grid grid-col h-auto grid-cols-[1fr_2fr] gap-12">

            <div>
              <ActiveProjects />
            </div>
            <div><LanguageDistribution /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
