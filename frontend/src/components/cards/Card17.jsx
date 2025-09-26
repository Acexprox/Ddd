import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Music } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card17 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white relative" dir="rtl">
      {/* Music/Audio Wave Design */}
      <div className="relative h-full">
        {/* Audio Wave Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 opacity-30">
            {Array.from({length: 20}, (_, i) => (
              <div 
                key={i}
                className={`bg-gradient-to-t from-pink-500 to-purple-500 w-2 rounded-t animate-pulse`}
                style={{ 
                  height: `${Math.random() * 60 + 20}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Audio Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-pink-400/30 shadow-xl">
              <Music className="w-6 h-6 text-pink-400 animate-pulse" />
              <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 border-0">
                Audio
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              {cardData.title}
            </h2>
            <p className="text-xl text-pink-200 font-semibold">{cardData.subtitle}</p>
          </div>

          {/* Sound Wave Content */}
          <div className="space-y-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-pink-500 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-pink-400 rounded animate-pulse"></div>
                  <div className="w-1 h-6 bg-pink-500 rounded animate-pulse delay-100"></div>
                  <div className="w-1 h-3 bg-pink-400 rounded animate-pulse delay-200"></div>
                </div>
                <span className="text-pink-300 text-xs font-bold">TRACK 01</span>
              </div>
              <p className="text-sm text-pink-100">{cardData.categories}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-purple-500 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-1">
                  <div className="w-1 h-5 bg-purple-400 rounded animate-pulse delay-300"></div>
                  <div className="w-1 h-3 bg-purple-500 rounded animate-pulse delay-400"></div>
                  <div className="w-1 h-7 bg-purple-400 rounded animate-pulse delay-500"></div>
                </div>
                <span className="text-purple-300 text-xs font-bold">TRACK 02</span>
              </div>
              <p className="text-sm text-purple-100">{cardData.compatibility}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-indigo-500 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-indigo-400 rounded animate-pulse delay-600"></div>
                  <div className="w-1 h-6 bg-indigo-500 rounded animate-pulse delay-700"></div>
                  <div className="w-1 h-5 bg-indigo-400 rounded animate-pulse delay-800"></div>
                </div>
                <span className="text-indigo-300 text-xs font-bold">TRACK 03</span>
              </div>
              <p className="text-sm text-indigo-100">{cardData.packages}</p>
            </div>
          </div>

          {/* Equalizer Features */}
          <div className="mb-8">
            <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
              <h4 className="text-center text-sm font-bold text-white mb-4">EQUALIZER</h4>
              
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center group">
                  <div className="flex flex-col items-center gap-1 mb-2">
                    {Array.from({length: 5}, (_, i) => (
                      <div 
                        key={i}
                        className={`w-6 h-1 rounded ${
                          i < 4 ? 'bg-green-500' : 'bg-gray-600'
                        } group-hover:bg-green-400 transition-colors duration-200`}
                        style={{animationDelay: `${i * 0.1}s`}}
                      ></div>
                    ))}
                    <Shield className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-xs text-green-300">أمان</p>
                </div>
                
                <div className="text-center group">
                  <div className="flex flex-col items-center gap-1 mb-2">
                    {Array.from({length: 5}, (_, i) => (
                      <div 
                        key={i}
                        className={`w-6 h-1 rounded ${
                          i < 5 ? 'bg-yellow-500' : 'bg-gray-600'
                        } group-hover:bg-yellow-400 transition-colors duration-200`}
                      ></div>
                    ))}
                    <Zap className="w-4 h-4 text-yellow-400" />
                  </div>
                  <p className="text-xs text-yellow-300">سرعة</p>
                </div>
                
                <div className="text-center group">
                  <div className="flex flex-col items-center gap-1 mb-2">
                    {Array.from({length: 5}, (_, i) => (
                      <div 
                        key={i}
                        className={`w-6 h-1 rounded ${
                          i < 3 ? 'bg-blue-500' : 'bg-gray-600'
                        } group-hover:bg-blue-400 transition-colors duration-200`}
                      ></div>
                    ))}
                    <Star className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-xs text-blue-300">ثقة</p>
                </div>
                
                <div className="text-center group">
                  <div className="flex flex-col items-center gap-1 mb-2">
                    {Array.from({length: 5}, (_, i) => (
                      <div 
                        key={i}
                        className={`w-6 h-1 rounded ${
                          i < 4 ? 'bg-purple-500' : 'bg-gray-600'
                        } group-hover:bg-purple-400 transition-colors duration-200`}
                      ></div>
                    ))}
                    <Award className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-xs text-purple-300">جودة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Play Button */}
          <Button className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold py-4 rounded-full border border-pink-400/30 hover:border-pink-300/50 transform hover:scale-105 transition-all duration-300 shadow-xl">
            <span className="flex items-center justify-center gap-2">
              <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              {cardData.buttonText}
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card17;