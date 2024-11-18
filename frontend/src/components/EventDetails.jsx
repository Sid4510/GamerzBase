import React, { useState, useEffect } from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import { handleSuccess } from '../utils/handleMsg';


export default function EventDetails() {
  const { id } = useParams(); 
  const [EventItem, setEventItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const Navigate = useNavigate();

  const handleRegister = ()=>{
    handleSuccess("Registered for the event");
    Navigate("/Event");
  }

  useEffect(() => {
    const fetchEventDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/Event/getEventDetails/${id}`);
        const data = await response.json();
        console.log('API Response:', data);

        if (data.success) {
          setEventItem(data.events);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error('Fetch Error:', error);
        setError('Error fetching Event. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!EventItem) {
    return <div>No event found.</div>;
  }

  // Format the endDate
  const formattedEndDate = new Date(EventItem.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-card text-white min-h-screen">
      {/* Event Cover Image */}
      <div className="relative mx-36">
        {/* Uncomment and use if you have an imageUrl */}
        <img
          src={EventItem.imageUrl} // Static image path from the hardcoded data
          alt="Event Cover"
          className="w-full object-cover"
        /> 
        <div className="inset-0 bg-card opacity-50"></div>
      </div>

      {/* Event Content Section */}
      <div className="container mx-auto px-52 pt-4">
        <div className="bottom-10 left-10">
          <h1 className="text-6xl font-bold pt-4">
            {EventItem.title}
          </h1>
          <p className="text-lg mt-2">{EventItem.description}</p>
        </div>

        <h2 className="text-3xl font-semibold mb-6">OVERVIEW OF THE EVENT</h2>
        <p className="text-gray-300 mb-4">{EventItem.details}</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">LAST DATE TO REGISTER</h3>
        <p className="text-gray-300 mb-4">{formattedEndDate}</p> {/* Display formatted date */}

        <div>
        <div className="text-black  text-sm font-semibold min-h-full px-2.5 py-1  rounded-md duration-300 mx-auto relative group w-fit mt-10">
          <button className="bg-line   px-2.5 py-1 rounded-md hover:bg-red-400" onClick={handleRegister}>Register
            </button>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-90 transition-transform duration-300 origin-center mt-7"></span>
        </div>
      </div>
      </div>
    </div>
  );
}
