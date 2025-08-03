import {
  Home,
  User,
  Trophy,
  Users,
  MessageSquare,
  Map,
  Ship,
  Settings,
  Compass,
  Anchor,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Port", url: "/", icon: Home },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Classement", url: "/leaderboard", icon: Trophy },
  { title: "Army", url: "/army", icon: Users },
  { title: "Messages", url: "/messages", icon: MessageSquare },
];

const adventureItems = [
  { title: "World Map", url: "/map", icon: Map },
  { title: "Ship", url: "/ship", icon: Ship },
];

const systemItems = [
  { title: "Settings", url: "/settings", icon: Settings },
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-smooth font-cinzel ${
      isActive
        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-treasure"
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    }`;

  return (
    <Sidebar
      className={`${
        collapsed ? "w-16" : "w-64"
      } border-r-4 border-sidebar-border shadow-deep`}
      collapsible="icon"
    >
      <div className="absolute inset-0 wood-texture opacity-40"></div>
      
      <SidebarContent className="relative z-10 bg-sidebar/90">
        {/* Navigation Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-sidebar-primary font-pirata text-lg mb-2">
            <Compass className="h-5 w-5" />
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Adventure Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-sidebar-primary font-pirata text-lg mb-2">
            <Anchor className="h-5 w-5" />
            {!collapsed && "Adventure"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adventureItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-sidebar-primary font-pirata text-lg mb-2">
            <Settings className="h-4 w-4" />
            {!collapsed && "System"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Decorative elements for bottom */}
        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="text-center space-y-2">
              <div className="text-sidebar-primary font-pirata">
                "I'm gonna be the Pirate King!"
              </div>
              <div className="flex justify-center items-center gap-2 text-xs text-sidebar-foreground/70">
                <Anchor className="h-3 w-3" />
                <span className="font-cinzel">Grand Line Adventures</span>
                <Anchor className="h-3 w-3" />
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;