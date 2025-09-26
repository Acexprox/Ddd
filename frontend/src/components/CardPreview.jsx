import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Grid3X3, List, Search, Filter, Eye, Heart, Share2 } from 'lucide-react';
import { cardData } from '../data/cardData';
import { useCardNotifications } from './NotificationSystem';

// Import all card components
import Card01 from './cards/Card01';
import Card02 from './cards/Card02';
import Card03 from './cards/Card03';
import Card04 from './cards/Card04';
import Card05 from './cards/Card05';
import Card06 from './cards/Card06';
import Card07 from './cards/Card07';
import Card08 from './cards/Card08';
import Card09 from './cards/Card09';
import Card10 from './cards/Card10';
import Card11 from './cards/Card11';
import Card12 from './cards/Card12';
import Card13 from './cards/Card13';
import Card14 from './cards/Card14';
import Card15 from './cards/Card15';
import Card16 from './cards/Card16';
import Card17 from './cards/Card17';
import Card18 from './cards/Card18';
import Card19 from './cards/Card19';
import Card20 from './cards/Card20';

const CardPreview = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [favorites, setFavorites] = useState(new Set());
  const [viewCounts, setViewCounts] = useState({});
  const [showStats, setShowStats] = useState(false);
  
  const cardComponents = [
    Card01, Card02, Card03, Card04, Card05,
    Card06, Card07, Card08, Card09, Card10,
    Card11, Card12, Card13, Card14, Card15,
    Card16, Card17, Card18, Card19, Card20,
  ];

  const cardCategories = [
    'Premium', 'Digital', 'Exclusive', 'Pro', 'Golden',
    'Elite', 'Signature', 'Newspaper', 'Geometric', 'Ocean',
    'Gaming', 'Organic', 'Artistic', 'Terminal', 'Manuscript',
    'Crystal', 'Audio', 'Calendar', 'Navigator', 'Space'
  ];

  const filterOptions = [
    { value: 'all', label: 'جميع البطاقات', count: 20 },
    { value: 'dark', label: 'التصاميم الداكنة', count: 8 },
    { value: 'light', label: 'التصاميم الفاتحة', count: 7 },
    { value: 'colorful', label: 'التصاميم الملونة', count: 5 },
  ];

  // Enhanced animations and interactions
  useEffect(() => {
    const cards = document.querySelectorAll('[data-card-id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
            entry.target.classList.add('animate-slideInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const exportCard = async (cardNumber) => {
    console.log(`Exporting card ${cardNumber}`);
    // Add visual feedback
    const button = document.querySelector(`[data-export="${cardNumber}"]`);
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => button.classList.remove('animate-pulse'), 1000);
    }
  };

  const toggleFavorite = (cardNumber) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(cardNumber)) {
      newFavorites.delete(cardNumber);
    } else {
      newFavorites.add(cardNumber);
    }
    setFavorites(newFavorites);
    
    // Add heart animation
    const heartButton = document.querySelector(`[data-heart="${cardNumber}"]`);
    if (heartButton) {
      heartButton.classList.add('animate-bounce');
      setTimeout(() => heartButton.classList.remove('animate-bounce'), 600);
    }
  };

  const incrementView = (cardNumber) => {
    setViewCounts(prev => ({
      ...prev,
      [cardNumber]: (prev[cardNumber] || 0) + 1
    }));
  };

  const shareCard = (cardNumber) => {
    if (navigator.share) {
      navigator.share({
        title: `البطاقة رقم ${cardNumber} - ${cardData.title}`,
        text: `شاهد هذه البطاقة الرائعة - ${cardData.subtitle}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Show notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
      notification.textContent = 'تم نسخ الرابط!';
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 relative overflow-hidden" dir="rtl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 mb-6 shadow-xl border border-white/50">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">50</span>
            </div>
            <div className="text-right">
              <h1 className="text-4xl font-bold text-slate-800 mb-2 font-arabic">
                معاينة البطاقات الإلكترونية
              </h1>
              <p className="text-xl text-slate-600">
                مجموعة فاخرة من البطاقات المتميزة التصميم
              </p>
            </div>
          </div>
          
          {/* Enhanced Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* View Mode Toggle */}
            <div className="flex bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-white/50">
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                onClick={() => setViewMode('grid')}
                className="flex items-center gap-2 rounded-lg"
              >
                <Grid3X3 className="w-4 h-4" />
                شبكة
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                onClick={() => setViewMode('list')}
                className="flex items-center gap-2 rounded-lg"
              >
                <List className="w-4 h-4" />
                قائمة
              </Button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/50">
              <Search className="w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="البحث في البطاقات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-0 outline-0 text-slate-700 placeholder-slate-500 w-48"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/50">
              <Filter className="w-4 h-4 text-slate-500" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="bg-transparent border-0 outline-0 text-slate-700"
              >
                {filterOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label} ({option.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Stats Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowStats(!showStats)}
              className="bg-white/90 backdrop-blur-sm border-white/50 hover:bg-white"
            >
              <Eye className="w-4 h-4 mr-2" />
              {showStats ? 'إخفاء الإحصائيات' : 'عرض الإحصائيات'}
            </Button>
          </div>

          {/* Statistics Panel */}
          {showStats && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl border border-white/50 animate-slideInDown">
              <h3 className="text-xl font-bold text-slate-800 mb-4">إحصائيات البطاقات</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">{cardComponents.length}</div>
                  <div className="text-sm text-blue-600">إجمالي البطاقات</div>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-pink-700">{favorites.size}</div>
                  <div className="text-sm text-pink-600">المفضلة</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-700">{Object.values(viewCounts).reduce((a, b) => a + b, 0)}</div>
                  <div className="text-sm text-green-600">إجمالي المشاهدات</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-700">20</div>
                  <div className="text-sm text-purple-600">أنماط مختلفة</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Cards Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {cardComponents.map((CardComponent, index) => (
            <div 
              key={index} 
              className="relative group"
              data-card-id={index + 1}
              onMouseEnter={() => incrementView(index + 1)}
            >
              {/* Enhanced Card Number Badge */}
              <div className="absolute -top-3 -right-3 z-20">
                <Badge variant="secondary" className="bg-slate-800 text-white font-bold text-lg px-3 py-1 shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </Badge>
              </div>
              
              {/* Category Badge */}
              <div className="absolute -top-3 -left-3 z-20">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 shadow-lg">
                  {cardCategories[index]}
                </Badge>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-rotate-1">
                <CardComponent />
                
                {/* Enhanced Overlay with Multiple Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {/* Heart/Favorite Button */}
                      <Button 
                        size="sm"
                        onClick={() => toggleFavorite(index + 1)}
                        data-heart={index + 1}
                        className={`${
                          favorites.has(index + 1) 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : 'bg-white/20 hover:bg-white/30'
                        } backdrop-blur-sm border-0 transition-all duration-300`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.has(index + 1) ? 'fill-current' : ''}`} />
                      </Button>

                      {/* Share Button */}
                      <Button 
                        size="sm"
                        onClick={() => shareCard(index + 1)}
                        className="bg-blue-500/80 hover:bg-blue-600 backdrop-blur-sm border-0"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>

                      {/* View Count */}
                      {viewCounts[index + 1] && (
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded px-2 py-1">
                          <Eye className="w-3 h-3 text-white" />
                          <span className="text-white text-xs">{viewCounts[index + 1]}</span>
                        </div>
                      )}
                    </div>

                    {/* Export Button */}
                    <Button 
                      onClick={() => exportCard(index + 1)}
                      data-export={index + 1}
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 shadow-lg transform hover:scale-110 transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      تصدير HTML
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Cards with Enhanced Design */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {Array.from({ length: 30 }, (_, i) => i + 21).map((cardNumber) => (
            <div key={cardNumber} className="relative group">
              <div className="absolute -top-3 -right-3 z-10">
                <Badge variant="secondary" className="bg-slate-400 text-white font-bold">
                  {String(cardNumber).padStart(2, '0')}
                </Badge>
              </div>
              
              <Card className="h-80 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-dashed border-slate-300 hover:border-slate-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="text-center text-slate-500 relative z-10">
                  <div className="text-6xl mb-4 animate-pulse">🚧</div>
                  <p className="font-bold text-lg mb-2">قريباً</p>
                  <p className="text-sm">البطاقة رقم {cardNumber}</p>
                  <div className="mt-4 bg-slate-300 rounded-full h-2 w-32 mx-auto overflow-hidden">
                    <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{width: `${Math.random() * 60 + 20}%`}}></div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">🎉 مجموعة متكاملة من البطاقات الفاخرة</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              تصاميم متنوعة وفريدة باللغة العربية مع دعم كامل للاتجاه من اليمين لليسار، 
              مع تأثيرات تفاعلية متقدمة وجودة عالية للاستخدام المهني
            </p>
            <div className="flex justify-center gap-4">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                ✅ 20 بطاقة مكتملة
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2">
                🔄 30 بطاقة قيد التطوير
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">
                🚀 تفاعل متقدم
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;