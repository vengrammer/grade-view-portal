import {
  NotebookText,
  LayoutDashboard,
  Users,
  CircleUserRound,
  GraduationCap,
} from "lucide-react";

export const AdminSidebarItems = [
  {
    title: "Dashboard",
    url: "admin",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    url: "admin/calendar",
    icon: Users ,
  },

  {
    title: "Subjects",
    url: "admin/calendar",
    icon: NotebookText,
  },
  {
    title: "Section",
    url: "admin/search",
    icon: GraduationCap,
  },
  {
    title: "Account",
    url: "admin/settings",
    icon: CircleUserRound,
  },
];
