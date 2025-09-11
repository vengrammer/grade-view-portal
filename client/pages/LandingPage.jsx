import { Outlet } from "react-router-dom";
function LandingPage() {
  return (
    <div>
      <h1>Landing page</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default LandingPage;
