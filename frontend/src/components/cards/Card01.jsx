import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card01 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white border-0 shadow-2xl hover:shadow-slate-500/25 transition-all duration-500 transform hover:scale-105" dir="rtl">
      {/* Header with gradient overlay */}
      <div className="relative p-6 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-b border-slate-600/50">
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-blue-500/80 text-white border-0">
            Premium
          </Badge>
        </div>
        
        <div className="text-center pt-4">
          <h2 className="text-2xl font-bold mb-2 text-blue-100">{cardData.title}</h2>
          <p className="text-lg text-blue-200 font-medium">{cardData.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <div className="text-sm text-slate-300 leading-relaxed">
            <p className="mb-2">{cardData.categories}</p>
            <p className="mb-2">{cardData.compatibility}</p>
            <p>{cardData.packages}</p>
          </div>
        </div>

        {/* Features Icons */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Shield className="w-4 h-4 text-green-400" />
            <span>أمان</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>سرعة</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Star className="w-4 h-4 text-blue-400" />
            <span>ثقة</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Award className="w-4 h-4 text-purple-400" />
            <span>جودة</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            {cardData.buttonText}
          </Button>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
    </Card>
  );
};

export default Card01;