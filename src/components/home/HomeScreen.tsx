
import React, { useState, useEffect } from "react";

const HomeScreen: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");
  
  useEffect(() => {
    // Update current time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Set greeting based on time of day
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
    
    return () => clearInterval(timer);
  }, [currentTime]);

  return (
    <div className="p-6 animate-fade-in">
      <header className="mb-8">
        <h2 className="text-xl text-modus-textSecondary">{greeting}</h2>
        <h1 className="text-5xl font-bold mt-1">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </h1>
        <p className="text-modus-textSecondary mt-2">
          {currentTime.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </header>
      
      <section className="modus-card mb-6 animate-slide-up">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Weather</h3>
            <p className="text-3xl font-bold mt-2">18°C</p>
            <p className="text-modus-textSecondary">Partly Cloudy</p>
          </div>
          <div className="text-right">
            <div className="text-5xl text-yellow-500">⛅</div>
          </div>
        </div>
      </section>
      
      <section className="modus-card mb-6 animate-slide-up" style={{animationDelay: "0.1s"}}>
        <h3 className="text-lg font-medium mb-3">Today's Schedule</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-16 text-modus-textSecondary">9:00 AM</div>
            <div className="flex-1">
              <p className="font-medium">Morning Standup</p>
              <p className="text-modus-textSecondary text-sm">Team meeting</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16 text-modus-textSecondary">2:30 PM</div>
            <div className="flex-1">
              <p className="font-medium">Project Review</p>
              <p className="text-modus-textSecondary text-sm">Client presentation</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="modus-card animate-slide-up" style={{animationDelay: "0.2s"}}>
        <h3 className="text-lg font-medium mb-3">Latest News</h3>
        <article className="mb-3">
          <h4 className="font-medium">Tech Industry Updates</h4>
          <p className="text-modus-textSecondary text-sm">New innovations in smart home technology announced</p>
        </article>
        <article>
          <h4 className="font-medium">Market Trends</h4>
          <p className="text-modus-textSecondary text-sm">Stock markets show positive growth this quarter</p>
        </article>
      </section>
    </div>
  );
};

export default HomeScreen;
