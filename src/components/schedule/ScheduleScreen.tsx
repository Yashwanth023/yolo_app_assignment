
import React, { useState } from "react";
import { format, addDays, isSameDay } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  id: number;
  title: string;
  description: string;
  time: string;
  location?: string;
}

const ScheduleScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Mock schedule data
  const events: Event[] = [
    {
      id: 1,
      title: "Morning Standup",
      description: "Team meeting",
      time: "9:00 AM",
      location: "Conference Room"
    },
    {
      id: 2,
      title: "Project Review",
      description: "Client presentation",
      time: "2:30 PM",
      location: "Meeting Room 2"
    },
    {
      id: 3,
      title: "Lunch with Alex",
      description: "Discuss partnership",
      time: "12:00 PM",
      location: "Cafe Bistro"
    },
    {
      id: 4,
      title: "Gym Session",
      description: "Personal training",
      time: "6:00 PM",
      location: "Fitness Center"
    }
  ];

  const getDayClasses = (day: Date) => {
    return `flex flex-col items-center justify-center w-10 h-10 rounded-full 
      ${isSameDay(day, selectedDate) ? 'bg-modus-accent text-white' : 'text-modus-textSecondary'}`;
  };
  
  const renderCalendarStrip = () => {
    const days = [];
    
    for (let i = -3; i <= 3; i++) {
      const day = addDays(selectedDate, i);
      days.push(
        <button 
          key={i} 
          className={getDayClasses(day)}
          onClick={() => setSelectedDate(day)}
        >
          <span className="text-xs">{format(day, 'EEE')}</span>
          <span className="font-medium">{format(day, 'd')}</span>
        </button>
      );
    }
    
    return days;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Schedule</h1>
      
      <div className="modus-card mb-6">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2 text-modus-textSecondary">
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-lg font-medium">{format(selectedDate, 'MMMM yyyy')}</h2>
          <button className="p-2 text-modus-textSecondary">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-between mb-2">
          {renderCalendarStrip()}
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold">
          {format(selectedDate, 'EEEE, MMM do')}
        </h3>
        <p className="text-modus-textSecondary">
          {events.length} events scheduled
        </p>
      </div>
      
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="modus-card animate-slide-up">
            <div className="flex items-start">
              <div className="w-16 text-modus-textSecondary">{event.time}</div>
              <div className="flex-1">
                <h4 className="font-medium">{event.title}</h4>
                <p className="text-modus-textSecondary text-sm">{event.description}</p>
                {event.location && (
                  <p className="text-modus-textSecondary text-xs mt-1">📍 {event.location}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleScreen;
