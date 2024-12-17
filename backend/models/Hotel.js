const mongoose = require('mongoose');

// Define the schema for a Hotel
const HotelSchema = new mongoose.Schema({
    name: String,
    location: String,
    price: Number,
    facilities: [String],
});

// Export the model for use in other parts of the application
module.exports = mongoose.model('Hotel', HotelSchema);
