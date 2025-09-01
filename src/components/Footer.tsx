import { Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-text-secondary">&copy; {new Date().getFullYear()} Mirror Trades. All rights reserved.</p>
            <p className="text-sm text-text-secondary">
              <Link href="/privacy-policy" className="hover:text-primary-gold">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-primary-gold">Terms of Service</Link>
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-text-secondary hover:text-primary-gold">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-text-secondary hover:text-primary-gold">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-text-secondary hover:text-primary-gold">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
