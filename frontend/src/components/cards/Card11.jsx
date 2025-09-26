import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Gamepad2 } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card11 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-gray-900 via-red-900 to-black text-white relative" dir="rtl">
      {/* Gaming Card Design */}
      <div className="relative h-full">
        {/* Neon Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-4 right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-500/20 rounded-full blur-lg animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Gaming Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30 mb-3">
                Gaming
              </Badge>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-l from-red-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                {cardData.title}
              </h2>
              <p className="text-lg text-red-300 font-semibold">{cardData.subtitle}</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-lg shadow-lg border border-red-400/30">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Retro Console Style Content */}
          <div className="bg-black/50 border border-gray-700 rounded-lg p-4 mb-6 font-mono">
            <div className="flex items-center gap-2 mb-2 text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>SYSTEM ONLINE</span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="text-cyan-300">
                <span className="text-gray-500">></span> {cardData.categories}
              </div>
              <div className="text-yellow-300">
                <span className="text-gray-500">></span> {cardData.compatibility}
              </div>
              <div className="text-pink-300">
                <span className="text-gray-500">></span> {cardData.packages}
              </div>
            </div>
          </div>

          {/* Power-ups Style Features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-3 text-center hover:bg-green-600/30 transition-all duration-300">
              <Shield className="w-6 h-6 text-green-400 mx-auto mb-1" />
              <p className="text-xs text-green-300 font-bold">أمان +100</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/20 to-amber-600/20 border border-yellow-500/30 rounded-lg p-3 text-center hover:bg-yellow-600/30 transition-all duration-300">
              <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
              <p className="text-xs text-yellow-300 font-bold">سرعة +100</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-3 text-center hover:bg-blue-600/30 transition-all duration-300">
              <Star className="w-6 h-6 text-blue-400 mx-auto mb-1" />
              <p className="text-xs text-blue-300 font-bold">ثقة +100</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-3 text-center hover:bg-purple-600/30 transition-all duration-300">
              <Award className="w-6 h-6 text-purple-400 mx-auto mb-1" />
              <p className="text-xs text-purple-300 font-bold">جودة +100</p>
            </div>
          </div>

          {/* Action Button */}
          <Button className="w-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 hover:from-red-500 hover:via-pink-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg border-2 border-red-400/50 hover:border-red-300/70 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25">
            <span className="flex items-center justify-center gap-2">
              <Gamepad2 className="w-5 h-5" />
              {cardData.buttonText}
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card11;