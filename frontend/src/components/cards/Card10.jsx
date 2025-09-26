import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Waves } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card10 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl relative bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900 text-white" dir="rtl">
      {/* Ocean Wave Design */}
      <div className="relative h-full">
        {/* Animated Wave Backgrounds */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 left-0 right-0 h-16 bg-gradient-to-r from-teal-500/30 via-cyan-400/30 to-blue-500/30 rounded-full transform -rotate-3 animate-pulse"></div>
          <div className="absolute top-12 left-0 right-0 h-12 bg-gradient-to-r from-emerald-500/20 via-teal-400/20 to-cyan-500/20 rounded-full transform rotate-2 animate-pulse delay-1000"></div>
          <div className="absolute bottom-8 left-0 right-0 h-20 bg-gradient-to-r from-blue-500/25 via-cyan-400/25 to-teal-500/25 rounded-full transform rotate-1 animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Floating Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
              <Waves className="w-5 h-5 text-cyan-300" />
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-200 border-0">
                Ocean
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">{cardData.title}</h2>
            <p className="text-lg text-cyan-200 font-medium">{cardData.subtitle}</p>
          </div>

          {/* Wave Content Sections */}
          <div className="space-y-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-teal-400 shadow-lg">
              <p className="text-sm text-teal-100">{cardData.categories}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-cyan-400 shadow-lg transform translate-x-2">
              <p className="text-sm text-cyan-100">{cardData.compatibility}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-emerald-400 shadow-lg">
              <p className="text-sm text-emerald-100">{cardData.packages}</p>
            </div>
          </div>

          {/* Floating Islands Features */}
          <div className="relative mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/15 backdrop-blur-sm rounded-full p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Shield className="w-6 h-6 text-emerald-300 mx-auto mb-2" />
                <p className="text-xs text-white font-medium">أمان</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-full p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                <p className="text-xs text-white font-medium">سرعة</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-full p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Star className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                <p className="text-xs text-white font-medium">ثقة</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-full p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Award className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                <p className="text-xs text-white font-medium">جودة</p>
              </div>
            </div>
          </div>

          {/* Wave Button */}
          <Button className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:via-teal-400 hover:to-emerald-400 text-white font-bold py-4 rounded-2xl border-2 border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm">
            <span className="flex items-center justify-center gap-2">
              <Waves className="w-5 h-5" />
              {cardData.buttonText}
            </span>
          </Button>
        </div>

        {/* Bottom Wave Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400"></div>
      </div>
    </Card>
  );
};

export default Card10;