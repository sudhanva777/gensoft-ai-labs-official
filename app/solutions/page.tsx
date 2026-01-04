'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Building2, Home, Utensils, BarChart3, Target } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: GraduationCap,
    title: 'Student & Academic Projects',
    category: 'For Students & Educational Institutions',
    description: 'Custom software solutions for academic projects, research tools, and educational platforms. From thesis management systems to learning analytics platforms, we help students and institutions leverage technology for academic excellence.',
    features: [
      'Research data management systems',
      'Academic project portals',
      'Student information systems',
      'Assignment and grading platforms',
      'Collaborative learning tools',
    ],
  },
  {
    icon: Building2,
    title: 'College & Institution Management Systems',
    category: 'For Educational Institutions & Administrators',
    description: 'Comprehensive management platforms for colleges and institutions. Streamline operations, manage students, faculty, courses, and resources with integrated administrative dashboards.',
    features: [
      'Student enrollment and records',
      'Faculty and staff management',
      'Course scheduling systems',
      'Fee and payment management',
      'Attendance and grade tracking',
    ],
  },
  {
    icon: Home,
    title: 'Hostel & Mess Digital Systems',
    category: 'For Hostel Management & Residents',
    description: 'Digital transformation for hostel and mess operations. Modern platforms for menu display, meal booking, payment processing, and administrative management.',
    features: [
      'Digital menu boards and displays',
      'Online meal booking system',
      'Automated billing and payments',
      'Resident portal and notifications',
      'Inventory and supply management',
    ],
  },
  {
    icon: Utensils,
    title: 'Shop & Restaurant Websites',
    category: 'For Shop Owners & Restaurant Businesses',
    description: 'Professional online presence for shops and restaurants. Create digital storefronts with product catalogs, online ordering, and seamless customer experiences.',
    features: [
      'Product catalog and menu display',
      'Online ordering and reservations',
      'Payment gateway integration',
      'Inventory management',
      'Customer account management',
    ],
  },
  {
    icon: BarChart3,
    title: 'Business Automation & Dashboards',
    category: 'For Businesses & Organizations',
    description: 'Automate workflows and gain insights with powerful business dashboards. Monitor KPIs, track performance, and make data-driven decisions with real-time analytics.',
    features: [
      'Workflow automation systems',
      'Real-time analytics dashboards',
      'KPI monitoring and reporting',
      'Process optimization tools',
      'Integration with existing systems',
    ],
  },
  {
    icon: Target,
    title: 'Advertising & Lead Generation Platforms',
    category: 'For Businesses & Marketers',
    description: 'Convert visitors into customers with optimized websites and landing pages. Generate leads, showcase services, and grow your business with professional digital platforms.',
    features: [
      'Lead capture forms and funnels',
      'SEO-optimized business websites',
      'Portfolio and showcase platforms',
      'Marketing automation integration',
      'Analytics and conversion tracking',
    ],
  },
]

const approach = [
  {
    number: '1',
    title: 'Understand the Problem',
    description: 'We start by deeply understanding your challenges, workflows, and objectives.',
  },
  {
    number: '2',
    title: 'Design the Solution',
    description: 'Create a tailored solution architecture that addresses your specific needs.',
  },
  {
    number: '3',
    title: 'Build & Deploy',
    description: 'Develop production-ready software with best practices and modern technologies.',
  },
  {
    number: '4',
    title: 'Support & Optimize',
    description: 'Provide ongoing support and continuously optimize for better performance.',
  },
]

export default function Solutions() {
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
              <h1 className="heading-1 mb-4">Real-World Solutions</h1>
              <p className="text-xl text-gray-600">
                Practical applications solving real problems for real organizations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card card-hover"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Icon className="text-blue-600" size={32} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="heading-3 mb-2">{solution.title}</h2>
                        <p className="text-blue-600 font-semibold mb-3">{solution.category}</p>
                        <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                        <ul className="space-y-2">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-start text-gray-600">
                              <span className="text-blue-600 mr-2">✓</span>
                              <span>{feature}</span>
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

        {/* Approach Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Our Approach</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We focus on solving real problems with practical, scalable solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approach.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 font-heading mb-4">
                    {item.number}
                  </div>
                  <h3 className="heading-3 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
              <h2 className="heading-2 text-white mb-4">Have a Problem We Can Solve?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Tell us about your challenge, and we'll design the perfect solution for you.
              </p>
              <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center">
                Discuss Your Project
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

