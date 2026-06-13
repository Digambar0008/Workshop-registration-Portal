import React from 'react'

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-kidrove-secondary via-kidrove-secondary to-kidrove-primary min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      <div className="container-custom w-screen">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl flex justify-center lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI & Robotics
            <div>Summer Workshop</div>
          </h1>
          <p className="text-xl flex text-gray-200 mb-8 leading-relaxed text-justify">
            Empower your child with future-ready skills! Learn Artificial Intelligence and Robotics through hands-on projects, live coding, and interactive sessions. Build real-world AI models and program robots from home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToForm} className="btn-primary text-lg">
              Enroll Now →
            </button>
            <button className="btn-outline text-white border-white hover:bg-white hover:text-kidrove-primary">
              View Curriculum
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-white">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
              <span>4 Weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 14h-2v-6h2v6zm-1-8a1 1 0 110-2 1 1 0 010 2z" clipRule="evenodd" /></svg>
              <span>Ages 8–14</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
              <span>Online Live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero