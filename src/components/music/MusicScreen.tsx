
import React, { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

const MusicScreen: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  
  // Mock song data
  const currentSong: Song = {
    id: 1,
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    duration: "4:03",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };
  
  const recentSongs: Song[] = [
    {
      id: 2,
      title: "Starlight",
      artist: "Muse",
      album: "Black Holes and Revelations",
      duration: "4:00",
      cover: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Radioactive",
      artist: "Imagine Dragons",
      album: "Night Visions",
      duration: "3:07",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3"
    }
  ];
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Music</h1>
      
      <div className="modus-card mb-6">
        <div className="flex flex-col items-center">
          <div 
            className="w-48 h-48 rounded-lg mb-4 bg-cover bg-center" 
            style={{ backgroundImage: `url(${currentSong.cover})` }}
          />
          
          <h2 className="text-xl font-semibold">{currentSong.title}</h2>
          <p className="text-modus-textSecondary mb-4">{currentSong.artist}</p>
          
          <div className="w-full mb-4">
            <div className="relative h-1 bg-modus-border rounded-full">
              <div 
                className="absolute h-full bg-modus-accent rounded-full" 
                style={{ width: `${(currentTime / 243) * 100}%` }} 
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-modus-textSecondary">
              <span>0:00</span>
              <span>{currentSong.duration}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <button className="text-modus-textSecondary">
              <SkipBack size={24} />
            </button>
            <button 
              className="w-12 h-12 bg-modus-accent rounded-full flex items-center justify-center"
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="text-modus-textSecondary">
              <SkipForward size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-4">Recently Played</h3>
      <div className="space-y-3">
        {recentSongs.map(song => (
          <div key={song.id} className="modus-card animate-slide-up flex items-center">
            <div 
              className="w-12 h-12 rounded bg-cover bg-center mr-3" 
              style={{ backgroundImage: `url(${song.cover})` }}
            />
            <div className="flex-1">
              <h4 className="font-medium">{song.title}</h4>
              <p className="text-modus-textSecondary text-sm">{song.artist}</p>
            </div>
            <span className="text-modus-textSecondary text-sm">{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicScreen;
