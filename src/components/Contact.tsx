import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react'
import * as emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjs'

export const Contact = () => {
  const controls = useAnimation()
  const formRef = useRef<HTMLFormElement>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Check if EmailJS is configured
    if (!emailjsConfig.templateId || !emailjsConfig.publicKey) {
      setFormStatus('error')
      setStatusMessage('Email service is not configured. Please contact me directly at olusholola@gmail.com')
      setTimeout(() => {
        setFormStatus('idle')
        setStatusMessage('')
      }, 7000)
      return
    }
    
    setFormStatus('sending')
    setStatusMessage('')

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current!,
        emailjsConfig.publicKey
      )

      if (result.text === 'OK') {
        setFormStatus('success')
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.')
        formRef.current?.reset()
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle')
          setStatusMessage('')
        }, 5000)
      }
    } catch (error) {
      setFormStatus('error')
      setStatusMessage('Failed to send message. Please try again or email me directly at olusholola@gmail.com')
      console.error('EmailJS Error:', error)
      
      // Reset status after 7 seconds
      setTimeout(() => {
        setFormStatus('idle')
        setStatusMessage('')
      }, 7000)
    }
  }

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
            ref={formRef}
            onSubmit={handleSubmit}
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
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  formStatus === 'success'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
              >
                {formStatus === 'success' ? (
                  <CheckCircleIcon size={20} />
                ) : (
                  <AlertCircleIcon size={20} />
                )}
                <span>{statusMessage}</span>
              </motion.div>
            )}
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
                  name="user_name"
                  required
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  name="user_email"
                  required
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                name="subject"
                required
                disabled={formStatus === 'sending'}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                name="message"
                rows={5}
                required
                disabled={formStatus === 'sending'}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="bg-blue-600 hover:bg-mint-500 text-gray-50 py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'} <SendIcon size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
} 