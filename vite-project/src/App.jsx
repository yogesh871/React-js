import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Component/Hello'

function App() {
  return (
     <div>
      <Hello  name="rohit" age={21} selery={16500} companyName="ram bharose"/> 
      <Hello name="mohit" age={23} selery={26500} companyName="tesla"/> 
     </div>
  )
}

export default App
