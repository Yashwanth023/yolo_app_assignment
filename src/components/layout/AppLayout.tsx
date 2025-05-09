
import React from "react";
import { Home, MessageCircle, PlusSquare, Heart, User, MoveRight, Building, LandPlot, Users } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  
  const navItems = [
    { icon: Users, name: "Community", path: "/community" },
    { icon: Home, name: "Home", path: "/" },
    { icon: MoveRight, name: "Move", path: "/move" },
    { icon: Building, name: "Local Business", path: "/local-business" },
    { icon: LandPlot, name: "Local Council", path: "/local-council" }
  ];

  const handleLogout = () => {
    logout();
    navigate("/welcome");
  };

  return (
    <div className="yolo-container">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 bg-white">
        <div className="text-teal-500 font-bold text-xl">YOLO</div>
        <div className="flex space-x-4">
          <button 
            onClick={() => navigate("/profile")} 
            className="text-black"
          >
            <User size={24} />
          </button>
          <button className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </header>
      
      <main className="pb-16 h-full overflow-y-auto">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-3 px-2 z-10">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center ${location.pathname === item.path ? 'text-teal-500' : 'text-gray-500'}`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AppLayout;
