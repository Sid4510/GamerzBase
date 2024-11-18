const express = require('express');
const router = express.Router();
const {createEvent,getEvents,getEventDetails} = require('../controllers/eventController');
const upload =require('../config/Multer')


router.post('/addEvent',upload.single('image'),createEvent);
router.get('/fetchEvents', getEvents);

router.get('/getEventDetails/:id',getEventDetails)

// // Get all events
// router.get('/events', eventController.getEvents);

// // Like an event
// router.post('/events/:eventId/like', eventController.likeEvent);

module.exports = router;
