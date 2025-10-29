import { MapPin } from 'lucide-react';

interface PopularCitiesProps {
  onCityClick: (city: string) => void;
  isLoading: boolean;
}

const popularCities = [
  { name: 'London', flag: '🇬🇧' },
  { name: 'New York', flag: '🇺🇸' },
  { name: 'Tokyo', flag: '🇯🇵' },
  { name: 'Paris', flag: '🇫🇷' },
  { name: 'Sydney', flag: '🇦🇺' },
  { name: 'Dubai', flag: '🇦🇪' },
  { name: 'Mumbai', flag: '🇮🇳' },
  { name: 'Singapore', flag: '🇸🇬' },
];

export const PopularCities = ({ onCityClick, isLoading }: PopularCitiesProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="text-white" size={20} />
        <h3 className="text-lg font-semibold text-white">Popular Cities</h3>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {popularCities.map((city) => (
          <button
            key={city.name}
            onClick={() => onCityClick(city.name)}
            disabled={isLoading}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-white/30 hover:border-white/50 hover:scale-105"
          >
            <span className="mr-2">{city.flag}</span>
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
};
