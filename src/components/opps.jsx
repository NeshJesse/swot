// components/Opportunities.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

const Opportunities = ({ 
  opportunities = [], 
  onAddOpportunity, 
  onDeleteOpportunity,
  onBack 
}) => {
  const [currentInput, setCurrentInput] = useState('');
  const [error, setError] = useState('');
  const MAX_LENGTH = 100;
  const MIN_LENGTH = 3;
  const MAX_ITEMS = 10;

  const validateInput = (input) => {
    if (input.length < MIN_LENGTH) {
      return `Opportunity must be at least ${MIN_LENGTH} characters`;
    }
    if (input.length > MAX_LENGTH) {
      return `Opportunity must be less than ${MAX_LENGTH} characters`;
    }
    if (opportunities.length >= MAX_ITEMS) {
      return `Maximum ${MAX_ITEMS} opportunities allowed`;
    }
    if (opportunities.includes(input.trim())) {
      return 'This opportunity has already been added';
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
    onAddOpportunity(currentInput.trim());
    setCurrentInput('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-blue-700">Their Opportunities</h2>
      <div className="space-y-2">
        <div className="space-y-2">
          {opportunities.map((item, i) => (
            <div 
              key={item}
              className="p-2 bg-blue-50 rounded-lg flex justify-between items-center
                        animate-[fadeIn_0.3s_ease-in-out]
                        hover:bg-blue-100 transition-colors"
              style={{
                animation: `fadeIn 0.3s ease-in-out`,
                animationFillMode: 'both',
                animationDelay: `${i * 0.1}s`
              }}
            >
              <span>{item}</span>
              <button
                onClick={() => onDeleteOpportunity(i)}
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Delete opportunity"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                value={currentInput}
                onChange={(e) => {
                  setCurrentInput(e.target.value);
                  setError('');
                }}
                placeholder="Add an opportunity..."
                className={`flex-1 ${error ? 'border-red-500' : ''}`}
                maxLength={MAX_LENGTH}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>
            <Button 
              type="submit"
              disabled={opportunities.length >= MAX_ITEMS}
            >
              Add
            </Button>
          </div>
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>{opportunities.length}/{MAX_ITEMS} opportunities</span>
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

export default Opportunities;