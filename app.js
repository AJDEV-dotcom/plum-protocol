const express = require('express');
const path = require('path');

const app = express();
// Heroku or Render will use the PORT environment variable. For local development, we'll use 3000.
const PORT = process.env.PORT || 3000;

// This tells Express to serve all static files (like HTML, CSS, images) from the 'public' folder.
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the services page
app.get('/services.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

// Route for the portfolio page
app.get('/portfolio.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});

// Route for the contact page
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Plum Protocol is live! Open your browser to take a look.');
});

