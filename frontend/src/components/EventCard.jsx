import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({eventData}) {
  const formattedEndDate = new Date(eventData.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-new text-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-102 " style={{ width: "320px", height: "450px" }}>
      <div className="relative">
        {/* Image */}
        <img
          src={eventData.imageUrl}
          alt="Valorant player silhouette"
          className="w-full h-48 object-cover object-center transition-transform duration-300 ease-in-out"
          
        />
        {/* Red overlay on hover */}
        <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-50"></div>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-400 mb-2">Last date:{formattedEndDate}</p>
        <h2 className="text-xl font-semibold mb-2">
          {eventData.description}
        </h2>
        <p className="text-gray-400 mb-4 ">
          Tournament match-ups, format, schedule, and more!
        </p>

        <div className="group relative mt-5 max-w-fit mx-auto">
          <Link
            to={`/Event/${eventData._id}`}
            className="text-line text-sm font-semibold min-h-fit px-2.5 py-1 rounded-md duration-300"
          >
            READ MORE...
          </Link>
          {/* Underline effect */}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </div>
      </div>
    </div>
  );
}
