import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Star } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('تحميل البطاقات...');
  
  const loadingStages = [
    { text: 'تهيئة التصاميم...', progress: 20 },
    { text: 'تحميل الخطوط العربية...', progress: 40 },
    { text: 'إعداد التأثيرات البصرية...', progress: 60 },
    { text: 'تجهيز التفاعلات...', progress: 80 },
    { text: 'اكتمل التحميل!', progress: 100 }
  ];

  useEffect(() => {
    let currentStage = 0;
    
    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        const stage = loadingStages[currentStage];
        setLoadingText(stage.text);
        setProgress(stage.progress);
        currentStage++;
      } else {
        clearInterval(interval);
        setTimeout(() => onComplete && onComplete(), 500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({length: 20}, (_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Star className="w-2 h-2 text-white/20" />
          </div>
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-2xl animate-pulse">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-2 font-arabic">
          البطاقات الإلكترونية
        </h1>
        <p className="text-xl text-blue-200 mb-8">
          مجموعة فاخرة من التصاميم المميزة
        </p>

        {/* Loading Text */}
        <p className="text-lg text-white/80 mb-6 h-8 flex items-center justify-center">
          <Zap className="w-5 h-5 mr-2 animate-pulse" />
          {loadingText}
        </p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-white/60 mt-2">
            <span>0%</span>
            <span className="font-bold">{progress}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="text-white/60">
            <div className="text-2xl font-bold text-blue-400">50</div>
            <div className="text-sm">بطاقة فريدة</div>
          </div>
          <div className="text-white/60">
            <div className="text-2xl font-bold text-purple-400">20</div>
            <div className="text-sm">نمط مختلف</div>
          </div>
          <div className="text-white/60">
            <div className="text-2xl font-bold text-indigo-400">100%</div>
            <div className="text-sm">عربي RTL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;