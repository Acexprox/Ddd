import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Sparkles } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card07 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden bg-white border-0 shadow-2xl relative" dir="rtl">
      {/* Diagonal Split Design */}
      <div className="relative h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 transform skew-y-12 scale-110 origin-top-right"></div>
        <div className="absolute inset-0 bg-white transform -skew-y-6 scale-105 origin-bottom-left"></div>
        
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge variant="outline" className="border-teal-300 text-teal-700 bg-teal-50 mb-3">
                Signature
              </Badge>
              <h2 className="text-2xl font-bold text-slate-800 mb-1">{cardData.title}</h2>
              <p className="text-lg text-teal-600 font-semibold">{cardData.subtitle}</p>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-3 rounded-full shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Zigzag Content */}
          <div className="space-y-4 mb-6">
            <div className="bg-teal-50 rounded-r-2xl rounded-l-lg p-4 ml-4 border-l-4 border-teal-500">
              <p className="text-sm text-slate-700">{cardData.categories}</p>
            </div>
            <div className="bg-cyan-50 rounded-l-2xl rounded-r-lg p-4 mr-4 border-r-4 border-cyan-500">
              <p className="text-sm text-slate-700">{cardData.compatibility}</p>
            </div>
            <div className="bg-blue-50 rounded-r-2xl rounded-l-lg p-4 ml-4 border-l-4 border-blue-500">
              <p className="text-sm text-slate-700">{cardData.packages}</p>
            </div>
          </div>

          {/* Diamond Features Layout */}
          <div className="relative mb-6">
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 transform rotate-45 flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <p className="text-xs text-slate-600">أمان</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <p className="text-xs text-slate-600">سرعة</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 transform rotate-45 flex items-center justify-center mx-auto mb-2">
                  <Star className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <p className="text-xs text-slate-600">ثقة</p>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 transform rotate-45 flex items-center justify-center mx-auto mb-2">
                <Award className="w-5 h-5 text-white transform -rotate-45" />
              </div>
              <p className="text-xs text-slate-600">جودة</p>
            </div>
          </div>

          {/* Action Button */}
          <Button className="w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-700 hover:via-cyan-700 hover:to-blue-700 text-white font-bold py-3 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
            {cardData.buttonText}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card07;