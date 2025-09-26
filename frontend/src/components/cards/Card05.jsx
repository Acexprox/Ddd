import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card05 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl hover:shadow-amber-200/50 transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" dir="rtl">
      {/* Organic Shapes Header */}
      <div className="relative p-6 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-gradient-to-br from-yellow-300/30 to-amber-300/30 rounded-full blur-lg"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <Badge variant="outline" className="border-amber-400 text-amber-700 bg-amber-100/50 backdrop-blur-sm">
              Golden
            </Badge>
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white transform -rotate-12" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-800">{cardData.title}</h2>
            <p className="text-xl text-amber-600 font-semibold">{cardData.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Curved Content Sections */}
      <div className="px-6 pb-6 space-y-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-5 border border-amber-200/50 shadow-inner">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-4">
              <p className="text-sm text-slate-700 font-medium text-center">{cardData.categories}</p>
            </div>
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-4">
              <p className="text-sm text-slate-700 font-medium text-center">{cardData.compatibility}</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4">
              <p className="text-sm text-slate-700 font-medium text-center">{cardData.packages}</p>
            </div>
          </div>
        </div>

        {/* Organic Features Layout */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl p-4 text-center transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <p className="text-sm text-emerald-700 font-semibold">أمان</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-amber-200 rounded-2xl p-4 text-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <Zap className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm text-yellow-700 font-semibold">سرعة</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-sky-200 rounded-2xl p-4 text-center transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-blue-700 font-semibold">ثقة</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-violet-200 rounded-2xl p-4 text-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-purple-700 font-semibold">جودة</p>
            </div>
          </div>
        </div>

        {/* Organic Button */}
        <div className="pt-2">
          <Button className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white font-bold py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/30 relative overflow-hidden">
            <span className="relative z-10">{cardData.buttonText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card05;