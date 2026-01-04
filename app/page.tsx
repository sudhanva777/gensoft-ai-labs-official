'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Database, Globe, Settings, ShoppingCart, BarChart3 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems that learn, adapt, and automate complex processes',
  },
  {
    icon: Database,
    title: 'Data Science & Analytics',
    description: 'Transform data into actionable insights and strategic decisions',
  },
  {
    icon: Globe,
    title: 'Full-Stack Development',
    description: 'Complete web applications from frontend to backend infrastructure',
  },
  {
    icon: Settings,
    title: 'Admin Dashboards',
    description: 'Powerful management systems for institutions and businesses',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Shop websites, buying menus, and digital storefronts',
  },
  {
    icon: BarChart3,
    title: 'Business Platforms',
    description: 'Custom software solutions tailored to your operational needs',
  },
]

const features = [
  {
    number: '01',
    title: 'Production-Ready Solutions',
    description: 'We build scalable systems designed for real-world deployment, not just prototypes.',
  },
  {
    number: '02',
    title: 'AI-Powered Intelligence',
    description: 'Leverage cutting-edge AI and ML to automate and optimize your operations.',
  },
  {
    number: '03',
    title: 'End-to-End Development',
    description: 'From concept to deployment, we handle every aspect of your project.',
  },
  {
    number: '04',
    title: 'Custom Solutions',
    description: 'Every project is tailored to your specific requirements and business goals.',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative w-16 h-16 md:w-20 md:h-20">
                    <Image
                      src="/branding/logo.png"
                      alt="GENSOFT AI LABS Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h1 className="heading-1">GENSOFT AI LABS</h1>
                </div>
                <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
                  Engineering Intelligent Software
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  We help students, businesses, and institutions build AI-powered systems, 
                  admin dashboards, and custom software solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  From initial concept to production deployment, we deliver end-to-end 
                  software development with intelligent automation and modern engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                    Start Your Project
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
                    Contact Us
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                      >
                        <div className="h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Can We Build for You */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">What Can We Build for You?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our solutions and find the perfect fit for your project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href="/contact" className="card card-hover block h-full">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <h3 className="heading-3 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <span className="text-blue-600 font-semibold text-sm inline-flex items-center">
                        Get Started <ArrowRight className="ml-1" size={16} />
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Why GENSOFT AI LABS</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-blue-600 font-heading">
                      {feature.number}
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white"
            >
              <h2 className="heading-2 text-white mb-4">Ready to Build Your Solution?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and bring your vision to life.
              </p>
              <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

