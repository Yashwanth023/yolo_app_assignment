
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-teal-50 to-teal-500">
      <div className="w-full flex-1 flex flex-col items-center justify-center px-6">
        <div className="mb-16">
          <img 
            src="/lovable-uploads/1aba0f37-a68e-43fa-94b6-b91c3a21ecfd.png" 
            alt="Yolo Logo" 
            className="h-20"
          />
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
      <div className="w-full p-4">
        <div className="w-16 h-1 bg-black mx-auto rounded-full" />
      </div>
    </div>
  );
};

export default Welcome;
