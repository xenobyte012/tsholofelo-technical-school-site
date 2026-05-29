import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
    <div className="bg-slate-800 h-full flex text-gray-200 ">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div>
          <div className="flex justify-between mt-8 p-8">
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
