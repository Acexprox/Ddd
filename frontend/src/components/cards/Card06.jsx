import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, CreditCard } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card06 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-bl from-violet-900 via-purple-900 to-indigo-900 text-white transform hover:scale-105 transition-all duration-500" dir="rtl">
      {/* Minimalist Header */}
      <div className="relative p-8">
        <div className="absolute top-6 left-6">
          <CreditCard className="w-8 h-8 text-violet-300" />
        </div>
        
        <div className="text-left" dir="ltr">
          <Badge variant="secondary" className="bg-violet-500/20 text-violet-200 border-violet-400/30 mb-4">
            Elite
          </Badge>
          <div className="space-y-1">
            <div className="text-xs text-violet-300 uppercase tracking-wider">Digital Card</div>
            <h2 className="text-2xl font-bold text-white">{cardData.title}</h2>
            <p className="text-lg text-violet-200">{cardData.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Card Number Simulation */}
      <div className="px-8 py-4">
        <div className="bg-black/20 rounded-lg p-4 border border-violet-500/20">
          <div className="text-center text-violet-200 text-xs mb-2">رقم البطاقة</div>
          <div className="text-center font-mono text-lg tracking-wider text-white">
            •••• •••• •••• 1234
          </div>
        </div>
      </div>

      {/* Info Sections */}
      <div className="px-8 pb-4 space-y-2">
        <div className="text-xs text-violet-300 border-r-2 border-violet-500 pr-3 py-1">
          {cardData.categories}
        </div>
        <div className="text-xs text-violet-300 border-r-2 border-purple-500 pr-3 py-1">
          {cardData.compatibility}
        </div>
        <div className="text-xs text-violet-300 border-r-2 border-indigo-500 pr-3 py-1">
          {cardData.packages}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-8 pb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="text-center">
              <Shield className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <p className="text-xs text-violet-200">أمان</p>
            </div>
            <div className="text-center">
              <Zap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
              <p className="text-xs text-violet-200">سرعة</p>
            </div>
            <div className="text-center">
              <Star className="w-4 h-4 text-blue-400 mx-auto mb-1" />
              <p className="text-xs text-violet-200">ثقة</p>
            </div>
            <div className="text-center">
              <Award className="w-4 h-4 text-pink-400 mx-auto mb-1" />
              <p className="text-xs text-violet-200">جودة</p>
            </div>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg border border-violet-400/30">
          {cardData.buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default Card06;