
import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleWellbeingCheck = () => {
    toast({
      title: "Well-being Check",
      description: "Your well-being assessment will start soon",
    });
  };

  const handleBrandingManagement = () => {
    toast({
      title: "Branding Management",
      description: "Community card management tool loading...",
    });
  };

  const handleAvailNow = () => {
    toast({
      title: "Offer Claimed",
      description: "You have successfully availed this offer!",
    });
  };

  const handleCheckPoints = () => {
    toast({
      title: "Points Balance",
      description: "You have 250 points available",
    });
  };

  const handleConnectPayment = () => {
    toast({
      title: "Payment Connection",
      description: "Connecting to payment gateway...",
    });
  };

  const subscriptions = [
    {
      name: "Subscription Plan 1",
      description: "Description",
      cost: "123$"
    },
    {
      name: "Subscription Plan 2",
      description: "Description",
      cost: "123$"
    }
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

      {/* API Login Button */}
      <div className="px-4 py-2">
        <Button 
          className="w-full border border-teal-500 text-teal-500 bg-white hover:bg-teal-50"
          onClick={handleLoginClick}
        >
          Login for Council and Hospital APIs
        </Button>
      </div>

      {/* Well-being Check Button */}
      <div className="px-4 py-2">
        <Button 
          className="w-full border border-teal-500 text-teal-500 bg-white hover:bg-teal-50"
          onClick={handleWellbeingCheck}
        >
          Check your Well-Being
        </Button>
      </div>

      {/* Card Management Button */}
      <div className="px-4 py-2">
        <Button 
          className="w-full border border-teal-500 text-teal-500 bg-white hover:bg-teal-50"
          onClick={handleBrandingManagement}
        >
          Branding and Community Card Management
        </Button>
      </div>

      {/* Offers Card */}
      <div className="px-4 py-2">
        <div className="bg-teal-500 rounded-lg p-4 text-white relative">
          <div className="absolute right-4 top-4 flex space-x-1">
            <div className="h-2 w-2 rounded-full bg-white opacity-50"></div>
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <div className="h-2 w-2 rounded-full bg-white opacity-50"></div>
          </div>
          <h2 className="text-xl font-bold">Offers and Benefits</h2>
          <p className="mt-1 text-sm">
            Personalised offers and discounts details
          </p>
          <Button 
            className="mt-4 bg-white text-teal-500 hover:bg-gray-100"
            onClick={handleAvailNow}
          >
            Avail Now
          </Button>
        </div>
      </div>

      {/* Subscription Plans */}
      {subscriptions.map((sub, index) => (
        <div key={index} className="px-4 py-2">
          <div className="border-b border-gray-200 pb-3">
            <div className="flex justify-between">
              <div>
                <div className="text-xs text-gray-500">Plan</div>
                <div className="text-teal-500 font-medium">{sub.name}</div>
                <div className="text-sm text-gray-600">{sub.description}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Cost</div>
                <div className="text-gray-600">{sub.cost}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Action Buttons */}
      <div className="px-4 py-2 grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="border border-teal-500 text-teal-500 hover:bg-teal-50 font-medium"
          onClick={handleCheckPoints}
        >
          Check loaded points
        </Button>
        <Button
          variant="outline" 
          className="border border-teal-500 text-teal-500 hover:bg-teal-50 font-medium"
          onClick={handleConnectPayment}
        >
          Connect to Payment
        </Button>
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

export default Index;
