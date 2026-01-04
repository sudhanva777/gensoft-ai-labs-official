import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Work | GENSOFT AI LABS - Development Process',
  description: 'Our proven 6-step process for delivering successful software solutions: Requirement Discussion, Planning & Design, Development, Testing, Deployment, and Support.',
  keywords: 'software development process, development workflow, project management, software engineering process',
  openGraph: {
    title: 'How We Work | GENSOFT AI LABS',
    description: 'Our proven process for delivering successful software solutions.',
    type: 'website',
    images: [
      {
        url: '/branding/logo.png',
        width: 1200,
        height: 630,
        alt: 'GENSOFT AI LABS Process',
      },
    ],
  },
}

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

