import React from 'react'

const WorkshopDetails = () => {
  const details = [
    { icon: "👥", label: "Age Group", value: "8–14 Years" },
    { icon: "📅", label: "Duration", value: "4 Weeks" },
    { icon: "💻", label: "Mode", value: "Online Live" },
    { icon: "💰", label: "Fee", value: "₹2,999" },
    { icon: "🚀", label: "Start Date", value: "15 July 2026" },
  ]

  return (
    <section className="py-20 bg-gray-500">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-kidrove-secondary text-black mb-4">
            Workshop Details
          </h2>
          <p className="text-xl flex text-center text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our AI & Robotics program
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {details.map((detail, index) => (
            <div key={index} className="card text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">{detail.icon}</div>
              <h3 className="text-sm uppercase tracking-wide text-kidrove-accent font-semibold mb-2">
                {detail.label}
              </h3>
              <p className="text-xl font-bold text-kidrove-secondary">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkshopDetails