import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  number: string
  label: string
}

export const StatsCircle: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const stats: Stat[] = [
    {
      number: '453K',
      label: 'Total lines of code written',
    },
    {
      number: '50+',
      label: 'Projects completed',
    },
    {
      number: '5+',
      label: 'Years of experience',
    },
    {
      number: '99%',
      label: 'Client satisfaction',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [stats.length])

  return (
    <motion.div
      className="w-full aspect-square max-w-[220px] mx-auto"
      initial={{
        opacity: 0,
        y: 32,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <div className="w-full h-full rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center overflow-hidden relative transition-colors duration-300">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          className="text-center px-4"
        >
          <div className="text-5xl font-bold mb-2">
            {stats[currentIndex].number}
          </div>
          <div className="text-sm text-white/80 dark:text-black/80">
            {stats[currentIndex].label}
          </div>
        </motion.div>
        <div className="stats-pagination absolute bottom-6 left-0 right-0 flex justify-center gap-1 z-10">
          {stats.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-white dark:bg-black' : 'bg-white/30 dark:bg-black/30'}`}
              aria-label={`Go to stat ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
} 