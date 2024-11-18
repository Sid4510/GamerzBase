import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './common/Navbar'
import Footer from './common/Footer'

export default function NewsDetails() {
  const { id } = useParams(); 
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/news/getNewsDetails/${id}`);
        const result = await response.json();

        if (result.success) {
          setNewsItem(result.news);
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError('Error fetching news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl text-gray-400">Loading news details...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500">{error}</p>;
  }

  if (!newsItem) {
    return <p className="text-center text-xl text-gray-400">No news found.</p>;
  }

  return (
    <div> 
      <Navbar />   
      <div className="bg-gray-800 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-72">
          <img
            src={newsItem.imageUrl || '/defaultImage.png'}
            alt={newsItem.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay */}
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-bold">{newsItem.title}</h1>
          <p className="text-lg mt-2">{newsItem.description}</p>
          <div className="text-gray-400 text-sm mt-4">
          <p>Published: {new Date(newsItem.date).toLocaleDateString()}</p> {/* Displaying date */}
          
          </div>
          <h2 className="text-2xl font-semibold mt-6">Details</h2>
          <p className="text-gray-300 mt-2">{newsItem.details}</p>
          <h3 className="text-xl font-semibold mt-6">More Information</h3>
          <p className="text-gray-300 mt-2">{newsItem.information}</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>

  );
}