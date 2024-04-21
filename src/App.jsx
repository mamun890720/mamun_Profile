import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar'
import SocialIcon from './Components/SocialIcon'




function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <Navbar/>
    <particleBackground/>
    <SocialIcon/>
    </>
  )
}

export default App
