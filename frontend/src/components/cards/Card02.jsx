import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card02 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden bg-white border-0 shadow-2xl hover:shadow-xl transition-all duration-500 transform hover:scale-105" dir="rtl">
      {/* Modern Header Design */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-100"></div>
        <div className="relative p-8">
          <div className="flex justify-between items-start mb-6">
            <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50">
              Digital
            </Badge>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-800 mb-2">{cardData.title}</h2>
          <p className="text-xl text-emerald-600 font-semibold">{cardData.subtitle}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 -mt-4">
        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 rounded-xl p-4 border-r-4 border-emerald-500">
            <p className="text-sm text-slate-700 font-medium">{cardData.categories}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border-r-4 border-teal-500">
            <p className="text-sm text-slate-700 font-medium">{cardData.compatibility}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border-r-4 border-emerald-600">
            <p className="text-sm text-slate-700 font-medium">{cardData.packages}</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-xs text-slate-600 font-medium">أمان</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Zap className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-xs text-slate-600 font-medium">سرعة</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-xs text-slate-600 font-medium">ثقة</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-xs text-slate-600 font-medium">جودة</p>
          </div>
        </div>

        {/* CTA Button */}
        <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
          <span className="text-lg">{cardData.buttonText}</span>
        </Button>
      </div>
    </Card>
  );
};

export default Card02;