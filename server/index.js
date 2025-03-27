const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// Debug: Log the path to the public directory
const publicPath = path.join(__dirname, '../public');
console.log('[DEBUG] Static files path:', publicPath); 

// Middleware to serve static files (HTML/CSS/JS)
app.use(express.static(publicPath));

// Enable CORS (for frontend-backend communication)
app.use(cors());

// Proxy weather data
app.get('/api/weather', async (req, res) => {
  try {
    const { city, date } = req.query;
    console.log('[DEBUG] Weather API call:', city, date); 
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API_KEY}`
    );
    const weather = response.data.list.filter(entry => entry.dt_txt.includes(date));
    res.json(weather[0]);
  } catch (error) {
    console.error('[ERROR] Weather API failed:', error.message); 
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

// Proxy currency conversion
app.get('/api/currency', async (req, res) => {
  try {
    const { base, target } = req.query;
    console.log('[DEBUG] Currency API call:', base, target); 
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_API_KEY}/pair/${base}/${target}`
    );
    res.json({ rate: response.data.conversion_rate });
  } catch (error) {
    console.error('[ERROR] Currency API failed:', error.message); 
    res.status(500).json({ error: 'Failed to fetch currency data' });
  }
});

// Fallback route to serve index.html
app.get('*', (req, res) => { // <-- Add this block
  console.log('[DEBUG] Serving index.html for unknown route:', req.path);
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Start server on all network interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`[INFO] Server running on http://0.0.0.0:${port}`);
});