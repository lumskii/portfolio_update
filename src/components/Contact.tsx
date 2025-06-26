import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react'

export const Contact = () => {
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
    <section id="contact" className="py-20 md:py-32 bg-black w-full">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-mint-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Interested in working together or have a question? Feel free to
            reach out. I'm always open to discussing new projects, creative
            ideas, or opportunities.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="md:w-1/3 space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <div className="bg-warm-yellow-600/20 p-3 rounded-lg">
                <MailIcon className="text-warm-yellow-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-gray-400">olusholola@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <div className="bg-warm-yellow-600/20 p-3 rounded-lg">
                <PhoneIcon className="text-warm-yellow-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+1 (602) 492-1281</p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <div className="bg-warm-yellow-600/20 p-3 rounded-lg">
                <MapPinIcon className="text-warm-yellow-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Phoenix, AZ</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.form
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
            className="md:w-2/3 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-mint-500 text-gray-50 py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Send Message <SendIcon size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
} 