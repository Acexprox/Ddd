import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Sparkles, Mouse, Zap } from 'lucide-react';
import { Button } from './ui/button';

const EnhancedEffects = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create particles on mouse move
      if (particlesEnabled && Math.random() > 0.95) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          color: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)]
        };
        
        setParticles(prev => [...prev.slice(-20), newParticle]);
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [particlesEnabled]);

  // Sound effects
  const playSound = (type) => {
    if (!soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    const frequencies = {
      hover: 800,
      click: 1200,
      export: 600,
      favorite: 1000
    };
    
    oscillator.frequency.setValueAtTime(frequencies[type] || 800, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  // Add sound effects to card interactions
  useEffect(() => {
    const addSoundToElements = () => {
      // Card hover sounds
      document.querySelectorAll('[data-card-id]').forEach(card => {
        card.addEventListener('mouseenter', () => playSound('hover'));
      });
      
      // Button click sounds
      document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => playSound('click'));
      });
      
      // Export button sounds
      document.querySelectorAll('[data-export]').forEach(button => {
        button.addEventListener('click', () => playSound('export'));
      });
      
      // Favorite button sounds
      document.querySelectorAll('[data-heart]').forEach(button => {
        button.addEventListener('click', () => playSound('favorite'));
      });
    };

    addSoundToElements();
    
    // Re-add sounds when new elements are added
    const observer = new MutationObserver(addSoundToElements);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [soundEnabled]);

  return (
    <>
      {/* Floating Controls */}
      <div className="fixed top-4 left-4 z-50 flex flex-col gap-2">
        {/* Sound Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-white/50"
          title={soundEnabled ? 'إيقاف الأصوات' : 'تشغيل الأصوات'}
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-green-600" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-500" />
          )}
        </Button>
        
        {/* Particles Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setParticlesEnabled(!particlesEnabled)}
          className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-white/50"
          title={particlesEnabled ? 'إيقاف التأثيرات' : 'تشغيل التأثيرات'}
        >
          {particlesEnabled ? (
            <Sparkles className="w-4 h-4 text-purple-600" />
          ) : (
            <Sparkles className="w-4 h-4 text-slate-500" />
          )}
        </Button>
      </div>

      {/* Mouse Follower */}
      {particlesEnabled && (
        <div
          className="fixed pointer-events-none z-40 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-sm opacity-60 transition-all duration-100"
          style={{
            left: mousePos.x - 8,
            top: mousePos.y - 8,
            transform: 'scale(0.5)',
          }}
        />
      )}

      {/* Particle System */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-30 w-2 h-2 rounded-full animate-ping"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            backgroundColor: particle.color,
            animationDuration: '1s',
          }}
        />
      ))}

      {/* Performance Stats */}
      <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white text-xs px-3 py-2 rounded-lg backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Mouse className="w-3 h-3" />
          <span>X: {mousePos.x}, Y: {mousePos.y}</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <Zap className="w-3 h-3" />
          <span>{particles.length} particles</span>
        </div>
      </div>

      {/* Global Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-blue-300/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-40 left-20 w-12 h-12 border-2 border-purple-300/30 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-8 h-8 bg-gradient-to-br from-pink-300/20 to-rose-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-6 h-6 border border-green-300/30 transform rotate-45 animate-pulse"></div>
        
        {/* Floating sparkles */}
        {Array.from({length: 6}, (_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400/40" />
          </div>
        ))}
      </div>
    </>
  );
};

export default EnhancedEffects;