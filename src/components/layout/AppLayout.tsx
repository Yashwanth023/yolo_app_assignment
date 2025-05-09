
import React from "react";
import { Home, MessageCircle, PlusSquare, Heart, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: Home, name: "Home", path: "/" },
    { icon: MessageCircle, name: "Chat", path: "/chat" },
    { icon: PlusSquare, name: "Post", path: "/post" },
    { icon: Heart, name: "Activity", path: "/activity" },
    { icon: User, name: "Profile", path: "/profile" }
  ];

  return (
    <div className="yolo-container">
      <main className="pb-16 h-full overflow-y-auto">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around items-center py-3 px-2 z-10">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center ${location.pathname === item.path ? 'text-white' : 'text-gray-500'}`}
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
