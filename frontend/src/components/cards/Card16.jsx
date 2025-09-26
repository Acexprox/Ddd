import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Gem } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card16 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white relative" dir="rtl">
      {/* Crystal/Diamond Design */}
      <div className="relative h-full">
        {/* Crystal Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-500/30 transform rotate-45 blur-lg animate-pulse"></div>
          <div className="absolute bottom-12 left-12 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 transform rotate-12 blur-md animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 transform -translate-x-1/2 -translate-y-1/2 rotate-45 blur-xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Crystal Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 mb-4 border border-purple-400/30 shadow-xl">
              <Gem className="w-6 h-6 text-purple-400" />
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                Crystal
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              {cardData.title}
            </h2>
            <p className="text-xl text-purple-200 font-semibold">{cardData.subtitle}</p>
          </div>

          {/* Diamond-shaped Content */}
          <div className="space-y-4 mb-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-purple-100 font-medium">{cardData.categories}</p>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 transform rotate-45"></div>
            </div>
            
            <div className="relative ml-4">
              <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 backdrop-blur-sm rounded-lg p-4 border border-indigo-400/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-indigo-100 font-medium">{cardData.compatibility}</p>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 transform rotate-45"></div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-sm text-cyan-100 font-medium">{cardData.packages}</p>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 transform rotate-45"></div>
            </div>
          </div>

          {/* Crystalline Features Grid */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30 text-center transform hover:scale-105 hover:rotate-3 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 transform rotate-45 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <Shield className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <p className="text-xs text-emerald-300 font-bold">أمان</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30 text-center transform hover:scale-105 hover:-rotate-3 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <Zap className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <p className="text-xs text-yellow-300 font-bold">سرعة</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 text-center transform hover:scale-105 hover:rotate-3 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 transform rotate-45 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <Star className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <p className="text-xs text-blue-300 font-bold">ثقة</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30 text-center transform hover:scale-105 hover:-rotate-3 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 transform rotate-45 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <Award className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <p className="text-xs text-purple-300 font-bold">جودة</p>
              </div>
            </div>
          </div>

          {/* Crystal Button */}
          <Button className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:via-blue-500 hover:to-cyan-500 text-white font-bold py-4 rounded-2xl border border-purple-400/30 hover:border-purple-300/50 transform hover:scale-105 transition-all duration-300 shadow-xl relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Gem className="w-5 h-5" />
              {cardData.buttonText}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card16;