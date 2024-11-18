const multer = require('multer');

// Set up multer to store files in memory
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,  // Limit file size to 5MB
  },
  fileFilter: (req, file, cb) => {
    // Accept only jpeg and png files
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'), false);
    }
  },
});

module.exports = {
  uploadSingle: upload.single('image'),  // Middleware to handle a single image file
};
