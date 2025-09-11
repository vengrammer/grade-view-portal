import { Route, Routes } from "react-router-dom";

//pages
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
export default AdminRoutes;
