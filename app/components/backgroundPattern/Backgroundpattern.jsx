"use client"
import React from 'react'

export default function Backgroundpattern() {
  return (
    <div  >
    
    <div className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent,hsl(var(--background)))]"></div>
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-muted-foreground/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    
    
    
   
   
  </div>

  )
}
