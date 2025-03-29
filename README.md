# Travel Assistant Application 🌍✈️

Hello travelers and explorers. I extend my warmest greetings. Please be welcomed to Travel Assistant   —  your gateway to effortless exploration. Experience a world where planning, organizing, and discovering new destinations is seamless and intuitive. No matter where you are, unlock the beauty around you and journey with unparalleled ease.⭐

**Demo Video🎥**: [Watch Here](https://vimeo.com/1070587566/358b938515?ts=0&share=copy)

## How to Access the Application

### 1. Via Load Balancer (Recommended)
**🟢URL**: http://3.92.205.154  
This is the production environment where traffic is distributed between:
- Web Server 1: `3.86.166.160:3000`
- Web Server 2: `54.174.13.108:3000`

### 2. Direct Server Access
Access individual web servers directly:
```bash
# Web Server 1
http://3.86.166.160:3000

# Web Server 2 
http://54.174.13.108:3000

# Domain
jacobel.tech:3000

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
   git clone https://github.com/elohejacs/travel-assistant.git
   cd travel-assistant/server
