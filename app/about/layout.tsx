import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | GENSOFT AI LABS - AI & Software Development Company',
  description: 'Learn about GENSOFT AI LABS - a technology company dedicated to building production-ready AI and software solutions. Our mission, vision, and expertise in intelligent software engineering.',
  keywords: 'about GENSOFT AI LABS, AI company, software development company, technology company, AI engineering',
  openGraph: {
    title: 'About Us | GENSOFT AI LABS',
    description: 'Engineering intelligent software solutions for the real world.',
    type: 'website',
    images: [
      {
        url: '/branding/logo.png',
        width: 1200,
        height: 630,
        alt: 'GENSOFT AI LABS',
      },
    ],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

