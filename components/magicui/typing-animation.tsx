'use client'

import { cn } from '@/lib/utils'
import { motion, MotionProps } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface TypingAnimationProps extends MotionProps {
  children: string
  className?: string
  duration?: number
  delay?: number
  as?: React.ElementType
  startOnView?: boolean
}
const TypingAnimation = ({
  children,
  className = '',
  duration = 100,
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started || !children) return

    let i = 0
    let isDeleting = false
    let pauseCounter = 0

    const typingEffect = setInterval(() => {
      // When typing
      if (!isDeleting && i < children.length) {
        setDisplayedText(children.substring(0, i + 1))
        i++
        // When finished typing
        if (i === children.length) {
          isDeleting = true
          pauseCounter = 20 // Add pause before deleting
        }
      }
      // When pausing
      else if (pauseCounter > 0) {
        pauseCounter--
      }
      // When deleting
      else if (isDeleting && i > 0) {
        setDisplayedText(children.substring(0, i - 1))
        i--
        // When finished deleting
        if (i === 0) {
          isDeleting = false
          pauseCounter = 5 // Add pause before typing again
        }
      }
    }, duration)

    return () => clearInterval(typingEffect)
  }, [children, duration, started])

  return (
    <div className={`inline-block font-bold ${className}`}>{displayedText}</div>
  )
}
