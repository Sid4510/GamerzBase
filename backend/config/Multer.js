const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/uploadImages');

// Define the storage location using Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'events', // Folder in Cloudinary where images will be uploaded
    allowed_formats: ['jpg', 'png', 'jpeg'], // Allowed image formats
  },
});

const upload = multer({ storage });

module.exports = upload;
