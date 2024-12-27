'use client'

import { useRef, useEffect, useState } from 'react'
// import Image from 'next/image'
import dynamic from 'next/dynamic';
// import GlassSphere from '@/app/components/GlassSphere'

// const GlassSphere = dynamic(() => import('./GlassSphere'), {
//   ssr: false,
// });


// Dynamically import your Three.js background component, turning off SSR
const AnimatedGradient = dynamic(() => import('./AnimatedGradient'), {
  ssr: false,
});

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
        transform: 'translateY(30vh)',
        transition: 'all 0.1s ease-out'
      }
    }
    
    return {
      opacity: 0.6,
      transform: 'translateY(0)',
      transition: 'all 0.5s ease-out'
    }
  }

  // const getStaggeredTextStyle = (index: number, scroll: number, isShadow: boolean = false): React.CSSProperties => {
  //   const threshold = index * 0.3;
  //   const opacity = scroll > threshold ? (isShadow ? 0.5 : 1) : 0;
  //   const y = scroll > threshold ? 0 : 100;
    
  //   const positions = [
  //     { x: '10%', y: '10%' },
  //     { x: '20%', y: '80%' },
  //     { x: '30%', y: '130%' },
  //   ];

  //   return {
  //     opacity,
  //     transform: `translate(${positions[index].x}, ${positions[index].y}) translateY(${y}px)`,
  //     transition: 'all 0.5s ease-out',
  //     position: 'absolute' as const,
  //     left: 0,
  //     top: 0
  //   };
  // };

  // const [scrollProgress, setScrollProgress] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const section = document.getElementById('staggered-section');
  //     if (!section) return;

  //     const rect = section.getBoundingClientRect();
  //     const viewportHeight = window.innerHeight;
      
  //     if (rect.top <= viewportHeight) {
  //       const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
  //       setScrollProgress(Math.max(0, Math.min(1, progress)));
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      <div className="w-full relative">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="w-full h-[150vh]"
        >
          <path
            d="M50,0 C50,20 20,35 0,40 L100,40 C80,35 50,20 50,0"
            fill="black"  
          />
        </svg>
      </div>
      <div className="relative pt-48 bg-black text-white min-h-screen w-full overflow-x-clip">
        <div ref={marqueeRef} className="relative overflow-hidden whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <h2 
              key={i} 
              className="text-[20vw] font-semibold marquee-text inline-block text-[#fffaf6] relative z-10"
              style={{
                textShadow: '0 0 100px rgba(255, 206, 166, 0.8), 0 0 150px rgba(255, 200, 166, 0.6), 0 0 120px rgba(255, 180, 110, 0.4)'
              }}
            >
              WE'RE NOT IMPRESSED &nbsp; &nbsp;
            </h2>
            
          ))}
        </div>
        
        <div className="relative px-8 py-24">
          <div className="text-[8vw] font-bold opacity-50 transform -rotate-3">
            so much effort
          </div>
          <div className="text-[6vw] font-bold opacity-30 transform rotate-2">
            for such little information
          </div>
        </div>

        <div ref={imageRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen">
            <div className="absolute inset-0" />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              {['THIS IS WHY', 'WE CAN\'T HAVE', 'NICE THINGS'].map((text, index) => (
                <h2 
                  key={index}
                  className="text-[14vw] opacity-90 font-black text-white text-center absolute tracking-tight leading-none mix-blend-difference"
                  style={getTextStyle(index)}
                >
                  {text}
                </h2>
              ))}
            </div>
            <AnimatedGradient />
          </div>
        </div>
        
        {/* <div id="staggered-section" className="relative h-[200vh]">
          <div className="sticky top-0 h-screen overflow-hidden">
            {['THIS', 'SHIT', 'SUCKS'].map((text, index) => (
              <div key={index} className="absolute inset-0 h-screen w-screen">
                <div 
                  className="absolute font-black text-[18vw] w-full"
                  style={{
                    ...getStaggeredTextStyle(index, scrollProgress, true),
                    transform: `${getStaggeredTextStyle(index, scrollProgress).transform} translateZ(-10px)`,
                  }}
                >
                  {text}
                </div>
                <div 
                  className="absolute text-[16vw] font-bold w-full"
                  style={getStaggeredTextStyle(index, scrollProgress)}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div> */}
        
        {/* <div className="h-[100vh]" /> */}
      </div>
    </>
  )
} 