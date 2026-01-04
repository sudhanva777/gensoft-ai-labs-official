'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Layout, Code, TestTube, Rocket, Headphones } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Requirement Discussion',
    description: 'We begin by understanding your vision, goals, and specific requirements. Through detailed discussions, we identify the problem you're solving, your target users, and the desired outcomes. This phase ensures we're aligned on expectations and project scope.',
    details: [
      'Initial consultation and discovery',
      'Requirements gathering and documentation',
      'Stakeholder alignment',
      'Project scope definition',
    ],
  },
  {
    number: '02',
    icon: Layout,
    title: 'Planning & Design',
    description: 'With requirements in hand, we create a comprehensive project plan and design architecture. This includes system design, database schemas, user interface mockups, and technical specifications. We plan for scalability, security, and maintainability from the start.',
    details: [
      'System architecture design',
      'UI/UX wireframes and mockups',
      'Technology stack selection',
      'Project timeline and milestones',
    ],
  },
  {
    number: '03',
    icon: Code,
    title: 'Development',
    description: 'Our development phase follows agile methodologies with regular updates and iterative improvements. We build using modern technologies, best practices, and clean code principles. Throughout development, we maintain clear communication and provide progress updates.',
    details: [
      'Agile development methodology',
      'Regular progress updates',
      'Code reviews and quality assurance',
      'Feature implementation and integration',
    ],
  },
  {
    number: '04',
    icon: TestTube,
    title: 'Testing',
    description: 'Quality assurance is integral to our process. We conduct thorough testing including unit tests, integration tests, and user acceptance testing. We ensure the software is bug-free, performs well, and meets all specified requirements before deployment.',
    details: [
      'Unit and integration testing',
      'Performance and security testing',
      'User acceptance testing (UAT)',
      'Bug fixes and refinements',
    ],
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deployment',
    description: 'We handle the complete deployment process, setting up hosting, configuring servers, and ensuring everything runs smoothly in production. We provide documentation and training to ensure you can manage and use the system effectively.',
    details: [
      'Production environment setup',
      'Database migration and configuration',
      'Domain and hosting configuration',
      'Documentation and handover',
    ],
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Support',
    description: 'Our relationship doesn't end at deployment. We provide ongoing support, maintenance, and optimization services. Whether you need bug fixes, feature enhancements, or system updates, we're here to ensure your software continues to serve your needs effectively.',
    details: [
      'Post-deployment support',
      'Bug fixes and maintenance',
      'Feature enhancements',
      'Performance optimization',
    ],
  },
]

const benefits = [
  {
    title: 'Clear Communication',
    description: 'Regular updates and transparent communication keep you informed at every stage.',
  },
  {
    title: 'Quality Focus',
    description: 'Rigorous testing and code quality standards ensure reliable, maintainable software.',
  },
  {
    title: 'Scalable Architecture',
    description: 'We design systems that grow with your business and handle increasing demands.',
  },
  {
    title: 'Ongoing Partnership',
    description: 'Long-term support ensures your software evolves with your changing needs.',
  },
]

export default function HowWeWork() {
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
              <h1 className="heading-1 mb-4">How We Work</h1>
              <p className="text-xl text-gray-600">
                Our proven process for delivering successful software solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card border-l-4 border-l-blue-600"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl font-bold text-blue-600 font-heading">
                            {step.number}
                          </div>
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="text-blue-600" size={24} />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="heading-3 mb-3">{step.title}</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start text-gray-600">
                              <span className="text-blue-600 mr-2">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Why Our Process Works</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card card-hover"
                >
                  <h3 className="heading-3 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              <h2 className="heading-2 text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's begin with a discussion about your requirements and goals.
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

