import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";

function AuthRoute() {
  return (
    <Routes>
      <Route element={<LandingPage />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}
export default AuthRoute;
