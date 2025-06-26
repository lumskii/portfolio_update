import React, { useEffect, useState, useMemo } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])



  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with product catalog, cart functionality, and secure checkout.',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A productivity app for managing tasks, projects, and team collaboration with real-time updates.',
      image:
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
      tags: ['React', 'Firebase', 'Material UI', 'Redux'],
      category: 'frontend',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
    },
    {
      id: 3,
      title: 'Finance API',
      description:
        'RESTful API for financial data processing and analysis with comprehensive documentation.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
      category: 'backend',
      githubLink: 'https://github.com/example',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description:
        'Interactive weather dashboard with location-based forecasts, historical data, and visualizations.',
      image:
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'D3.js', 'Weather API', 'Styled Components'],
      category: 'frontend',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
    },
    {
      id: 5,
      title: 'Social Media Backend',
      description:
        'Scalable backend system for a social media platform with user authentication, content management, and analytics.',
      image:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      tags: ['Node.js', 'GraphQL', 'MongoDB', 'Redis'],
      category: 'backend',
      githubLink: 'https://github.com/example',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description:
        'Personal portfolio website with animated sections, project showcase, and contact form.',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Netlify'],
      category: 'frontend',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/example',
    },
  ]

  const filteredProjects = useMemo(() => {
    console.log('Filtering projects with filter:', filter) // Debug log
    if (filter === 'all') {
      return projects
    }
    const filtered = projects.filter((project) => project.category === filter)
    console.log('Filtered projects:', filtered.length) // Debug log
    return filtered
  }, [filter, projects])

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-muted/30 dark:bg-muted/30 w-full relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-tech-grid bg-tech-grid-size opacity-5" />
      
      <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Professional Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-electric-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Explore some of my recent projects. Each one represents unique
            challenges and solutions using modern technologies.
          </p>
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
              <button
                key={category}
                onClick={(e) => {
                  e.preventDefault()
                  console.log('Filter clicked:', category) // Debug log
                  setFilter(category)
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                    : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Debug info */}
          <div className="text-center mb-4 text-sm text-muted-foreground">
            Current filter: {filter} | Projects found: {filteredProjects.length}
          </div>
        </motion.div>
        <motion.div
          key={filter} // Add key to force re-render when filter changes
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 