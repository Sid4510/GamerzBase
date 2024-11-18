import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NewsCard({newsData}) {
  // const navigate = useNavigate();
  // const handleCardClick = () => {
    
  //     navigate(/news/${newsData._id}); // Navigate to skill details page with skill ID
  //   };
  
  return (
    <div>
       <Link to={`/news/${newsData._id}`}>
          <div
            key={newsData._id}
            className="max-w-md mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-102"
            style={{ width: '350px', height: '500px' }}
            //onClick={handleCardClick}
          >
            <div className="relative">
              {/* Image */}
              <img
                src={newsData.imageUrl || '/defaultImage.png'}  // Display default image if no image URL is available
                alt={newsData.title}
                className="w-full h-48 object-cover object-center transition-transform duration-300 ease-in-out"
                style={{ width: '400px', height: '300px' }}
              />
              {/* Red overlay on hover */}
              <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-50"></div>
            </div>
            {/* Centered content */}
            <div className="p-4 flex flex-col justify-center items-center">
              <h3 className="p-2 text-xl font-bold text-white leading-tight text-center">
                {newsData.title}
              </h3>
              <p className="text-sm text-gray-300 text-center mt-2">
                {newsData.description}
              </p>
              <p className="text-xs text-gray-400 mt-2">
              Published: {new Date(newsData.date).toLocaleDateString()} {/* Displaying date */}
            </p>
            </div>
          </div>
          </Link>
      
       : (
        <p className="text-white text-center">Loading news...</p>
      )
    </div>
  );
}