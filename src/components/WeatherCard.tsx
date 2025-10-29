import { Wind, Navigation, Calendar, Droplets, Thermometer } from 'lucide-react';
import { WeatherData } from '../types/weather';
import { getWeatherIcon, getWeatherDescription, getWindDirection } from '../utils/weatherUtils';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  const weatherIcon = getWeatherIcon(weather.weatherCode);
  const weatherDesc = getWeatherDescription(weather.weatherCode);
  const windDir = getWindDirection(weather.windDirection);
  const formattedDate = new Date(weather.time).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/50">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{weather.city}</h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Calendar size={16} />
            <p className="text-sm">{formattedDate}</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-8xl mb-4">{weatherIcon}</div>
          <p className="text-2xl font-semibold text-gray-700 mb-2">{weatherDesc}</p>
          <div className="text-6xl font-bold text-gray-900">
            {Math.round(weather.temperature)}°C
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Wind className="text-blue-600" size={20} />
              <h3 className="text-sm font-semibold text-gray-700">Wind Speed</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">{weather.windSpeed} km/h</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Navigation className="text-emerald-600" size={20} />
              <h3 className="text-sm font-semibold text-gray-700">Direction</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {windDir} ({weather.windDirection}°)
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="text-violet-600" size={20} />
              <h3 className="text-sm font-semibold text-gray-700">Humidity</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">{weather.humidity}%</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 border border-orange-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Thermometer className="text-orange-600" size={20} />
              <h3 className="text-sm font-semibold text-gray-700">Feels Like</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">{Math.round(weather.feelsLike)}°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};
