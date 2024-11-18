import React, { useState } from 'react';
import axios from 'axios';

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    details: '',
    information: '',
    date: '', // Add a date property
  });
  const [image, setImage] = useState(null); // To store the uploaded image
  const [success, setSuccess] = useState(false); // To show success message or error
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload (image)
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(null);

    const eventFormData = new FormData();
    eventFormData.append('title', formData.title);
    eventFormData.append('description', formData.description);
    eventFormData.append('details', formData.details);
    eventFormData.append('information', formData.information);
    eventFormData.append('endDate', formData.date); // Append the date to the form data
    if (image) {
      eventFormData.append('image', image); // Append the image to the form data
    }

    try {
      const response = await axios.post('http://localhost:5000/news/addNews', eventFormData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
      });

      if (response.data.success) {
        setSuccess(true); // Set success state to true
        // Reset form after successful submission
        setFormData({
          title: '',
          description: '',
          details: '',
          information: '',
          date: '', // Reset date
        });
        setImage(null); // Reset image
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New News</h2>
      {success && <p className="text-green-500 text-center mb-4">News added successfully!</p>}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Details Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="details">
            Details
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="details"
            id="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>

        {/* Information Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="information">
            Information
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="information"
            id="information"
            value={formData.information}
            onChange={handleChange}
          />
        </div>

        {/* Date Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit News
        </button>
      </form>
    </div>
  );
};

export default AddNews;