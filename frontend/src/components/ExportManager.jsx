import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Download, FileText, Folder, ArrowRight } from 'lucide-react';

const ExportManager = () => {
  const [exporting, setExporting] = useState(false);
  const [exportedCards, setExportedCards] = useState([]);

  const exportAllCards = async () => {
    setExporting(true);
    // Mock export process - will implement actual HTML generation later
    for (let i = 1; i <= 50; i++) {
      setTimeout(() => {
        setExportedCards(prev => [...prev, i]);
      }, i * 100);
    }
    
    setTimeout(() => {
      setExporting(false);
    }, 5000);
  };

  const exportSingleCard = (cardNumber) => {
    // Generate standalone HTML for specific card
    console.log(`Exporting card ${cardNumber} as standalone HTML`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            مدير التصدير
          </h1>
          <p className="text-xl text-slate-600">
            تصدير البطاقات كملفات HTML مستقلة
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Export All Section */}
          <Card className="p-6 bg-white shadow-xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Folder className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">تصدير جميع البطاقات</h3>
              <p className="text-slate-600">تصدير جميع البطاقات الـ50 كملفات HTML منفصلة</p>
            </div>

            <Button 
              onClick={exportAllCards}
              disabled={exporting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl"
            >
              {exporting ? 'جاري التصدير...' : 'تصدير الكل'}
            </Button>

            {exporting && (
              <div className="mt-6">
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>التقدم</span>
                    <span>{exportedCards.length}/50</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(exportedCards.length / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Individual Export Section */}
          <Card className="p-6 bg-white shadow-xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">تصدير فردي</h3>
              <p className="text-slate-600">تصدير بطاقة محددة كملف HTML مستقل</p>
            </div>

            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map(cardNum => (
                <div key={cardNum} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-700">البطاقة رقم {cardNum}</span>
                  <Button 
                    size="sm"
                    onClick={() => exportSingleCard(cardNum)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    تصدير
                  </Button>
                </div>
              ))}
              
              <div className="text-center pt-4">
                <Button variant="outline" className="text-slate-600">
                  عرض المزيد
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExportManager;