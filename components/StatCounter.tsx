'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: string
  label: string
  suffix?: string
}

export function StatCounter({ value, label, suffix = '+' }: StatCounterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const target = parseInt(value.replace(/,/g, ''), 10)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, target])

  const formatted = new Intl.NumberFormat('en-US').format(isVisible ? count : target)

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
        {formatted}
        <span className="text-copper-light">{suffix}</span>
      </div>
      <div className="mt-2 text-sm sm:text-base text-gray-300 font-body">{label}</div>
    </div>
  )
}
