import { CityCoordinates, GeocodingResult, WeatherData } from '../types/weather';

const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';

export const searchCity = async (cityName: string): Promise<CityCoordinates> => {
  try {
    const response = await fetch(
      `${GEOCODING_API}?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
    );

    if (!response.ok) {
      throw new Error('Unable to connect to geocoding service. Please try again.');
    }

    const data: GeocodingResult = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error(`City "${cityName}" not found. Please check the spelling or try another city.`);
    }

    return data.results[0];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error. Please check your internet connection.');
  }
};

export const getWeatherData = async (
  latitude: number,
  longitude: number,
  cityName: string
): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,wind_direction_10m,weather_code,relative_humidity_2m,apparent_temperature&timezone=auto`
    );

    if (!response.ok) {
      throw new Error('Unable to fetch weather data. Please try again.');
    }

    const data = await response.json();

    return {
      temperature: data.current.temperature_2m,
      windSpeed: data.current.wind_speed_10m,
      windDirection: data.current.wind_direction_10m,
      weatherCode: data.current.weather_code,
      humidity: data.current.relative_humidity_2m,
      feelsLike: data.current.apparent_temperature,
      time: data.current.time,
      city: cityName,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error. Please check your internet connection.');
  }
};
