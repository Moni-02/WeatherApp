export const LoadingSpinner = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-white/50">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
          </div>
          <p className="text-lg font-medium text-gray-700">Fetching weather data...</p>
        </div>
      </div>
    </div>
  );
};
