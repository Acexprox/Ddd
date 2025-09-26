import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Rocket } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card20 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white relative" dir="rtl">
      {/* Space/Rocket Design */}
      <div className="relative h-full">
        {/* Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({length: 20}, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
          
          {/* Planets */}
          <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-60"></div>
          <div className="absolute bottom-12 left-12 w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 left-8 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Space Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-blue-400/30 shadow-xl">
              <Rocket className="w-6 h-6 text-blue-400 animate-bounce" />
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-0">
                Space
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              {cardData.title}
            </h2>
            <p className="text-xl text-blue-200 font-semibold">{cardData.subtitle}</p>
          </div>

          {/* Mission Control Content */}
          <div className="space-y-4 mb-8">
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-blue-300 text-xs font-bold">MISSION 01 - ACTIVE</span>
              </div>
              <p className="text-sm text-blue-100">{cardData.categories}</p>
              
              {/* Rocket trail */}
              <div className="absolute right-2 top-2">
                <Rocket className="w-4 h-4 text-blue-400 transform rotate-45" />
                <div className="absolute -bottom-1 -right-1 w-6 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded opacity-60"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
                <span className="text-purple-300 text-xs font-bold">MISSION 02 - STANDBY</span>
              </div>
              <p className="text-sm text-purple-100">{cardData.compatibility}</p>
              
              <div className="absolute right-2 top-2">
                <Star className="w-4 h-4 text-purple-400 animate-spin" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
                <span className="text-cyan-300 text-xs font-bold">MISSION 03 - READY</span>
              </div>
              <p className="text-sm text-cyan-100">{cardData.packages}</p>
              
              <div className="absolute right-2 top-2">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Control Panel Features */}
          <div className="mb-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-gray-600">
              <h4 className="text-center text-sm font-bold text-white mb-4">CONTROL PANEL</h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800/50 rounded-lg p-3 text-center border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-emerald-300 font-bold">SHIELD</p>
                  <p className="text-xs text-emerald-400">أمان</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-3 text-center border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-yellow-300 font-bold">BOOST</p>
                  <p className="text-xs text-yellow-400">سرعة</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-3 text-center border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-blue-300 font-bold">TRUST</p>
                  <p className="text-xs text-blue-400">ثقة</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-3 text-center border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-purple-300 font-bold">GRADE</p>
                  <p className="text-xs text-purple-400">جودة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Launch Button */}
          <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white font-bold py-4 rounded-2xl border border-blue-400/30 hover:border-blue-300/50 transform hover:scale-105 transition-all duration-300 shadow-xl relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              {cardData.buttonText}
            </span>
            
            {/* Launch effect */}
            <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-gradient-to-t from-orange-400 to-transparent transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card20;