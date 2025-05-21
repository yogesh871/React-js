
// import './App.css'
import React from 'react'
import BookStore from "./Components/Book_Store_Form/BookStore"
import EditBook from "./Components/Book_Store_Form/EditBook"
import Header from './Components/Home_Page/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home_Page/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>

        <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addBook' element={<BookStore/>}></Route>
      <Route path='/editBook/:id' element={<EditBook/>}></Route>
    </Routes>
    </>
  )
}

export default App
