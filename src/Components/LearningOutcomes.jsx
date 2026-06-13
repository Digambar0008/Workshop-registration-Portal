import React from 'react'

const LearningOutcomes = () => {
  const outcomes = [
    {
      title: "AI Fundamentals",
      description: "Understand core AI concepts like Machine Learning, Neural Networks, and Computer Vision",
      icon: "🤖"
    },
    {
      title: "Python Programming",
      description: "Learn Python basics and advanced concepts to build AI applications",
      icon: "🐍"
    },
    {
      title: "Robotics Control",
      description: "Program virtual robots and understand sensors, actuators, and automation",
      icon: "🦾"
    },
    {
      title: "Real-World Projects",
      description: "Build a Face Recognition system, Chatbot, and Smart Home Automation",
      icon: "🚀"
    },
    {
      title: "Ethical AI",
      description: "Understand responsible AI development and ethical considerations",
      icon: "⚖️"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-kidrove-secondary mb-4">
            What Your Child Will Learn
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            5 key outcomes from our AI & Robotics workshop
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="card group hover:bg-kidrove-primary hover:text-white transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {outcome.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white">
                {outcome.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningOutcomes