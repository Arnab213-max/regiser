
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
}

const HeroSection = ({ title, subtitle, cta }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create floating bubbles
    const container = containerRef.current;
    if (!container) return;
    
    // Clear any existing bubbles
    const existingBubbles = container.querySelectorAll('.floating-bubble');
    existingBubbles.forEach(bubble => bubble.remove());
    
    // Create new bubbles
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 150 + 30;
      const bubble = document.createElement('div');
      bubble.classList.add('floating-bubble');
      
      // Set bubble properties
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      
      // Add a random animation
      const animations = ['animate-float', 'animate-pulse-slow', 'animate-spin-slow'];
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      bubble.classList.add(randomAnimation);
      
      container.appendChild(bubble);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="text-center z-10 animate-slide-down">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Button className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 animate-pulse-slow">
          {cta}
        </Button>
      </div>
      <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;
