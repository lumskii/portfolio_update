import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import { Badge } from '@/components/ui/badge'

export const BlogTallCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get the latest 3 blog posts for the carousel
  const posts = blogPosts.slice(0, 3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [posts.length])

  const currentPost = posts[currentIndex]

  return (
    <motion.div
      className="w-full flex-1 rounded-[var(--radius-soft)] overflow-hidden bg-gradient-to-br from-tech-600 to-electric-700 text-white shadow-lg"
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
      <div className="h-full relative">
        <Link to={`/blog/${currentPost.id}`} className="block h-full">
          <div className="h-full transition-all duration-500 group cursor-pointer">
            <div className="p-4 pb-0">
              {/* Featured badge */}
              {currentPost.featured && (
                <div className="mb-3">
                  <Badge className="bg-electric-500 text-white border-0">Featured</Badge>
                </div>
              )}
              
              <div className="rounded-[24px] overflow-hidden aspect-square mb-4 relative">
                <img
                  src={currentPost.image}
                  alt={currentPost.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
                    {currentPost.category}
                  </Badge>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-3 leading-tight group-hover:text-electric-200 transition-colors">
                {currentPost.title}
              </h3>
              
              {/* Post meta */}
              <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-3 h-3" />
                  {new Date(currentPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-3 h-3" />
                  {currentPost.readTime}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-white/80 mt-auto mb-4 group-hover:text-white transition-colors">
                Read Article <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
        
        <div className="blog-pagination flex justify-center gap-1 h-8 items-center">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
} 