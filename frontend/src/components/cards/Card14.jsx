import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, Zap, Star, Award, Laptop } from 'lucide-react';
import { cardData } from '../../data/cardData';

const Card14 = () => {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-800 text-white relative" dir="rtl">
      {/* Terminal/Code Design */}
      <div className="relative h-full font-mono">
        {/* Terminal Window Header */}
        <div className="bg-gray-900 p-3 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            <Badge variant="secondary" className="bg-gray-700 text-gray-300 border-0 text-xs">
              Terminal
            </Badge>
            
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4">
          {/* Command Prompt Header */}
          <div className="mb-4">
            <div className="text-green-400 text-sm mb-2">
              <span className="text-gray-500">user@digital-cards:~$</span> cat card_info.txt
            </div>
            
            <div className="bg-black/30 rounded p-3 border border-gray-700">
              <div className="text-cyan-400 text-lg font-bold mb-1">{cardData.title}</div>
              <div className="text-yellow-300 mb-3">{cardData.subtitle}</div>
              
              <div className="text-xs text-gray-300">
                <div className="mb-1">
                  <span className="text-green-400">STATUS:</span> ACTIVE
                </div>
                <div className="mb-1">
                  <span className="text-blue-400">TYPE:</span> PREMIUM
                </div>
                <div>
                  <span className="text-purple-400">VERSION:</span> 2.0.1
                </div>
              </div>
            </div>
          </div>

          {/* Code-style Content */}
          <div className="space-y-3 mb-4 text-sm">
            <div className="bg-gray-900/50 rounded p-3 border-l-2 border-blue-500">
              <div className="text-gray-500 text-xs mb-1">// Categories</div>
              <div className="text-blue-300">{cardData.categories}</div>
            </div>
            
            <div className="bg-gray-900/50 rounded p-3 border-l-2 border-green-500">
              <div className="text-gray-500 text-xs mb-1">// Compatibility</div>
              <div className="text-green-300">{cardData.compatibility}</div>
            </div>
            
            <div className="bg-gray-900/50 rounded p-3 border-l-2 border-yellow-500">
              <div className="text-gray-500 text-xs mb-1">// Packages</div>
              <div className="text-yellow-300">{cardData.packages}</div>
            </div>
          </div>

          {/* Function-style Features */}
          <div className="mb-4">
            <div className="text-purple-400 text-sm mb-2">function getFeatures() &#123;</div>
            <div className="ml-4 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-3 h-3 text-green-400" />
                <span className="text-green-400">security:</span> 
                <span className="text-white">"أمان"</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="text-yellow-400">speed:</span> 
                <span className="text-white">"سرعة"</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Star className="w-3 h-3 text-blue-400" />
                <span className="text-blue-400">trust:</span> 
                <span className="text-white">"ثقة"</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="w-3 h-3 text-purple-400" />
                <span className="text-purple-400">quality:</span> 
                <span className="text-white">"جودة"</span>
              </div>
            </div>
            <div className="text-purple-400 text-sm">&#125;</div>
          </div>

          {/* Execute Button */}
          <div className="mb-2">
            <div className="text-green-400 text-sm">
              <span className="text-gray-500">user@digital-cards:~$</span> ./execute_action.sh
            </div>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-mono font-bold py-3 rounded text-sm border border-gray-600 hover:border-gray-500 transition-all duration-300">
            <span className="flex items-center justify-center gap-2">
              <span className="text-gray-300">&gt;</span>
              {cardData.buttonText}
              <span className="animate-pulse">_</span>
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card14;