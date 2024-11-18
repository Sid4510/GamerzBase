import React from "react";
import EventCard from "./EventCard";
import { useEffect,useState } from "react";

export default function EventList() {
  const [eventData, seteventData] = useState([]);
  
  // Fetch news data from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/event/fetchEvents');  // Adjust the URL to your backend
        const result = await response.json();
        if (result.success) {
          seteventData(result.events);
        } else {
          console.error('Failed to fetch news:', result.message);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchEvents();
  }, []);
  return (
    <div className="bg-bggray text-white p-10">
      <h1 className="text-4xl font-bold mb-8">EVENTS</h1>
      <div className="h-[2px] w-full bg-line mb-5"></div>
      {/* Grid container for the event cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {eventData.map((newsItem) => (
      <div key={newsItem._id}>
        {/* Your card content */}
        <EventCard eventData={newsItem}/>
      </div>)
      )}
      </div>
      <div>
        <div className="text-black  text-sm font-semibold min-h-full px-2.5 py-1  rounded-md duration-300 mx-auto relative group w-fit mt-10">
          <button className="bg-line   px-2.5 py-1 rounded-md hover:bg-red-400">LOAD MORE
            </button>

          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-90 transition-transform duration-300 origin-center mt-7"></span>
        </div>
      </div>
    </div>
  );
}
