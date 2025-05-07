import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PrimarySearchAppBar from "./Component/header";
import HorizontalLinearStepper from "./Component/Prosses";
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PrimarySearchAppBar/>
     {/* <HorizontalLinearStepper/> */}
    </>
  )
}

export default App
