import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const page = () => {
  return (
     <>
     <Navbar />
     <Hero />
     <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer /> 
    </>
  )
}

export default page
