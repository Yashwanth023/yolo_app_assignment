
import React from "react";

interface Chat {
  id: number;
  username: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

const ChatScreen: React.FC = () => {
  const chats: Chat[] = [
    {
      id: 1,
      username: "jessica_smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      lastMessage: "See you tomorrow!",
      time: "2h ago",
      unread: true
    },
    {
      id: 2,
      username: "mike_jones",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      lastMessage: "Thanks for the info",
      time: "3h ago",
      unread: false
    },
    {
      id: 3,
      username: "sarah_parker",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3",
      lastMessage: "Let me check and get back to you",
      time: "5h ago",
      unread: true
    },
    {
      id: 4,
      username: "david_wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      lastMessage: "Did you see the game last night?",
      time: "1d ago",
      unread: false
    },
    {
      id: 5,
      username: "emily_brown",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      lastMessage: "Looking forward to your visit!",
      time: "2d ago",
      unread: false
    }
  ];

  return (
    <div className="bg-black text-white h-full pb-16">
      <header className="sticky top-0 bg-black z-10 px-4 py-3 border-b border-gray-800">
        <h1 className="text-xl font-bold">Messages</h1>
      </header>

      <div className="px-4 py-2">
        {/* Search */}
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Search messages" 
            className="yolo-input w-full pl-10"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        {/* Chat list */}
        <div className="space-y-4">
          {chats.map(chat => (
            <div key={chat.id} className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={chat.avatar} 
                    alt={chat.username} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                {chat.unread && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-black"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{chat.username}</h3>
                  <span className="text-gray-400 text-xs">{chat.time}</span>
                </div>
                <p className={`text-sm ${chat.unread ? 'text-white' : 'text-gray-400'}`}>
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Search = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

export default ChatScreen;
