import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/branding/logo.png"
                  alt="GENSOFT AI LABS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-gray-900">
                  GENSOFT AI LABS
                </div>
                <p className="text-sm text-gray-600">Engineering Intelligent Software</p>
              </div>
            </Link>
            <p className="text-gray-600 max-w-md">
              Building real-world, scalable, production-ready AI and software solutions 
              for businesses, institutions, and organizations.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-gray-600 hover:text-blue-600 transition-colors">
                  How We Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ailabsgensoftx@gmail.com"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={18} />
                  <span>ailabsgensoftx@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918861836384"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone size={18} />
                  <span>+91 88618 36384</span>
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} GENSOFT AI LABS. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

