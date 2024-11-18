import React from "react";
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import { Link, useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleAddEvent = () => {
    // Handle navigation or logic for adding an event
    navigate('/addevent');
  };

  const handleAddNews = () => {
    // Handle navigation or logic for adding news
    navigate('/addnews');
  };

  return (
    <div >
      <Navbar/>
      <div className="bg-backscreen px-10 py-5">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="button-group">
          <button
            className="bg-line hover:bg-blue-500 text-backscreen font-bold py-2 px-4 rounded m-2"
            onClick={handleAddEvent}
          >
            Add Event
          </button>
          <button
            className="bg-line hover:bg-blue-500 text-backscreen font-bold py-2 px-4 rounded m-2"
            onClick={handleAddNews}
          >
            Add News
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AdminPage;