import CardForDashBoard from "@/components/CardForDashBoard";
import { Component } from "@/components/table";
function Dashboard() {
  return (
    <div className="w-full">
      <div className="min-w-screen md:min-w-[20rem] p-4 flex flex-col md:flex-row flex-auto">
        <CardForDashBoard title="Teachers" data={12} />
        <CardForDashBoard title="Students" data={12} />
        <CardForDashBoard title="Subjects" data={12} />
        <CardForDashBoard title="Sections" data={12} />
      </div>
      <div className="max-w-screen md:p-20 px-5">
        <Component/>
      </div>
    </div>
  );
}
export default Dashboard;
