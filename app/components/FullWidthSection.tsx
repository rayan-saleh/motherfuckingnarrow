'use client'

import { useRef, useEffect, useState } from 'react'

export default function FullWidthSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const handleScroll = () => {
      const marqueeSection = marqueeRef.current
      if (!marqueeSection) return
      
      const rect = marqueeSection.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      if (rect.top <= viewportHeight) {
        const scrollProgress = (100 - rect.top) / rect.height
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress))
        const offset = -200 * clampedProgress
        document.documentElement.style.setProperty('--scroll-offset', `${offset}%`)
      } else {
        document.documentElement.style.setProperty('--scroll-offset', '0%')
      }

      const imageSection = imageRef.current
      if (!imageSection) return

      const imageRect = imageSection.getBoundingClientRect()
      
      if (imageRect.top > viewportHeight/2) {
        setActiveIndex(-1)
      } else {
        const scrolledAmount = (viewportHeight/2) - imageRect.top
        const totalScrollDistance = imageSection.offsetHeight
        const index = Math.floor((scrolledAmount / totalScrollDistance) * 3)
        setActiveIndex(Math.min(2, Math.max(-1, index)))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getTextStyle = (index: number) => {
    if (index !== activeIndex) {
      return {
        opacity: 0,
        transform: 'translateY(50vh)',
        transition: 'all 0.5s ease-out'
      }
    }
    
    return {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 0.5s ease-out'
    }
  }

  const getStaggeredTextStyle = (index: number, scroll: number) => {
    const threshold = index * 0.3; // Controls when each word appears
    const opacity = scroll > threshold ? 1 : 0;
    const y = scroll > threshold ? 0 : 100;
    
    const positions = [
      { x: '10%', y: '20%' },  // WE'RE - top left
      { x: '40%', y: '50%' },  // NOT - middle
      { x: '70%', y: '80%' },  // IMPRESSED - bottom right
    ];

    return {
      opacity,
      transform: `translate(${positions[index].x}, ${positions[index].y}) translateY(${y}px)`,
      transition: 'all 0.5s ease-out',
      position: 'absolute',
      left: 0,
      top: 0
    };
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('staggered-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top <= viewportHeight) {
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen w-full">
      <div ref={marqueeRef} className="relative overflow-hidden whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <h2 
            key={i} 
            className="text-[20vw] font-bold marquee-text inline-block text-white"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4)'
            }}
          >
            THIS SHIT SUCKS&nbsp;
          </h2>
        ))}
      </div>
      
      <div className="relative px-8 py-16">
        <div className="text-[10vw] font-bold opacity-50 transform -rotate-3">
          so much effort
        </div>
        <div className="text-[8vw] font-bold opacity-30 transform rotate-2">
          for so little information
        </div>
      </div>

      <div ref={imageRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {['THIS IS WHY', 'WE CAN\'T HAVE', 'NICE THINGS'].map((text, index) => (
              <h2 
                key={index}
                className="text-[12vw] font-bold text-white text-center absolute tracking-tight leading-none"
                style={getTextStyle(index)}
              >
                {text}
              </h2>
            ))}
          </div>
          <img 
            src="/oversized.jpeg" 
            alt="Oversized demonstration image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div id="staggered-section" className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {['WE\'RE', 'NOT', 'IMPRESSED'].map((text, index) => (
            <div key={index} className="absolute inset-0 h-screen w-screen">
              {/* Background text - opacity changed from opacity-10 to opacity-30 */}
              <div 
                className="absolute text-[20vw] font-bold opacity-30 w-full"
                style={getStaggeredTextStyle(index, scrollProgress)}
              >
                {text}
              </div>
              
              {/* Foreground text remains unchanged */}
              <div 
                className="absolute text-[15vw] font-bold w-full"
                style={getStaggeredTextStyle(index, scrollProgress)}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-[100vh]" />
    </div>
  )
} 