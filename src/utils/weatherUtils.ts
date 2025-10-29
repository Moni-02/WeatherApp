export const getWeatherIcon = (weatherCode: number): string => {
  if (weatherCode === 0) return '☀️';
  if (weatherCode >= 1 && weatherCode <= 3) return '⛅';
  if (weatherCode >= 45 && weatherCode <= 48) return '🌫️';
  if (weatherCode >= 51 && weatherCode <= 67) return '🌧️';
  if (weatherCode >= 71 && weatherCode <= 77) return '❄️';
  if (weatherCode >= 80 && weatherCode <= 82) return '🌧️';
  if (weatherCode >= 85 && weatherCode <= 86) return '❄️';
  if (weatherCode >= 95 && weatherCode <= 99) return '⛈️';
  return '☁️';
};

export const getWeatherDescription = (weatherCode: number): string => {
  if (weatherCode === 0) return 'Clear sky';
  if (weatherCode === 1) return 'Mainly clear';
  if (weatherCode === 2) return 'Partly cloudy';
  if (weatherCode === 3) return 'Overcast';
  if (weatherCode >= 45 && weatherCode <= 48) return 'Foggy';
  if (weatherCode >= 51 && weatherCode <= 55) return 'Drizzle';
  if (weatherCode >= 61 && weatherCode <= 65) return 'Rain';
  if (weatherCode >= 71 && weatherCode <= 77) return 'Snow';
  if (weatherCode >= 80 && weatherCode <= 82) return 'Rain showers';
  if (weatherCode >= 85 && weatherCode <= 86) return 'Snow showers';
  if (weatherCode >= 95 && weatherCode <= 99) return 'Thunderstorm';
  return 'Unknown';
};

export const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
};
