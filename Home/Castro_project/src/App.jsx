import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/home'
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins&display=swap" rel="stylesheet"></link>


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Home />
        </>
    )
}

export default App