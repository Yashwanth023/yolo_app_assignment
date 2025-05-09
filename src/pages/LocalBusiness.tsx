
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const LocalBusiness = () => {
  const [activeTab, setActiveTab] = useState("paid");
  
  const businesses = [
    {
      type: "Paid Business",
      rating: 3,
      verified: true,
      name: "Business Name",
      description: "Description",
      offers: "Offers",
      phone: "123-43221334"
    },
    {
      type: "Paid Business",
      rating: 3,
      verified: true,
      name: "Business Name",
      description: "Description",
      offers: "Offers",
      phone: "123-43221334"
    },
    {
      type: "Paid Business",
      rating: 3,
      verified: true,
      name: "Business Name",
      description: "Description",
      offers: "Offers",
      phone: "123-43221334"
    },
    {
      type: "Paid Business",
      rating: 3,
      verified: true,
      name: "Business Name",
      description: "Description",
      offers: "Offers",
      phone: "123-43221334"
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

      {/* Tabs Navigation */}
      <div className="px-4 py-3 flex space-x-2 overflow-x-auto">
        <Button
          onClick={() => setActiveTab("paid")}
          className={`${
            activeTab === "paid"
              ? "bg-teal-500 text-white"
              : "bg-white text-teal-500 border border-teal-500"
          } whitespace-nowrap`}
        >
          Paid Businesses
        </Button>
        
        <Button
          onClick={() => setActiveTab("unpaid")}
          className={`${
            activeTab === "unpaid"
              ? "bg-teal-500 text-white"
              : "bg-white text-teal-500 border border-teal-500"
          } whitespace-nowrap`}
        >
          Unpaid Businesses
        </Button>
        
        <Button
          onClick={() => setActiveTab("product")}
          className={`${
            activeTab === "product"
              ? "bg-teal-500 text-white"
              : "bg-white text-teal-500 border border-teal-500"
          } whitespace-nowrap`}
        >
          Product
        </Button>
        
        <div className="ml-auto text-sm text-gray-500 flex items-center">
          Filters
        </div>
      </div>

      {/* Business Listings */}
      <div className="px-4 py-2">
        {businesses.map((business, index) => (
          <div key={index} className="mb-4 bg-white shadow-sm rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-start">
              <span className="text-gray-500 text-sm">{business.type}</span>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">{business.rating} ★</span>
                {business.verified && (
                  <span className="text-teal-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>
            </div>
            
            <h3 className="text-teal-600 font-semibold mt-1">{business.name}</h3>
            <p className="text-gray-600 text-sm">{business.description}</p>
            
            <div className="flex justify-between items-center mt-3">
              <span className="text-gray-500">{business.offers}</span>
              <a href={`tel:${business.phone}`} className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {business.phone}
              </a>
            </div>
          </div>
        ))}
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

export default LocalBusiness;
