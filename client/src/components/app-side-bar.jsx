import { AdminSidebarItems } from "@/lib/AdminSidebarItems";
import { StudentSidebarItems } from "@/lib/StudentSidebarItems";
import { UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeSwitch } from "./ThemeSwitch";
export function AppSidebar() {
  const location = useLocation();
  const items = location.pathname.includes("admin")
    ? AdminSidebarItems
    : StudentSidebarItems;
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {location.pathname.includes("admin")
              ? "Admin Dashboard"
              : "Student Dashboard"}
            <span className="pl-9">
              <ThemeSwitch />
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Button variant="default" className="m-2 mt-5"><span><UserPlus/></span>Add User</Button>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
