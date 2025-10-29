A sleek and responsive Weather Forecasting Application built with React + TypeScript and styled using Tailwind CSS. It allows users to search real-time weather updates for any city and view detailed forecasts with clean UI design and smooth animations.

🚀 Features
🔍 City Search: Get instant weather details by searching any city.
☁️ Live Weather Data: Displays temperature, humidity, pressure, wind speed, and more.
🕒 Search History: Keeps track of your recent searches for quick access.
🌇 Popular Cities: View weather of top cities instantly.
⚡ Loading & Error States: Clean handling of API loading and error conditions.
📱 Responsive Design: Works perfectly on desktop, tablet, and mobile.
🛠️ Tech Stack
Frontend: React.js + TypeScript
Styling: Tailwind CSS
API: OpenWeatherMap API (or your chosen weather API)
Data Storage: Supabase (for storing search history)
Build Tool: Vite
⚙️ Installation
Clone the repository
git clone https://github.com/Moni-02/WeatherApp.git

Navigate to the project folder
cd WeatherApp

Install dependencies
npm install

Start the development server
npm run dev

🔑 Environment Variables



Create a .env file in the root folder and add your API key:

VITE_WEATHER_API_KEY=your_api_key_here
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
