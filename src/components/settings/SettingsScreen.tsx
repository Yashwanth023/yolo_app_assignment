
import React, { useState } from "react";
import { Home, Bell, Moon, Volume, User, ChevronRight } from "lucide-react";

const SettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState(80);
  
  const handleToggleChange = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    return () => setter(prev => !prev);
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolumeLevel(parseInt(e.target.value));
  };
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Profile</h2>
        <div className="modus-card flex items-center">
          <div className="w-12 h-12 bg-modus-accent rounded-full flex items-center justify-center mr-4">
            <User size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">John Smith</h3>
            <p className="text-modus-textSecondary text-sm">john.smith@example.com</p>
          </div>
          <ChevronRight size={20} className="text-modus-textSecondary" />
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Preferences</h2>
        <div className="space-y-4">
          <div className="modus-card flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-modus-accent bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <Bell size={18} className="text-modus-accent" />
              </div>
              <span>Notifications</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={notificationsEnabled} 
                onChange={handleToggleChange(setNotificationsEnabled)}
              />
              <div className="w-11 h-6 bg-modus-border rounded-full peer peer-checked:bg-modus-accent"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
          
          <div className="modus-card flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-modus-accent bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <Moon size={18} className="text-modus-accent" />
              </div>
              <span>Dark Mode</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={darkModeEnabled} 
                onChange={handleToggleChange(setDarkModeEnabled)}
              />
              <div className="w-11 h-6 bg-modus-border rounded-full peer peer-checked:bg-modus-accent"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
          
          <div className="modus-card">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-modus-accent bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <Volume size={18} className="text-modus-accent" />
              </div>
              <span>Volume</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={volumeLevel}
              onChange={handleVolumeChange}
              className="w-full h-2 bg-modus-border rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-modus-textSecondary text-sm mt-1">
              {volumeLevel}%
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-lg font-semibold mb-3">About</h2>
        <div className="modus-card">
          <p className="mb-2">Modus Mirror</p>
          <p className="text-modus-textSecondary text-sm">Version 1.0.0</p>
        </div>
      </section>
    </div>
  );
};

export default SettingsScreen;
