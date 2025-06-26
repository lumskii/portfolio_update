import React from 'react'
import { Link } from 'react-router-dom'
import { MoonIcon, SunIcon, MonitorIcon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export const NavPill: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark')
  }

  return (
    <TooltipProvider>
      <nav className="inline-flex items-center bg-card/95 backdrop-blur-xl border border-border/50 text-foreground rounded-[9999px] h-12 overflow-hidden px-6 mt-[5px] shadow-lg hover:shadow-xl transition-all duration-300">
        <Link
          to="/projects"
          className="px-4 py-2 hover:text-primary hover:bg-muted/80 rounded-full transition-all duration-300 text-sm font-medium relative group"
        >
          Projects
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
        </Link>
        <Link
          to="/about"
          className="px-4 py-2 hover:text-primary hover:bg-muted/80 rounded-full transition-all duration-300 text-sm font-medium relative group"
        >
          About
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
        </Link>
        <Link
          to="/blog"
          className="px-4 py-2 hover:text-primary hover:bg-muted/80 rounded-full transition-all duration-300 text-sm font-medium relative group"
        >
          Blog
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 hover:text-primary hover:bg-muted/80 rounded-full transition-all duration-300 text-sm font-medium relative group"
        >
          Contact
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
        </Link>
        
        <div className="w-px h-6 bg-border mx-2" />
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full hover:bg-muted/80 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon size={16} className="text-electric-500" />
              ) : theme === 'light' ? (
                <MoonIcon size={16} className="text-tech-600" />
              ) : (
                <MonitorIcon size={16} className="text-matrix-600" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch to {theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'} mode</p>
          </TooltipContent>
        </Tooltip>
      </nav>
    </TooltipProvider>
  )
} 