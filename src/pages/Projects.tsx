import React from 'react'
import { Helmet } from 'react-helmet'
import { Projects as ProjectsSection } from '../components/Projects'

export function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects - DevPortfolio</title>
        <meta
          name="description"
          content="Explore my portfolio of web development and software engineering projects"
        />
      </Helmet>
      <div className="pt-20">
        <ProjectsSection />
      </div>
    </>
  )
} 