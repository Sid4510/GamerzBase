import React, { useState, useEffect } from 'react';
import NewsCard from "../components/NewsCard";


export default function NewsPage() {
  const [userId, setUserId] = useState(null)
  const [newsData, setNewsData] = useState([]);
  
  // Fetch news data from the backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/news/fetchnews');  // Adjust the URL to your backend
        const result = await response.json();
        if (result.success) {
          setNewsData(result.news);
        } else {
          console.error('Failed to fetch news:', result.message);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [userId]);
  return (
    
    <div className="bg-backscreen text-white p-10">
      <h1 className="text-4xl font-bold mb-8">NEWS</h1>

      {/* Grid container for the event cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {newsData.map((newsItem) => (
      <div
        key={newsItem._id} // Ensure this is unique for each news item
        className="max-w-md mx-auto object-cover object-center bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-102"
        style={{ width: '350px', height: '500px' }}
      >
        {/* Your card content */}
        <NewsCard newsData={newsItem}/>
      </div>
    ))}
    
       
      </div>
    </div>
  );
}