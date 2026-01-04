import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | GENSOFT AI LABS - AI & Software Development',
  description: 'Comprehensive software development services including AI & Machine Learning, Data Science, Full-Stack Development, Admin Dashboards, Hostel Management Systems, E-Commerce, and Custom Software Solutions.',
  keywords: 'AI services, Machine Learning development, Data Science services, Web Development, Admin Dashboard development, Custom Software Solutions',
  openGraph: {
    title: 'Services | GENSOFT AI LABS',
    description: 'Professional software development services for businesses, institutions, and organizations.',
    type: 'website',
    images: [
      {
        url: '/branding/logo.png',
        width: 1200,
        height: 630,
        alt: 'GENSOFT AI LABS Services',
      },
    ],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

