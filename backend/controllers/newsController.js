const News = require('../models/News');  // Your News model
const cloudinary = require('../utils/uploadImages'); // Correct Cloudinary import
const fs = require('fs');  // To handle temporary file removal
const mongoose = require('mongoose');

// Create News
const createNews = async (req, res) => {
    try {
        const { title, description, endDate, details, information } = req.body;
        let imageUrl = null;

        // Handle image upload to Cloudinary
        if (req.file) {
            try {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageUrl = result.secure_url;

                // Remove the file from the local server after upload
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Error removing temporary file:', err);
                    }
                });
            } catch (uploadError) {
                console.error('Cloudinary upload error:', uploadError);
                return res.status(500).json({ success: false, message: 'Failed to upload image' });
            }
        }

        // Create a new News
        const news = new News({
            title,
            description,
            details,
            information,
            imageUrl,
            date: endDate ? new Date(endDate) : Date.now(), // Use endDate if provided, otherwise set to now
        });

        await news.save();

        res.status(201).json({ success: true, news });
    } catch (err) {
        console.error('Error creating news:', err);
        res.status(500).json({ success: false, message: 'Failed to create news' });
    }
};

// Fetch News
const getNews = async (req, res) => {
    try {
        const news = await News.find();  // Fetch all news from the database
        res.status(200).json({ success: true, news });
    } catch (err) {
        console.error('Error fetching news:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch news' });
    }
};

const getNewsDetails = async (req, res) => {
    const id = req.params.id; 
    console.log('Fetching news with ID:', id);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: 'Invalid news ID format' });
    }

    try {
        const news = await News.findOne({ _id: id });
        if (!news) {
            return res.status(404).json({ success: false, message: 'News not found' });
        }
        res.status(200).json({ success: true, news });
    } catch (err) {
        console.error('Error fetching news:', err); 
        res.status(500).json({ success: false, message: 'Failed to fetch news' });
    }
};

module.exports = {
    createNews,
    getNews,
    getNewsDetails
};