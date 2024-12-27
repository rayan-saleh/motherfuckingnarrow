'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setTimeout(() => {
        setTrailingPosition({ x: e.clientX, y: e.clientY })
      }, 100)
    }

    const handleScroll = () => {
      const butElement = document.querySelector('#but-section')
      const bottomNarrowSection = document.querySelector('#bottom-narrow-section')
      if (!butElement || !bottomNarrowSection) return
      
      const butPosition = butElement.getBoundingClientRect().top
      const bottomPosition = bottomNarrowSection.getBoundingClientRect().top
      
      // Show cursor between "but" section and bottom narrow section
      const isPastBut = butPosition < 0
      const isBeforeBottom = bottomPosition > 0
      const shouldShowCursor = isPastBut && isBeforeBottom
      
      setIsVisible(shouldShowCursor)
      document.body.setAttribute('data-past-but', shouldShowCursor.toString())
    }

    handleScroll()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      document.body.removeAttribute('data-past-but')
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div 
        className="fixed w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="fixed w-8 h-8 border border-white rounded-full pointer-events-none z-40"
        style={{ 
          left: `${trailingPosition.x}px`, 
          top: `${trailingPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.2s ease-out'
        }}
      />
    </>
  )
} 