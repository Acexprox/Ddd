import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Palette } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card13 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-white relative" dir="rtl">
      {/* Paintbrush/Artist Design */}
      <div className="relative h-full">
        {/* Paint Splash Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 right-12 w-20 h-20 bg-gradient-to-br from-purple-400/60 to-pink-500/60 rounded-full transform rotate-45 blur-lg"></div>
          <div className="absolute top-16 left-8 w-16 h-16 bg-gradient-to-br from-blue-400/60 to-cyan-500/60 rounded-full transform -rotate-12 blur-md"></div>
          <div className="absolute bottom-12 right-16 w-24 h-24 bg-gradient-to-br from-yellow-400/60 to-orange-500/60 rounded-full transform rotate-30 blur-xl"></div>
          <div className="absolute bottom-8 left-12 w-12 h-12 bg-gradient-to-br from-green-400/60 to-emerald-500/60 rounded-full transform -rotate-45 blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Artist Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 mb-4 border-2 border-purple-200 shadow-lg">
              <Palette className="w-6 h-6 text-purple-600" />
              <Badge variant="outline" className="border-purple-400 text-purple-700 bg-purple-50">
                Artistic
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                {cardData.title}
              </span>
            </h2>
            <p className="text-xl text-purple-600 font-semibold">{cardData.subtitle}</p>
          </div>

          {/* Paint Stroke Content */}
          <div className="space-y-4 mb-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 rounded-2xl p-4 border-l-4 border-purple-500 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-slate-700 font-medium">{cardData.categories}</p>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full"></div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 via-cyan-50 to-green-100 rounded-2xl p-4 border-l-4 border-blue-500 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-slate-700 font-medium">{cardData.compatibility}</p>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-100 via-orange-50 to-red-100 rounded-2xl p-4 border-l-4 border-yellow-500 transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-slate-700 font-medium">{cardData.packages}</p>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500 rounded-full"></div>
            </div>
          </div>

          {/* Color Palette Features */}
          <div className="mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-lg">
              <h4 className="text-center text-sm font-bold text-slate-800 mb-4">لوحة الألوان</h4>
              
              <div className="grid grid-cols-4 gap-3">
                <div className="group text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium">أمان</p>
                </div>
                
                <div className="group text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium">سرعة</p>
                </div>
                
                <div className="group text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium">ثقة</p>
                </div>
                
                <div className="group text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium">جودة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Artistic Button */}
          <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:via-blue-600 hover:to-cyan-600 text-white font-bold py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Palette className="w-5 h-5" />
              {cardData.buttonText}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card13;