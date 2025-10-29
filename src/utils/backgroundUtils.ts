export const getBackgroundClass = (weatherCode: number): string => {
  if (weatherCode === 0) {
    return 'bg-gradient-to-br from-amber-300 via-orange-400 to-yellow-500';
  }

  if (weatherCode >= 1 && weatherCode <= 3) {
    return 'bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400';
  }

  if (weatherCode >= 45 && weatherCode <= 48) {
    return 'bg-gradient-to-br from-gray-400 via-gray-500 to-slate-500';
  }

  if (weatherCode >= 51 && weatherCode <= 67) {
    return 'bg-gradient-to-br from-slate-600 via-blue-700 to-gray-700';
  }

  if (weatherCode >= 71 && weatherCode <= 77) {
    return 'bg-gradient-to-br from-slate-300 via-blue-200 to-cyan-200';
  }

  if (weatherCode >= 80 && weatherCode <= 82) {
    return 'bg-gradient-to-br from-slate-600 via-blue-700 to-gray-700';
  }

  if (weatherCode >= 85 && weatherCode <= 86) {
    return 'bg-gradient-to-br from-slate-300 via-blue-200 to-cyan-200';
  }

  if (weatherCode >= 95 && weatherCode <= 99) {
    return 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900';
  }

  return 'bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400';
};
