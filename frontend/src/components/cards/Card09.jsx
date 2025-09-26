import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Layers } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card09 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl relative bg-white" dir="rtl">
      {/* Layered Geometric Design */}
      <div className="relative h-full">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-200 to-purple-300 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200 to-rose-300 rounded-full transform -translate-x-12 translate-y-12"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-cyan-200 to-blue-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 p-6">
          {/* Floating Header */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg mb-6 border border-white/50">
            <div className="flex justify-between items-start mb-3">
              <Badge variant="outline" className="border-indigo-300 text-indigo-700 bg-indigo-50/80">
                Geometric
              </Badge>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <Layers className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-1">{cardData.title}</h2>
            <p className="text-lg text-indigo-600 font-semibold">{cardData.subtitle}</p>
          </div>

          {/* Stacked Content Cards */}
          <div className="space-y-3 mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border border-indigo-200/50 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-sm text-slate-700">{cardData.categories}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border border-purple-200/50 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-sm text-slate-700">{cardData.compatibility}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border border-pink-200/50 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-sm text-slate-700">{cardData.packages}</p>
            </div>
          </div>

          {/* Circular Features Layout */}
          <div className="relative mb-6 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
            <div className="flex justify-center items-center">
              <div className="relative w-32 h-32">
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                
                {/* Orbiting Feature Circles */}
                <div className="absolute top-0 left-1/2 w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="absolute right-0 top-1/2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-0 left-1/2 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center shadow-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="absolute left-0 top-1/2 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-4 text-center">
              <p className="text-xs text-slate-600">أمان</p>
              <p className="text-xs text-slate-600">سرعة</p>
              <p className="text-xs text-slate-600">ثقة</p>
              <p className="text-xs text-slate-600">جودة</p>
            </div>
          </div>

          {/* Layered Button */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl transform translate-y-2 opacity-30"></div>
            <Button className="relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              {cardData.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Card09;