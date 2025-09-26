import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card03 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 border-0 shadow-2xl hover:shadow-rose-200/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1" dir="rtl">
      {/* Floating Header */}
      <div className="relative p-6">
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full shadow-xl flex items-center justify-center">
          <Star className="w-8 h-8 text-white" />
        </div>
        
        <div className="pt-8">
          <Badge variant="outline" className="border-rose-300 text-rose-700 bg-rose-100 mb-4">
            Exclusive
          </Badge>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">{cardData.title}</h2>
          <p className="text-lg text-rose-600 font-semibold">{cardData.subtitle}</p>
        </div>
      </div>

      {/* Diagonal Content Layout */}
      <div className="relative px-6 pb-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-rose-200/50">
          <div className="space-y-3 mb-5">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700">{cardData.categories}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700">{cardData.compatibility}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-fuchsia-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700">{cardData.packages}</p>
            </div>
          </div>

          {/* Curved Features Section */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl p-3 text-center">
              <Shield className="w-5 h-5 text-rose-600 mx-auto mb-1" />
              <p className="text-xs text-rose-700 font-medium">أمان</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-200 rounded-xl p-3 text-center">
              <Zap className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <p className="text-xs text-amber-700 font-medium">سرعة</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-3 text-center">
              <Star className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <p className="text-xs text-blue-700 font-medium">ثقة</p>
            </div>
            <div className="bg-gradient-to-br from-violet-100 to-purple-200 rounded-xl p-3 text-center">
              <Award className="w-5 h-5 text-violet-600 mx-auto mb-1" />
              <p className="text-xs text-violet-700 font-medium">جودة</p>
            </div>
          </div>

          {/* Rounded Button */}
          <Button className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-600 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-rose-500/30">
            {cardData.buttonText}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card03;