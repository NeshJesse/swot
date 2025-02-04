"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Strengths  from '@/components/strength';
import Weakness from '@/components/weakness';
import Opportunities from '@/components/opps';
import Threats from '@/components/threats';
import SwotResults from '@/components/results';

import { Heart, ChevronRight, Sparkles } from 'lucide-react';

export default function Home  () {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    userGender: '',
    partnerName: '',
    swot: {
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: []
    }
  });

  const [currentInput, setCurrentInput] = useState('');

  const handleGenderSelect = (gender) => {
    setData({ ...data, userGender: gender });
    setStep(1);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (currentInput.trim()) {
      setData({ ...data, partnerName: currentInput });
      setCurrentInput('');
      setStep(2);
    }
  };

  const addSWOTItem = (category) => {
    if (currentInput.trim()) {
      setData({
        ...data,
        swot: {
          ...data.swot,
          [category]: [...data.swot[category], currentInput]
        }
      });
      setCurrentInput('');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <Heart className="h-16 w-16 text-pink-500" />
            </div>
            <h2 className="text-2xl font-bold">Welcome to BaeSWOT!</h2>
            <p className="text-gray-600">Let's analyze your relationship in a fun way!</p>
            <div className="space-y-2">
              <Button 
                className="w-full"
                onClick={() => handleGenderSelect('male')}
              >
                I'm analyzing my boyfriend
              </Button>
              <Button 
                className="w-full"
                onClick={() => handleGenderSelect('female')}
              >
                I'm analyzing my girlfriend
              </Button>
              <Button
              className="w-full"
              onClick={() => handleGenderSelect('female')}
              >

                Scouting a potential partner
              </Button>
            </div>
          </div>
        );

      case 1:
        return (
          <form onSubmit={handleNameSubmit} className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">What's their name?</h2>
              <p className="text-gray-600">Let's make this personal!</p>
            </div>
            <Input
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Enter their name"
              className="text-center text-lg"
              autoFocus
            />
            <Button type="submit" className="w-full">
              Continue <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-bold">Tell us about {data.partnerName}!</h2>
              <p className="text-gray-600">Quick! What comes to mind?</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-green-50 hover:bg-green-100 cursor-pointer transition"
                onClick={() => setStep(3)}>
                <h3 className="font-bold text-green-700">Strengths</h3>
                <p className="text-sm text-green-600">What makes them amazing?</p>
              </Card>
              <Card className="p-4 bg-red-50 hover:bg-red-100 cursor-pointer transition"
                onClick={() => setStep(4)}>
                <h3 className="font-bold text-red-700">Weaknesses</h3>
                <p className="text-sm text-red-600">Areas for growth?</p>
              </Card>
              <Card className="p-4 bg-blue-50 hover:bg-blue-100 cursor-pointer transition"
                onClick={() => setStep(5)}>
                <h3 className="font-bold text-blue-700">Opportunities</h3>
                <p className="text-sm text-blue-600">Future potential?</p>
              </Card>
              <Card className="p-4 bg-yellow-50 hover:bg-yellow-100 cursor-pointer transition"
                onClick={() => setStep(6)}>
                <h3 className="font-bold text-yellow-700">Threats</h3>
                <p className="text-sm text-yellow-600">What worries you?</p>
              </Card>
              <Button onClick={() => setStep(7)}>View Analysis Results</Button>
            </div>
          </div>
        );

      case 3:
        return (
          <Strengths
          strengths={data.swot.strengths}
          onAddStrength={(strength) => {
            setData({
              ...data,
              swot: {
                ...data.swot,
                strengths: [...data.swot.strengths, strength]
              }
            });
          }}
          onDeleteStrength={(index) => {
            setData({
              ...data,
              swot: {
                ...data.swot,
                strengths: data.swot.strengths.filter((_, i) => i !== index)
              }
            });
          }}
          onBack={() => setStep(2)}
        />
  
        );
      case 4:
        return (
          <Weakness
              weaknesses={data.swot.weaknesses}
              onAddWeakness={(weakness) => {
                setData({
                  ...data,
                  swot: {
                    ...data.swot,
                    weaknesses: [...data.swot.weaknesses, weakness]
                  }
                });
              }}
              onDeleteWeakness={(index) => {
                setData({
                  ...data,
                  swot: {
                    ...data.swot,
                    weaknesses: data.swot.weaknesses.filter((_, i) => i !== index)
                  }
                });
              }}
              onBack={() => setStep(2)}
          />
        );
      case 5:
          return (
                <Opportunities
                      opportunities={data.swot.opportunities}
                      onAddOpportunity={(opportunity) => {
                          setData({
          ...data,
          swot: {
            ...data.swot,
            opportunities: [...data.swot.opportunities, opportunity]
          }
        });
      }}
      onDeleteOpportunity={(index) => {
        setData({
          ...data,
          swot: {
            ...data.swot,
            opportunities: data.swot.opportunities.filter((_, i) => i !== index)
          }
        });
      }}
      onBack={() => setStep(2)}
    />
  );

case 6:
  return (
    <Threats
      threats={data.swot.threats}
      onAddThreat={(threat) => {
        setData({
          ...data,
          swot: {
            ...data.swot,
            threats: [...data.swot.threats, threat]
          }
        });
      }}
      onDeleteThreat={(index) => {
        setData({
          ...data,
          swot: {
            ...data.swot,
            threats: data.swot.threats.filter((_, i) => i !== index)
          }
        });
      }}
      onBack={() => setStep(2)}
    />
  ); 
case 7:
  return(
    <>
      <SwotResults
      data={data.swot}
      partnerName={data.partnerName}
      onBack={() => setStep(2)}
      onEditSection={(step) => setStep(step)}
    />
  
  </>
  );
        
        
  }
  
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        {renderStep()}
      </CardContent>
    </Card>
  );
};
