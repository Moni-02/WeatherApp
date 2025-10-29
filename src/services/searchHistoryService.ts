import { supabase } from '../lib/supabase';

export const saveSearchToHistory = async (
  cityName: string,
  latitude: number,
  longitude: number
) => {
  const { data: existing } = await supabase
    .from('search_history')
    .select('*')
    .eq('city_name', cityName)
    .maybeSingle();

  if (existing) {
    await supabase
      .from('search_history')
      .update({
        search_count: existing.search_count + 1,
        last_searched_at: new Date().toISOString(),
      })
      .eq('id', existing.id);
  } else {
    await supabase.from('search_history').insert({
      city_name: cityName,
      latitude,
      longitude,
    });
  }
};
