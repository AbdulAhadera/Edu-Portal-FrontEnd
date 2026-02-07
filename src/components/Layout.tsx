import { useState } from "react";
import { Menu, Sun, Moon, X, Bell, UserCircle } from "lucide-react";
import { roleSideBarItems } from "../data/mockData";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Button from "./baseComponents/Button";
import EduLogoDark from "../assets/EduLogoDark.png";
import EduLogoLight from "../assets/EduLogoLight.png";
import LoadingState from "./LoadingState";

interface LayoutProps {
  role: "student" | "teacher" | "admin";
}

const Layout = ({ role }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, serLoading] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  const location = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const currentPage = location.pathname.split("/").pop();

  const handleNavigate = (page: string) => {
    navigate(page); // navigate to relative route
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-page transition-colors duration-200">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-card border-b border-ui-border z-30 flex items-center px-4 lg:px-6">
        <Button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden rounded-sm transition-all"
          startIcon={
            sidebarOpen ? (
              <X size={24} className="text-text-main" />
            ) : (
              <Menu size={24} className="text-text-main" />
            )
          }
        />

        {/* Theme Switcher */}
        <div className="flex items-center flex-1">
          {isDark ? (
            <>
              <img src={EduLogoDark} alt="EduLogo Dark" className="h-12" />
              <p className="text-text-main font-bold text-2xl  hidden md:block">
                Edu Portal
              </p>
            </>
          ) : (
            <>
              <img src={EduLogoLight} alt="EduLogo Light" className="h-12" />
              <p className="text-text-muted font-bold text-2xl hidden md:block">
                Edu Portal
              </p>
            </>
          )}
        </div>

        {/* Upper Panel */}
        <div className="flex gap-6">
          <Button
            onClick={toggleTheme}
            className="rounded-sm text-text-muted"
            startIcon={
              isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} />
              )
            }
          />

          <Button
            onClick={() => handleNavigate("notifications")}
            className="relative text-text-muted"
            startIcon={<Bell size={20} />}
          />

          <Button
            onClick={() => handleNavigate("profile")}
            className="flex items-center text-text-muted gap-2"
            startIcon={<UserCircle size={24} />}
            text="Alex Morgan"
          />
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 lg:hidden transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 w-64 bg-card border-r border-ui-border z-20 transition-transform transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="space-y-1 p-4">
          {roleSideBarItems[role].map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <Button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3  transition-colors ${
                  isActive
                    ? "bg-primary-muted text-primary font-medium"
                    : "text-text-muted hover:bg-page"
                }`}
                startIcon={<Icon size={24} />}
                text={item.label}
              />
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="pt-16 lg:pl-64">
        <div className="p-4 lg:p-6">
          {loading ? <LoadingState /> : <Outlet />}
        </div>
      </main>
    </div>
  );
};

export default Layout;
