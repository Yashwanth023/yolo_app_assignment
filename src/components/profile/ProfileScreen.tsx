
import React, { useState } from "react";
import { Grid, Menu, Settings } from "lucide-react";

const ProfileScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "tagged">("posts");
  
  const stats = {
    posts: 24,
    followers: 1248,
    following: 348
  };
  
  const posts = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    imageUrl: `https://images.unsplash.com/photo-${1500000000000 + i * 50000}?ixlib=rb-4.0.3`,
    likes: Math.floor(Math.random() * 200) + 50,
    comments: Math.floor(Math.random() * 30) + 5
  }));

  return (
    <div className="bg-black text-white pb-16">
      <header className="sticky top-0 bg-black z-10 px-4 py-3 border-b border-gray-800 flex justify-between items-center">
        <button>
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">alex_smith</h1>
        <button>
          <Settings size={24} />
        </button>
      </header>

      <div className="px-4 pt-6">
        {/* Profile info */}
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <p className="font-bold">{stats.posts}</p>
              <p className="text-sm text-gray-400">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{stats.followers}</p>
              <p className="text-sm text-gray-400">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{stats.following}</p>
              <p className="text-sm text-gray-400">Following</p>
            </div>
          </div>
        </div>
        
        {/* Bio */}
        <div className="mb-6">
          <h2 className="font-medium">Alex Smith</h2>
          <p className="text-gray-400">Photographer | Traveler</p>
          <p className="mt-1">Capturing moments around the world.</p>
          <p className="text-blue-500">www.alexsmith.com</p>
        </div>
        
        {/* Edit Profile / Share buttons */}
        <div className="flex space-x-2 mb-6">
          <button className="flex-1 py-1.5 border border-gray-800 rounded font-medium">
            Edit Profile
          </button>
          <button className="flex-1 py-1.5 border border-gray-800 rounded font-medium">
            Share Profile
          </button>
        </div>
        
        {/* Highlights */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-4">
            {["Travel", "Food", "Pets", "Nature"].map((highlight) => (
              <div key={highlight} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center mb-1">
                  <div className="w-14 h-14 rounded-full bg-gray-800"></div>
                </div>
                <span className="text-xs">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-t border-gray-800">
          <button 
            className={`flex-1 py-3 flex justify-center ${activeTab === "posts" ? "border-t" : ""}`}
            onClick={() => setActiveTab("posts")}
          >
            <Grid size={24} />
          </button>
          <button 
            className={`flex-1 py-3 flex justify-center ${activeTab === "tagged" ? "border-t" : ""}`}
            onClick={() => setActiveTab("tagged")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1">
        {posts.map(post => (
          <div key={post.id} className="aspect-square relative">
            <img 
              src={post.imageUrl} 
              alt={`Post ${post.id}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileScreen;
