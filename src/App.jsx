import React from 'react'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Recommended from './components/Recommended'
import ChooseUs from './components/ChooseUS'
import BuyerSellers from './components/BuyerSellers'
import Features from './components/Features'
import TopProperties from './components/TopProperty'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Service/>
      <Recommended/>
      <ChooseUs/>
      <BuyerSellers/>
     <Features/> 
      <TopProperties/>
    </div>
  )
}

export default App
