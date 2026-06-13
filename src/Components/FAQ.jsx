import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Does my child need prior coding experience?",
      answer: "No prior coding experience is required! Our workshop is designed for beginners. We start with basic concepts and gradually move to advanced topics. The only requirement is basic computer literacy and enthusiasm to learn."
    },
    {
      question: "What equipment or software is needed?",
      answer: "A laptop/desktop with Windows, Mac, or Linux, stable internet connection, and a webcam. We'll provide all software and online platforms. For robotics, we use virtual simulators, so no physical robots are needed."
    },
    {
      question: "Will there be a certificate after completion?",
      answer: "Yes! Every student who completes the workshop will receive a 'AI & Robotics Summer Workshop Completion Certificate' from Kidrove, recognized by industry partners."
    },
    {
      question: "What if my child misses a live session?",
      answer: "All sessions are recorded and available for 30 days. Students can watch recordings and get doubt-clearing support via our Discord community."
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-kidrove-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-kidrove-secondary">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ