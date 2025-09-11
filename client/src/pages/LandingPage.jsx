import { Outlet } from "react-router-dom";
function LandingPage() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-900">
      <h1>Landing page</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default LandingPage;
