import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Hexagon } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card08 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-slate-50 to-stone-100 relative" dir="rtl">
      {/* Newspaper/Magazine Layout */}
      <div className="relative">
        {/* Header Banner */}
        <div className="bg-slate-900 text-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-1">البطاقات الرقمية</h3>
              <h2 className="text-xl font-bold">{cardData.title}</h2>
            </div>
            <Badge variant="secondary" className="bg-slate-700 text-white border-0">
              Newspaper
            </Badge>
          </div>
        </div>

        {/* Subtitle Bar */}
        <div className="bg-red-600 text-white px-4 py-2">
          <p className="text-center font-semibold">{cardData.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <div className="border-b border-slate-300 pb-2">
                <h4 className="text-xs font-bold text-slate-800 mb-1">الفئات</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{cardData.categories}</p>
              </div>
              <div className="border-b border-slate-300 pb-2">
                <h4 className="text-xs font-bold text-slate-800 mb-1">التوافق</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{cardData.compatibility}</p>
              </div>
            </div>
            
            <div>
              <div className="border border-slate-300 p-3 bg-slate-50">
                <h4 className="text-xs font-bold text-slate-800 mb-2 text-center">الميزات الأساسية</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center">
                    <Shield className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <p className="text-xs text-slate-700">أمان</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-4 h-4 text-yellow-600 mx-auto mb-1" />
                    <p className="text-xs text-slate-700">سرعة</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-slate-700">ثقة</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                    <p className="text-xs text-slate-700">جودة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Article */}
          <div className="border-t-2 border-slate-400 pt-4">
            <h4 className="text-sm font-bold text-slate-800 mb-2">{cardData.packages}</h4>
            <div className="bg-slate-100 p-3 rounded">
              <p className="text-xs text-slate-600 italic mb-3">
                "تجربة فريدة للبطاقات الإلكترونية مع أحدث التقنيات والأمان العالي"
              </p>
              
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 text-sm rounded-none border-2 border-slate-900 hover:border-slate-700 transition-all duration-300">
                {cardData.buttonText} →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Card08;