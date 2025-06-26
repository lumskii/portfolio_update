import React, { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.set('body', {
      clearProps: 'all',
    })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[var(--clr-bg)] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="fixed top-0 left-0 w-[100vw] h-[15px] bg-[var(--clr-bg)] dark:bg-black z-40 transition-colors duration-300" />
      <Header />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  )
} 