
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const LocalCouncil = () => {
  const [currentMonth, setCurrentMonth] = useState("May 2024");
  
  const calendar = {
    month: "May 2024",
    days: [
      { day: 1, hasEvent: false, selected: false },
      { day: 2, hasEvent: true, selected: true },
      { day: 3, hasEvent: false, selected: false },
      { day: 4, hasEvent: false, selected: false },
      { day: 5, hasEvent: false, selected: false },
      { day: 6, hasEvent: true, selected: true, isToday: true },
      { day: 7, hasEvent: false, selected: false },
      { day: 8, hasEvent: false, selected: false },
      { day: 9, hasEvent: false, selected: false },
      { day: 10, hasEvent: false, selected: false },
      { day: 11, hasEvent: false, selected: false },
      { day: 12, hasEvent: false, selected: false },
      { day: 13, hasEvent: false, selected: false },
      { day: 14, hasEvent: false, selected: false },
      { day: 15, hasEvent: false, selected: false },
      { day: 16, hasEvent: false, selected: false },
      { day: 17, hasEvent: false, selected: false },
      { day: 18, hasEvent: false, selected: false },
      { day: 19, hasEvent: true, selected: true },
      { day: 20, hasEvent: false, selected: false },
      { day: 21, hasEvent: false, selected: false },
      { day: 22, hasEvent: false, selected: false },
      { day: 23, hasEvent: false, selected: false },
      { day: 24, hasEvent: false, selected: false },
      { day: 25, hasEvent: true, selected: true },
      { day: 26, hasEvent: false, selected: false },
      { day: 27, hasEvent: false, selected: false },
      { day: 28, hasEvent: false, selected: false },
      { day: 29, hasEvent: false, selected: false },
      { day: 30, hasEvent: false, selected: false },
      { day: 31, hasEvent: false, selected: false },
    ]
  };

  return (
    <div className="bg-white text-gray-800 pb-16">
      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Type something.."
            className="pl-10 pr-4 py-2 w-full bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Discount Alert Card */}
      <div className="px-4 py-2">
        <div className="bg-teal-500 rounded-lg p-4 text-white relative">
          <div className="absolute right-4 top-4 flex space-x-1">
            <div className="h-2 w-2 rounded-full bg-white opacity-50"></div>
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <div className="h-2 w-2 rounded-full bg-white opacity-50"></div>
          </div>
          <h2 className="text-2xl font-bold">Discount Alert</h2>
          <p className="mt-2">
            Personalised offers and discounts details
          </p>
          <Button 
            className="mt-4 bg-white text-teal-500 hover:bg-gray-100"
          >
            Avail Now
          </Button>
        </div>
      </div>

      {/* Cluster Details */}
      <div className="px-4 py-2">
        <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-100">
          <h3 className="text-gray-500 text-sm mb-1">Cluster Details</h3>
          <h2 className="text-teal-600 text-lg font-semibold">Name of the Cluster</h2>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-4 py-4 grid grid-cols-2 gap-2">
        <Button variant="outline" className="border border-gray-300 text-gray-600 justify-center py-6">
          Local Businesses
        </Button>
        <Button variant="outline" className="border border-gray-300 text-gray-600 justify-center py-6">
          Services
        </Button>
        <Button variant="outline" className="border border-gray-300 text-gray-600 justify-center py-6">
          Offers
        </Button>
        <Button variant="outline" className="border border-gray-300 text-gray-600 justify-center py-6">
          Community News
        </Button>
      </div>

      {/* Calendar */}
      <div className="px-4 py-2">
        <div className="flex justify-between items-center">
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="text-lg font-medium">{currentMonth}</h3>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mt-2">
          <div className="text-center text-gray-500 text-sm p-2">SUN</div>
          <div className="text-center text-gray-500 text-sm p-2">MON</div>
          <div className="text-center text-gray-500 text-sm p-2">TUE</div>
          <div className="text-center text-gray-500 text-sm p-2">WED</div>
          <div className="text-center text-gray-500 text-sm p-2">THU</div>
          <div className="text-center text-gray-500 text-sm p-2">FRI</div>
          <div className="text-center text-gray-500 text-sm p-2">SAT</div>
          
          {calendar.days.map((day, i) => (
            <div key={i} className="text-center p-1">
              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
                  ${day.isToday ? "bg-teal-500 text-white" : day.selected ? "text-teal-500 underline" : "text-gray-700"}
                `}
              >
                {day.day}
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-end mt-2">
          <div className="w-3 h-1 bg-teal-500 rounded"></div>
          <span className="text-xs text-gray-500 ml-2">Event</span>
        </div>
      </div>

      {/* AI Help Section */}
      <div className="px-4 pt-12">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-gray-700 text-center mb-2">What can I help with?</h3>
          <div className="bg-gray-200 p-3 rounded-md">
            <div className="text-gray-500">Message Modus AI</div>
            <div className="flex justify-between mt-2">
              <div className="flex space-x-4">
                <button className="text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <button className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Quick Action Buttons */}
          <div className="flex justify-between mt-3">
            <Button variant="outline" className="text-xs py-1 px-2 border border-gray-300 bg-white text-gray-600">
              <span className="text-green-500 mr-1">✓</span> Cluster Info
            </Button>
            <Button variant="outline" className="text-xs py-1 px-2 border border-gray-300 bg-white text-gray-600">
              <span className="text-blue-500 mr-1">⬤</span> Business
            </Button>
            <Button variant="outline" className="text-xs py-1 px-2 border border-gray-300 bg-white text-gray-600">
              <span className="text-red-500 mr-1">⬤</span> Council
            </Button>
          </div>
          <div className="text-center text-xs text-gray-500 mt-2">
            ©Powered by Modus
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalCouncil;
