import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Compass } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card19 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-teal-800 via-cyan-700 to-blue-800 text-white relative" dir="rtl">
      {/* Compass/Navigation Design */}
      <div className="relative h-full">
        {/* Compass Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-teal-400/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-cyan-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-blue-400/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Navigation Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-teal-400/30 shadow-xl">
              <Compass className="w-6 h-6 text-teal-300 animate-spin" style={{animationDuration: '8s'}} />
              <Badge variant="secondary" className="bg-teal-500/20 text-teal-200 border-0">
                Navigator
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              {cardData.title}
            </h2>
            <p className="text-xl text-teal-200 font-semibold">{cardData.subtitle}</p>
          </div>

          {/* Compass Directions Content */}
          <div className="relative mb-8">
            <div className="w-40 h-40 mx-auto relative">
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg border-2 border-white">
                <Compass className="w-6 h-6 text-white" />
              </div>
              
              {/* North - Categories */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center border border-teal-400/30 hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-xs text-teal-100 font-medium">N</p>
                </div>
              </div>
              
              {/* East - Compatibility */}
              <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center border border-cyan-400/30 hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-xs text-cyan-100 font-medium">E</p>
                </div>
              </div>
              
              {/* South - Packages */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center border border-blue-400/30 hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-xs text-blue-100 font-medium">S</p>
                </div>
              </div>
              
              {/* West - Quality */}
              <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center border border-purple-400/30 hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-xs text-purple-100 font-medium">W</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Info */}
          <div className="space-y-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-teal-400/20">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-teal-200 text-sm font-medium">شمال:</span>
                <span className="text-teal-100 text-sm">{cardData.categories}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/20">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-cyan-200 text-sm font-medium">شرق:</span>
                <span className="text-cyan-100 text-sm">{cardData.compatibility}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-blue-400/20">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-blue-200 text-sm font-medium">جنوب:</span>
                <span className="text-blue-100 text-sm">{cardData.packages}</span>
              </div>
            </div>
          </div>

          {/* Navigate Button */}
          <Button className="w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-500 hover:via-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-2xl border border-teal-400/30 hover:border-teal-300/50 transform hover:scale-105 transition-all duration-300 shadow-xl">
            <span className="flex items-center justify-center gap-2">
              <Compass className="w-5 h-5" />
              {cardData.buttonText}
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card19;