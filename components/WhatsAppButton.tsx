'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function WhatsAppButton() {
  const adminPhone = '+918861836384' // Admin phone number
  const message = encodeURIComponent('Hi GENSOFT AI LABS, I want to discuss a project.')
  const whatsappUrl = `https://wa.me/${adminPhone.replace(/[^0-9]/g, '')}?text=${message}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="sr-only">Chat with us on WhatsApp</span>
    </Link>
  )
}

