import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import NotFoundPage from "./pages/NotFoundPage";
import AuthRoute from "./routes/AuthRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AuthRoute />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
