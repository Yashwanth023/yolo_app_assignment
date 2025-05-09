
import React from "react";
import { Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const Community = () => {
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

      {/* Post Something */}
      <div className="px-4 py-2">
        <div className="flex items-center space-x-3">
          <Avatar>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=128&h=128" alt="User" />
          </Avatar>
          <input
            type="text"
            placeholder="Post Something..."
            className="flex-1 bg-gray-100 border-0 rounded-md py-2 px-3"
          />
          <button className="text-teal-500">
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-2 grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="border border-teal-500 text-teal-500 hover:bg-teal-50 font-medium"
        >
          AI Bot
        </Button>
        <Button
          variant="outline" 
          className="border border-teal-500 text-teal-500 hover:bg-teal-50 font-medium"
        >
          Pattern Forecast
        </Button>
      </div>

      {/* Posts */}
      <div className="px-4 py-2">
        <div className="border-b border-gray-200 pb-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-2">
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fit=crop&w=128&h=128" alt="User" />
              </Avatar>
              <div>
                <h4 className="font-medium text-teal-500">Murali Krishna</h4>
                <p className="text-xs text-gray-500">Posted On 23/09/21 at 4:30 pm</p>
              </div>
            </div>
            <button className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>

          <div className="mb-2">
            <img 
              src="/lovable-uploads/64dea782-854e-482c-b7bd-b2e8172c3047.png" 
              alt="Post" 
              className="w-full rounded-md"
            />
          </div>

          <div className="mb-3">
            <p className="text-gray-700">
              If you find that your fragrance has faded away by lunchtime or you go through perfumes far too quickly, these top tips from the experts at Hairtrade will help your scent last all day long – without the need to spray an entire bottle on yourself.
              <br /><br />
              It's all about knowing where and how to apply fragrance, and how to store it so it retains its quality.
            </p>
          </div>

          <div className="flex items-center text-gray-500 mb-2">
            <span className="mr-2">4</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="ml-4 mr-2">5</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>

          <div className="flex justify-between border-t border-gray-200 pt-2">
            <Button variant="ghost" className="flex-1 text-teal-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              Like
            </Button>
            <Button variant="ghost" className="flex-1 text-teal-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Comment
            </Button>
            <Button variant="ghost" className="flex-1 text-teal-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </Button>
          </div>
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

export default Community;
