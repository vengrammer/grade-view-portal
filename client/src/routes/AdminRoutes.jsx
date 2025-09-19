import { Route, Routes } from "react-router-dom";

//pages
import Layout from "@/layout/Layout";
import Home from "@/pages/admin/Dashboard";
import NotFoundPage from "@/pages/error/NotFoundPage";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  );
}
export default AdminRoutes;
