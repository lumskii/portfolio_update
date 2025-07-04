import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const About = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  }

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[var(--clr-bg-subtle)] dark:bg-gray-900 w-full"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-mint-500 dark:bg-mint-400 mx-auto"></div>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="md:w-1/3 lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-warm-yellow-400 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg overflow-hidden aspect-square">
                <img
                  src="https://www.dropbox.com/scl/fi/v6bu4bgv70uk1p4drrot4/my-img2-1.png?rlkey=8ocns87js2w88fo8qw9k004pw&st=mkwizjat&raw=1"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover mix-blend-overlay opacity-75"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.3,
                },
              },
            }}
            className="md:w-2/3 lg:w-3/5"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-mint-400">
              Who I Am
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              Hello, my name is Michael Sholola(Mike). I'm a passionate software developer with a keen eye for creating
              elegant, user-centered digital experiences. With a background in
              computer science and a love for clean, efficient code, I build
              solutions that are both technically robust and intuitively usable.
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              My journey in software development began 5 years ago, and since
              then I've worked across various domains including web
              applications, mobile development, and cloud services. I'm
              constantly learning and adapting to new technologies, with a
              current focus on React, TypeScript, and cloud architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-purple-900/30 border border-purple-500/30 px-6 py-3 rounded-lg">
                <h4 className="text-xl font-semibold mb-1">5+</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="bg-purple-900/30 border border-purple-500/30 px-6 py-3 rounded-lg">
                <h4 className="text-xl font-semibold mb-1">50+</h4>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-purple-900/30 border border-purple-500/30 px-6 py-3 rounded-lg">
                <h4 className="text-xl font-semibold mb-1">20+</h4>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 