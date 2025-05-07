import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BasicExample from './Component/Form'
import AnimatedCard from "./Component/Form";
import OffcanvasExample from "./Component/header";
import DarkVariantExample from "./Component/slider";
// import './App.css'

function App() {

  return (
    <>
    <OffcanvasExample/>
    <DarkVariantExample/>
    <AnimatedCard/>
    
    </>
  )
}

export default App
