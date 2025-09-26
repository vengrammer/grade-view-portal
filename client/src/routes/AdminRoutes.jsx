import { Route, Routes } from "react-router-dom";

//pages
import Layout from "@/layout/Layout";
import Dashboard from "@/pages/admin/Dashboard";
import Account from "@/pages/admin/Account";
import Sections from "@/pages/admin/Sections";
import Students from "@/pages/admin/Students";
import Subjects from "@/pages/admin/Subjects";
import NotFoundPage from "@/pages/error/NotFoundPage";
import Batch from "@/pages/admin/Batch";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/batch" element={<Batch />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/sections" element={<Sections />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default AdminRoutes;
