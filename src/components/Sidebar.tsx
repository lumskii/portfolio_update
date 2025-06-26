import React from 'react'
import { StatsCircle } from './StatsCircle'
import { BlogTallCard } from './BlogTallCard'

export const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 h-full">
      <StatsCircle />
      <BlogTallCard />
    </div>
  )
} 