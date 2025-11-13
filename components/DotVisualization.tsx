"use client"
import { useEffect, useState } from "react";

export const DotVisualization = () => {
  const [dots, setDots] = useState<Array<{ x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    // Generate dot pattern
    const generateDots = () => {
      const newDots = [];
      const cols = 25;
      const rows = 35;
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          // Create a brain-like shape
          const centerX = cols / 2;
          const centerY = rows / 2;
          const dx = j - centerX;
          const dy = i - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Create organic shape with some randomness
          const maxDistance = Math.min(cols, rows) / 2.5;
          const noise = Math.sin(i * 0.3) * Math.cos(j * 0.3) * 2;
          
          if (distance < maxDistance + noise) {
            newDots.push({
              x: j * 15,
              y: i * 15,
              opacity: Math.random() * 0.5 + 0.5,
            });
          }
        }
      }
      setDots(newDots);
    };

    generateDots();
    
    // Animate opacity
    const interval = setInterval(() => {
      setDots(prev => prev.map(dot => ({
        ...dot,
        opacity: Math.random() * 0.4 + 0.6
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px]">
      {/* Status indicator */}
      <div className="absolute top-0 left-0 flex items-center gap-3">
        <span className="text-xs font-mono text-neon-green">ALL SYSTEMS OPERATIONAL</span>
        <div className="flex gap-0.5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 bg-neon-green"
              style={{
                height: `${Math.random() * 12 + 4}px`,
                animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Dot pattern */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 375 525">
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y + 50}
            r="2"
            fill="hsl(var(--neon-green))"
            opacity={dot.opacity}
            style={{
              transition: 'opacity 2s ease-in-out'
            }}
          />
        ))}
      </svg>
    </div>
  );
};
