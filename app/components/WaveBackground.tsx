'use client'

import { useEffect, useRef } from 'react'

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match parent container
    const setCanvasSize = () => {
      const container = canvas.parentElement
      if (!container) return
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Animation variables
    let animationId: number
    let time = 0

    // Draw function
    const draw = () => {
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Center point
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw multiple circular waves with increased thickness and lighter color
      for (let i = 0; i < 5; i++) {
        const radius = (300 + i * 150) + Math.sin(time + i) * 100
        
        ctx.beginPath()
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 - i * 0.08})`  // Higher base opacity
        ctx.lineWidth = 6  // Much thicker lines
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Lighter grain effect
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 25 - 5  // Adjusted to favor lighter values
        data[i] += noise     // R
        data[i + 1] += noise // G
        data[i + 2] += noise // B
      }
      
      ctx.putImageData(imageData, 0, 0)

      time += 0.02
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  )
} 