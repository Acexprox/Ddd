import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Calendar } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card18 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-white relative" dir="rtl">
      {/* Calendar/Planner Design */}
      <div className="relative h-full">
        {/* Calendar Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full transform -translate-x-6 translate-y-6"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-3">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                Calendar
              </Badge>
              <Calendar className="w-6 h-6 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-1">{cardData.title}</h2>
            <p className="text-lg text-blue-100 font-semibold">{cardData.subtitle}</p>
          </div>
          
          {/* Spiral binding effect */}
          <div className="absolute top-0 left-4 w-2 h-full flex flex-col justify-evenly">
            {Array.from({length: 8}, (_, i) => (
              <div key={i} className="w-2 h-2 bg-white/30 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="p-6">
          {/* Month Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">ديسمبر 2024</h3>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'].map((day, i) => (
              <div key={i} className="text-center text-xs font-bold text-slate-500 py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1 mb-6">
            {Array.from({length: 35}, (_, i) => {
              const day = i - 6; // Start from Monday
              const isCurrentMonth = day > 0 && day <= 31;
              const isToday = day === 15;
              const hasEvent = [5, 12, 20, 28].includes(day);
              
              return (
                <div 
                  key={i} 
                  className={`
                    text-center text-xs py-1 rounded transition-all duration-200
                    ${isCurrentMonth ? 'text-slate-700' : 'text-slate-300'}
                    ${isToday ? 'bg-blue-600 text-white font-bold' : ''}
                    ${hasEvent ? 'bg-red-100 border border-red-300' : ''}
                    hover:bg-blue-100
                  `}
                >
                  {isCurrentMonth ? day : ''}
                </div>
              );
            })}
          </div>

          {/* Schedule Content */}
          <div className="space-y-3 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border-r-4 border-blue-500">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-bold text-blue-700">09:00</span>
              </div>
              <p className="text-sm text-slate-700">{cardData.categories}</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border-r-4 border-green-500">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-bold text-green-700">14:30</span>
              </div>
              <p className="text-sm text-slate-700">{cardData.compatibility}</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border-r-4 border-purple-500">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xs font-bold text-purple-700">18:00</span>
              </div>
              <p className="text-sm text-slate-700">{cardData.packages}</p>
            </div>
          </div>

          {/* Event Icons */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-1 shadow-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-slate-600">أمان</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-1 shadow-md">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-slate-600">سرعة</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-1 shadow-md">
                <Star className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-slate-600">ثقة</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-1 shadow-md">
                <Award className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-slate-600">جودة</p>
            </div>
          </div>

          {/* Schedule Button */}
          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              {cardData.buttonText}
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card18;