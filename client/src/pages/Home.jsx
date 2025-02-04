import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'
import Calltoaction from '../components/Calltoaction'

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <JobListing /> 
      <AppDownload />
      <Calltoaction />
      <Footer />
    </div>
  )
}

export default Home
