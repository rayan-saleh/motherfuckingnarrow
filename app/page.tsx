'use client'

import CustomCursor from './components/CustomCursor'
import NarrowSection from './components/NarrowSection'
import FullWidthSection from './components/FullWidthSection'
import BottomNarrowSection from './components/BottomNarrowSection'


export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="relative">
        {/* First narrow section */}
        <NarrowSection />
        
        {/* Full-width section */}
        <FullWidthSection />

        <BottomNarrowSection />
      </div>
    </>
  )
}
