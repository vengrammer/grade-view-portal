import { AdminSidebarItems } from "@/lib/AdminSidebarItems";
import { StudentSidebarItems } from "@/lib/StudentSidebarItems";
import { AddForm } from "@/components/CreateAccount";
import { useLocation, Link } from "react-router-dom";
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
import { DropDownButton } from "./dropdown-button";
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
              <AddForm />
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.title === "Batch" ? (
                      <DropDownButton />
                    ) : (
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    )}
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
