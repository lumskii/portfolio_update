import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

export const Skills = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        {
          name: 'React',
          level: 90,
        },
        {
          name: 'TypeScript',
          level: 85,
        },
        {
          name: 'HTML/CSS',
          level: 95,
        },
        {
          name: 'Next.js',
          level: 80,
        },
      ],
    },
    {
      name: 'Backend',
      skills: [
        {
          name: 'Node.js',
          level: 85,
        },
        {
          name: 'Express',
          level: 80,
        },
        {
          name: 'GraphQL',
          level: 75,
        },
        {
          name: 'REST APIs',
          level: 90,
        },
      ],
    },
    {
      name: 'Other',
      skills: [
        {
          name: 'Git',
          level: 90,
        },
        {
          name: 'Docker',
          level: 70,
        },
        {
          name: 'AWS',
          level: 75,
        },
        {
          name: 'UI/UX Design',
          level: 80,
        },
      ],
    },
  ]

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
      id="skills"
      className="py-20 md:py-32 bg-muted/30 dark:bg-muted/30 w-full relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-tech-grid bg-tech-grid-size opacity-5" />
      
      <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="mb-16 text-center"
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Technical Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Professional Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-electric-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Proficient in modern technologies with a focus on scalable, maintainable solutions
            and industry best practices.
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.name} variants={itemVariants}>
              <Card className="h-full bg-card/60 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-electric-500 transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                        style={{
                          '--progress-background': categoryIndex === 0 ? 'hsl(var(--tech-500))' :
                                                   categoryIndex === 1 ? 'hsl(var(--electric-500))' :
                                                   'hsl(var(--matrix-500))'
                        } as React.CSSProperties}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 