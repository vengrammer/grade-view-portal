import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/landing/LandingPage";
import NotFoundPage from "@/pages/error/NotFoundPage";

function AuthRoute() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default AuthRoute;
