import React from 'react'
import HeroSection from '../../components/Hero section/HeroSection'
import Service from '../../components/services section/Service'
import Trusted from '../../components/trust section/Trusted'
import Featured from '../../components/featured section/Featured'

const Home = () => {
  return (
    <div>
      <HeroSection title="Shoppy Store"/>
      <Featured/>
      <Service/>
      <Trusted/>
    </div>
  )
}

export default Home
