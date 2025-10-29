export interface WeatherData {
  temperature: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
  humidity: number;
  feelsLike: number;
  time: string;
  city: string;
}

export interface CityCoordinates {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}

export interface GeocodingResult {
  results?: CityCoordinates[];
}
