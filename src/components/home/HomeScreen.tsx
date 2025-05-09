
import React from "react";
import { Search, Bell } from "lucide-react";

interface Post {
  id: number;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

const HomeScreen: React.FC = () => {
  // Mock data for posts
  const posts: Post[] = [
    {
      id: 1,
      username: "jessica_smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3",
      caption: "Enjoying the sunshine with friends! #weekend #fun",
      likes: 342,
      comments: 28,
      timeAgo: "2h ago"
    },
    {
      id: 2,
      username: "travel_mike",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3",
      caption: "Finally made it to the mountains! The view is incredible. #travel #mountains",
      likes: 512,
      comments: 45,
      timeAgo: "4h ago"
    }
  ];

  return (
    <div className="bg-black text-white pb-16">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 sticky top-0 bg-black z-10">
        <h1 className="text-2xl font-bold">Yolo</h1>
        <div className="flex space-x-4">
          <button className="text-white">
            <Search size={24} />
          </button>
          <button className="text-white">
            <Bell size={24} />
          </button>
        </div>
      </header>

      {/* Stories */}
      <div className="px-4 py-3">
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3" 
                  alt="Your story"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <span className="text-xs mt-1">Your story</span>
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-pink-500 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gray-300">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000}?ixlib=rb-4.0.3`}
                    alt={`Story ${i+1}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <span className="text-xs mt-1">user_{i+1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6 pb-4">
        {posts.map(post => (
          <div key={post.id} className="border-b border-gray-800 pb-4">
            {/* Post header */}
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                  <img 
                    src={post.avatar} 
                    alt={post.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">{post.username}</span>
              </div>
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
            
            {/* Post image */}
            <div className="aspect-square w-full">
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Post actions */}
            <div className="px-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
              
              {/* Likes */}
              <div className="mt-2">
                <span className="font-medium">{post.likes} likes</span>
              </div>
              
              {/* Caption */}
              <div className="mt-1">
                <span className="font-medium mr-2">{post.username}</span>
                <span>{post.caption}</span>
              </div>
              
              {/* Comments */}
              <div className="mt-1 text-gray-400">
                <button>View all {post.comments} comments</button>
              </div>
              
              {/* Time */}
              <div className="mt-1 text-gray-400 text-xs">
                <span>{post.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
