// components/Strengths.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

const Strengths = ({ 
  strengths = [], 
  onAddStrength, 
  onDeleteStrength,
  onBack 
}) => {
  const [currentInput, setCurrentInput] = useState('');
  const [error, setError] = useState('');
  const MAX_LENGTH = 100;
  const MIN_LENGTH = 3;
  const MAX_STRENGTHS = 10;

  const validateInput = (input) => {
    if (input.length < MIN_LENGTH) {
      return `Strength must be at least ${MIN_LENGTH} characters`;
    }
    if (input.length > MAX_LENGTH) {
      return `Strength must be less than ${MAX_LENGTH} characters`;
    }
    if (strengths.length >= MAX_STRENGTHS) {
      return `Maximum ${MAX_STRENGTHS} strengths allowed`;
    }
    if (strengths.includes(input.trim())) {
      return 'This strength has already been added';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateInput(currentInput);
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError('');
    onAddStrength(currentInput.trim());
    setCurrentInput('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-green-700">Their Strengths</h2>
      <div className="space-y-2">
        {/* Strengths list with animations */}
        <div className="space-y-2">
          {strengths.map((item, i) => (
            <div 
              key={item}
              className="p-2 bg-green-50 rounded-lg flex justify-between items-center
                        animate-[fadeIn_0.3s_ease-in-out]
                        hover:bg-green-100 transition-colors"
              style={{
                animation: `fadeIn 0.3s ease-in-out`,
                animationFillMode: 'both',
                animationDelay: `${i * 0.1}s`
              }}
            >
              <span>{item}</span>
              <button
                onClick={() => onDeleteStrength(i)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Delete strength"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                value={currentInput}
                onChange={(e) => {
                  setCurrentInput(e.target.value);
                  setError('');
                }}
                placeholder="Add a strength..."
                className={`flex-1 ${error ? 'border-red-500' : ''}`}
                maxLength={MAX_LENGTH}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>
            <Button 
              type="submit"
              disabled={strengths.length >= MAX_STRENGTHS}
            >
              Add
            </Button>
          </div>
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>{strengths.length}/{MAX_STRENGTHS} strengths</span>
            <span>{currentInput.length}/{MAX_LENGTH} characters</span>
          </div>
        </form>

        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={onBack}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default Strengths;

// Add this to your global CSS file
