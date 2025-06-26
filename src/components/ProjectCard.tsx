import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveLink?: string
  githubLink?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveLink,
  githubLink,
}) => {
  return (
    <motion.div
      className="group relative bg-gray-900/50 rounded-lg overflow-hidden"
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-mint-400/20 text-mint-400 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mint-400 hover:bg-mint-500 text-gray-900 text-sm py-1 px-3 rounded-full flex items-center gap-1 transition-colors"
            >
              <ExternalLinkIcon size={14} /> Live
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-3 rounded-full flex items-center gap-1 transition-colors"
            >
              <GithubIcon size={14} /> Code
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-gray-400 text-xs">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
} 