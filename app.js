const express = require('express');
const app = express();
const port = 1234;

// In-memory data store for bookings
let bookings = [];

// Middleware to parse JSON requests
app.use(express.json());

// Route to accept hotel bookings
app.post('/book_a_hotel', (req, res) => {
    const booking = req.body;
    bookings.push(booking);
    res.json({response:'Booking received successfully.'});
});

// Route to display bookings on the home page
app.get('/', (req, res) => {
    let html = '<h1>Hotel Bookings</h1>';
    html += '<ul>';
    bookings.forEach((booking, index) => {
        html += `<li>Booking ${index + 1}: ${JSON.stringify(booking)}</li>`;
    });
    html += '</ul>';
    res.send(html);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
