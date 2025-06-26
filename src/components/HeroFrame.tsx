import React from 'react'
import { motion } from 'framer-motion'

export const HeroFrame: React.FC = () => {
  return (
    <motion.div
      className="w-full h-[calc(100vh)] rounded-[24px] overflow-hidden relative -mt-[calc(3.5rem+10px)]"
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
      <div
        className="absolute inset-0 bg-gradient-to-br from-neural-900 via-tech-900 to-electric-800 bg-[length:400%_400%] w-full h-full rounded-[24px] relative overflow-hidden"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      >
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 bg-tech-grid bg-tech-grid-size opacity-20" />
        
        {/* Glowing accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-400 to-transparent animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-matrix-400 to-transparent animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        {/* Professional code-like elements */}
        <div className="absolute top-[13em] left-8 text-electric-400/30 font-mono text-xs opacity-50">
          <div>const developer = {`{`}</div>
          <div className="ml-4">name: "Professional",</div>
          <div className="ml-4">experience: "5+ years",</div>
          <div className="ml-4">stack: ["React", "Node.js", "TypeScript"]</div>
          <div>{`}`};</div>
        </div>
      </div>
    </motion.div>
  )
} 