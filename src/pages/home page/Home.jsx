import React from 'react'
import HeroSection from '../../components/Hero section/HeroSection'
import Service from '../../components/services section/Service'
import Trusted from '../../components/trust section/Trusted'

const Home = () => {
  return (
    <div style={{height:'100vh', width: '100vw'}}>
      <HeroSection title="Shoppy Store"/>
      <Service/>
      <Trusted/>
    </div>
  )
}

export default Home
