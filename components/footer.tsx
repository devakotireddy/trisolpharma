import Link from 'next/link';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Trisolpharma</h3>
            <p className="text-gray-400 mb-4">
              Advancing healthcare innovation with precision and purpose through scientific support and research excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-400" />
                <span>123 Pharma Street, Medical City, MC 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:info@trisolpharma.com" className="hover:text-blue-400 transition-colors">
                  info@trisolpharma.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:info@trisolpharma.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p>© 2026 Trisolpharma. All rights reserved.</p>
            <div className="flex gap-4 justify-center md:justify-end mt-2">
              <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
