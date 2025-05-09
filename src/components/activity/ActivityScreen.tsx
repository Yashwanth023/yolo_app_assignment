
import React from "react";

interface Activity {
  id: number;
  type: "like" | "follow" | "comment" | "mention";
  username: string;
  avatar: string;
  content: string;
  time: string;
  postImage?: string;
}

const ActivityScreen: React.FC = () => {
  const activities: Activity[] = [
    {
      id: 1,
      type: "like",
      username: "jessica_smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      content: "liked your photo",
      time: "2h ago",
      postImage: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      type: "follow",
      username: "mike_jones",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      content: "started following you",
      time: "3h ago"
    },
    {
      id: 3,
      type: "comment",
      username: "sarah_parker",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3",
      content: "commented: \"Love this shot!\"",
      time: "5h ago",
      postImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      type: "mention",
      username: "david_wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      content: "mentioned you in a comment",
      time: "1d ago"
    },
    {
      id: 5,
      type: "like",
      username: "emily_brown",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      content: "liked your photo",
      time: "2d ago",
      postImage: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="bg-black text-white h-full pb-16">
      <header className="sticky top-0 bg-black z-10 px-4 py-3 border-b border-gray-800">
        <h1 className="text-xl font-bold">Activity</h1>
      </header>

      <div className="p-4">
        <h2 className="text-base font-medium mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map(activity => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src={activity.avatar} 
                  alt={activity.username} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-1">
                <p>
                  <span className="font-medium">{activity.username}</span>{" "}
                  <span className="text-gray-400">{activity.content}</span>{" "}
                  <span className="text-gray-500 text-xs">{activity.time}</span>
                </p>
              </div>
              {activity.postImage && (
                <div className="w-10 h-10 bg-gray-800">
                  <img 
                    src={activity.postImage} 
                    alt="Post" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              {activity.type === "follow" && (
                <button className="px-3 py-1 bg-blue-500 rounded text-sm font-medium">
                  Follow
                </button>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-base font-medium my-4">Suggested For You</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={`suggestion-${i}`} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 15000}?ixlib=rb-4.0.3`}
                    alt={`Suggestion ${i}`}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium">user_{i*100}</p>
                  <p className="text-gray-500 text-xs">Suggested for you</p>
                </div>
              </div>
              <button className="text-blue-500 text-sm font-medium">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityScreen;
