import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, ArrowLeft } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card04 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden bg-slate-900 text-white border-0 shadow-2xl hover:shadow-slate-700/50 transition-all duration-500 transform hover:scale-105" dir="rtl">
      {/* Geometric Header */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              Pro
            </Badge>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-l from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {cardData.title}
          </h2>
          <p className="text-lg text-cyan-300 font-medium">{cardData.subtitle}</p>
        </div>
      </div>

      {/* Hexagonal Content Layout */}
      <div className="p-6 space-y-5">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl blur-sm"></div>
          <div className="relative bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 backdrop-blur-sm">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-slate-300">{cardData.categories}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-slate-300">{cardData.compatibility}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-slate-300">{cardData.packages}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech-style Features */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 text-center hover:bg-slate-700 transition-colors">
            <Shield className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
            <p className="text-xs text-slate-400">أمان</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 text-center hover:bg-slate-700 transition-colors">
            <Zap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <p className="text-xs text-slate-400">سرعة</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 text-center hover:bg-slate-700 transition-colors">
            <Star className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <p className="text-xs text-slate-400">ثقة</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 text-center hover:bg-slate-700 transition-colors">
            <Award className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <p className="text-xs text-slate-400">جودة</p>
          </div>
        </div>

        {/* Futuristic Button */}
        <Button className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 text-white font-bold py-3 rounded-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <span className="relative flex items-center justify-center gap-2">
            {cardData.buttonText}
            <ArrowLeft className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
      </div>
    </Card>
  );
};

export default Card04;