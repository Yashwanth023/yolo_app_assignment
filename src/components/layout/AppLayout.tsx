
import React from "react";
import { Home, Calendar, Newspaper, Music, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: Home, name: "Home", path: "/" },
    { icon: Calendar, name: "Schedule", path: "/schedule" },
    { icon: Newspaper, name: "News", path: "/news" },
    { icon: Music, name: "Music", path: "/music" },
    { icon: Settings, name: "Settings", path: "/settings" }
  ];

  return (
    <div className="modus-container">
      <main className="pb-16 h-full overflow-y-auto">
        {children}
      </main>
      
      <nav className="modus-navbar">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`modus-nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <item.icon size={24} />
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AppLayout;
