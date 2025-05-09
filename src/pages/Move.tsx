
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Move = () => {
  const navigate = useNavigate();

  const documents = [
    { name: "Driving License", path: "/document/driving-license" },
    { name: "Electoral Role", path: "/document/electoral-role" },
  ];

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

      {/* Moving House Card */}
      <div className="px-4 py-2">
        <div className="bg-teal-500 rounded-lg p-4 text-white">
          <h2 className="text-2xl font-bold">Moving House?</h2>
          <p className="mt-2">
            Answer some questions and seamlessly manage address change and utilities
          </p>
          <Button 
            className="mt-4 bg-white text-teal-500 hover:bg-gray-100"
            onClick={() => navigate("/register-change")}
          >
            Register Change
          </Button>
        </div>
      </div>

      {/* Notify/Manage Section */}
      <div className="px-4 py-2">
        <h3 className="text-gray-600 mb-2">Notify/Manage:</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline"
            className="border border-teal-500 text-teal-500 hover:bg-teal-50"
          >
            Electricity
          </Button>
          <Button
            variant="outline"
            className="border border-teal-500 text-teal-500 hover:bg-teal-50"
          >
            Water
          </Button>
          <Button
            variant="outline"
            className="border border-teal-500 text-teal-500 hover:bg-teal-50"
          >
            Internet
          </Button>
          <Button
            variant="outline"
            className="border border-teal-500 text-teal-500 hover:bg-teal-50"
          >
            Bank
          </Button>
        </div>
      </div>

      {/* Register/Update Documents */}
      <div className="px-4 py-2">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Register/Update Documents:</h3>
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
            >
              <span className="text-gray-600">{doc.name}</span>
              <button 
                onClick={() => navigate(doc.path)}
                className="text-gray-400"
              >
                →
              </button>
            </div>
          ))}
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

export default Move;
