'use client'

import CustomCursor from './components/CustomCursor'
import NarrowSection from './components/NarrowSection'
import FullWidthSection from './components/FullWidthSection'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="relative">
        {/* First narrow section */}
        <NarrowSection />
        
        {/* Full-width section */}
        <FullWidthSection />
        
        {/* Final narrow section (you can create another component for this if needed) */}
        <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 max-w-xl mx-auto">
          <p className="text-xl">
            And that's why narrow websites are better.
          </p>
        </div>
      </div>
    </>
  )
}
