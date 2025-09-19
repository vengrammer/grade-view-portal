import CardForDashBoard from "@/components/CardForDashBoard";
function Dashboard() {
  return (
    <div className="w-full">
      <div className="min-w-screen md:min-w-[20rem] p-4 flex flex-col md:flex-row flex-auto">
        <CardForDashBoard title="Teachers" data={12} />
        <CardForDashBoard title="Students" data={12} />
        <CardForDashBoard title="Subjects" data={12} />
        <CardForDashBoard title="Sections" data={12} />
      </div>
    </div>
  );
}
export default Dashboard;
