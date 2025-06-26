import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Contact } from './pages/Contact'
import { Helmet } from 'react-helmet'

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <title>DevPortfolio - Software Developer</title>
          <meta
            name="description"
            content="Professional software developer portfolio showcasing projects and expertise in web development"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Layout>
                      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
} 