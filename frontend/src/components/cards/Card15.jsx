import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, BookOpen } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card15 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative" dir="rtl">
      {/* Book/Manuscript Design */}
      <div className="relative h-full">
        {/* Parchment Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 to-yellow-100/80 opacity-60"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400"></div>
          
          {/* Decorative corners */}
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-400"></div>
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-400"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Manuscript Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 mb-4 border border-amber-300 shadow-lg">
              <BookOpen className="w-6 h-6 text-amber-700" />
              <Badge variant="outline" className="border-amber-500 text-amber-800 bg-amber-100">
                Manuscript
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold text-amber-900 mb-2 font-serif">{cardData.title}</h2>
            <p className="text-xl text-amber-700 font-semibold italic">{cardData.subtitle}</p>
          </div>

          {/* Scroll-like Content */}
          <div className="space-y-4 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200 shadow-inner">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <p className="text-sm text-amber-900 font-medium leading-relaxed">{cardData.categories}</p>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-orange-200 shadow-inner">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <p className="text-sm text-orange-900 font-medium leading-relaxed">{cardData.compatibility}</p>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-yellow-200 shadow-inner">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <p className="text-sm text-yellow-900 font-medium leading-relaxed">{cardData.packages}</p>
              </div>
            </div>
          </div>

          {/* Illuminated Manuscript Style Features */}
          <div className="mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border-2 border-amber-300 shadow-lg">
              <h4 className="text-center text-sm font-bold text-amber-900 mb-4 font-serif">الخصائص المميزة</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-slate-700 font-bold">أمان عالي</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-slate-700 font-bold">سرعة فائقة</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-slate-700 font-bold">ثقة مطلقة</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-slate-700 font-bold">جودة متميزة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ornate Button */}
          <Button className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-700 hover:via-orange-700 hover:to-yellow-700 text-white font-bold py-4 rounded-xl border-2 border-amber-500 hover:border-amber-400 transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2 font-serif text-lg">
              <BookOpen className="w-5 h-5" />
              {cardData.buttonText}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 hover:scale-x-100 transition-transform duration-700 origin-center"></div>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card15;