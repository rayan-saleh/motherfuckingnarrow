'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const butElement = document.querySelector('#but-section')
      if (!butElement) return

      const butPosition = butElement.getBoundingClientRect().top
      const isPastBut = butPosition < 0
      setIsVisible(isPastBut)

      if (isPastBut) {
        // Calculate progress starting from the "But..." section
        const butOffset = (butElement as HTMLElement).offsetTop
        const scrolledPastBut = window.scrollY - butOffset
        const remainingScroll = document.documentElement.scrollHeight - butOffset - window.innerHeight
        const currentProgress = Math.min(100, (scrolledPastBut / remainingScroll) * 100)
        setProgress(Math.max(0, currentProgress))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  const text = "I'm not impressed"
  const radius = 38
  
  // Create the circular path for text
  const pathId = "textPath"
  const circumference = 2 * Math.PI * radius
  const visibleLength = (progress / 100) * circumference

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className="relative w-40 h-40">
        {/* Background circle */}
        {/* <div className="absolute inset-0 rounded-full border-4 border-gray-200" /> */}
        
        {/* SVG container */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Define the circular path */}
          <defs>
            <path
              id={pathId}
              d={`M 80,42 A ${radius},${radius} 0 1,1 79.99,42`}
              fill="none"
            />
          </defs>

          {/* Text along the path */}
          <text className="text-sm font-bold">
            <textPath
              href={`#${pathId}`}
              startOffset="0"
              style={{
                opacity: 1
              }}
            >
              {text.split('').map((char, i) => (
                <tspan
                  key={i}
                  style={{
                    opacity: (i / text.length) * circumference <= visibleLength ? 1 : 0,
                    transition: 'opacity 0.3s ease-out'
                  }}
                >
                  {char}
                </tspan>
              ))}
            </textPath>
          </text>

          {/* Progress circle */}
          {/* <circle
            cx="80"
            cy="80"
            r={radius}
            strokeWidth="4"
            fill="none"
            stroke="black"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress / 100)}
            className="transition-all duration-300 ease-out"
          /> */}
        </svg>
      </div>
    </div>
  )
} 