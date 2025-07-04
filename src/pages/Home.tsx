import React from 'react'
import { Helmet } from 'react-helmet'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <Helmet>
        <title>MikeSho - Software Developer</title>
        <meta
          name="description"
          content="Professional software developer portfolio showcasing expertise in web development and software engineering"
        />
      </Helmet>
      <div className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
} 