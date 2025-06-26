import React from 'react'
import { LogoSquare } from './LogoSquare'
import { NavPill } from './NavPill'

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-[15px] border-t-2 border-black/5">
      <div className="flex items-center w-full mx-auto max-w-[1800px] px-4 md:px-[clamp(16px,4vw,48px)] h-14 box-border gap-8">
        <LogoSquare />
        <NavPill />
      </div>
    </header>
  )
} 