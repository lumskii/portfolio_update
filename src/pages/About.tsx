import React from 'react'
import { Helmet } from 'react-helmet'
import { About as AboutSection } from '../components/About'

export function About() {
  return (
    <>
      <Helmet>
        <title>About - DevPortfolio</title>
        <meta
          name="description"
          content="Learn more about my journey, skills, and experience as a software developer"
        />
      </Helmet>
      <div className="pt-20">
        <AboutSection />
      </div>
    </>
  )
} 