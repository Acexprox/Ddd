import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Leaf } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card12 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative" dir="rtl">
      {/* Nature/Organic Design */}
      <div className="relative h-full">
        {/* Organic Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-green-200/40 to-emerald-300/40 rounded-full blur-2xl transform rotate-45"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-teal-200/40 to-cyan-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-lime-200/50 to-green-300/50 rounded-full blur-xl transform rotate-12"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Organic Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-green-200/50 shadow-lg">
              <Leaf className="w-5 h-5 text-green-600" />
              <Badge variant="outline" className="border-green-400 text-green-700 bg-green-100/70">
                Organic
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold text-slate-800 mb-2">{cardData.title}</h2>
            <p className="text-xl text-green-600 font-semibold">{cardData.subtitle}</p>
          </div>

          {/* Leaf-shaped Content Sections */}
          <div className="space-y-4 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-4 border border-green-200/50 shadow-lg transform hover:scale-105 transition-all duration-300">
              <p className="text-sm text-slate-700 text-center font-medium">{cardData.categories}</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-4 border border-emerald-200/50 shadow-lg transform hover:scale-105 transition-all duration-300 ml-4">
              <p className="text-sm text-slate-700 text-center font-medium">{cardData.compatibility}</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-4 border border-teal-200/50 shadow-lg transform hover:scale-105 transition-all duration-300">
              <p className="text-sm text-slate-700 text-center font-medium">{cardData.packages}</p>
            </div>
          </div>

          {/* Petal Features Layout */}
          <div className="relative mb-8">
            <div className="flex justify-center">
              <div className="relative w-40 h-40">
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                
                {/* Petals */}
                <div className="absolute top-0 left-1/2 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full transform -translate-x-1/2 -translate-y-4 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="absolute right-0 top-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full transform translate-x-4 -translate-y-1/2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full transform -translate-x-1/2 translate-y-4 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute left-0 top-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full transform -translate-x-4 -translate-y-1/2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-6 text-center">
              <p className="text-xs text-slate-600 font-medium">أمان</p>
              <p className="text-xs text-slate-600 font-medium">سرعة</p>
              <p className="text-xs text-slate-600 font-medium">ثقة</p>
              <p className="text-xs text-slate-600 font-medium">جودة</p>
            </div>
          </div>

          {/* Natural Button */}
          <Button className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-bold py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/25 relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Leaf className="w-5 h-5" />
              {cardData.buttonText}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card12;