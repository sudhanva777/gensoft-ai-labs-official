'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Globe, Settings, Home, ShoppingCart, Megaphone, Wrench } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning Projects',
    who: 'For: Businesses, Institutions, Startups, Researchers',
    description: 'Develop intelligent systems that learn from data, make predictions, and automate complex decision-making processes. Our AI solutions include natural language processing, computer vision, predictive analytics, and automated workflows.',
    useCases: [
      'Predictive maintenance systems',
      'Intelligent chatbots and virtual assistants',
      'Image and pattern recognition systems',
      'Automated data classification and analysis',
      'Recommendation engines',
    ],
  },
  {
    icon: Database,
    title: 'Data Science & Analytics Systems',
    who: 'For: Businesses, Institutions, Organizations, Analysts',
    description: 'Transform raw data into actionable insights. Build comprehensive analytics dashboards, reporting systems, and data visualization platforms that drive informed decision-making.',
    useCases: [
      'Business intelligence dashboards',
      'Real-time analytics platforms',
      'Data visualization and reporting tools',
      'Statistical analysis systems',
      'Performance monitoring and metrics',
    ],
  },
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    who: 'For: Startups, Businesses, Organizations, Institutions',
    description: 'Complete web applications built with modern technologies. From responsive frontends to robust backend APIs, we deliver scalable, secure, and performant web solutions.',
    useCases: [
      'Custom web applications',
      'RESTful API development',
      'Progressive web apps (PWAs)',
      'Real-time applications',
      'Cloud-based solutions',
    ],
  },
  {
    icon: Settings,
    title: 'Admin Dashboards & Management Panels',
    who: 'For: Institutions, Businesses, Organizations, Administrators',
    description: 'Powerful administrative interfaces for managing operations, users, content, and data. Streamline workflows with intuitive dashboards that provide complete control and oversight.',
    useCases: [
      'Institution management systems',
      'Content management dashboards',
      'User and role management panels',
      'Inventory and resource management',
      'Analytics and reporting interfaces',
    ],
  },
  {
    icon: Home,
    title: 'Hostel & Mess Menu Platforms',
    who: 'For: Hostels, Mess Management, Students, Institutions',
    description: 'Digital platforms for hostel and mess management. Display menus, manage bookings, handle payments, and streamline operations for both administrators and residents.',
    useCases: [
      'Digital menu display systems',
      'Meal booking and management',
      'Payment and billing integration',
      'Resident portal and notifications',
      'Administrative control panels',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Shop & Store Buying Menu Websites',
    who: 'For: Shop Owners, Retailers, Restaurants, E-Commerce Businesses',
    description: 'Professional e-commerce platforms and digital storefronts. Create online presence with product catalogs, ordering systems, and seamless customer experiences.',
    useCases: [
      'Online product catalogs',
      'Ordering and checkout systems',
      'Inventory management integration',
      'Customer account portals',
      'Payment gateway integration',
    ],
  },
  {
    icon: Megaphone,
    title: 'Business & Advertising Websites',
    who: 'For: Businesses, Startups, Organizations, Marketers',
    description: 'Professional websites designed to showcase your business, generate leads, and convert visitors into customers. Optimized for performance and search visibility.',
    useCases: [
      'Corporate websites',
      'Landing pages and lead generation',
      'Portfolio and showcase sites',
      'SEO-optimized business pages',
      'Marketing and advertising platforms',
    ],
  },
  {
    icon: Wrench,
    title: 'Custom Software Development',
    who: 'For: All Organizations, Businesses, Institutions, Startups',
    description: 'Tailored software solutions built to your exact specifications. From automation systems to specialized applications, we create software that fits your unique needs.',
    useCases: [
      'Workflow automation systems',
      'Custom business applications',
      'Integration and API development',
      'Legacy system modernization',
      'Specialized industry solutions',
    ],
  },
]

export default function Services() {
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
              <h1 className="heading-1 mb-4">Our Services</h1>
              <p className="text-xl text-gray-600">
                Comprehensive software development solutions for businesses, institutions, and organizations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Icon className="text-blue-600" size={32} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="heading-3 mb-2">{service.title}</h2>
                        <p className="text-blue-600 font-semibold mb-3">{service.who}</p>
                        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase) => (
                            <li key={useCase} className="flex items-start text-gray-600">
                              <span className="text-blue-600 mr-2">→</span>
                              <span>{useCase}</span>
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
              <h2 className="heading-2 text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss which service fits your needs and build your solution together.
              </p>
              <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center">
                Contact Us
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
