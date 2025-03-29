# Travel Assistant Application 🌍✈️

A web application that helps users plan trips by providing real-time weather forecasts, currency exchange rates, packing suggestions, and local attractions using external APIs.

**Demo Video**: [Watch Here](https://vimeo.com/1070587566/358b938515?ts=0&share=copy)

## Features
- 🌦️ **Weather Forecasts**: 5-day weather predictions with temperature and conditions
- 💱 **Currency Conversion**: Real-time USD to EUR exchange rates
- 🧳 **Packing Suggestions**: AI-generated packing lists based on weather conditions
- 🏛️ **Local Attractions**: Top 5 tourist attractions near the destination
- ⚖️ **Load Balanced Deployment**: Distributed across 2 web servers

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **APIs**:
  - [OpenWeatherMap](https://openweathermap.org/api) - Weather data
  - [ExchangeRate-API](https://www.exchangerate-api.com) - Currency conversion
  - [Google Places API via RapidAPI](https://rapidapi.com/letscrape-6bRBa3EguV/api/google-map-places-new-v2) - Local attractions
- **Infrastructure**: AWS EC2, NGINX (Load Balancer)

## Structure
travel-assistant/
├── public/ # Frontend files
│ ├── index.html # Main HTML template
│ ├── styles.css # CSS styling
│ └── app.js # Frontend JavaScript (API calls, DOM manipulation)
│
├── server/ # Backend files
│ ├── index.js # Express server and API routes
│ ├── package.json # Node.js dependencies
│ └── .env # Environment variables (API keys) - NOT COMMITTED
│
├── .gitignore # Specifies files to exclude from Git
└── README.md # Project documentation (this file)

## Setup Instructions

### Prerequisites
- Node.js v16+
- API keys for:
  - OpenWeatherMap
  - ExchangeRate-API
  - Google Places API (via RapidAPI)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/travel-assistant.git
   cd travel-assistant/server
