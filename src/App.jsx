import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar'
import SocialIcon from './Components/SocialIcon'
import ParticlesComponent from './Components/Particle'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <Navbar/>
    <SocialIcon/>
   <ParticlesComponent id="particles"/>
    </>
  )
}

export default App
