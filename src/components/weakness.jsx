// components/Weakness.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

const Weakness = ({ 
  weaknesses = [], 
  onAddWeakness, 
  onDeleteWeakness,
  onBack 
}) => {
  const [currentInput, setCurrentInput] = useState('');
  const [error, setError] = useState('');
  const MAX_LENGTH = 100;
  const MIN_LENGTH = 3;
  const MAX_WEAKNESSES = 10;

  const validateInput = (input) => {
    if (input.length < MIN_LENGTH) {
      return `Weakness must be at least ${MIN_LENGTH} characters`;
    }
    if (input.length > MAX_LENGTH) {
      return `Weakness must be less than ${MAX_LENGTH} characters`;
    }
    if (weaknesses.length >= MAX_WEAKNESSES) {
      return `Maximum ${MAX_WEAKNESSES} weaknesses allowed`;
    }
    if (weaknesses.includes(input.trim())) {
      return 'This weakness has already been added';
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
    onAddWeakness(currentInput.trim());
    setCurrentInput('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-red-700">Their Weaknesses</h2>
      <div className="space-y-2">
        {/* Weaknesses list with animations */}
        <div className="space-y-2">
          {weaknesses.map((item, i) => (
            <div 
              key={item}
              className="p-2 bg-red-50 rounded-lg flex justify-between items-center
                        animate-[fadeIn_0.3s_ease-in-out]
                        hover:bg-red-100 transition-colors"
              style={{
                animation: `fadeIn 0.3s ease-in-out`,
                animationFillMode: 'both',
                animationDelay: `${i * 0.1}s`
              }}
            >
              <span>{item}</span>
              <button
                onClick={() => onDeleteWeakness(i)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Delete weakness"
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
                placeholder="Add a weakness..."
                className={`flex-1 ${error ? 'border-red-500' : ''}`}
                maxLength={MAX_LENGTH}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>
            <Button 
              type="submit"
              disabled={weaknesses.length >= MAX_WEAKNESSES}
            >
              Add
            </Button>
          </div>
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>{weaknesses.length}/{MAX_WEAKNESSES} weaknesses</span>
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

export default Weakness;