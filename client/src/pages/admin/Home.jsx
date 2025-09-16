import { ThemeSwitch } from "@/components/ThemeSwitch";
import CardForDashBoard from "@/components/CardForDashBoard";
function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row flex-auto">
        <CardForDashBoard title="Student" data={12} />
        <CardForDashBoard title="Student" data={12} />
        <CardForDashBoard title="Student" data={12} />
        <CardForDashBoard title="Student" data={12} />
      </div>
    </div>
  );
}
export default Home;
