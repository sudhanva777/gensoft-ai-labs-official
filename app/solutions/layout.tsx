import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions | GENSOFT AI LABS - Real-World Software Solutions',
  description: 'Practical software solutions for students, businesses, institutions, hostels, and shops. Explore our use cases for academic projects, admin dashboards, management systems, and e-commerce platforms.',
  keywords: 'software solutions, business automation, hostel management, mess management, shop websites, student projects, admin dashboards',
  openGraph: {
    title: 'Solutions | GENSOFT AI LABS',
    description: 'Real-world software solutions solving practical problems for organizations.',
    type: 'website',
    images: [
      {
        url: '/branding/logo.png',
        width: 1200,
        height: 630,
        alt: 'GENSOFT AI LABS Solutions',
      },
    ],
  },
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

