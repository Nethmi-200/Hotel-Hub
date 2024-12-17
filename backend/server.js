const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hotel-booking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Simple route
app.get('/', (req, res) => {
    res.send('Hotel Booking Backend is Running!');
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
