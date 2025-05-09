
import React from "react";

interface NewsArticle {
  id: number;
  title: string;
  source: string;
  time: string;
  summary: string;
  imageUrl?: string;
}

const NewsScreen: React.FC = () => {
  // Mock news data
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "New Smart Home Technology Trends for 2025",
      source: "Tech Today",
      time: "2 hours ago",
      summary: "Discover the latest innovations in smart home technology that will transform your living space.",
      imageUrl: "https://images.unsplash.com/photo-1558002038-1055e2cf8a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Stock Markets Show Positive Growth in Q2",
      source: "Finance Daily",
      time: "3 hours ago",
      summary: "Markets around the world are showing signs of recovery and growth in the second quarter."
    },
    {
      id: 3,
      title: "Climate Change: New Research Published",
      source: "Science News",
      time: "5 hours ago",
      summary: "Researchers have published new findings about the effects of climate change on coastal regions."
    },
    {
      id: 4,
      title: "AI Development Makes Breakthrough in Healthcare",
      source: "Tech Insider",
      time: "1 day ago",
      summary: "New AI algorithms are helping doctors diagnose patients more accurately and quickly."
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">News</h1>
      
      <div className="space-y-6">
        {newsArticles.map(article => (
          <article key={article.id} className="modus-card animate-slide-up">
            {article.imageUrl && (
              <div 
                className="h-40 rounded-lg mb-4 bg-cover bg-center" 
                style={{ backgroundImage: `url(${article.imageUrl})` }} 
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <div className="flex text-modus-textSecondary text-sm mb-3">
              <span>{article.source}</span>
              <span className="mx-2">•</span>
              <span>{article.time}</span>
            </div>
            <p className="text-modus-textSecondary">{article.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsScreen;
