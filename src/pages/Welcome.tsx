
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-teal-50 to-teal-500 relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="w-full flex-1 flex flex-col items-center justify-center px-6 z-10">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-teal-700">YOLO</h1>
        </div>
        
        <div className="w-full max-w-md space-y-4">
          <Button
            onClick={() => navigate("/login")}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg"
          >
            Sign In
          </Button>
          
          <Button
            onClick={() => navigate("/signup")}
            variant="outline"
            className="w-full bg-white hover:bg-gray-50 text-teal-500 border border-teal-500 py-6 text-lg"
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className="w-full p-4 z-10">
        <div className="w-16 h-1 bg-black mx-auto rounded-full" />
      </div>
    </div>
  );
};

export default Welcome;
