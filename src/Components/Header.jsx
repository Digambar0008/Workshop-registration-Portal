import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Workshop', href: '#workshop', id: 'workshop' },
    { name: 'Curriculum', href: '#learning', id: 'learning' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  const scrollToSection = (href, id) => {
    setIsOpen(false)
    setActiveLink(id)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToForm = () => {
    setIsOpen(false)
    const formElement = document.getElementById('registration')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className={`${isScrolled ? 'text-kidrove-primary' : 'text-white'}`}>
                Kid
              </span>
              <span className={`${isScrolled ? 'text-kidrove-secondary' : 'text-kidrove-primary'}`}>
                rove
              </span>
            </div>
            <div className={`hidden md:block text-xs font-semibold px-2 py-1 rounded-full ${
              isScrolled 
                ? 'bg-kidrove-primary text-white' 
                : 'bg-white text-kidrove-primary'
            }`}>
              AI Workshop
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.href, link.id)}
                className={`relative font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } hover:text-kidrove-primary group`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-kidrove-primary transform transition-transform duration-300 ${
                  activeLink === link.id ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}></span>
              </button>
            ))}
            
            <button
              onClick={scrollToForm}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Enroll Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 transform transition-all duration-300 ${
                isScrolled ? 'bg-kidrove-secondary' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-kidrove-secondary' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 transform transition-all duration-300 ${
                isScrolled ? 'bg-kidrove-secondary' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-3 py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.href, link.id)}
                className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeLink === link.id
                    ? 'bg-kidrove-primary text-white'
                    : isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={scrollToForm}
              className="btn-primary text-center mx-4"
            >
              Enroll Now
            </button>
          </nav>
        </div>
      </div>

      {/* Progress Bar - Shows scroll progress */}
      <div className={`absolute bottom-0 left-0 h-1 bg-kidrove-primary transition-all duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} 
      style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
      ></div>
    </header>
  )
}

export default Header