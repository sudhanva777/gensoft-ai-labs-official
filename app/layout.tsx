import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'GENSOFT AI LABS | AI & Software Development Company',
    template: '%s | GENSOFT AI LABS',
  },
  description: 'Professional AI and software development services. We build production-ready solutions including AI & ML systems, admin dashboards, data science platforms, and custom software for businesses, institutions, and students.',
  keywords: 'AI development, Machine Learning, Software Development, Data Science, Web Development, Custom Software, Admin Dashboards, Business Automation',
  authors: [{ name: 'GENSOFT AI LABS' }],
  creator: 'GENSOFT AI LABS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gensoftailabs.com',
    siteName: 'GENSOFT AI LABS',
    title: 'GENSOFT AI LABS | AI & Software Development Company',
    description: 'Engineering Intelligent Software - Building production-ready AI and software solutions for businesses, institutions, and organizations.',
    images: [
      {
        url: '/branding/logo.png',
        width: 1200,
        height: 630,
        alt: 'GENSOFT AI LABS Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GENSOFT AI LABS | AI & Software Development Company',
    description: 'Engineering Intelligent Software - Building production-ready AI and software solutions.',
    images: ['/branding/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
