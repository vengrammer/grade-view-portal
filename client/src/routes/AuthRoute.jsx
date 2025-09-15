import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/landing/LandingPage";

function AuthRoute() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
export default AuthRoute;
