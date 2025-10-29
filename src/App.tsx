import { useState } from 'react';
import { Cloud } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ErrorMessage } from './components/ErrorMessage';
import { LoadingSpinner } from './components/LoadingSpinner';
import { PopularCities } from './components/PopularCities';
import { SearchHistory } from './components/SearchHistory';
import { WeatherData } from './types/weather';
import { searchCity, getWeatherData } from './services/weatherService';
import { saveSearchToHistory } from './services/searchHistoryService';
import { getBackgroundClass } from './utils/backgroundUtils';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [historyRefresh, setHistoryRefresh] = useState(0);

  const handleSearch = async (cityName: string) => {
    setIsLoading(true);
    setError(null);
    setWeather(null);

    try {
      const cityData = await searchCity(cityName);
      const weatherData = await getWeatherData(
        cityData.latitude,
        cityData.longitude,
        `${cityData.name}, ${cityData.country}`
      );
      setWeather(weatherData);

      await saveSearchToHistory(
        `${cityData.name}, ${cityData.country}`,
        cityData.latitude,
        cityData.longitude
      );
      setHistoryRefresh(prev => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const backgroundClass = weather
    ? getBackgroundClass(weather.weatherCode)
    : 'bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400';

  return (
    <div className={`min-h-screen ${backgroundClass} py-8 px-4 transition-colors duration-1000`}>
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cloud className="text-white" size={48} />
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">Weather Now</h1>
          </div>
          <p className="text-xl text-white/90 font-medium">
            Real-time weather updates for any city worldwide
          </p>
        </header>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {weather && !isLoading && <WeatherCard weather={weather} />}

        {!weather && !isLoading && !error && (
          <>
            <div className="text-center mt-16">
              <div className="text-8xl mb-6">🌍</div>
              <p className="text-2xl text-white font-medium mb-8">
                Enter a city name to get started
              </p>
            </div>
            <SearchHistory
              onCityClick={handleSearch}
              isLoading={isLoading}
              refreshTrigger={historyRefresh}
            />
            <PopularCities onCityClick={handleSearch} isLoading={isLoading} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
