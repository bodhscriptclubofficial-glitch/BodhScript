'use client'

import { cn } from '@/lib/utils'
import React from 'react'

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  return (
    <div
      className={cn(
        'relative h-[40rem] flex items-center bg-black dark:bg-white justify-center w-full',
        containerClassName
      )}
    >
      {/* SVG Dot Grid Background */}
      <div className="absolute inset-0 bg-[url('/dot-grid.svg')] opacity-40 dark:opacity-20 pointer-events-none" />

      {/* Text Content */}
      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  )
}
