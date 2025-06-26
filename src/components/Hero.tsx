import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownIcon, Code2Icon, TerminalIcon, GitBranchIcon } from 'lucide-react'
import { HeroFrame } from './HeroFrame'
import { Sidebar } from './Sidebar'
import { Badge } from '@/components/ui/badge'
import '../styles/tokens.css'

export const Hero = () => {
  return (
    <section className="min-h-screen bg-background dark:bg-background overflow-hidden mt-[16px] transition-colors duration-300 relative">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-tech-grid bg-tech-grid-size opacity-30 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-tech-50/50 via-transparent to-electric-50/30 dark:from-neural-950/50 dark:via-transparent dark:to-tech-950/30" />
      <div className="relative w-full pb-16">
        <main className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-4 md:gap-[.6em] max-w-[1800px] mx-auto px-4 md:px-[clamp(16px,4vw,48px)] mt-[5px]">
          <div className="flex flex-col min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-8rem)] relative">
            <HeroFrame />
            <motion.div
              className="bg-card/95 dark:bg-card/95 backdrop-blur-xl rounded-[var(--radius-soft)] p-6 md:p-8 border border-border/50 shadow-lg hover:shadow-xl relative md:absolute bottom-0 z-10 w-full md:max-w-[36ch] transition-all duration-300 mt-4 md:mt-0 md:mb-[-15px] md:ml-[-25px] group"
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.19, 1.0, 0.22, 1.0],
                delay: 0.2,
              }}
            >
              {/* Professional badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-tech-100 text-tech-800 dark:bg-tech-900 dark:text-tech-100 border-tech-200 dark:border-tech-800">
                  <Code2Icon className="w-3 h-3 mr-1" />
                  Full-Stack
                </Badge>
                <Badge variant="secondary" className="bg-electric-100 text-electric-800 dark:bg-electric-900 dark:text-electric-100 border-electric-200 dark:border-electric-800">
                  <TerminalIcon className="w-3 h-3 mr-1" />
                  DevOps
                </Badge>
                <Badge variant="secondary" className="bg-matrix-100 text-matrix-800 dark:bg-matrix-900 dark:text-matrix-100 border-matrix-200 dark:border-matrix-800">
                  <GitBranchIcon className="w-3 h-3 mr-1" />
                  5+ Years
                </Badge>
              </div>
              
              <h1 className="text-foreground text-[clamp(28px,5vw,48px)] md:text-[clamp(32px,4vw,48px)] leading-[1.2] md:leading-[1.1] font-bold transition-colors duration-300 group-hover:text-primary">
                Professional Software
                <span className="block text-primary font-extrabold bg-gradient-to-r from-primary to-electric-500 bg-clip-text text-transparent">
                  Developer & Architect
                </span>
              </h1>
              
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Building scalable, maintainable solutions with modern technologies and best practices.
              </p>
            </motion.div>
          </div>
          <Sidebar />
        </main>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDownIcon
            className="text-slate-600 hover:text-slate-900 dark:text-white/50 dark:hover:text-white/90 transition-colors cursor-pointer"
            size={24}
          />
        </motion.div>
      </div>
    </section>
  )
} 