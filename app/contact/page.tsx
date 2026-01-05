'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Clock, FileText, Users, Settings, Calendar, Loader2, Shield, CheckCircle, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    // Validate form
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      setError('Please fill in all required fields.')
      setIsLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.')
      setIsLoading(false)
      return
    }

    try {
      // Send POST request to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success - reset form and show success message
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const infoCards = [
    {
      icon: FileText,
      title: 'Project Description',
      description: 'Describe what you want to build and the problem it solves.',
    },
    {
      icon: Users,
      title: 'Target Users',
      description: 'Who will use your software? Students, businesses, customers?',
    },
    {
      icon: Settings,
      title: 'Key Features',
      description: 'List the main features and functionality you need.',
    },
    {
      icon: Calendar,
      title: 'Timeline',
      description: 'When do you need the project completed?',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="heading-1 mb-4">Get In Touch</h1>
              <p className="text-xl text-gray-600">
                Tell us what you want to build. We're here to help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-2 mb-4">Let's Start Your Project</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you're a student with an academic project, a startup building your MVP, 
                  or a business looking to automate operations, we're ready to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:ailabsgensoftx@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        ailabsgensoftx@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:+918861836384"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        +91 88618 36384
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                      <p className="text-gray-600">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="card">
                  {!isSubmitted ? (
                    <>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                            <p className="text-sm">{error}</p>
                          </div>
                        )}
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="+91 12345 67890"
                          />
                        </div>

                        <div>
                          <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                          >
                            <option value="">Select a project type</option>
                            <option value="ai-ml">AI & Machine Learning</option>
                            <option value="data-science">Data Science & Analytics</option>
                            <option value="web-development">Full-Stack Web Development</option>
                            <option value="admin-dashboard">Admin Dashboard & Management</option>
                            <option value="hostel-mess">Hostel & Mess Platform</option>
                            <option value="ecommerce">Shop & Store Website</option>
                            <option value="business">Business & Advertising Website</option>
                            <option value="custom">Custom Software Development</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                            Project Details *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-vertical"
                            placeholder="Tell us about your project requirements, goals, timeline, and any specific features you need..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </form>
                      
                      {/* Trust Indicators */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="text-blue-600" size={18} />
                            <span>We typically respond within 24 hours</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Shield className="text-blue-600" size={18} />
                            <span>Your information is secure and confidential</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="text-blue-600" size={18} />
                            <span>No spam. No hidden charges.</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="heading-3 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">What to Include in Your Message</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infoCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card card-hover"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="heading-3 mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* WhatsApp Community Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="card bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle size={32} />
                  </div>
                  <h2 className="heading-2 text-white mb-3">Join Our WhatsApp Community</h2>
                  <p className="text-white/90 mb-6 text-lg">
                    Connect with us and other clients in our WhatsApp community. Get updates, share ideas, and stay connected.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/JxrkoHpUvde0zE5tKumptH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#25D366] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Join WhatsApp Group
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
