import {
  NotebookText,
  LayoutDashboard,
  CalendarSearch,
  Users,
  CircleUserRound,
  GraduationCap,
} from "lucide-react";

export const AdminSidebarItems = [
  
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Batch",
    url: "/admin/batch",
    icon: CalendarSearch,
  },
  {
    title: "Students",
    url: "/admin/students",
    icon: Users,
  },
  {
    title: "Subjects",
    url: "/admin/subjects",
    icon: NotebookText,
  },
  {
    title: "Section",
    url: "/admin/sections",
    icon: GraduationCap,
  },
  {
    title: "Account",
    url: "/admin/account",
    icon: CircleUserRound,
  },
];
