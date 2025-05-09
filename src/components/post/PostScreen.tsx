
import React, { useState } from "react";
import { Image, X, Camera, ChevronDown } from "lucide-react";

const PostScreen: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  const handleImageSelect = () => {
    // In a real app, this would open a file picker
    // For demo purposes, just set a sample image
    setSelectedImage("https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3");
  };

  return (
    <div className="bg-black text-white h-full pb-16">
      <header className="sticky top-0 bg-black z-10 px-4 py-3 border-b border-gray-800 flex justify-between items-center">
        <button>
          <X size={24} />
        </button>
        <h1 className="text-xl font-bold">New Post</h1>
        <button className="text-blue-500 font-medium">Share</button>
      </header>

      <div className="h-full">
        {selectedImage ? (
          <div className="flex flex-col h-full">
            {/* Preview */}
            <div className="relative w-full aspect-square">
              <img 
                src={selectedImage} 
                className="w-full h-full object-cover" 
                alt="Preview" 
              />
              <button 
                className="absolute top-2 right-2 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Caption */}
            <div className="p-4 flex-1">
              <textarea
                className="w-full h-32 bg-transparent border-none resize-none focus:outline-none placeholder-gray-500"
                placeholder="Write a caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              
              {/* Options */}
              <div className="border-t border-gray-800 py-3">
                <button className="flex items-center justify-between w-full">
                  <span>Tag People</span>
                  <ChevronDown size={20} />
                </button>
              </div>
              <div className="border-t border-gray-800 py-3">
                <button className="flex items-center justify-between w-full">
                  <span>Add Location</span>
                  <ChevronDown size={20} />
                </button>
              </div>
              <div className="border-t border-gray-800 py-3">
                <button className="flex items-center justify-between w-full">
                  <span>Also Post To</span>
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 space-y-6">
            <div className="rounded-full bg-gray-800 p-6">
              <Camera size={48} />
            </div>
            <h2 className="text-xl font-bold text-center">Create a new post</h2>
            <p className="text-gray-400 text-center">
              Share photos and videos with your followers
            </p>
            <button 
              className="yolo-button bg-blue-500 px-6"
              onClick={handleImageSelect}
            >
              Select from gallery
            </button>
            <button className="yolo-button bg-transparent border border-gray-600">
              Take a photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostScreen;
