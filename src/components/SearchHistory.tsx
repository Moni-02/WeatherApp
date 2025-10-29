import { History, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface SearchHistoryItem {
  id: string;
  city_name: string;
  search_count: number;
  last_searched_at: string;
}

interface SearchHistoryProps {
  onCityClick: (city: string) => void;
  isLoading: boolean;
  refreshTrigger: number;
}

export const SearchHistory = ({ onCityClick, isLoading, refreshTrigger }: SearchHistoryProps) => {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);

  useEffect(() => {
    loadHistory();
  }, [refreshTrigger]);

  const loadHistory = async () => {
    const { data, error } = await supabase
      .from('search_history')
      .select('*')
      .order('last_searched_at', { ascending: false })
      .limit(5);

    if (!error && data) {
      setHistory(data);
    }
  };

  const clearHistory = async () => {
    const { error } = await supabase.from('search_history').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    if (!error) {
      setHistory([]);
    }
  };

  if (history.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <History className="text-white" size={20} />
          <h3 className="text-lg font-semibold text-white">Recent Searches</h3>
        </div>
        <button
          onClick={clearHistory}
          className="text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors"
        >
          <X size={16} />
          Clear
        </button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {history.map((item) => (
          <button
            key={item.id}
            onClick={() => onCityClick(item.city_name)}
            disabled={isLoading}
            className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hover:border-white/40"
          >
            {item.city_name}
            {item.search_count > 1 && (
              <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                {item.search_count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
