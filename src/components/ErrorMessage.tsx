import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fade-in">
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-4">
        <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
        <div>
          <h3 className="text-lg font-semibold text-red-900 mb-1">Error</h3>
          <p className="text-red-700">{message}</p>
        </div>
      </div>
    </div>
  );
};
