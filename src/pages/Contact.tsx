import React from 'react'
import { Helmet } from 'react-helmet'
import { Contact as ContactSection } from '../components/Contact'

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - DevPortfolio</title>
        <meta
          name="description"
          content="Get in touch with me for collaboration opportunities or inquiries"
        />
      </Helmet>
      <div className="pt-20">
        <ContactSection />
      </div>
    </>
  )
} 