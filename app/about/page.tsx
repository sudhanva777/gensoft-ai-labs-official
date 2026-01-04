'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Lightbulb, Code2, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay at the forefront of technology, continuously learning and adopting the best tools and practices.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality',
    description: 'Every line of code is written with care. We build systems that are reliable, secure, and maintainable.',
  },
  {
    icon: Code2,
    title: 'Real Implementation',
    description: 'We focus on building production-ready solutions, not just prototypes or demos.',
  },
  {
    icon: Target,
    title: 'Partnership',
    description: 'We work closely with our clients, understanding their needs and delivering solutions that truly fit.',
  },
]

const expertise = [
  'AI-powered automation systems',
  'Data analytics and business intelligence platforms',
  'Scalable web applications and APIs',
  'Administrative dashboards and management systems',
  'E-commerce and digital storefronts',
  'Custom software solutions for specific industries',
]

const approach = [
  { strong: 'Thorough Planning:', text: 'We understand requirements deeply before writing code.' },
  { strong: 'Best Practices:', text: 'Clean code, proper architecture, and industry standards.' },
  { strong: 'Testing & Quality:', text: 'Rigorous testing ensures reliability and performance.' },
  { strong: 'Documentation:', text: 'Clear documentation for maintainability and handover.' },
  { strong: 'Support:', text: 'Ongoing support to ensure your software continues to serve you well.' },
]

export default function About() {
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
              <h1 className="heading-1 mb-4">About GENSOFT AI LABS</h1>
              <p className="text-xl text-gray-600">
                Engineering intelligent software solutions for the real world
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="space-y-12">
              {/* Who We Are */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-2 mb-4">Who We Are</h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  GENSOFT AI LABS is a technology company dedicated to building real-world, scalable, 
                  production-ready digital solutions. We combine artificial intelligence, machine learning, 
                  and modern software engineering to create systems that solve actual problems for real 
                  organizations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're not just developers—we're engineers who understand that software must be reliable, 
                  maintainable, and built to scale. Every project we undertake is approached with the 
                  seriousness and professionalism that production systems demand.
                </p>
              </motion.div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="card"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="text-blue-600" size={24} />
                  </div>
                  <h2 className="heading-3 mb-3">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses, institutions, and organizations with intelligent software solutions 
                    that drive efficiency, innovation, and growth. We believe technology should solve real 
                    problems and deliver tangible value.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="card"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="text-indigo-600" size={24} />
                  </div>
                  <h2 className="heading-3 mb-3">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To be recognized as a trusted partner for organizations seeking to leverage AI and modern 
                    software engineering. We envision a future where intelligent systems seamlessly integrate 
                    into operations, making businesses more efficient and decision-making more data-driven.
                  </p>
                </motion.div>
              </div>

              {/* Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-2 mb-6">What We Stand For</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon
                    return (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="card card-hover"
                      >
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="text-blue-600" size={24} />
                        </div>
                        <h3 className="heading-3 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-2 mb-4">Our Expertise</h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Our team specializes in artificial intelligence, machine learning, data science, and 
                  full-stack web development. We have experience building:
                </p>
                <ul className="space-y-2">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-start text-gray-600">
                      <span className="text-blue-600 mr-2">→</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card bg-gray-50"
              >
                <h2 className="heading-2 mb-4">Our Approach</h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  We approach every project as a serious engineering endeavor. This means:
                </p>
                <ul className="space-y-3">
                  {approach.map((item) => (
                    <li key={item.strong} className="text-gray-600">
                      <strong className="text-gray-900">{item.strong}</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white"
            >
              <h2 className="heading-2 text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help build your next software solution.
              </p>
              <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center">
                Start a Conversation
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

