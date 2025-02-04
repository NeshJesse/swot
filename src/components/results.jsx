import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Edit2 } from 'lucide-react';

const SwotResults = ({ 
  data, 
  partnerName,
  onBack,
  onEditSection 
}) => {
  const sections = [
    { 
      title: 'Strengths', 
      items: data.strengths, 
      color: 'green',
      step: 3 
    },
    { 
      title: 'Weaknesses', 
      items: data.weaknesses, 
      color: 'red',
      step: 4 
    },
    { 
      title: 'Opportunities', 
      items: data.opportunities, 
      color: 'blue',
      step: 5 
    },
    { 
      title: 'Threats', 
      items: data.threats, 
      color: 'yellow',
      step: 6 
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">SWOT Analysis Results</h2>
        <p className="text-gray-600">Analysis for {partnerName}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {sections.map(({ title, items, color, step }) => (
          <Card key={title} className={`p-4 bg-${color}-50`}>
            <div className="flex justify-between items-center mb-3">
              <h3 className={`font-bold text-${color}-700`}>{title}</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onEditSection(step)}
                className={`text-${color}-600 hover:text-${color}-700`}
              >
                <Edit2 size={16} />
              </Button>
            </div>
            <div className="space-y-2">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className={`p-2 bg-${color}-100 rounded-lg text-sm`}
                >
                  {item}
                </div>
              ))}
              {items.length === 0 && (
                <p className="text-gray-500 italic">No items added</p>
              )}
            </div>
          </Card>
        ))}
      </div>

      <Button 
        variant="outline" 
        onClick={onBack}
        className="w-full"
      >
        <ChevronLeft className="mr-2" size={16} />
        Back to Overview
      </Button>
    </div>
  );
};

export default SwotResults;