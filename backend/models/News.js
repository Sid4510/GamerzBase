const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: { // Adding the date field
        type: Date,
        required: true,
        default: Date.now // Default to the current date
    },
    description: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    information: { // Fixed typo from "infornation" to "information"
        type: String,
    },
    imageUrl: {
        type: String,
        trim: true,
        default: '',
    }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;