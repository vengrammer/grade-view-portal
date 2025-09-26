import { DataTable } from "@/components/table";
import { getTheStudents } from "@/services/admin/getTheStudents";
import { studentsTableColumn } from "@/lib/studentsTableColumn";
function Students() {
  return (
    <div className="w-full">
      <div className="max-w-screen md:p-20 px-5">
        <div className="pb-5">
          <span className="text-lg font-medium">Students</span>
        </div>
        <DataTable tableData={getTheStudents} columns={studentsTableColumn} />
      </div>
    </div>
  );
}
export default Students;
