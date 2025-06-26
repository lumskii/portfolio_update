import React from 'react'
import { SunIcon, MoonIcon, MonitorIcon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-colors ${theme === 'light' ? 'bg-white dark:bg-gray-700 text-yellow-500 shadow-sm' : 'text-gray-500 hover:text-yellow-500'}`}
        aria-label="Light mode"
      >
        <SunIcon size={20} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-colors ${theme === 'dark' ? 'bg-white dark:bg-gray-700 text-mint-400 shadow-sm' : 'text-gray-500 hover:text-mint-400'}`}
        aria-label="Dark mode"
      >
        <MoonIcon size={20} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-colors ${theme === 'system' ? 'bg-white dark:bg-gray-700 text-blue-500 shadow-sm' : 'text-gray-500 hover:text-blue-500'}`}
        aria-label="System theme"
      >
        <MonitorIcon size={20} />
      </button>
    </div>
  )
} 