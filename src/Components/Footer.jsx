import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-kidrove-secondary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kidrove</h3>
            <p className="text-gray-400">Empowering young minds through technology and innovation.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-kidrove-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-kidrove-primary transition">All Workshops</a></li>
              <li><a href="#" className="hover:text-kidrove-primary transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-kidrove-primary transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 hello@kidrove.com</li>
              <li>📞 +91 98765 43210</li>
              <li>💬 24/7 WhatsApp Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-kidrove-primary transition">📘</a>
              <a href="#" className="text-gray-400 hover:text-kidrove-primary transition">📷</a>
              <a href="#" className="text-gray-400 hover:text-kidrove-primary transition">🐦</a>
              <a href="#" className="text-gray-400 hover:text-kidrove-primary transition">💼</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Kidrove. All rights reserved. | AI & Robotics Summer Workshop</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer