import CardForDashBoard from "@/components/CardForDashBoard";
import { DataTable } from "@/components/table";
import { getTheTeacher } from "@/services/admin/getTheTeacher";
import { teachersTableColumn } from "@/lib/teachersTableColumn";
function Dashboard() {
  return (
    <div className="w-full">
      <div className="min-w-screen md:min-w-[20rem] p-4 flex flex-col md:flex-row flex-auto">
        <CardForDashBoard title="Teachers" data={12} />
        <CardForDashBoard title="Students" data={12} />
        <CardForDashBoard title="Subjects" data={12} />
        <CardForDashBoard title="Sections" data={12} />
      </div>
      <div className="max-w-screen">
        <div className="py-10 px-10">
          <div className="pb-5">
            <span className="text-lg font-medium">Teachers</span>
          </div>
          <DataTable tableData={getTheTeacher} columns={teachersTableColumn} />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
