import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us | GENSOFT AI LABS - Start Your Project",
  description: "Get in touch with GENSOFT AI LABS to discuss your AI and software development project. Contact us for custom software solutions, AI systems, dashboards, and more.",
  keywords: "contact GENSOFT AI LABS, software development contact, AI development contact, project enquiry",
  openGraph: {
    title: "Contact Us | GENSOFT AI LABS",
    description: "Tell us what you want to build. We are here to help bring your vision to life.",
    type: "website",
    images: [
      {
        url: "/branding/logo.png",
        width: 1200,
        height: 630,
        alt: "GENSOFT AI LABS Contact",
      },
    ],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

