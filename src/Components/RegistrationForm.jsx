import React, { useState } from 'react'
import axios from 'axios'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(formData.phone)) {
      setStatus({ type: 'error', message: 'Please enter a valid 10-digit phone number' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' })
      return
    }

    setLoading(true)
    
    try {
      const response = await axios.post('http://localhost:5000/enquiry', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      console.log('Response:', response.data) 
      
      if (response.data.success) {
        setStatus({ type: 'success', message: response.data.message || 'Registration successful! We will contact you soon.' })
        setFormData({ name: '', email: '', phone: '' })
        
        setTimeout(() => {
          setStatus({ type: '', message: '' })
        }, 5000)
      }
    } catch (error) {
      console.error('API Error:', error)
      
      if (error.response) {
        setStatus({ 
          type: 'error', 
          message: error.response.data?.message || `Error: ${error.response.status}` 
        })
      } else if (error.request) {
        setStatus({ 
          type: 'error', 
          message: 'Cannot connect to server. Please make sure backend is running on http://localhost:5000' 
        })
      } else {
        setStatus({ 
          type: 'error', 
          message: error.message || 'Something went wrong. Please try again.' 
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="registration" className="py-20 bg-gradient-to-r from-kidrove-primary to-gray-600">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-kidrove-secondary bg-gray-800 text-white text-center py-8">
              <h2 className="text-3xl font-bold  mb-2">Register for Workshop</h2>
              <p className="">Limited seats available. Secure your spot today!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {status.type === 'success' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                    )}
                    <span>{status.message}</span>
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-kidrove-primary focus:ring-2 focus:ring-kidrove-primary/20 transition-all"
                  placeholder="Enter your child's full name"
                  disabled={loading}
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-kidrove-primary focus:ring-2 focus:ring-kidrove-primary/20 transition-all"
                  placeholder="parent@example.com"
                  disabled={loading}
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-kidrove-primary focus:ring-2 focus:ring-kidrove-primary/20 transition-all"
                  placeholder="9876543210"
                  maxLength="10"
                  disabled={loading}
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-kidrove-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Register Now →'
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                By registering, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationForm