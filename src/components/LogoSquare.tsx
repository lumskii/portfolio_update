import React from 'react'
import { Link } from 'react-router-dom'

export const LogoSquare: React.FC = () => {
  return (
    <div className="relative w-16 h-16">
      <Link
        to="/"
        className="block absolute w-[100px] h-[100px] -top-[25%] -left-[25%]"
      >
        <div className="relative w-full h-full">
          <div className="w-full h-full bg-[var(--clr-bg-subtle)] dark:bg-slate-900/90 rounded-tl-[42px] rounded-br-[42px] backdrop-blur-md transition-all duration-300 shadow-[3px_3px_5px_0px_rgba(100,98,98,0.75)] dark:shadow-[3px_3px_5px_0px_rgba(200,200,200,0.2)]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
            <div className="w-full h-full border-2 border-[var(--clr-text)] dark:border-white rounded-[62px] flex items-center justify-center">
              <span className="font-bold text-3xl text-[var(--clr-text)] dark:text-white">
                MS
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
} 