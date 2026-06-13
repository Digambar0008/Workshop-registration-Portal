import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import WorkshopDetails from './components/WorkshopDetails'
import LearningOutcomes from './components/LearningOutcomes'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen min-w-3xl">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="workshop">
        <WorkshopDetails />
      </section>
      <section id="learning">
        <LearningOutcomes />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="registration">
        <RegistrationForm />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}

export default App